import z from 'zod';
import idValidation from "../shared/idValidation.js";
import roleCreateValidation from "./roleCreateValidation.js";

const roleUpdateValidation = z.union([
  idValidation,
  roleCreateValidation
]);

export default roleUpdateValidation;
