import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  // router.get('/detail/user/:id', homeController.getDetailPage);

  router.get("/anhquoc", (req, res) => {
    return res.send("Hello Anh Quoc");
  });
  //rest api

  return app.use("/", router);
};

module.exports = initWebRouter;
