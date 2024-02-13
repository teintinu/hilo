

const numberFormating = {
    '0': Intl.NumberFormat('es', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('es', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const Francais = {
    "betting": {
    "balance": "Équilibre",
    "higherOrEqual": "Supérieur ou égal à",
    "lowerOrEqual": "Inférieur ou égal",
    "skipCard": "Carte de saut",
    "bet": "Parier",
    betValue: "Valeur du pari",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `Profit si supérieur ou égal (${Francais.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `Profit si inférieur ou égal(${Francais.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "Bénéfice total (1.00×)",
    },
    currency: "EUR",
    language: "Francais",
    formatNumber(n: number, option: keyof typeof numberFormating) {
        return numberFormating[option].format(n)
    },
} as const;
