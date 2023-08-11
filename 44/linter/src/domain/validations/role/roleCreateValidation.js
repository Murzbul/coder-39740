import z from 'zod';

const roleCreateValidation = z.object({
  name: z.string().min(5).max(15),
  permissions: z.string().array().length(0)
});

export default roleCreateValidation;
