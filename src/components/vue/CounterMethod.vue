<template>
  <div
    :class="[
      'border rounded-md px-10 py-2 cursor-pointer',
      isActive ? 'bg-slate-800' : '',
    ]"
    @click="handleClick"
  >
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      if (this.setActiveIndex) {
        this.setActiveIndex();
      }
      if (this.action) {
        this.action();
      }
    },
  },
  props: ["action", "value", "setActiveIndex", "isActive"],
};
</script>
