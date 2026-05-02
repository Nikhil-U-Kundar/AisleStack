package services

import (
	"database/sql"
	"grocery-billing/internal/models"
)

type BillingService interface {
	GetRecentInvoices() ([]models.Invoice, error)
	GetDailyRevenue(date string) (models.DailyRevenue, error)
	GetOutstandingBalances(date string) (models.OutstandingBalance, error)
	SeedInitialData() error
}

type billingService struct {
	db *sql.DB
}

func NewBillingService(db *sql.DB) BillingService {
	return &billingService{db: db}
}

func (s *billingService) GetRecentInvoices() ([]models.Invoice, error) {
	rows, err := s.db.Query("SELECT id, partner, amount, status FROM invoices")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var invoices []models.Invoice
	for rows.Next() {
		var inv models.Invoice
		if err := rows.Scan(&inv.ID, &inv.Partner, &inv.Amount, &inv.Status); err != nil {
			return nil, err
		}
		invoices = append(invoices, inv)
	}
	return invoices, nil
}

func (s *billingService) GetDailyRevenue(date string) (models.DailyRevenue, error) {
	var rev models.DailyRevenue
	err := s.db.QueryRow("SELECT date, amount, percentage_change FROM daily_revenue WHERE date = ?", date).
		Scan(&rev.Date, &rev.Amount, &rev.PercentageChange)
	if err != nil {
		return models.DailyRevenue{}, err
	}
	return rev, nil
}

func (s *billingService) GetOutstandingBalances(date string) (models.OutstandingBalance, error) {
	var ob models.OutstandingBalance
	err := s.db.QueryRow("SELECT amount_due, retail_partners, date FROM outstanding_balances WHERE date = ?", date).
		Scan(&ob.AmountDue, &ob.RetailPartners, &ob.Date)
	if err != nil {
		return models.OutstandingBalance{}, err
	}
	return ob, nil
}

func (s *billingService) SeedInitialData() error {
	// Seed some mock data so the API returns data
	tx, err := s.db.Begin()
	if err != nil {
		return err
	}

	tx.Exec("INSERT OR IGNORE INTO invoices (id, partner, amount, status) VALUES ('#INV-2023-089', 'FreshMart Co.', 1240.00, 'PAID')")
	tx.Exec("INSERT OR IGNORE INTO invoices (id, partner, amount, status) VALUES ('#INV-2023-092', 'Green Valley Grocers', 850.25, 'UNPAID')")
	tx.Exec("INSERT OR IGNORE INTO invoices (id, partner, amount, status) VALUES ('#INV-2023-094', 'Urban Pantry', 2110.00, 'PENDING')")
	tx.Exec("INSERT OR IGNORE INTO invoices (id, partner, amount, status) VALUES ('#INV-2023-095', 'Daily Harvest', 455.00, 'PAID')")

	tx.Exec("INSERT OR IGNORE INTO daily_revenue (date, amount, percentage_change) VALUES ('2023-10-24', 12480.00, 12.0)")
	tx.Exec("INSERT OR IGNORE INTO outstanding_balances (amount_due, retail_partners, date) VALUES (4215.50, 8, '2023-10-24')")

	return tx.Commit()
}
