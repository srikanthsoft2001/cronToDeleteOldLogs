// get the Response and request objects
import { Request, Response } from 'express';
import { LogService } from '../services/LogService';

export class LogController {
  static async getLogs(req: Request, resp: Response) {
    try {
      const logs = await LogService.getAllLogs();
      resp.status(200).json({ logs });
    } catch (error) {
      resp.status(500).json({ error: 'Error fetching logs' });
    }
  }

  static async createLogs(req: Request, resp: Response) {
    try {
      const message = req.body;
      const log = await LogService.createLog(message);
      resp.status(201).json({ log });
    } catch (error) {
      resp.status(500).json({ error: 'Error creating log' });
    }
  }
}
