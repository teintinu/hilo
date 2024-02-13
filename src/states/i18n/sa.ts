

const numberFormating = {
    '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const اَلْعَرَبِيَّةُ = {
    "betting": {
    "balance": "الرصيد",
    "higherOrEqual": "أعلى أو مساوٍ",
    "lowerOrEqual": "أقل أو مساوٍ",
    "skipCard": "تخطي البطاقة",
    "bet": "الرهان",
    betValue: "قيمة الرهان",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `الربح إذا كان أكبر أو يساوي (${اَلْعَرَبِيَّةُ.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `الربح إذا كان أقل أو مساوياً (${اَلْعَرَبِيَّةُ.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "إجمالي الربح  (1.00×)",
    },
    currency: "SAR",
    language: "اَلْعَرَبِيَّةُ",
    formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
    },
} as const;
