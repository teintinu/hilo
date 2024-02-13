import { I18N } from "./i18nHelpers";

const numberFormating = {
  '0': Intl.NumberFormat('pt', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
  '0.0': Intl.NumberFormat('pt', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
  '0.00': Intl.NumberFormat('pt', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  '0.00000000': Intl.NumberFormat('en', { minimumFractionDigits: 8, maximumFractionDigits: 8 }),
}

export const Portugues: I18N = {
  "betting": {
    "balance": "Saldo",
    "higherOrEqual": "Maior ou igual",
    "lowerOrEqual": "Menor ou igual",
    "skipCard": "Pular Carta",
    "bet": "Aposta",
    betValue: "Valor da Aposta",
  },
  options: {
    profitGreaterOrEqual(percent: number){
        return `Escolha lucro Maior ou igual a (${Portugues.formatNumber(percent, '0.00')}×)`
    },
    profitLowerOrEqual(percent: number){
        return `Escolha lucro Menor ou igual a (${Portugues.formatNumber(percent, '0.00')}×`
    },
    totalProfit: "Total Profit (1.00×)",
  },
  currency: "BRL",
  language: "Portugues",
  formatNumber(n: number, option: keyof typeof numberFormating) {
    return numberFormating[option].format(n)
  },
}
