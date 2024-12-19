<script setup lang="ts">
import { ref, watch, useTemplateRef } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import backgroundImage from '@/assets/images/background.webp'
import backgroundSPImage from '@/assets/images/background_sp.webp'
import { useWindowSize  } from '@vueuse/core'

const { width, height } = useWindowSize()
const propsFlag = defineProps(['flag'])
const flagRef = ref(propsFlag.value)
const background = useTemplateRef('background')
const backgroundSp = useTemplateRef('backgroundSp')
const bgImage = useTemplateRef('bgImage')
const bgSpImage = useTemplateRef('bgSpImage')
const bgImageVisibility = useElementVisibility(bgImage)
const bgSpImageVisibility = useElementVisibility(bgSpImage)

const isSP = ref(false)
const breakPoint = 827

watch(propsFlag, (newVal) => {
  if (newVal) {
    flagRef.value = newVal;
    let showBgImage = bgImageVisibility.value ? bgImage : bgSpImage
    let showBackground = bgImageVisibility.value ? background : backgroundSp
    showBackground.value.style.transition = bgImageVisibility.value ? 'transform 0.5s ease 0.2s' : 'transform 1s ease 0.2s'
    const windowHeight = window.innerHeight
    const imageHeight = showBgImage.value.clientHeight
    const diff = imageHeight - windowHeight
    showBackground.value.style.transform = `translateY(-${diff}px)`
  }
})

watch(width, (newVal) => {
  const screenWidth = width.value
  isSP.value = screenWidth < breakPoint ? true : false

  if (flagRef.value.flag) {
    let showBgImage = isSP.value ? bgSpImage : bgImage
    let showBackground = isSP.value ? backgroundSp : background
    showBackground.value.style.transition = 'transform 0.5s ease 0.2s'
    const windowHeight = window.innerHeight
    const imageHeight = showBgImage.value.clientHeight
    const diff = imageHeight - windowHeight
    showBackground.value.style.transform = `translateY(-${diff}px)`
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
  min-width: 1080px;
  @include var.small {
    display: none;
    min-width: auto;
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
