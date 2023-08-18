import OrderManager from "../managers/orderManager.js";

export const list = async  (req, res) =>
{
    const { name, limit, page } = req.query;
    const manager = new OrderManager();

    const orders = await manager.paginate({ name, limit, page });

    res.send({ status: 'success', orders: orders.docs, ...orders, docs: undefined });
};

export const getOne = async (req, res) =>
{
    const { id } = req.params;

    const manager = new OrderManager();
    const order = await manager.getOne(id);

    res.send({ status: 'success', order });
};

export const save = async (req, res) =>
{
  const manager = new OrderManager();
  const order = await manager.create(req.body);

  res.send({ status: 'success', order, message: 'Order created.' })
};

export const update = async (req, res) =>
{
  const { id } = req.params;

  const manager = new OrderManager();
  const result = await manager.updateOne(id, req.body);

  res.send({ status: 'success', result, message: 'Order updated.' })
};

export const deleteOne = async (req, res) =>
{
  const { id } = req.params;

  const manager = new OrderManager();
  await manager.deleteOne(id);

  res.send({ status: 'success', message: 'Order deleted.' })
};
