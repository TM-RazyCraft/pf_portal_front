<script setup lang="ts">
import { ref, computed } from 'vue'
import DigitalClock from '@/components/DigitalClock.vue';
import Window from '@/components/Window.vue';
const aboutSetting = {
  initX: 20,
  initY: 20
}
const garellySetting = {
  initX: 450,
  initY: 360
}
</script>

<template>
  <div class="wrapper">
    <div class="left-column">
      <DigitalClock />
    </div>
    <div class="right-column">
      <Window :type="'about'" :setting="aboutSetting" />
      <Window :type="'garelly'" :setting="garellySetting" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
  .left-column {
    width: 20.9%;
  }
  .right-column {
    width: 79.1%;
    background: linear-gradient(135deg, rgba(#323858, 20%) 0%, rgba(#A6423F, 10%) 100%);
    backdrop-filter: blur(10px);
    border-left: 1px solid;
    border-image: linear-gradient(135deg, rgba(#323858, 50%) 0%, rgba(#A6423F, 10%) 100%) 1;
    opacity: 0;
    animation: fadeIn 0.5s ease 0.5s 1 forwards;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
}
</style>
