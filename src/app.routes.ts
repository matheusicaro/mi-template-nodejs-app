import { Router } from 'express';

const appRouters = Router();

appRouters.get('/health', (req, res) => res.status(200).json({ status: 'ONLINE' }));

export default appRouters;
