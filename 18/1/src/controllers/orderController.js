import OrderManager from "../managers/orderManager.js";

class OrderController
{
  static list = async  (req, res) =>
  {
      const manager = new OrderManager();
      const orders = await manager.find();

      res.send({ status: 'success', orders });
  };
}

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
  const order = await manager.deleteOne(id);

  res.send({ status: 'success', message: 'Order deleted.' })
};

export const aggregate1 = async (req, res) =>
{
  const { size } = req.query;

  const manager = new OrderManager();
  const result = await manager.getAggregate1(size);

  res.send({ status: 'success', result, message: 'Orders aggregates 1.' })
};

export const aggregate2 = async (req, res) =>
{
  const { size } = req.query;

  const manager = new OrderManager();
  const result = await manager.getAggregate2(size);

  res.send({ status: 'success', result, message: 'Orders aggregates 2.' })
};
export default OrderController;
