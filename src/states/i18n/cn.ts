

const numberFormating = {
    '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const 中文 = {
    "betting": {
    "balance": "平衡",
    "higherOrEqual": "高于或等于",
    "lowerOrEqual": "低于或等于",
    "skipCard": "跳过卡",
    "bet": "投注",
    betValue: "投注价值",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `利润（如果大于或等于 (${中文.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `低于或等于时的利润 (${中文.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "利润总额 (1.00×)",
    },
    currency: "CNY",
    language: "中文",
    formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
    },
} as const;
