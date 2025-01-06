<script setup lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()

defineComponent({
  components: {
    Vue3DraggableResizable
  }
})

const emit = defineEmits(['emitSelectWindow', 'emitShowFullScreen'])

const props = defineProps({
  type: String,
  select: Boolean,
  fullScreen: Boolean
})
console.log(props);

const windowX = ref(0)
const windowY = ref(0)
const windowW = ref(0)
const windowH = ref(0)
const active = ref(false)
const parent = ref(true)
const isSP = ref(false)
const draggable = ref(true)
const resizable = ref(true)
const breakPoint = 827
const fullScreenFlag = ref(false)


watch(width, (newVal) => {
  const screenWidth = width.value
  isSP.value = screenWidth < breakPoint ? true : false
})
watch(isSP, (newVal) => {
  setDraggablSetting(props.type)
})
watch(() => props.fullScreen, (newVal) => {
  fullScreenFlag.value = newVal
})

onMounted(() => {
  setDraggablSetting(props.type)
  const screenWidth = width.value
  isSP.value = screenWidth < breakPoint ? true : false
})

const setDraggablSetting = (type: string) => {
  switch (type) {
    case 'about':
      windowX.value = 39
      windowY.value = 47
      windowW.value = 933
      windowH.value = 536
      break
    case 'gallery':
      windowX.value = 643
      windowY.value = 390
      windowW.value = 760
      windowH.value = 434
      break
  }
}

const fullScreen = (flag: boolean) => {
  fullScreenFlag.value = flag
  console.log(props.type);
  console.log(props.select);


  emit('emitShowFullScreen', flag)
}

const onDragStartCallback = (callbackX, callbackY) => {
  fullScreenFlag.value = false
  emit('emitSelectWindow', props.type)
  emit('emitShowFullScreen', false)
}
</script>

<template>
  <template v-if="isSP">
    <div class="window" :class="{'active': props.select, 'full-screen': fullScreenFlag && props.select}"> }">
      <div class="window-contents">
        <slot></slot>
      </div>
      <div class="window-footer" @click="fullScreen(true)">
        <span>view more</span>
      </div>
    </div>
  </template>
  <template v-else>
    <Vue3DraggableResizable
      :initW="400"
      :initH="300"
      v-model:w="windowW"
      v-model:h="windowH"
      v-model:x="windowX"
      v-model:y="windowY"
      v-model:active="active"
      :parent="parent"
      :draggable="draggable"
      :resizable="resizable"
      class="window"
      :class="{'focus': props.select, 'full-screen': fullScreenFlag && props.select}"
      :onDragStart="onDragStartCallback"
    >
      <div class="window-contents">
        <slot></slot>
      </div>
      <div class="window-footer" @click="fullScreen(true)">
        <span>view more</span>
      </div>
    </Vue3DraggableResizable>
  </template>
</template>

<style lang="scss" scoped>
@use '@/styles/_variable.scss' as var;

.window {
  border-radius: 20px;
  position: absolute;
  width: 400px;
  height: 300px;
  box-shadow: 0 2px 15px 0 rgba(#FFFFFF, 10%);
  background: linear-gradient(135deg, rgba(#FFFFFF, 20%) 0%, rgba(#FFFFFF, 10%) 100%);
  opacity: 0.5;
  @include var.small {
    width: 100%;
    height: auto;
    position: relative;
    opacity: 1;
  }
  &:not(:first-of-type) {
    @include var.small {
      margin-top: 24px;
    }
  }
  &.focus {
    border-color: transparent;
    border-style: none;
    opacity: 1;
    &:global(.handle) {
      opacity: 0;
      width: 20px;
      height: 20px;
    }
    z-index: 99;
    .window-footer {
      pointer-events: auto;
    }
  }
  &.full-screen {
    width: 100vw !important;
    height: 100vh !important;
    top: 0 !important;
    left: -#{calc(100vw * 0.209)} !important;
    right: 0;
    bottom: 0;
    border-radius: 0;
    box-shadow: none;
    background: linear-gradient(135deg, rgba(#323858, 20%) 0%, rgba(#A6423F, 10%) 100%);
    box-shadow: none;
    z-index: 99;
    transition: all 0.1s ease 0.1s;
    .window-contents {
      opacity: 0;
      transition: all 0.2s ease 0s;
    }
    &:before {
      display: none;
    }
    .window-footer {
      opacity: 0;
      transition: all 0.2s ease 0s;
      pointer-events: none;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    border: 1px solid transparent;
    background: linear-gradient(135deg, rgba(#FFFFFF, 0.5) 0%, rgba(#FFFFFF, 0.1) 100%) border-box border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0) border-box;
    -webkit-mask-composite: destination-out;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0) border-box;
    mask-composite: exclude;
  }
  .window-contents {
    padding: 32px;
    opacity: 1;
    @include var.small {
      padding: 16px var.psd(16) calc(24px + 32px);
    }
  }
  .window-footer {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 55px;
    background: linear-gradient(135deg, rgba(#FFFFFF, 20%) 0%, rgba(#FFFFFF, 10%) 100%);
    border-radius: 0 0 20px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    @include var.small {
      height: 32px;
      pointer-events: auto;
    }
    &:hover {
      cursor: pointer;
    }
    span {
      display: block;
      font-size: var.psd(24px);
      font-weight: 700;
      line-height: 1;
      text-align: center;
      color: #FFFFFF;
      position: relative;
      top: -4px;
      @include var.small {
        font-size: var.psd(16px);
        top: -2px;
      }
    }
  }
}
</style>
