

const numberFormating = {
    '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const Türkçe = {
    "betting": {
    "balance": "Bakiye",
    "higherOrEqual": "Daha Yüksek veya Eşit",
    "lowerOrEqual": "Düşük veya Eşit",
    "skipCard": "Atlama Kartı",
    "bet": "Bahis",
    betValue: "Bahis Değeri",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `Büyük veya eşitse kar (${Türkçe.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `Düşük veya eşitse kar (${Türkçe.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "Toplam Kâr (1.00×)",
    },
    currency: "TRY",
    language: "Türkçe",
    formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
    },
} as const;
