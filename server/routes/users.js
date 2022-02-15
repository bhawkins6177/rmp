import express from 'express';
import { getUsers } from '../controlers/users.js';
const router = express.Router();

router.get('/', getUsers)

export default router;