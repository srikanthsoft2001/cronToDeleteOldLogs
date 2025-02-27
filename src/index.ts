import express from 'express';
import bodyParser from 'body-parser';
import logRoutes from './routes/logRoutes';
import { AppDataSource } from './config/database';
import './cron/deleteOldLogs'; // Import to start cron job

const app = express();
const PORT = 1111;

app.use(bodyParser.json());
app.use('/api', logRoutes);

// Connect to database and start server
AppDataSource.initialize()
  .then(() => {
    console.log('Database connected!');
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.error('Database connection error:', error));
