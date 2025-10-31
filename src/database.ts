import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NEON_DATABASE_URL!);

// Define a schema for your users table
// This is a simple example, you may need to adjust it to your needs
// You can use a migration tool like Drizzle to manage your schema
// For now, we will assume the table is created manually

// Example of how to create the table:
// CREATE TABLE users (
//   id TEXT PRIMARY KEY,
//   name TEXT,
//   avatar TEXT,
//   color TEXT
// );

let initialized = false;
async function ensureUsersTable() {
  if (initialized) return;
  await sql`CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT,
    avatar TEXT,
    color TEXT
  )`;
  initialized = true;
}

export async function getUser(id: string) {
  await ensureUsersTable();
  const user = await sql`SELECT * FROM users WHERE id = ${id}`;
  return user[0] || null;
}

export async function getUsers() {
  await ensureUsersTable();
  const users = await sql`SELECT * FROM users`;
  return users;
}

export async function createUser(id: string, name: string, avatar: string, color: string) {
  await ensureUsersTable();
  await sql`INSERT INTO users (id, name, avatar, color) VALUES (${id}, ${name}, ${avatar}, ${color})`;
}