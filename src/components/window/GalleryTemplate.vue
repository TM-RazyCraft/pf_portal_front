<script setup lang="ts">
import { ref, computed, onMounted, useTemplateRef } from 'vue'
import Typewriter from 'typewriter-effect/dist/core';
import dayjs from 'dayjs'
const currentTime = ref(dayjs().format('YYYY/MM/DD HH:mm:ss').toString())
const $titleString = ref(['Gallery'])
const $titleRef = useTemplateRef('title')
const $bootstrapRef = useTemplateRef('bootstrap')

onMounted(() => {
  if ($titleRef.value) {
    const titleTypeWriter = new Typewriter($titleRef.value, {
      strings: $titleString.value,
      autoStart: false,
      loop: false,
      delay: 50,
      deleteSpeed: Infinity,
      cursor: ''
    });
    titleTypeWriter
      .pauseFor(1000)
      .typeString($titleString.value.join(''))
      .start();
  }
  if ($bootstrapRef.value) {
    const bootstrapTypeWriter = new Typewriter($bootstrapRef.value, {
      loop: false,
      delay: 200,
      deleteSpeed: Infinity,
      cursor: '',
    })
    logLine(bootstrapTypeWriter, `session login date: ${currentTime.value}`, false)
    logLine(bootstrapTypeWriter, 'bootstrap', true)
    logLine(bootstrapTypeWriter, 'loading gallery page data', true)
    logLine(bootstrapTypeWriter, 'gallery情報の取得に成功しました。', false)
    logLine(bootstrapTypeWriter, 'connection check [OK]', false)
    logLine(bootstrapTypeWriter, 'directory check [OK]', false)
    logLine(bootstrapTypeWriter, 'compiling', true)
    logLine(bootstrapTypeWriter, 'complete', false)
    bootstrapTypeWriter.start()
  }
});
const logLine = (writer: Typewriter, message: string, dot: Boolean = false) => {
  if (dot) {
    writer
      .pauseFor(800)
      .changeDelay(1)
      .typeString(`[Info] $ ${message}`)
      .changeDelay(300)
      .typeString('.')
      .pauseFor(300)
      .typeString('.')
      .pauseFor(300)
      .typeString('.')
      .pauseFor(300)
      .typeString('.')
      .pauseFor(300)
      .typeString('.')
      .pauseFor(300)
      .typeString('.')
      .typeString('<br>')
      .start()
  } else {
    writer
    .pauseFor(800)
    .changeDelay(1)
    .typeString(`[Info] $ ${message}`)
    .typeString('<br>')
    .start()
  }
}
</script>

<template>
  <h1 ref="title"></h1>
  <div class="inner">
    <p>
      <span ref="bootstrap"></span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/_variable.scss' as var;

h1 {
  margin: 0 0 16px 0;
  background: rgba(#FFF, 0.4);
  padding: 4px var.psd(144px) 8px var.psd(32px);
  display: inline-block;
  font-size: var.psd(24px);
  font-weight: 700;
  line-height: 1.2;
  color: #FFF;
  @include var.small {
    font-size: var.psd(24px);
    margin: 0 0 16px 0;
  }
}
p {
  font-size: var.psd(16px);
  font-weight: 400;
  line-height: 1.4;
  color: #FFFFFF;
  word-break: break-all;
  margin: 0;
  padding: 0 var.psd(32px);
  span {
    display: block;
  }
  @include var.small {
    font-size: var.psd(16px);
  }
}
</style>
