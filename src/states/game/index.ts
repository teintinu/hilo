import { ref, computed } from 'vue'
import { currency } from '../currency'

type Card = `${'♠' | '♦' | '♥' | '♣'}${"A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K"}`
const cardSuits = ['♠', '♦', '♥', '♣']
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export const balanceBitcoin = ref(0.000300)
export const balanceInCurrency = computed(() => {
    return {
        symbol: currency.value.symbol,
        value: betValueBitcoin.value * currency.value.bitcoin
    }
})

export const betValueBitcoin = ref(0.00001)
export const currentCard = ref(randomizeCard())
export const bettingState = ref({
    lastCard: "" as Card,
    betting: false,
    animateLeft: false
})

export const betState = computed(() => {
    const higherOrEqual = 84.62
    const lowerOrEqual = 100 - higherOrEqual
    const profitGreaterOrEqualMultiplier = 1.17
    const profitLowerOrEqualMultiplier = 4.29
    return {
        higherOrEqual,
        lowerOrEqual,
        options: {
            profitGreaterOrEqual: {
                multiplier: profitGreaterOrEqualMultiplier,
                value: profitGreaterOrEqualMultiplier * betValueBitcoin.value
            },
            profitLowerOrEqual: {
                multiplier: profitLowerOrEqualMultiplier,
                value: profitLowerOrEqualMultiplier * betValueBitcoin.value
            },
        }
    }
})

export const betOption = ref<'total' | keyof typeof betState['value']['options']>('total')
export function selectOption(option: keyof typeof betState['value']['options']) {
    betOption.value = option
}

export function getCardValue(card: Card) {
    const value = card.substring(1)
    return cardValues.indexOf(value) + 1
}

export function randomizeCard() {
    const suit = cardSuits[Math.floor(Math.random() * cardSuits.length)]
    const value = cardValues[Math.floor(Math.random() * cardValues.length)]
    return `${suit}${value}` as Card
}

export function registerBet() {
    changeCard(async () => {
        const nextCard = await Promise.resolve(randomizeCard())
        const lastCard = currentCard.value
        if (betOption.value === 'profitGreaterOrEqual') {
            balanceBitcoin.value -= betValueBitcoin.value
            if (getCardValue(nextCard) >= getCardValue(lastCard)) {
                balanceBitcoin.value += betState.value.options.profitGreaterOrEqual.value
            }
        } else if (betOption.value === 'profitLowerOrEqual') {
            balanceBitcoin.value -= betValueBitcoin.value
            if (getCardValue(nextCard) <= getCardValue(lastCard)) {
                balanceBitcoin.value += betState.value.options.profitLowerOrEqual.value
            }
        }
        return Promise.resolve(nextCard)
    })
}

export function skipCard() {
    changeCard(() => Promise.resolve(randomizeCard()))
}

async function changeCard(fn: () => Promise<Card>) {
    const lastCard = currentCard.value
    const nextCard = await fn()
    currentCard.value = nextCard
    bettingState.value = {
        lastCard,
        betting: true,
        animateLeft: !bettingState.value.animateLeft
    }
    currentCard.value = randomizeCard()
    setTimeout(() => {
        bettingState.value = {
            lastCard,
            betting: false,
            animateLeft: bettingState.value.animateLeft
        }
    }, 500);
}