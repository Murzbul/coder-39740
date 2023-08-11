import roleSchema from '../../models/mongoose/roleSchema.js';
import Role from '../../../domain/entities/role.js';

class RoleMongooseRepository
{
  async paginate(criteria)
  {
    const { limit, page } = criteria;
    const roleDocuments = await roleSchema.paginate({}, { limit, page });
    const { docs, ...pagination } = roleDocuments;

    const roles = docs.map(document => new Role(
      document._id,
      document.name
    ));

    return {
      roles,
      pagination
    };
  }

  async getOne(id)
  {
    const document = await roleSchema.findOne({ _id: id });

    if (!document)
    {
      throw new Error('Role dont exist.');
    }

    return new Role(
      document._id,
      document.name,
      document.permissions
    );
  }

  async create(data)
  {
    const document = await roleSchema.create(data);

    return new Role(
      document._id,
      document.name,
      document.permissions
    );
  }

  async updateOne(id, data)
  {
    const document = await roleSchema.findOneAndUpdate({ _id: id }, data, { new: true });

    if (!document)
    {
      throw new Error('Role dont exist.');
    }

   return new Role(
      document._id,
      document.name,
      document.permissions
    );
  }

  async deleteOne(id)
  {
    return roleSchema.deleteOne({ _id: id });
  }
}

export default RoleMongooseRepository;
