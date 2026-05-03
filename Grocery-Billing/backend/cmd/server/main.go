package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"grocery-billing/internal/api/handlers"
	"grocery-billing/internal/api/router"
	"grocery-billing/internal/database"
	"grocery-billing/internal/services"
)

func main() {
	// Load .env file (ok to fail in prod where env vars are set externally)
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, reading from environment directly")
	}

	port := getEnv("PORT", ":8081")
	dbPath := getEnv("DB_PATH", "grocery-billing.db")

	// Initialize Database
	db, err := database.NewDB(dbPath)
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}
	defer db.Close()

	// Initialize Services
	billingSvc := services.NewBillingService(db)

	// Seed Initial Data
	if err := billingSvc.SeedInitialData(); err != nil {
		log.Printf("Warning: seed skipped (data may already exist): %v", err)
	}

	// Initialize Handlers
	billingHandler := handlers.NewBillingHandler(billingSvc)

	// Initialize Router
	r := router.NewRouter(billingHandler)

	// Start Server
	log.Printf("Starting server on port %s...", port)
	if err := http.ListenAndServe(port, r); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}

func getEnv(key, fallback string) string {
	if val, ok := os.LookupEnv(key); ok {
		return val
	}
	return fallback
}

