<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="inner">
    <h1>about</h1>
    <p>
      texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
      <br>
      texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
      <br>
      texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
    </p>
    <div class="white-glass-board">
      <ul class="thumbs">
        <li>
          <img src="@/assets/images/about/sample_gray.png" alt="thumb1">
        </li>
        <li>
          <img src="@/assets/images/about/sample_gray.png" alt="thumb1">
        </li>
      </ul>
    </div>
    <hr />
    <p>
      texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
      <br>
      texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext<br>
      <br>
      texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/_variable.scss' as var;

.inner {
  height: calc(100vh - 80px);
  overflow: scroll;
  padding: 0 0 64px;
  &::-webkit-scrollbar {
    display: none;
  }
  > * {
    &:last-child {
      padding-bottom: 64px;
    }
  }
  @include var.small {
    padding: 0 var.psd(16) 64px;
  }
}
h1 {
  font-size: var.psd(40px);
  font-weight: 700;
  line-height: 1.2;
  color: #FFFFFF;
  margin: 0 0 32px 0;
  z-index: 1;
  @include var.small {
    font-size: var.psd(24);
    margin: 0 0 16px 0;
  }
}
p {
  font-size: var.psd(24px);
  font-weight: 400;
  line-height: 1.2;
  color: #FFFFFF;
  word-break: break-all;
  margin: 0 0 24px 0;
  @include var.small {
    font-size: var.psd(24);
  }
}
.white-glass-board {
  box-shadow: 0 2px 15px 0 rgba(#FFFFFF, 10%);
  background: linear-gradient(135deg, rgba(#FFFFFF, 20%) 0%, rgba(#FFFFFF, 10%) 100%) border-box border-box;
  border-radius: 20px;
  padding: 24px var.psd(24px);
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  position: relative;
  left: 2px;
  max-width: calc(100% - 2px);
  display: inline-block;
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
  @include var.small {
    padding: 16px;
    margin: 16px 0;
  }
  .thumbs {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding: 0;
    @include var.small {
      flex-direction: column;
    }
    li {
      list-style: none;
      width: var.psd(401px);
      margin-left: var.psd(32px);
      &:first-of-type {
        margin-left: 0;
        @include var.small {
          margin-top: 0;
        }
      }
      @include var.small {
        width: 100%;
        margin-left: 0;
        margin-top: 16px;
      }
      img {
        width: 100%;
        display: blok;
      }
    }
  }
}
hr {
  width: 100%;
  margin: 48px 0;
  @include var.small {
    margin: 24px 0;
  }
}
</style>
