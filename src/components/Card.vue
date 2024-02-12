<template>
  <div class="w-28 h-44 border border-solid rounded-lg p-5 m-2 bg-white" :style="{ color: cardColor }">
    <div class="max-w-[40px] text-center text-4xl">{{ cardValue }}</div>
    <div class="max-w-[40px] text-center text-5xl">{{ cardSuit }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    card: {
      type: String,
      required: true,
      validator: (value: string) => /^[♠♦♥♣](10|[2-9JQKA])$/.test(value),
    },
  },
  setup(props) {
    const cardSuit = computed(() => props.card.charAt(0));
    const cardValue = computed(() => props.card.slice(1));

    const cardColor = computed(() => {
      return ['♥', '♦'].includes(cardSuit.value) ? 'red' : 'black';
    });

    return { cardSuit, cardValue, cardColor };
  },
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 150px;
  border: 1px solid #000;
  border-radius: 10px;
  font-family: 'Arial', sans-serif;
}

.suit, .value {
  font-size: 20px;
}
</style>
