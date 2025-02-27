import { LessThan } from 'typeorm';
import { AppDataSource } from '../config/database';
import { Log } from '../models/Log';

// get the datasource and entity for the services

const logRepository = AppDataSource.getRepository(Log);

export class LogService {
  static async createLog(message: string) {
    const log = logRepository.create({ message });
    return await logRepository.save(log);
  }
  static async deleteOldLogs() {
    const dateThreshold = new Date();
    dateThreshold.setDate(dateThreshold.getDate() - 7);

    const deleted = await logRepository.delete({
      createdAt: LessThan(dateThreshold),
    });
    console.log(`${deleted.affected} old logs deleted!`);
  }

  static async getAllLogs() {
    return await logRepository.find();
  }
}
