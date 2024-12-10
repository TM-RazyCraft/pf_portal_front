<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const $fadeOutRef = ref(false)
defineEmits(['start-up'])

const fadeOut = () => {
  $fadeOutRef.value = true
}
</script>

<template>
  <div
    class="starts"
    @click="$emit('start-up'); fadeOut()"
    :class="{fadeOut: $fadeOutRef}"
  >
    <div class="outline"></div>
    <div class="innerline">
      <span>START</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/_variable.scss' as var;
.starts {
  width: var.psd(272);
  height: var.psd(272);
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
  &.fadeOut {
    animation: fadeOut 1s ease 0s 1 forwards;
    @keyframes fadeOut {
      0% {
        opacity: 1;
        transform: translate(0, 0);
      }
      100% {
        opacity: 0;
        transform: translate(0, -100px);
      }
    }
  }
  .outline {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: var.psd(240);
    height: var.psd(240);
    border: 16px solid #FFF;
    border-radius: 100%;
    box-sizing: content-box;
  }
  .innerline {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 200px;
    height: 200px;
    box-sizing: content-box;
    border: 6px solid #FFF;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: block;
      font-size: 40px;
      text-align: center;
      line-height: 1;
      font-weight: 700;
      color: #FFF;
    }
  }
  &:hover {
    cursor: pointer;
  }
}

</style>
