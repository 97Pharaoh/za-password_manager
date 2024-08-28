import Database, { Database as sqlLiteDatabase } from "better-sqlite3";
import { initializeSchema } from "./schema";

class DBConnection {
	private static instance: sqlLiteDatabase;

	private constructor() {}

	public static getInstance(databaseFilePath: string): sqlLiteDatabase {
		if (!DBConnection.instance) {
			DBConnection.instance = new Database(databaseFilePath, {
				verbose: console.log,
			});
			initializeSchema(DBConnection.instance);
		}
		return DBConnection.instance;
	}
}

export default DBConnection;
