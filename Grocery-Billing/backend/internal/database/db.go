package database

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func NewDB(dsn string) (*sql.DB, error) {
	db, err := sql.Open("sqlite3", dsn)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	if err := db.Ping(); err != nil {
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	if err := runMigrations(db); err != nil {
		return nil, fmt.Errorf("failed to run migrations: %w", err)
	}

	log.Println("Database connected and migrated successfully")
	return db, nil
}

func runMigrations(db *sql.DB) error {
	schema := `
	CREATE TABLE IF NOT EXISTS invoices (
		id TEXT PRIMARY KEY,
		partner TEXT NOT NULL,
		amount REAL NOT NULL,
		status TEXT NOT NULL
	);
	
	CREATE TABLE IF NOT EXISTS daily_revenue (
		date TEXT PRIMARY KEY,
		amount REAL NOT NULL,
		percentage_change REAL NOT NULL
	);
	
	CREATE TABLE IF NOT EXISTS outstanding_balances (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		amount_due REAL NOT NULL,
		retail_partners INTEGER NOT NULL,
		date TEXT UNIQUE NOT NULL
	);
	`
	_, err := db.Exec(schema)
	return err
}
