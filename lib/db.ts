import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

export type DbUser = {
  id: string;
  email: string;
  password_hash: string;
  role: "teacher";
  created_at: string;
};

let dbSingleton: Database.Database | null = null;

function getDbFilePath() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  return path.join(dataDir, "spubus.db");
}

export function db() {
  if (dbSingleton) return dbSingleton;
  const file = getDbFilePath();
  const dbi = new Database(file);
  dbi.pragma("journal_mode = WAL");
  dbi.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
  `);
  dbSingleton = dbi;
  return dbSingleton;
}

export function getUserByEmail(email: string): DbUser | null {
  const row = db()
    .prepare("SELECT id, email, password_hash, role, created_at FROM users WHERE email = ? LIMIT 1")
    .get(email) as DbUser | undefined;
  return row ?? null;
}

export function createUser(input: { id: string; email: string; password_hash: string }): DbUser {
  const now = new Date().toISOString();
  db()
    .prepare("INSERT INTO users (id, email, password_hash, role, created_at) VALUES (?, ?, ?, ?, ?)")
    .run(input.id, input.email, input.password_hash, "teacher", now);
  const user = getUserByEmail(input.email);
  if (!user) throw new Error("Failed to create user");
  return user;
}

