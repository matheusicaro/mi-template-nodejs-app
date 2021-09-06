import { Request, Response } from 'express';
import { logger } from '../config/logger';
import { Health } from '../models';

export default class AuthController {
  public static async getHealth(req: Request, res: Response): Promise<Response<Health>> {
    try {
      return res.status(200).json(new Health('ONLINE', new Date()));
    } catch (error) {
      logger.error(error);
      return res.status(500).json(new Health('FAILED', new Date()));
    }
  }
}
