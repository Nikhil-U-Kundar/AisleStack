package models

type Invoice struct {
	ID      string  `json:"id"`
	Partner string  `json:"partner"`
	Amount  float64 `json:"amount"`
	Status  string  `json:"status"`
}

type DailyRevenue struct {
	Date             string  `json:"date"`
	Amount           float64 `json:"amount"`
	PercentageChange float64 `json:"percentageChange"`
}

type OutstandingBalance struct {
	AmountDue      float64 `json:"amountDue"`
	RetailPartners int     `json:"retailPartners"`
	Date           string  `json:"date"`
}
