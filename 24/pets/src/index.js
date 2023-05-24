import express from 'express';

import petRouter from "./routes/petRouter.js";

void (async() =>
{
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/pets', petRouter);

    app.listen(8081, () => {
      console.log('Server listening on port 8081');
    });
})();

