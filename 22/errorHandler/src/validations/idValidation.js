import z from 'zod';

const idValidation = z.object({
  id: z.string().max(24)
});

export default idValidation;
