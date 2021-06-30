import { Employee } from "../models/employee.model";
import { User } from "../models/user.model";

declare module "express" {


  export interface Request {
    user: User;
    employee: Employee;
  }
}
