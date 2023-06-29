
import  express from 'express';
import usersRouter from './routes/usersRouter.js';

const app = express();
const PORT = 8081;

app.use(express.json());
app.use('/api/users', usersRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
