import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
url: 'postgresql://DevShah:npg_D72gPWeCGtNq@ep-tiny-waterfall-a5jxusck.us-east-2.aws.neon.tech/Stellarheaven?sslmode=require',
  },
});

