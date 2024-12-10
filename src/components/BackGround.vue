<script setup lang="ts">
import { defineProps, ref, watch, useTemplateRef } from 'vue'
import backgroundImage from '@/assets/images/background.webp'
const propsFlag = defineProps(['flag'])
const background = useTemplateRef('background')
const bgImage = useTemplateRef('bgImage')

watch(propsFlag, (newVal) => {
  if (newVal) {
    background.value.style.transition = 'transform 0.5s ease 0.2s'
    const windowHeight = window.innerHeight
    const imageHeight = bgImage.value.clientHeight
    const diff = imageHeight - windowHeight
    background.value.style.transform = `translateY(-${diff}px)`
  }
})
</script>

<template>
  <Transition name="viewScroll">
    <div class="bg" ref="background">
      <img :src="backgroundImage" alt="background" class="" ref="bgImage"/>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    display: block;
    position: absolute;
    top: 0;
    bottom: auto;
    width: 100%;
  }
}
</style>
