

const numberFormating = {
    '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const Indonesian = {
    "betting": {
    "balance": "Keseimbangan",
    "higherOrEqual": "Lebih tinggi atau sama",
    "lowerOrEqual": "Lebih rendah atau Sama",
    "skipCard": "Lewati Kartu",
    "bet": "Taruhan",
    betValue: "Nilai Taruhan",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `Keuntungan jika lebih besar atau sama (${Indonesian.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `Keuntungan jika lebih rendah atau sama (${Indonesian.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "Total Laba (1.00×)",
    },
    currency: "IDR",
    language: "Indonesian",
    formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
    },
} as const;
