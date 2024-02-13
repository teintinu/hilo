

const numberFormating = {
    '0': Intl.NumberFormat('es', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('es', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const Espanol = {
    "betting": {
    "balance": "Saldo",
    "higherOrEqual": "Mayor o Igual",
    "lowerOrEqual": "Inferior o Igual",
    "skipCard": "Saltar Tarjeta",
    "bet": "Apuesta",
    betValue: "Valor de la apuesta",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `Beneficio si es mayor o igual (${Espanol.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `Beneficio si es menor o igual (${Espanol.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "Beneficio total (1.00×)",
    },
    currency: "EUR",
    language: "Espanhol",
    formatNumber(n: number, option: keyof typeof numberFormating) {
        return numberFormating[option].format(n)
    },
} as const;
