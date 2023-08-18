import RoleManager from "../managers/roleManager.js";

export const list = async  (req, res) =>
{
    const { limit, page } = req.query;
    const manager = new RoleManager();

    const roles = await manager.paginate({ limit, page });

    res.send({ status: 'success', roles: roles.docs, ...roles, docs: undefined });
};

export const getOne = async (req, res) =>
{
    const { id } = req.params;

    const manager = new RoleManager();
    const role = await manager.getOne(id);

    res.send({ status: 'success', role });
};

export const save = async (req, res) =>
{
  const manager = new RoleManager();
  const role = await manager.create(req.body);

  res.send({ status: 'success', role, message: 'Role created.' })
};

export const update = async (req, res) =>
{
  const { id } = req.params;

  const manager = new RoleManager();
  const result = await manager.updateOne(id, req.body);

  res.send({ status: 'success', result, message: 'Role updated.' })
};

export const deleteOne = async (req, res) =>
{
  const { id } = req.params;

  const manager = new RoleManager();
  await manager.deleteOne(id);

  res.send({ status: 'success', message: 'Role deleted.' })
};
