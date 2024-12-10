<script setup lang="ts">
defineEmits(['start-up'])
</script>

<template>
  <div class="starts" @click="$emit('start-up')">
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
    // animation: sway 2s linear 0s infinite;
    // @keyframes sway {
    //   0% {
    //     border: 8px solid #FFF;
    //   }
    //   50% {
    //     border: 16px solid #FFF;
    //   }
    //   100% {
    //     border: 8px solid #FFF;
    //   }
    // }
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
