import OrderMongooseDao from "../daos/orderMongooseDao.js";

class OrderManager
{
  constructor()
  {
     this.orderDao = new OrderMongooseDao();
  }

  async paginate(criteria)
  {
    return this.orderDao.paginate(criteria);
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
}

export default OrderManager;
