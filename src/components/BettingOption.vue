
<template>
  <div class="flex-1 flex-col flex gap-2 w-full rounded-lg shadow-md p-4">

    <div class="flex gap-2 justify-center items-center w-full rounded-lg shadow-md p-4 m-8">

      <div class="w-30 text-gray-500 text-md">
        <div class="max-w-[120px] h-24 border border-solid rounded-lg p-5 m-2">
          <div class="max-w-[20px] text-center text-xl">K</div>
          <div class="max-w-[20px] text-center text-2xl rotate-90">⇤</div>
        </div>
        <div>King being the highest</div>
      </div>

      <div class="w-44 h-40 flex justify-center">
        <div class="relative w-28 h-40">
          <div class="animate-slide-out-top duration-200 absolute inset-0" v-if="bettingState.betting">
            <Card :card="bettingState.lastCard" />
          </div>
          <div class="absolute inset-0" :class="bettingState.betting ? 'animate-slit-in-vertical duration-200' : ''">
            <Card :card="currentCard" />
          </div>
        </div>
      </div>

      <div class="w-30 text-gray-500 text-md">
        <div class="max-w-[120px] h-24 border border-solid rounded-lg p-5 m-2">
          <div class="max-w-[20px] text-center text-xl">A</div>
          <div class="max-w-[20px] text-center text-2xl -rotate-90">⇤</div>
        </div>
        <div>Ace being the lowest</div>
      </div>
    </div>

    <div class="bg-gray-800 text-white w-full rounded-lg shadow-md p-4 flex justify-around gap-2">
      <div>
        {{ t.options.profitGreaterOrEqual(betState.options.profitGreaterOrEqual.multiplier) }}
        <div class="bg-gray-700 rounded-lg py-2 flex justify-between items-center px-4 mb-1 border-2 border-solid"
          :class="betOption === 'profitGreaterOrEqual' ? 'border-gray-500' : 'cursor-pointer border-gray-700'"
          v-on:click="betOption = 'profitGreaterOrEqual'">
          <span>⇧</span>

          <span class="font-bold">{{ t.formatNumber(betState.options.profitGreaterOrEqual.value, '0.00000000') }}</span>
        </div>
      </div>
      <div>
        {{ t.options.profitLowerOrEqual(betState.options.profitLowerOrEqual.multiplier) }}
        <div class="bg-gray-700 rounded-lg py-2 flex justify-between items-center px-4 mb-1 border-2 border-solid"
          :class="betOption === 'profitLowerOrEqual' ? 'border-gray-500' : 'cursor-pointer border-gray-700'"
          v-on:click="betOption = 'profitLowerOrEqual'">
          <span>⇩</span>
          <span class="font-bold">{{ t.formatNumber(betState.options.profitLowerOrEqual.value, '0.00000000') }}</span>
        </div>
      </div>
      <div>
        {{ t.options.totalProfit }}
        <div class="bg-gray-700 rounded-lg py-2 flex justify-between items-center px-4 mb-1 border-2 border-solid"
          :class="betOption === 'total' ? 'border-gray-500' : 'cursor-pointer border-gray-700'"
          v-on:click="betOption = 'total'">
          <span class="font-bold">{{ t.formatNumber(betValueBitcoin, '0.00000000') }}</span>
        </div>
      </div>
    </div>

    <div class="flex-1 flex-col flex gap-2 w-full rounded-lg shadow-md p-4">
      <div class="relative w-28 h-40">
        <div class="absolute inset-0" v-if="bettingState.betting">
          <Card :card="bettingState.lastCard" />
        </div>
        <div class="absolute inset-0" :class="bettingState.betting ? 'animate-slide-in-right duration-200' : ''">
          <Card :card="currentCard" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { t, betValueBitcoin, betState, bettingState, currentCard, betOption } from '@/states';

import Card from './Card.vue';
export default defineComponent({
  setup() {
    return { t, betValueBitcoin, betState, bettingState, currentCard, betOption };
  },
  components: {
    Card
  }
})
</script>
  