package handlers

import (
	"encoding/json"
	"net/http"

	"grocery-billing/internal/services"
)

type BillingHandler struct {
	Service services.BillingService
}

func NewBillingHandler(s services.BillingService) *BillingHandler {
	return &BillingHandler{Service: s}
}

func (h *BillingHandler) GetRecentInvoices(w http.ResponseWriter, r *http.Request) {
	invoices, err := h.Service.GetRecentInvoices()
	if err != nil {
		http.Error(w, "Failed to get invoices", http.StatusInternalServerError)
		return
	}
	respondJSON(w, http.StatusOK, invoices)
}

func (h *BillingHandler) GetDailyRevenue(w http.ResponseWriter, r *http.Request) {
	// Let's assume today is '2023-10-24' for the seeded mock data
	date := r.URL.Query().Get("date")
	if date == "" {
		date = "2023-10-24"
	}
	
	revenue, err := h.Service.GetDailyRevenue(date)
	if err != nil {
		http.Error(w, "Failed to get daily revenue", http.StatusInternalServerError)
		return
	}
	respondJSON(w, http.StatusOK, revenue)
}

func (h *BillingHandler) GetOutstandingBalances(w http.ResponseWriter, r *http.Request) {
	date := r.URL.Query().Get("date")
	if date == "" {
		date = "2023-10-24"
	}
	
	balances, err := h.Service.GetOutstandingBalances(date)
	if err != nil {
		http.Error(w, "Failed to get outstanding balances", http.StatusInternalServerError)
		return
	}
	respondJSON(w, http.StatusOK, balances)
}

func respondJSON(w http.ResponseWriter, status int, payload interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(payload)
}
