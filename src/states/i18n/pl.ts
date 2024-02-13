

const numberFormating = {
    '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const Polski = {
    "betting": {
    "balance": "równowaga",
    "higherOrEqual": "Wyższy lub równy",
    "lowerOrEqual": "Niższy lub równy",
    "skipCard": "Pomiń kartę",
    "bet": "Zakład",
    betValue: "Wartość zakładu",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `Zysk, jeśli większy lub równy (${Polski.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `Zysk, jeśli niższy lub równy (${Polski.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "Całkowity zysk (1.00×)",
    },
    currency: "PLN",
    language: "Polski",
    formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
    },
} as const;
