

const numberFormating = {
    '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const 日本語 = {
    "betting": {
    "balance": "バランス",
    "higherOrEqual": "高いまたは等しい",
    "lowerOrEqual": "下位または同等",
    "skipCard": "「カードをスキップする",
    "bet": "「ベット",
    betValue: " 「ベット値",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `それ以上の場合は利益 (${日本語.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `以下なら利益 (${日本語.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "利益合計 (1.00×)",
    },
    currency: "JPY",
    language: "日本語",
    formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
    },
} as const;

