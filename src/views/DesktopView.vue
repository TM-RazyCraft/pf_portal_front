<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import DigitalClock from '@/components/DigitalClock.vue';
import Window from '@/components/Window.vue';

</script>

<template>
  <div class="wrapper">
    <div class="left-column">
      <DigitalClock />
    </div>
    <div class="right-column">
      <Window :type="'about'" />
      <Window :type="'garelly'" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '@/styles/_variable.scss' as var;
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
  @include var.small {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .left-column {
    width: 20.9%;
    @include var.small {
      width: 100%;
      box-sizing: border-box;
    }
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
    @include var.small {
      width: 100vw;
      height: 100vh;
      border-left: none;
      background: linear-gradient(180deg, rgba(#323858, 20%) 0%, rgba(#A6423F, 10%) 100%);
      padding: 24px #{var.psd(16) 32px};
      box-sizing: border-box;
    }
  }
}
</style>
