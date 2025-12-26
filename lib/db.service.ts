import Database from 'better-sqlite3';
import { IDatabase } from '@/models/IDatabase';
import { resolve } from 'path';
import { existsSync } from 'fs';

const dbPath = resolve(process.cwd(), 'db', 'meals.db');

if (!existsSync(dbPath)) {
  throw new Error(
    `Database file not found at ${dbPath}. Make sure the file exists and the path is correct.`
  );
}

const db: IDatabase = new Database(dbPath);

export class DbService {
  public db: IDatabase;
  constructor(private database?: IDatabase) {
    this.db = database ?? db;
  }
}

export const dbManagerService = new DbService(db);
