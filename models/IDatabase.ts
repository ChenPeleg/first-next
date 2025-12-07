export type DatabaseConstructor = typeof import('better-sqlite3');

export type IDatabase  = ReturnType<DatabaseConstructor>
