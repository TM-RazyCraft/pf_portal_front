<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue'
import Typewriter from 'typewriter-effect/dist/core'
const $titleString = ref(['About'])
const $titleRef = useTemplateRef('title')

onMounted(() => {
  if ($titleRef.value) {
    const titleTypeWriter = new Typewriter($titleRef.value, {
      strings: $titleString.value,
      autoStart: false,
      loop: false,
      delay: 40,
      deleteSpeed: Infinity,
      cursor: ''
    })
    titleTypeWriter
      .pauseFor(500)
      .typeString($titleString.value.join(''))
      .callFunction((event) => {
        console.log(event);
        event.elements.container.classList.add('complete')
      })
      .start()
  }
})
</script>

<template>
  <div class="inner">
    <div class="title">
      <h1 ref="title"></h1>
      <div class="band"></div>
    </div>
    <div class="detail">
      <p>
        福岡市在住のフロント・ハイブリッドアプリエンジニア<br>
        20代の頃グラフィックデザイナーの方に出会いクリエティブの仕事に興味を持ったのち、Googleのサービスに触れてそれまでの常識を覆したWebの技術にショックを受けフロントエンドエンジニアを志しました。<br>
        その後、フロントエンドエンジニアとして活躍しながら現在はハイブリッドアプリの開発も行い開発から公開までフルスタックで活動しています。
      </p>
      <hr />
      <h2>Web開発</h2>
      <p>
        フレームワークはReact, Vue, Angular, NextJS, AngularJS等全て対応可能です。<br>
        UIフレームワークは案件に応じて、選定しています。
      </p>
      <div class="image-block">
        <div class="white-glass-board">
          <ul class="thumbs">
            <li>
              <div class="icon">
                <img src="@/assets/images/about/react.webp" alt="React">
              </div>
              <span>React</span>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/images/about/vue.webp" alt="Vue">
              </div>
              <span>Vue</span>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/images/about/angular.webp" alt="Angular">
              </div>
              <span>Angular</span>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/images/about/angularjs.webp" alt="AngularJS">
              </div>
              <span>AngularJS</span>
            </li>
          </ul>
        </div>
        <div class="white-glass-board">
          <ul class="thumbs">
            <li>
              <div class="icon">
                <img src="@/assets/images/about/ionic.webp" alt="Ionic Framework">
              </div>
              <span>Ionic Framework</span>
            </li>
            <li>
              <div class="icon">
                <div class="noimage">no<br>image</div>
              </div>
              <span>shadcn/ui</span>
            </li>
            <li>
              <div class="icon">
                <div class="noimage">no<br>image</div>
              </div>
              <span>Chakra UI</span>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/images/about/angularmaterial.webp" alt="Angular Material">
              </div>
              <span>Angular Material</span>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/images/about/bootstrap.webp" alt="Bootstrap">
              </div>
              <span>Bootstrap</span>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/images/about/onsenui.webp" alt="Onsen UI">
              </div>
              <span>Onsen UI</span>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <h2>ハイブリッドアプリ開発</h2>
      <p>
        主にCordova, Capacitorにて開発<br>
        現在はExpoに興味がありReact Nativeへの切り替えを検討中です。<br>
      </p>
      <div class="image-block">

        <div class="white-glass-board">
          <ul class="thumbs">
            <li>
              <div class="icon">
                <img src="@/assets/images/about/cordova.webp" alt="Cordova">
              </div>
              <span>Cordova</span>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/images/about/capacitor.webp" alt="Capacitor">
              </div>
              <span>Capacitor</span>
            </li>
          </ul>
        </div>
        <div class="white-glass-board">
          <ul class="thumbs">
            <li>
              <div class="icon">
                <img src="@/assets/images/about/ionic.webp" alt="Ionic Framework">
              </div>
              <span>Ionic Framework</span>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/images/about/onsenui.webp" alt="Onsen UI">
              </div>
              <span>Onsen UI</span>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p>
        ここまで閲覧頂きありがとうございます。<br>
        少しでも興味を持って頂けましたら幸いです。<br>
        よろしくお願い致します。
      </p>
    </div>
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
.title {
  margin: 0 0 32px 0;
  position: relative;
  h1 {
    font-size: var.psd(40px);
    font-weight: 700;
    line-height: 1.2;
    color: #FFFFFF;
    position: relative;
    z-index: 2;
    mix-blend-mode: difference;
    &.complete {
      +.band {
        width: 200px;
        transition: width 0.3s ease-in-out 0.1s;
      }
    }
    @include var.small {
      font-size: var.psd(24);
      margin: 0 0 16px 0;
      &.complete {
        +.band {
          width: 80%;
          transition: width 0.3s ease-in-out 0.1s;
        }
      }
    }
  }
  .band {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: auto;
    margin: auto;
    z-index: 1;
    height: 100%;
    width: 0;
    background: #FFF;
    transition: width 0.3s ease-in-out 0.1s;
  }
}
.detail {
  padding-right: var.psd(32px);
  @include var.small {
    padding-right: var.psd(16);
  }
}
h2 {
  font-size: var.psd(24px);
  font-weight: 600;
  line-height: 1.2;
  color: #FFFFFF;
  word-break: break-all;
  margin: 40px 0 24px 0;
  @include var.small {
    font-size: var.psd(24);
    margin: 24px 0 16px 0;
  }
}
p {
  font-size: var.psd(16px);
  font-weight: 400;
  line-height: 1.6;
  color: #FFFFFF;
  word-break: break-all;
  margin: 0 0 24px 0;
  @include var.small {
    font-size: var.psd(24);
    @include var.small {
      font-size: var.psd(16);
    }
  }
}
.image-block {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  @include var.small {
    gap: var.psd(24);
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
  @include var.small {
    padding: 24px var.psd(24);
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
  @include var.small {
    padding: 16px;
    margin: 16px 0;
  }
  .thumbs {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    @include var.small {
      justify-content: space-between;
      align-items: stretch;
      gap: var.psd(16);
      flex-wrap: wrap;
    }
    li {
      list-style: none;
      width: var.psd(80px);
      margin-left: var.psd(32px);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      &:first-of-type {
        margin-left: 0;
      }
      @include var.small {
        width: 100%;
        margin-left: 0;
        width: var.psd(80);
      }
      .icon {
        width: var.psd(80px);
        height: var.psd(80px);
        display: flex;
        justify-content: center;
        align-items: center;
        @include var.small {
          width: var.psd(80);
          height: var.psd(80);
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .noimage {
          width: 100%;
          height: 100%;
          text-align: center;
          background: #DDD;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      span {
        display: block;
        text-align: center;
        font-size: var.psd(14px);
        font-weight: 600;
        color: #FFFFFF;
        padding-top: 8px;
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
