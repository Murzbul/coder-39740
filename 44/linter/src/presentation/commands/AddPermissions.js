import { Command } from 'commander';
import SessionManager from '../../domain/managers/sessionManager.js';
import { defaultRoles } from '../../config/index.js';

const AddPermissions = new Command('addPermissions');

AddPermissions
  .version('0.0.1')
  .description('Add permissions')
  .action(async(env) =>
  {
    const manager = new SessionManager();
    await manager.addPermissions(defaultRoles);
  });

export default AddPermissions;
