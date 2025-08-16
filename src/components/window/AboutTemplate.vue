<script setup lang="ts">
import { ref, computed, onMounted, useTemplateRef } from 'vue'
import Typewriter from 'typewriter-effect/dist/core';
import dayjs from 'dayjs'
const currentTime = ref(dayjs().format('YYYY/MM/DD HH:mm:ss').toString())
const $titleString = ref(['About'])
const $titleRef = useTemplateRef('title')
const $bootstrapRef = useTemplateRef('bootstrap')

const $frameworkString = ref(['React', 'Vue', 'Angular', 'NextJS', 'NuxtJS(技術検証)', 'AngularJS'])
const frameworkRef = useTemplateRef('framework')
const $bundleToolsString = ref(['Vite', 'Webpack', 'Parcel', 'Gulp', 'Grunt'])
const bundleToolsRef = useTemplateRef('bundletools')
const $uiFrameworkString = ref(['Ionic Framework', 'Shadcn/UI', 'Chakra UI', 'Angular Material', 'Bootstrap', 'OnsenUI'])
const uiFrameworkRef = useTemplateRef('uiFramework')
const $hybridAppString = ref(['Cordova', 'Capacitor', 'React Native(技術検証)'])
const hybridAppRef = useTemplateRef('hybridApp')
const $repositoryString = ref(['GitHub', 'GitLab', 'Bitbucket'])
const repositoryRef = useTemplateRef('repository')

onMounted(() => {
  if ($titleRef.value) {
    const titleTypeWriter = new Typewriter($titleRef.value, {
      strings: $titleString.value,
      autoStart: false,
      loop: false,
      delay: 50,
      deleteSpeed: Infinity,
      cursor: ''
    })
    titleTypeWriter
      .pauseFor(1000)
      .typeString($titleString.value.join(''))
      .start()
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
    logLine(bootstrapTypeWriter, 'loading about page data', true)
    logLine(bootstrapTypeWriter, 'about情報の取得に成功しました。', false)
    logLine(bootstrapTypeWriter, 'connection check [OK]', false)
    logLine(bootstrapTypeWriter, 'directory check [OK]', false)
    logLine(bootstrapTypeWriter, 'compiling', true)
    logLine(bootstrapTypeWriter, 'complete', false)
    bootstrapTypeWriter.start()
  }
  if (frameworkRef.value) {
    const frameworkTypeWriter = new Typewriter(frameworkRef.value, {
      strings: $frameworkString.value,
      autoStart: false,
      loop: false,
      delay: 40,
      deleteSpeed: Infinity,
    })
    frameworkTypeWriter
      .pauseFor(1000)
      .typeString($frameworkString.value.join(', '))
      .start()
  }
  if (bundleToolsRef.value) {
    const bundleToolsTypeWriter = new Typewriter(bundleToolsRef.value, {
      strings: $bundleToolsString.value,
      autoStart: false,
      loop: false,
      delay: 40,
      deleteSpeed: Infinity,
    })
    bundleToolsTypeWriter
      .pauseFor(1000)
      .typeString($bundleToolsString.value.join(', '))
      .start()
  }
  if (uiFrameworkRef.value) {
    const uiFrameworkTypeWriter = new Typewriter(uiFrameworkRef.value, {
      strings: $uiFrameworkString.value,
      autoStart: false,
      loop: false,
      delay: 40,
      deleteSpeed: Infinity,
    })
    uiFrameworkTypeWriter
      .pauseFor(1000)
      .typeString($uiFrameworkString.value.join(', '))
      .start()
  }
  if (hybridAppRef.value) {
    const hybridAppTypeWriter = new Typewriter(hybridAppRef.value, {
      strings: $hybridAppString.value,
      autoStart: false,
      loop: false,
      delay: 40,
      deleteSpeed: Infinity,
    })
    hybridAppTypeWriter
      .pauseFor(1000)
      .typeString($hybridAppString.value.join(', '))
      .start()
  }
  if (repositoryRef.value) {
    const repositoryTypeWriter = new Typewriter(repositoryRef.value, {
      strings: $repositoryString.value,
      autoStart: false,
      loop: false,
      delay: 40,
      deleteSpeed: Infinity,
    })
    repositoryTypeWriter
      .pauseFor(1000)
      .typeString($repositoryString.value.join(', '))
      .start()
  }
})
const logLine = (writer: Typewriter, message: string, dot: Boolean = false) => {
  if (dot) {
    writer
      .pauseFor(1000)
      .changeDelay(1)
      .typeString(`[Info] $ ${message}`)
      .changeDelay(200)
      .typeString('.')
      .pauseFor(200)
      .typeString('.')
      .pauseFor(200)
      .typeString('.')
      .pauseFor(200)
      .typeString('.')
      .typeString('<br>')
      .start()
  } else {
    writer
    .pauseFor(1000)
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
    <!-- <p>
      <span ></span>
      >経験フレームワーク
      <span ref="framework"></span>
      <br>
      >バンドルツール・タスクランナー
      <span ref="bundletools"></span>
      <br>
      >UIフレームワーク
      <span ref="uiFramework"></span>
      <br>
      >ハイブリッドアプリ
      <span ref="hybridApp"></span>
      <br>
      >Gitリポジトリホスティングサービス
      <span ref="repository"></span>
    </p> -->
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
.inner {
  width: 100%;
  height: calc(100% - 55px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
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
