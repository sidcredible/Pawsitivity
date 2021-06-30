import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as _ from "lodash";
import { dbService } from "./services/db.service";
import { ENV_APP_PORT_REST } from "./util/secrets.util";
import { userService } from "./services/entities/user.service";
import { mattermostService } from "./services/mattermost.service";
import { UserController } from "./controllers/user.controller";
import { userMiddleware } from "./middlewares/user.middleware";
import { errorHandler } from "./handlers/error-handler";
import { upload } from "./services/factories/multer.service";
import { AddressController } from "./controllers/address.controller";
import { ProductController } from "./controllers/product.controller";
import { CartController } from "./controllers/cart.controller";
import { OrderController } from "./controllers/order.controller";
import { CouponController } from "./controllers/coupon.controller";
import { SubscriptionController } from "./controllers/subscription.controller";
import { AttachmentController } from "./controllers/attachment.controller";
import { employeeMiddleware } from "./middlewares/employee.middleware";
import { EmployeeController } from "./controllers/employee.controller";
import { adminMiddleware } from "./middlewares/admin.middleware";
import { cronService } from "./services/factories/cron.service";
import { GlobalVariableController } from "./controllers/global-variable.controller";
import { WalletTransactionController } from "./controllers/wallet-transaction.controller";
import { SlotController } from "./controllers/slot.controller";
import { AnimalController } from "./controllers/animal.controller";


// Create Express server
const app = express();

// Entities
userService;

// Factories
// cryptService;
// jwtService;
// s3Service;
// validatorService;
// snsService;

// Others
dbService;
mattermostService;
cronService;

// Express configuration
app.set("port", process.env.PORT || ENV_APP_PORT_REST);
// app.use(snsHeaderMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// CORS Setup
const allowedOrigins = ["*",
  "http://localhost:*",
  "http://localhost:3000",
  "http://localhost:4200",
  "http://localhost:5500",
  "http://localhost:4200/admin-home",
  "http://ec2-3-7-184-113.ap-south-1.compute.amazonaws.com:3000",
  "http://ec2-3-7-184-113.ap-south-1.compute.amazonaws.com:3000/",
  "http://ec2-3-7-184-113.ap-south-1.compute.amazonaws.com",
  "http://ec2-3-7-184-113.ap-south-1.compute.amazonaws.com/",
  "http://farmtaste.s3.ap-south-1.amazonaws.com/",
  "http://farmtaste.s3.ap-south-1.amazonaws.com",
  "http://farmtaste.s3.ap-south-1.amazonaws.com/index.html",
  "http://farmtaste.s3-website.ap-south-1.amazonaws.com",
  "http://pawsitivity.sidcredible.com/",
  "http://pawsitivity.sidcredible.com"
];

app.use(cors({
  origin : (origin, callback) => {
    if (!origin || _.includes(allowedOrigins, origin)) {
      callback(undefined, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: [
    "GET",
    "HEAD",
    "PUT",
    "PATCH",
    "POST",
    "DELETE"
  ]
}));
app.options("*");

// Static Public Content
app.use("/public", express.static("./public", {maxAge: 31557600000}));

// Global Middleware(s)

/**
 * Primary app routes.
 */


// AUTH
app.post("/generate-otp", errorHandler(UserController.generateOtp));
app.post("/signup", errorHandler(UserController.signup));
app.post("/login", errorHandler(UserController.authenticate));
app.post("/login-employee", errorHandler(EmployeeController.authenticateEmployee));


// USER
app.get("/me", [userMiddleware], errorHandler(UserController.me));
app.put("/me", [userMiddleware], errorHandler(UserController.updateMe));
app.delete("/me", [userMiddleware], errorHandler(UserController.deleteMe));
app.put("/update-wallet", [userMiddleware], errorHandler(UserController.updateWallet));


// ADDRESSES
app.post("/address", [employeeMiddleware, upload.single("image")], errorHandler(AddressController.addAddresses));
app.delete("/address/:addressId([0-9]+)", [employeeMiddleware], errorHandler(AddressController.deleteAddress));
app.get("/cities", errorHandler(AddressController.listCities));
app.get("/locations/:cityId([0-9]+)", errorHandler(AddressController.listLocations));
app.get("/areas/:locationId([0-9]+)", errorHandler(AddressController.listAreas));


// ANIMAL
app.post("/animals", [upload.single("image")], errorHandler(AnimalController.create));
app.get("/animals", errorHandler(AnimalController.showAnimals));
app.post("/appointment", errorHandler(AnimalController.bookAppointment));
app.get("/appointments", errorHandler(AnimalController.viewAppointments));
app.post("/submit-query", errorHandler(AnimalController.sendQueryForAdoption));
app.post("/contact-us", errorHandler(AnimalController.contactUs));
app.get("/queries", errorHandler(AnimalController.viewQueries));
app.get("/contact-us", errorHandler(AnimalController.viewContactUs));

app.get("*", (req, res) => {
  res.send({data: "Works"});
});


export default app;
