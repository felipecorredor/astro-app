<script>
import CounterMethod from "./CounterMethod.vue";

export default {
  // reactive state
  data() {
    return {
      count: 0,
      activeIndex: 0,
    };
  },
  computed: {
    methods() {
      return [
        { action: this.increment, value: "Increment" },
        { action: this.decrement, value: "Decrement" },
        { action: this.reset, value: "Reset" },
        { action: null, value: this.count },
      ];
    },
  },
  // functions that mutate state and trigger updates
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
    setActiveIndex(index) {
      this.activeIndex = index;
    },
  },
  components: {
    CounterMethod,
  },
};
</script>

<template>
  <div class="flex flex-wrap gap-4 my-6">
    <CounterMethod
      v-for="(method, index) in methods"
      :key="method.value"
      :isActive="activeIndex === index"
      :action="method.action"
      :setActiveIndex="() => setActiveIndex(index)"
      :value="method.value"
    />
  </div>
</template>
