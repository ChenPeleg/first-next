import Database from 'better-sqlite3';
import {IDatabase} from '@/models/IDatabase';

const db: IDatabase = new Database('../db/meals.db');

export class DbService {
    public db: IDatabase ;

    constructor(private database: IDatabase) {
        this.db = db;
    }


}

export const dbManagerService = new DbService(db);

