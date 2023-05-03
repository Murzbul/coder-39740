import orderSchema from "../models/orderSchema.js";

class OrderMongooseDao
{
  async find()
  {
    const orderDocuments = await orderSchema.find();

    return orderDocuments.map(document => ({
      id: document._id,
      name: document.name,
      size: document.size,
      price: document.price,
      quantity: document.quantity,
      date: document.date
    }));
  }

  async getOne(id)
  {
    const orderDocument = await orderSchema.findOne({ _id: id });

    if(!orderDocument)
    {
      throw new Error('Order dont exist.');
    }

    return {
        id: orderDocument?._id,
        name: orderDocument?.name,
        size: orderDocument?.size,
        price: orderDocument?.price,
        quantity: orderDocument?.quantity,
        date: orderDocument?.date
    }
  }

  async create(data)
  {
    const orderDocument = await orderSchema.create({ ...data, date: new Date()});

    return {
        id: orderDocument._id,
        name: orderDocument.name,
        size: orderDocument.size,
        price: orderDocument.price,
        quantity: orderDocument.quantity,
        date: orderDocument.date,
    }
  }

  async updateOne(id, data)
  {
    const payload = { ...data, date: new Date() };
    const orderDocument = await orderSchema.findOneAndUpdate({ _id: id }, payload, { new: true});

    if(!orderDocument)
    {
      throw new Error('Order dont exist.');
    }

    return {
        id: orderDocument._id,
        name: orderDocument.name,
        size: orderDocument.size,
        price: orderDocument.price,
        quantity: orderDocument.quantity,
        date: orderDocument.date
    }
  }

  async deleteOne(id)
  {
    return orderSchema.deleteOne({ _id: id });
  }

  async getAggregate1(size)
  {
    return orderSchema.aggregate([
      {
        $match: {size}
      },
      {
        $group: { _id: "$name", total: { $sum: "$quantity" } }
      }
    ]);
  }

  async getAggregate2(size)
  {
    return orderSchema.aggregate([
      {
        $match: {size}
      },
      {
        $group: { _id: '$name', totalQuantity: { $sum: "$quantity" } }
      },
      {
        $sort: { totalQuantity: -1 }
      },
      {
        $group: { _id: 1, orders: { $push: "$$ROOT" } }
      },
      {
        $project: {
          '_id': 0,
          orders: "$orders"
        }
      },
      {
        $merge: {
          into: 'reports'
        }
      }
    ]);
  }
}

export default OrderMongooseDao;
