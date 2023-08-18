import container from '../../container.js';

class RoleManager
{
  constructor()
  {
     this.roleRepository = container.resolve('RoleRepository');
  }

  async paginate(criteria)
  {
    return this.roleRepository.paginate(criteria);
  }

  async getOne(id)
  {
    return this.roleRepository.getOne(id);
  }

  async create(data)
  {
    return await this.roleRepository.create(data);
  }

  async updateOne(id, data)
  {
    return this.roleRepository.updateOne(id, data);
  }

  async deleteOne(id)
  {
    return this.roleRepository.deleteOne(id);
  }
}

export default RoleManager;
