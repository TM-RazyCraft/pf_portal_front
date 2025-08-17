<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import DigitalClock from '@/components/DigitalClock.vue';
import Window from '@/components/Window.vue';
import AboutTemplate from '@/components/window/AboutTemplate.vue';
import AboutDetailTemplate from '@/components/window/AboutDetailTemplate.vue';
import GalleryTemplate from '@/components/window/GalleryTemplate.vue';
import GalleryDetailTemplate from '@/components/window/GalleryDetailTemplate.vue';
const $selectWindow = ref('about')
const $windowNames = ref(['about', 'gallery'])
const $selectDetailTemplate = ref(AboutDetailTemplate)
const $parentFullScreenFlag = ref(false)
watch($selectWindow, (newVal) => {
  if (newVal === 'about') {
    $selectDetailTemplate.value = AboutDetailTemplate
  } else if (newVal === 'gallery') {
    $selectDetailTemplate.value = GalleryDetailTemplate
  }
})

const focus = (type: string) => {
  $selectWindow.value = type
}

const closeFullScreen = () => {
  $parentFullScreenFlag.value = false
}
const selectTemplate = ((name: string) => {
  if (name === 'about') {
    return AboutTemplate
  } else if (name === 'gallery') {
    return GalleryTemplate
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="left-column">
      <DigitalClock />
    </div>
    <div class="right-column">
      <template v-for="name in $windowNames">
        <Window
          :type="name"
          :select="$selectWindow === name"
          :fullScreen="$parentFullScreenFlag"
          @click="focus(name)"
          @emitSelectWindow="($event: any) => $selectWindow = $event"
          @emitShowFullScreen="($event: any) => $parentFullScreenFlag = $event"
        >
          <component :is="selectTemplate(name)" />
        </Window>
      </template>
    </div>
    <div class="fullscreen-contents" :class="{'nopadding': $selectWindow === 'gallery'}" v-if="$parentFullScreenFlag">
      <div class="detail">
        <component :is="$selectDetailTemplate" />
        <div class="close" @click="closeFullScreen()">
          <img src="@/assets/images/parts/closeButton.svg" alt="閉じる">
        </div>
      </div>
    </div>
    <div class="blur-filter" :class="{'show': $parentFullScreenFlag}"></div>
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
  filter: sepia(0.4);
  @include var.small {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    filter: sepia(0);
  }
  .left-column {
    width: 14%;
    @include var.small {
      width: 100%;
      box-sizing: border-box;
    }
  }
  .right-column {
    width: 86%;
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
  .blur-filter {
    display: none;
    position: absolute;
    width: 0;
    height: 0;
    background: transparent;
    backdrop-filter: blur(10px);
    z-index: 1;
    transition: all 0.2s linear 0.2s;
    pointer-events: none;
    &.show {
      display: block;
      width: 100vw;
      height: 100vh;
    }
  }
  .fullscreen-contents {
    position: absolute;
    z-index: 2;
    padding: 80px 0 0 20.9%;
    width: calc(100vw - 20.9%);
    @include var.small {
      padding: 48px 0 32px;
      width: 100vw;
      box-sizing: border-box;
    }
    &.nopadding {
      padding: 0 0 0 20.9%;
      @include var.small {
        padding: 48px 0 32px;
      }
    }
    .detail {
      opacity: 0;
      animation: fadeIn 0.2s ease 0.2s 1 forwards;
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
  .close {
    position: absolute;
    top: 16px;
    right: var.psd(32px);
    width: var.psd(40px);
    height: var.psd(40px);
    z-index: 2;
    @include var.small {
      top: 8px;
      right: var.psd(8);
      width: var.psd(32);
      height: var.psd(32);
    }
    &:hover {
      cursor: pointer;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
