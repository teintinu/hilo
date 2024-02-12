

const numberFormating = {
  '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
  '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
  '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const en = {
  "betting": {
    "balance": "Balance",
    "higherOrEqual": "Higher or Equal",
    "lowerOrEqual": "Lower or Equal",
    "skipCard": "Skip Card",
    "bet": "Bet",
    betValue: "Bet Value",
  },
  options: {
    profitGreaterOrEqual(multiplier: number){
        return `Profit if greater or equal (${en.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `Profit if lower or equal (${en.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "Total Profit (1.00×)",
  },
  currency: "USD",
  language: "English",
  formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
  },
} as const;

