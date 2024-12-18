<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
defineComponent({
  components: {
    Vue3DraggableResizable
  }
})

const props = defineProps({
  type: String,
  setting: Object
})
console.log(props);


const x = ref(props.setting.initX)
const y = ref(props.setting.initY)
const w = ref(0)
const h = ref(0)
const active = ref(false)

const print = (msg: string) => {
  // console.log(msg)
}
</script>

<template>
  <Vue3DraggableResizable
    :initW="400"
    :initH="400"
    v-model:x="x"
    v-model:y="y"
    v-model:w="w"
    v-model:h="h"
    v-model:active="active"
    :parent="true"
    :draggable="true"
    :resizable="false"
    @activated="print('activated')"
    @deactivated="print('deactivated')"
    @drag-start="print('drag-start')"
    @resize-start="print('resize-start')"
    @dragging="print('dragging')"
    @resizing="print('resizing')"
    @drag-end="print('drag-end')"
    @resize-end="print('resize-end')"
    class="window"
  >
    <div class="window-contents">
      <template v-if="props.type === 'about'">
        <h1>about</h1>
        <p>test</p>
      </template>
      <template v-else-if="props.type === 'garelly'">
        <h1>gallery</h1>
      </template>
    </div>
    <div class="window-footer">
      <span>view more</span>
    </div>
  </Vue3DraggableResizable>
</template>

<style lang="scss" scoped>
@use '@/styles/_variable.scss' as var;

.window {
  border-radius: 20px;
  position: absolute;
  min-height: 400px;
  box-shadow: 0 2px 15px 0 rgba(#FFFFFF, 10%);
  background: linear-gradient(135deg, rgba(#FFFFFF, 20%) 0%, rgba(#FFFFFF, 10%) 100%);
  min-width: 400px;
  &.active {
    border-color: transparent;
    border-style: none;
    &:global(.handle) {
      opacity: 0;
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
    h1 {
      font-size: var.psd(40px);
      font-weight: 700;
      line-height: 1.2;
      color: #FFFFFF;
      margin: 0 0 32px 0;
    }
    p {
      font-size: var.psd(24px);
      font-weight: 400;
      line-height: 1.2;
      color: #FFFFFF;
      word-break: break-all;
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
    span {
      display: block;
      font-size: var.psd(24px);
      font-weight: 700;
      line-height: 1;
      text-align: center;
      color: #FFFFFF;
      position: relative;
      top: -4px;
    }
  }
}
</style>
