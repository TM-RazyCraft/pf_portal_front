<script setup lang="ts">
import { ref, useTemplateRef, inject } from 'vue'
const smoothScroll = inject('smoothScroll')
const $selectGallery = ref('gallery1')
const $scrollerRef = useTemplateRef('scroller')
const $leftColumn = useTemplateRef('leftColumn')
const $thumbScroller = useTemplateRef('thumbScroller')
const $anchorRef = useTemplateRef('anchor')
const select = (event, name) => {
  console.log(event);
  $selectGallery.value = name
  $scrollerRef.value.scrollTo({ top: 0, behavior: 'smooth' })
  console.log($anchorRef.value);

  smoothScroll({
    scrollTo: $leftColumn.value,
    container: $thumbScroller.value,
  })
}


</script>

<template>
  <div class="inner">
    <div class="wrapper">
      <div class="left-column" ref="leftColumn">
        <div class="scroller" ref="thumbScroller">
          <h1 ref="anchor">gallery</h1>
          <div class="item-image" @click="select($event, 'gallery1')">
            <img src="@/assets/images/gallery/sample_gray.png" alt="image1">
          </div>
          <div class="item-image" @click="select($event, 'gallery2')">
            <img src="@/assets/images/gallery/sample_gray.png" alt="image1">
          </div>
        </div>
      </div>
      <div class="right-column">
        <div class="scroller" ref="scroller">
          <template v-if="$selectGallery === 'gallery1'">
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
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .left-column {
    width: 35.6%;
    min-width: 35.6%;
    max-width: 35.6%;
    padding-right: var.psd(98px);
    overflow: hidden;
    .scroller {
      height: 100vh;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
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
        font-size: var.psd(24px);
        margin: 0 0 16px 0;
      }
    }
    .item-image {
      margin-bottom: 96px;
      width: 100%;
      &:hover {
        cursor: pointer;
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
    }
    h2 {
      font-size: var.psd(40px);
      color: #FFF;
      line-height: 1.6;
      margin: 0 0 56px;
      font-weight: bold;
      padding-top: calc(80px + 48px + 32px - 16px);
    }
    p {
      font-size: var.psd(24px);
      font-weight: 400;
      line-height: 1.2;
      color: #FFFFFF;
      word-break: break-all;
      @include var.small {
        font-size: var.psd(16px);
      }
    }
  }
}
</style>
