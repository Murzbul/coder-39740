import dotenv from 'dotenv';
dotenv.config();

import { createContainer, asClass, Lifetime } from "awilix";

import UserMongooseRepository from "./data/repositories/mongoose/userMongooseRepository.js";
import RoleMongooseRepository from "./data/repositories/mongoose/roleMongooseRepository.js";

const container = createContainer();

if(process.env.DB === 'MongooseAdapter')
{
  container.register('UserRepository', asClass(UserMongooseRepository), { lifetime: Lifetime.SINGLETON });
  container.register('RoleRepository', asClass(RoleMongooseRepository), { lifetime: Lifetime.SINGLETON });
}
else if(process.env.DB === 'FileAdapter')
{

}

export default container;
