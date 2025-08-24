<script setup lang="ts">
import { ref, useTemplateRef, onMounted, watch } from 'vue'
import { useWindowSize  } from '@vueuse/core'

const { width, height } = useWindowSize()
const $selectGallery = ref('')
const $scrollerRef = useTemplateRef('scroller')
const $isSP = ref(false)
const $showDetail = ref(false)
const breakPoint = 827

watch(width, (newVal) => {
  const screenWidth = width.value
  $isSP.value = screenWidth < breakPoint ? true : false
})

const select = (event: any, name: string = '') => {
  console.log(name);
  if ($isSP.value) {
    $selectGallery.value = name
    $showDetail.value = true
  } else {
    $selectGallery.value = name
    if ($scrollerRef.value) {
      $scrollerRef.value.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

onMounted(() => {
  const screenWidth = width.value
  $isSP.value = screenWidth < breakPoint ? true : false
  $selectGallery.value = $isSP.value ? '' : 'gallery1'
})

</script>

<template>
  <div class="inner">
    <div class="wrapper">
      <div class="left-column">
        <div class="scroller">
          <h1>gallery</h1>
          <div class="item-image" @click="select($event, 'gallery1')" :class="$selectGallery === 'gallery1' ? 'select' : ''">
            <img src="@/assets/images/gallery/sample_gray.png" alt="image1">
          </div>
          <div class="item-image" @click="select($event, 'gallery2')" :class="$selectGallery === 'gallery2' ? 'select' : ''">
            <img src="@/assets/images/gallery/sample_gray.png" alt="image1">
          </div>
        </div>
      </div>
      <div class="right-column">
        <div class="scroller" ref="scroller">
          <template v-if="$selectGallery === 'gallery1'">
            <div class="image">
              <img src="@/assets/images/gallery/sample_gray.png" alt="image1">
            </div>
            <h2 class="title">作品名1</h2>
            <p>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              texttexttexttext<br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              <br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              <br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              texttexttexttext<br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              <br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              <br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
            </p>
          </template>
          <template v-else-if="$selectGallery === 'gallery2'">
            <div class="image">
              <img src="@/assets/images/gallery/sample_gray.png" alt="image1">
            </div>
            <h2 class="title">作品名2</h2>
            <p>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              texttexttexttext<br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              <br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              <br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              texttexttexttext<br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              <br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              <br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
              <br>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
            </p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/_variable.scss' as var;

.inner {
  height: calc(100vh - 80px);
  overflow: hidden;
  padding-bottom: 64px;
  @include var.small {
    padding: 0 0 64px;
  }
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @include var.small {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .left-column {
    width: 35.6%;
    min-width: 35.6%;
    max-width: 35.6%;
    padding: 0 var.psd(98px) 0 0;
    overflow: hidden;
    @include var.small {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      padding-right: 0;
      padding: 0 var.psd(16);
      box-sizing: border-box;
    }
    .scroller {
      height: 100vh;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      @include var.small {
        height: calc(100vh - 80px);
      }
    }
    h1 {
      padding-top: 80px;
      font-size: var.psd(40px);
      font-weight: 700;
      line-height: 1.2;
      color: #FFFFFF;
      margin: 0 0 32px 0;
      height: 48px;
      position: sticky;
      top: 0;
      pointer-events: none;
      @include var.small {
        padding-top: 0;
        font-size: var.psd(24);
        margin: 0 0 16px 0;
        height: auto;
      }
    }
    .item-image {
      margin-bottom: 96px;
      width: 100%;
      transition: all 0.2s linear 0.2s;
      opacity: 1;
      &.select {
        opacity: 0;
        transition: all 0.2s linear 0.2s;
      }
      &:hover {
        cursor: pointer;
      }
      @include var.small {
        margin-bottom: 16px;
      }
      img {
        display: block;
        width: 100%;
      }
      &:last-child {
        margin-bottom: 0;
        padding-bottom: 64px;
      }
    }
  }
  .right-column {
    padding: 0 var.psd(24px);
    background: linear-gradient(135deg, rgba(#323858, 30%) 0%, rgba(#A6423F, 20%) 100%);
    backdrop-filter: blur(10px);
    border-left: 1px solid;
    border-image: linear-gradient(135deg, rgba(#323858, 50%) 0%, rgba(#A6423F, 10%) 100%) 1;
    @include var.small {
      position: absolute;
      top: 0;
      width: 100%;
      padding: 0;
      border-left: none;
      height: 100vh;
    }
    .scroller {
      height: 100vh;
      overflow: scroll;
      padding-right: 16px;
      > * {
        &:last-child {
          padding-bottom: 64px;
        }
      }
      &::-webkit-scrollbar {
        display: none;
      }
      @include var.small {
        padding: 0 var.psd(16);
      }
    }
    .image {
      display: none;
      @include var.small {
        display: block;
        margin: 90px 0 16px;
        img {
          display: block;
          width: 100%;
        }
      }
    }
    h2 {
      font-size: var.psd(40px);
      color: #FFF;
      line-height: 1.6;
      margin: 0 0 56px;
      font-weight: bold;
      padding-top: calc(80px + 48px + 32px - 16px);
      @include var.small {
        font-size: var.psd(24);
        margin: 0 0 16px;
        padding-top: 0;
      }
    }
    p {
      font-size: var.psd(24px);
      font-weight: 400;
      line-height: 1.2;
      color: #FFFFFF;
      word-break: break-all;
      @include var.small {
        font-size: var.psd(16);
      }
    }
  }
}
</style>
