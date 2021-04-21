import * as express from 'express';

import db from './db'
const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/users', async(req, res) => {
    try{
        let users = await db.users.getUser();
        res.json(users);
    }
    catch(err){
        console.log('nok');
        console.log(err);
        res.sendStatus(500);
    }
});

export default router;