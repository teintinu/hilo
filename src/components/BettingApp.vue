
<template>
  <div class="bg-gray-900 h-screen flex gap-2 p-4 w-full">
    <betting-panel />
    <betting-option />
  </div>
</template>
  
<script lang="ts">
import BettingPanel from './BettingPanel.vue';
import BettingOption from './BettingOption.vue';

export default {
  components: {
    BettingPanel,
    BettingOption
  }
};
</script>
  