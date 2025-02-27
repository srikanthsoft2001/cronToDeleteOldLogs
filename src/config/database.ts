// import the datasource and log for the connection configuration
import { DataSource } from 'typeorm';
import { Log } from '../models/Log';
import 'reflect-metadata';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'root',
  entities: [Log],
  synchronize: true,
  logging: false,
});

// initiazise the database : connect to the database
// since initialize returns the promise we need to handle it

// AppDataSource.initialize()
//   .then(() => console.log('Data Source has been initialized!'))
//   .catch(() => console.log('error initializing the data source!'));

//   import inside the controller for the database operations
