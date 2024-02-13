

const numberFormating = {
    '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const Pусский = {
    "betting": {
    "balance": "баланс",
    "higherOrEqual": "Выше или равно",
    "lowerOrEqual": "Меньше или равно",
    "skipCard": "Пропустить карту",
    "bet": "Ставка",
    betValue: "Значение ставки",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `Прибыль, если она больше или равна (${Pусский.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `Прибыль, если она меньше или равна (${Pусский.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "Общая прибыль (1.00×)",
    },
    currency: "RUB",
    language: "Pусский",
    formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
    },
} as const;
