

const numberFormating = {
    '0': Intl.NumberFormat('en', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    '0.0': Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    '0.00': Intl.NumberFormat('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const हिन्दी = {
    "betting": {
    "balance": "संतुलन",
    "higherOrEqual": "उच्चतर या समान",
    "lowerOrEqual": "कम या बराबर",
    "skipCard": "कार्ड छोड़ें",
    "bet": "शर्त",
    betValue: "दांव का मूल्य",
    },
    options: {
    profitGreaterOrEqual(multiplier: number){
        return `लाभ यदि अधिक या बराबर हो (${हिन्दी.formatNumber(multiplier, '0.00')}×)`
    },
    profitLowerOrEqual(multiplier: number){
        return `लाभ यदि कम या बराबर हो (${हिन्दी.formatNumber(multiplier, '0.00')}×`
    },
    totalProfit: "कुल लाभ (1.00×)",
    },
    currency: "INR",
    language: "हिन्दी",
    formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
    },
} as const;
