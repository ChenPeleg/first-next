import { dbManagerService } from '@/lib/db.service';
import { IDatabase } from '@/models/IDatabase';
import { Meal } from '@/models/Meal';

export class MealsService {
  private db: IDatabase;

  constructor() {
    this.db = dbManagerService.db;
  }

  getMeals(): Meal[] {
    const stmt = this.db.prepare('SELECT * FROM meals');
    return stmt.all() as Meal[];
  }

  getMeal(slug: string): Meal {
    const stmt = this.db.prepare('SELECT * FROM meals WHERE slug = ?');
    return stmt.get(slug) as Meal;
  }
}

export const mealsService = new MealsService();
