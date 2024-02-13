

const numberFormating = {
    '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const TiếngViệt = {
    "betting": {
    "balance": "Cân bằng",
    "higherOrEqual": "Cao hơn hoặc bằng",
    "lowerOrEqual": "Thấp hơn hoặc bằng",
    "skipCard": "Bỏ qua thẻ",
    "bet": "Cá cược",
    betValue: "giá trị đặt cược",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `Lợi nhuận nếu lớn hơn hoặc bằng (${TiếngViệt.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `Lợi nhuận nếu thấp hơn hoặc bằng (${TiếngViệt.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "Tổng lợi nhuận (1.00×)",
    },
    currency: "VND",
    language: "TiếngViệt",
    formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
    },
} as const;
