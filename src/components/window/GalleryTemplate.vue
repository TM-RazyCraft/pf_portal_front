<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <h1>gallery</h1>
  <ul class="thumbs">
    <li>
      <img src="@/assets/images/gallery/sample_gray.png" alt="image1">
    </li>
    <li>
      <img src="@/assets/images/gallery/sample_gray.png" alt="image1">
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '@/styles/_variable.scss' as var;

h1 {
  font-size: var.psd(40px);
  font-weight: 700;
  line-height: 1.2;
  color: #FFFFFF;
  margin: 0 0 32px 0;
  @include var.small {
    font-size: var.psd(24px);
    margin: 0 0 16px 0;
  }
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
.thumbs {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  li {
    width: var.psd(381px);
    margin-right: 16px;
    list-style: none;
    &:last-child {
      margin-right: 0;
    }
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>
