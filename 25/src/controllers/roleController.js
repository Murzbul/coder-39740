import RoleManager from "../managers/roleManager.js";


export const list = async  (req, res, next) =>
{
  try
  {
    const { limit, page } = req.query;

    const manager = new RoleManager();
    const roles = await manager.paginate({ limit, page });

    res.send({ status: 'success', roles: roles.docs, ...roles, docs: undefined });
  }
  catch (e)
  {
		next(e);
	}
};

export const getOne = async (req, res, next) =>
{
  try
  {
    const { id } = req.params;

    const manager = new RoleManager();
    const role = await manager.getOne(id);

    res.send({ status: 'success', role });
  }
  catch (e)
  {
		next(e);
	}
};

export const save = async (req, res, next) =>
{
  try
  {
    const manager = new RoleManager();
    const role = await manager.create(req.body);

    res.send({ status: 'success', role, message: 'Role created.' });
  }
  catch (e)
  {
		next(e);
	}
};

export const update = async (req, res, next) =>
{
  try
  {
    const { id } = req.params;

    const manager = new RoleManager();
    const result = await manager.updateOne(id, req.body);

    res.send({ status: 'success', result, message: 'Role updated.' });
  }
  catch (e)
  {
		next(e);
	}
};

export const deleteOne = async (req, res, next) =>
{
  try
  {
    const { id } = req.params;

    const manager = new RoleManager();
    await manager.deleteOne(id);

    res.send({ status: 'success', message: 'Role deleted.' });
  }
  catch (e)
  {
		next(e);
	}
};
