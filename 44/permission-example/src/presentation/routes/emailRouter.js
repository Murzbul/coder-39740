import { Router } from 'express';
import { sendEmail } from "../controllers/emailController.js";

const emailRouter = Router();

emailRouter.get('/', sendEmail);

export default emailRouter;
