package router

import (
	"net/http"
	"grocery-billing/internal/api/handlers"
	"log"
)

// SetupCors allows simple local testing on different ports
func SetupCors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func NewRouter(billingHandler *handlers.BillingHandler) http.Handler {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /api/invoices/recent", billingHandler.GetRecentInvoices)
	mux.HandleFunc("GET /api/revenue/daily", billingHandler.GetDailyRevenue)
	mux.HandleFunc("GET /api/balances/outstanding", billingHandler.GetOutstandingBalances)

	log.Println("Routes registered")
	return SetupCors(mux)
}
