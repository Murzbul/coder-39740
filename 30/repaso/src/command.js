import { exit } from 'shelljs';
import { program } from 'commander';
import dotenv from 'dotenv';
dotenv.config(); // Need before get config

import mongoose from "mongoose";
import AddUser from "./presentation/commands/AddUser.js";

void (async() =>
{
  try
  {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    program.addCommand(AddUser);

    await program.parseAsync(process.argv);

    exit();
  }
  catch (error)
  {
      await console.log(error);
      exit();
  }
})();
