import { NextFunction, Request, Response } from "express";
import { UnprocessableEntityException } from "../exceptions/root/unprocessable-entity.exception";
import { CartCreateDto } from "../dtos/cart/cart-create.dto";
import { cartService } from "../services/entities/cart.service";
import { CartTransformer } from "../transformers/cart.transformer";
import { CartEmptyException } from "../exceptions/cart/cart-empty.exception";
import { CartItemNotFoundException } from "../exceptions/cart/cart-item-not-found.exception";
import { InsufficientQuantityException } from "../exceptions/cart/insufficient-quantity.exception";
import Ajv from "ajv";
import * as fs from "fs";
import { Cart } from "../models/cart.model";
import { ProductTransformer } from "../transformers/product.transformer";
import { AnimalCreateDto } from "../dtos/animal/animal-create.dto";
import { Animal } from "../models/animal.model";
import { s3Service } from "../services/factories/s3.service";
import { ENV_S3_BASE_URL } from "../util/secrets.util";
import { AnimalTransformer } from "../transformers/animal.transformer";
import { AppointmentCreateDto } from "../dtos/animal/appointment-create.dto";
import { Appointment } from "../models/appointment.model";
import toBoolean from "validator/lib/toBoolean";
import { AdoptionQueryCreateDto } from "../dtos/animal/adoption-query-create.dto";
import { Query } from "../models/query.model";
import { ContactUsCreateDto } from "../dtos/animal/contact-us-create.dto";
import { ContactUs } from "../models/contact-us.model";

export class AnimalController {

  static async create(req: Request, res: Response) {
    req.body.is_vaccinated = toBoolean(req.body.is_vaccinated);
    const inputData      = req.body as AnimalCreateDto;
    const image  = req.file;
    const ajv            = new Ajv();
    const schema         = JSON.parse(fs.readFileSync("./schema/animal/animal-create.schema.json").toString());
    const valid          = await ajv.validate(schema, inputData);
    if (!valid) {
      throw new UnprocessableEntityException(ajv.errors);
    }
    let uploadUrl = "";
    if (image) {
      await s3Service.uploadToS3(image.buffer, image.originalname, "Animal");
      uploadUrl = ENV_S3_BASE_URL + "Animal" + "/" + image.originalname;
    }
    const animal = await Animal.create({...inputData, image_url: uploadUrl});
    return res.json({
      data: await new AnimalTransformer().transform(animal)
    });
  }

  static async showAnimals(req: Request, res: Response) {
    const animals     = await Animal.findAll({
      where: {
        is_adopted: false
      }
    });
    return res.json({
      data : await new AnimalTransformer().transformList(animals)
    });
  }

  static async bookAppointment(req: Request, res: Response) {
    const inputData      = req.body as AppointmentCreateDto;
    const ajv            = new Ajv();
    const schema         = JSON.parse(fs.readFileSync("./schema/animal/appointment-create.schema.json").toString());
    const valid          = await ajv.validate(schema, inputData);
    if (!valid) {
      throw new UnprocessableEntityException(ajv.errors);
    }
    const appointment = await Appointment.create(inputData);
    return res.json({
      data: appointment
    });
  }

  static async sendQueryForAdoption(req: Request, res: Response) {
    const inputData      = req.body as AdoptionQueryCreateDto;
    const ajv            = new Ajv();
    const schema         = JSON.parse(fs.readFileSync("./schema/animal/adoption-query-create.schema.json").toString());
    const valid          = await ajv.validate(schema, inputData);
    if (!valid) {
      throw new UnprocessableEntityException(ajv.errors);
    }
    const animal = await Animal.findOne({
      where: {
        id: +inputData.animal_id
      }
    });
    if (!animal) {
      throw new UnprocessableEntityException("Animal Not Found");
    }
    const appointment = await Query.create(inputData);
    return res.json({
      data: appointment
    });
  }

  static async contactUs(req: Request, res: Response) {
    const inputData      = req.body as ContactUsCreateDto;
    const ajv            = new Ajv();
    const schema         = JSON.parse(fs.readFileSync("./schema/animal/contact-us-create.schema.json").toString());
    const valid          = await ajv.validate(schema, inputData);
    if (!valid) {
      throw new UnprocessableEntityException(ajv.errors);
    }
    const appointment = await ContactUs.create(inputData);
    return res.json({
      data: appointment
    });
  }

  static async viewAppointments(req: Request, res: Response) {
    const queries = await Appointment.findAll({
      order: [["id", "desc"]]
    });
    return res.json({
      data: queries
    });
  }

  static async viewQueries(req: Request, res: Response) {
    const queries = await Query.findAll({
      order: [["id", "desc"]],
      include: [Animal]
    });
    return res.json({
      data: queries
    });
  }

  static async viewContactUs(req: Request, res: Response) {
    const queries = await ContactUs.findAll({
      order: [["id", "desc"]]
    });
    return res.json({
      data: queries
    });
  }


}
