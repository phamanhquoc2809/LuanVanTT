import express from "express";
import apiController from "../controllers/apiController";

let router = express.Router();

let initAPIRoute = (app) => {

  // User
  router.get("/user", apiController.getAllUsers); // method GET -> READ data
  router.get("/user/:id", apiController.getDetailPage);


  router.post("/add-new-user", apiController.addNewUser);


  router.put("/update-user", apiController.updateUser);
  router.delete("/delete-user/:id", apiController.deleteUser);

  // Category
  router.post("/add-new-cate", apiController.addNewCate);

  // router.post('/create-user', APIController.createNewUser); // method POST -> CREATE data
  // router.put('/update-user', APIController.updateUser); //method PUT -> UPDATE data
  // router.delete('/delete-user/:id', APIController.deleteUser); //method DELETE -> DELETE data

  return app.use("/", router);
};

export default initAPIRoute;
