import orderSchema from "../models/orderSchema.js";

class OrderMongooseDao
{
  async paginate(criteria)
  {
    const { name, limit, page } = criteria;
    const orderDocuments = await orderSchema.paginate({ name }, { limit, page });

    orderDocuments.docs = orderDocuments.docs.map(document => ({
      id: document._id,
      name: document.name,
      size: document.size,
      price: document.price,
      quantity: document.quantity,
      date: document.date
    }));

    return orderDocuments;
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
}

export default OrderMongooseDao;
