import Database from 'better-sqlite3';
import {IDatabase} from '@/models/IDatabase';
const db : IDatabase = new Database('./meals.db' );

export class DbService {
    constructor(private database: IDatabase) {

    }


}

export const dbManager = new DbService(db);

