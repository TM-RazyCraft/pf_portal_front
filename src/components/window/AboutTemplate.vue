<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <h1>about</h1>
  <p>
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
  </p>
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
</style>
