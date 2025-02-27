import cron from 'node-cron';
import { LogService } from '../services/LogService';

// Schedule cron job to delete logs every midnight
cron.schedule('0 0 * * *', async () => {
  console.log('Running cron job: Deleting old logs...');
  await LogService.deleteOldLogs();
});
