import OrderMongooseDao from "../daos/orderMongooseDao.js";

class OrderManager
{
  constructor()
  {
     this.orderDao = new OrderMongooseDao();
  }

  async find()
  {
    return this.orderDao.find();
  }

  async getOne(id)
  {
    return this.orderDao.getOne(id);
  }

  async create(data)
  {
    return await this.orderDao.create(data);
  }

  async updateOne(id, data)
  {
    return this.orderDao.updateOne(id, data);
  }

  async deleteOne(id)
  {
    return this.orderDao.deleteOne(id);
  }

  async getAggregate1(size)
  {
    return this.orderDao.getAggregate1(size);
  }

  async getAggregate2(size)
  {
    return this.orderDao.getAggregate2(size);
  }
}

export default OrderManager;
