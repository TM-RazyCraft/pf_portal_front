<script setup lang="ts">
import { ref, computed, onMounted, watch, useTemplateRef } from 'vue'
import Typewriter from 'typewriter-effect/dist/core'

const $fadeOutRef = ref(false)
const $string = ref(['START'])
const typewriterElement = useTemplateRef('typewriterElement')
let typewriter: Typewriter | null = null

const fadeOut = () => {
  $fadeOutRef.value = true
}

onMounted(() => {
  if (typewriterElement.value) {
    typewriter = new Typewriter(typewriterElement.value, {
      loop: false,
      delay: 50,
      deleteSpeed: Infinity,
    })
    typewriter.typeString($string.value[0]).start()
  }
})

watch($string, (newVal) => {
  if (typewriter && typewriterElement.value) {
    typewriter.stop()
    typewriterElement.value.textContent = ''
    typewriter = new Typewriter(typewriterElement.value, {
      loop: false,
      delay: 50,
      deleteSpeed: Infinity,
    })
    typewriter.typeString(newVal[0]).start()
  }
})
</script>

<template>
  <div
    class="starts"
    @click.passive="$emit('start-up'); fadeOut()"
    @mouseenter.passive="$string = ['TAP']"
    @mouseleave.passive="$string = ['START']"
    :class="{ fadeOut: $fadeOutRef }"
  >
    <div class="outline"></div>
    <div class="innerline">
      <!-- vue-typewriter-effect の代わりに span を ref で取得 -->
      <span ref="typewriterElement"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/_variable.scss' as var;
.starts {
  width: var.psd(272px);
  height: var.psd(272px);
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;

  @include var.small {
    width: var.psd(216);
    height: var.psd(216);
  }
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
    width: var.psd(240px);
    height: var.psd(240px);
    border: 1px solid #FFF;
    border-radius: 100%;
    box-sizing: content-box;
    animation: wave 1s linear infinite;
    box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.5);
    @keyframes wave {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(1.1);
        opacity: 0;
      }
    }
    @include var.small {
      width: var.psd(184);
      height: var.psd(184);
    }
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
    @include var.small {
      width: var.psd(144);
      height: var.psd(144);
    }
    span {
      display: block;
      font-size: 40px;
      text-align: center;
      line-height: 1;
      font-weight: 700;
      color: #FFF;
      @include var.small {
        font-size: var.psd(32);
      }
    }
  }
  &:hover {
    cursor: pointer;
  }
}

</style>
