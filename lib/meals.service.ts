import {  dbManagerService} from '@/lib/db.service';
import {IDatabase} from '@/models/IDatabase';

export class MealsService {
     private db: IDatabase;
    constructor() {
        this.db = dbManagerService.db
    }
     getMeals () {
        const stmt = this.db.prepare('SELECT * FROM meals');
        return stmt.all();
    }
}

export const mealsService = new MealsService();
