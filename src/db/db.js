import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg'

const { Pool } = pkg;

if(!process.env.DATABASE_URL){
    throw new Error('Database url not defined')
}

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000
});

export const db = drizzle(pool)