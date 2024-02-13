

const numberFormating = {
    '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const 한국어 = {
    "betting": {
    "balance": "잔액",
    "higherOrEqual": "더 높거나 같음",
    "lowerOrEqual": "더 낮거나 같음",
    "skipCard": "카드 건너뛰기",
    "bet": "베팅",
    betValue: "베팅 값",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `이익이 크거나 같을 경우 (${한국어.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `더 낮거나 같을 경우 이익 (${한국어.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "총 수익 (1.00×)",
    },
    currency: "KRW",
    language: "한국어",
    formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
    },
} as const;
