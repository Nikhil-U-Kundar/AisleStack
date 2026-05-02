package main

import (
	"log"
	"net/http"

	"grocery-billing/internal/api/handlers"
	"grocery-billing/internal/api/router"
	"grocery-billing/internal/database"
	"grocery-billing/internal/services"
)

func main() {
	// Initialize Database
	db, err := database.NewDB("grocery-billing.db")
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}
	defer db.Close()

	// Initialize Services
	billingSvc := services.NewBillingService(db)

	// Seed Initial Data
	if err := billingSvc.SeedInitialData(); err != nil {
		log.Printf("Warning: Failed to seed data (might already exist): %v", err)
	}

	// Initialize Handlers
	billingHandler := handlers.NewBillingHandler(billingSvc)

	// Initialize Router
	r := router.NewRouter(billingHandler)

	// Start Server
	port := ":8080"
	log.Printf("Starting server on port %s...", port)
	if err := http.ListenAndServe(port, r); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
