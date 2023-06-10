import UserMongooseDao from "../../data/daos/mongoose/userMongooseDao.js";
import userCreateValidation from "../validations/user/userCreateValidation.js";
import userUpdateValidation from "../validations/user/userUpdateValidation.js";
import idValidation from "../validations/shared/idValidation.js";
import {createHash} from "../../shared/index.js";

class UserManager
{
  constructor()
  {
     this.userDao = new UserMongooseDao();
  }

  async paginate(criteria)
  {
    return this.userDao.paginate(criteria);
  }

  async getOneByEmail(email)
  {
    return this.userDao.getOneByEmail(email);
  }

  async getOne(id)
  {
    await idValidation.parseAsync({ id });
    return this.userDao.getOne(id);
  }

  async create(data)
  {
    await userCreateValidation.parseAsync(data);

    const dto = {
      ...data,
      password: await createHash(data.password, 10)
    }

    const user = await this.userDao.create(dto);

    return { ...user, password: undefined };
  }

  async updateOne(id, data)
  {
    await userUpdateValidation.parseAsync({ ...data, id });
    return this.userDao.updateOne(id, data);
  }

  async deleteOne(id)
  {
    await idValidation.parseAsync({ id });
    return this.userDao.deleteOne(id);
  }

  async forgetPassword(dto)
  {
    const user = await this.userDao.getOneByEmail(dto.email);
    user.password = dto.password;

    return this.userDao.updateOne(user.id, user);
  }
}

export default UserManager;
