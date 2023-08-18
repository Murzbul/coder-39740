
import { Router } from 'express';
import { generateUser } from '../utils.js';

const router = Router();

router.get('/', (req, res) => {
    let users = [];
    for (let i = 0; i < 10; i++) {
        users.push(generateUser());
    }

    res.status(200).json({ status: 'success', users });
});

export default router;
