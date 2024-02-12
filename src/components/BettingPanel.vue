
<template>
  <div class="bg-gray-800 text-white w-full max-w-sm rounded-lg shadow-md p-4">

    <div class="flex justify-between items-center mb-4">
      <div>
        <div class="text-xs">{{ t.betting.betValue }}</div>
      </div>
      <div class="flex space-x-1">
        <div class="text-xl font-semibold">
          {{ balanceInCurrency.symbol }} {{ t.formatNumber(balanceInCurrency.value, '0.00') }}
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center mb-4">
      <div>
        <input type="number" class="bg-gray-700 text-white w-40 rounded-lg py-1 px-2 mr-1" step="0.00000001"
          pattern="^\d*(\.\d{0,2})?$" onblur="this.value = parseFloat(this.value).toFixed(8);" v-model="betValueBitcoin">
        <span class="p-1 inline-block text-center w-8 h-8 bg-yellow-400 rounded-full">₿</span>
      </div>
      <div class="flex space-x-1">
        <button class="bg-yellow-400 text-black px-2 py-1 rounded text-sm">½</button>
        <button class="bg-yellow-400 text-black px-3 py-1 rounded text-sm">2x</button>
      </div>
    </div>

    <div class="my-2">
      <div class="bg-gray-700 w-full rounded-lg py-2 flex justify-between items-center px-4 mb-1">
        <span>{{ t.betting.higherOrEqual }}</span>
        <span class="font-bold">{{ t.formatNumber(betState.higherOrEqual, '0.0') }}</span>
      </div>
      <div class="bg-gray-700 w-full rounded-lg py-2 flex justify-between items-center px-4">
        <span>{{ t.betting.lowerOrEqual }}</span>
        <span class="font-bold">{{ t.formatNumber(betState.lowerOrEqual, '0.0') }}</span>
      </div>
    </div>

    <div class="flex flex-col space-y-2">
      <button class="bg-gray-700 w-full rounded-lg py-2" :disabled="bettingState.betting" v-on:click="skipCard()">{{
        t.betting.skipCard }}</button>
      <button class="bg-green-500 w-full rounded-lg py-2" :disabled="bettingState.betting" v-on:click="registerBet()">{{
        t.betting.bet }}</button>
    </div>

    <div class="pt-4 text-center">
      Balance: {{ t.formatNumber(balanceBitcoin, '0.00000000') }}
      <span class="p-1 inline-block text-center w-8 h-8 bg-yellow-400 rounded-full">₿</span>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { t, betValueBitcoin, balanceBitcoin, balanceInCurrency, betState, bettingState, registerBet, skipCard } from '@/states';

export default defineComponent({
  setup() {
    return { t, betValueBitcoin, balanceBitcoin, balanceInCurrency, betState, bettingState, registerBet, skipCard, };
  },
});
</script>
