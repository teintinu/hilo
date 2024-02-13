

const numberFormating = {
    '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const Deutsch = {
    "betting": {
    "balance": "Bilanz",
    "higherOrEqual": "Höher oder gleich",
    "lowerOrEqual": "Niedriger oder gleich",
    "skipCard": "Karte überspringen",
    "bet": "Wette",
    betValue: "Einsatzwert",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `Gewinn wenn größer oder gleich (${Deutsch.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `Gewinn, wenn niedriger oder gleich (${Deutsch.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "Gesamtgewinn (1.00×)",
    },
    currency: "EUR",
    language: "Deutsch",
    formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
    },
} as const;
