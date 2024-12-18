<script setup lang="ts">
import { ref, watch, useTemplateRef } from 'vue'
import backgroundImage from '@/assets/images/background.webp'
import backgroundSPImage from '@/assets/images/background_sp.webp'
const propsFlag = defineProps(['flag'])
const background = useTemplateRef('background')
const bgImage = useTemplateRef('bgImage')
const bgImageSp = useTemplateRef('bgImageSp')

watch(propsFlag, (newVal) => {
  if (newVal) {
    console.log(bgImage.value);
    console.log(bgImageSp.value);

    background.value.style.transition = 'transform 0.5s ease 0.2s'
    const windowHeight = window.innerHeight
    const imageHeight = bgImage.value.clientHeight
    const diff = imageHeight - windowHeight
    background.value.style.transform = `translateY(-${diff}px)`
  }
})
</script>

<template>
  <div class="bg" ref="background">
    <img :src="backgroundImage" alt="背景画像" class="" ref="bgImage"/>
  </div>
  <div class="bg-sp" ref="backgroundSp">
    <img :src="backgroundSPImage" alt="背景画像" class="" ref="bgSpImage"/>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/_variable.scss' as var;
.bg {
  width: 100%;
  height: 100%;
  position: relative;
  @include var.small {
    display: none;
  }
  img {
    display: block;
    position: absolute;
    top: 0;
    bottom: auto;
    width: 100%;
  }
}
.bg-sp {
  width: 100vw;
  height: 100vh;
  position: relative;
  @include var.large {
    display: none;
  }
  img {
    display: block;
    position: absolute;
    top: 0;
    bottom: auto;
    left: -50%;
    right: -50%;
    margin: auto;
    width: auto;
    height: 122.7%;
    object-fit: cover;
  }
}
</style>
