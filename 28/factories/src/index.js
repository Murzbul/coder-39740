import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

import AppFactory from "./presentation/factories/appFactory.js";

void (async() =>
{
  await mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const app = AppFactory.create();

  app.init();
  app.build();
  app.listen();
})();
