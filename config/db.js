// import { drizzle } from 'drizzle-orm/neon-http';

// export const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_URL);

import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

// Initialize the Neon client
const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);

export const db = drizzle(sql);
