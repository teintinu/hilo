

const numberFormating = {
    '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const Suomen = {
    "betting": {
    "balance": "Tasapaino",
    "higherOrEqual": "Suurempi tai yhtä suuri",
    "lowerOrEqual": "Alempi tai yhtä suuri",
    "skipCard": "Ohita kortti",
    "bet": "Bet",
    betValue: "Vedon arvo",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `Voitto, jos se on suurempi tai yhtä suuri (${Suomen.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `Voitto, jos pienempi tai yhtä suuri (${Suomen.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "Kokonaisvoitto (1.00×)",
    },
    currency: "EUR",
    language: "Suomen",
    formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
    },
} as const;
