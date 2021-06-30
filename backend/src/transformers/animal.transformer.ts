import { TransformerAbstract } from "./transformer.abstract";
import { Dictionary } from "async";
import { Animal } from "../models/animal.model";
import { Helpers } from "../util/helpers.util";

export class AnimalTransformer extends TransformerAbstract<Animal> {
  protected _map(animal: Animal): Dictionary<any> {
    return {
      id           : Helpers.replaceUndefinedWithNull(animal.id),
      title        : Helpers.replaceUndefinedWithNull(animal.title),
      name         : Helpers.replaceUndefinedWithNull(animal.name),
      email        : Helpers.replaceUndefinedWithNull(animal.email),
      phone        : Helpers.replaceUndefinedWithNull(animal.phone),
      gender       : Helpers.replaceUndefinedWithNull(Helpers.titlecase(animal.gender)),
      type         : Helpers.replaceUndefinedWithNull(animal.type),
      image_url    : Helpers.replaceUndefinedWithNull(animal.image_url),
      color        : Helpers.replaceUndefinedWithNull(animal.color),
      age          : Helpers.replaceUndefinedWithNull(animal.age),
      description  : Helpers.replaceUndefinedWithNull(animal.description),
      breed        : Helpers.replaceUndefinedWithNull(animal.breed),
      size         : Helpers.replaceUndefinedWithNull(animal.size),
      is_adopted   : Helpers.replaceUndefinedWithNull(animal.is_adopted),
      is_vaccinated: Helpers.replaceUndefinedWithNull(animal.is_vaccinated),
      created_at   : Helpers.replaceUndefinedWithNull(animal.createdAt),
      updated_at   : Helpers.replaceUndefinedWithNull(animal.updatedAt),
    };
  }

}
