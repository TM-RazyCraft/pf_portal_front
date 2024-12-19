<script setup lang="ts">
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'

const nowHour = ref(dayjs().format('HH'))
const nowMinute = ref(dayjs().format('mm'))
const date = ref(dayjs().format('YYYY/MM/DD'))

const updateTime = () => {
  setInterval(() => {
    nowHour.value = dayjs().format('HH')
    nowMinute.value = dayjs().format('mm')
  }, 1000 - new Date().getUTCMilliseconds())
}
onMounted(() => {
  updateTime()
})
</script>

<template>
  <div class="clock">
    <div class="date">{{ date }}</div>
    <div class="time">
      <div class="hour">{{ nowHour }}</div>
      <span>:</span>
      <div class="minute">{{ nowMinute }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/_variable.scss' as var;
.clock {
  margin-top: 80px;
  transform: translateY(20px);
  animation: slideFadeIn 0.3s ease 0.5s 1 forwards;
  opacity: 0;
  @keyframes slideFadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }

  }
  @include var.small {
    margin-top: 24px;
    padding-bottom: 18px;
  }
  div {
    color: #FFF;
    font-weight: bold;
    text-align: center;
    line-height: 1;
  }
  .date {
    font-size: var.psd(40px);
    @include var.small {
      font-size: var.psd(16);
    }
  }
  .time {
    font-size: var.psd(90px);
    display: flex;
    justify-content: center;
    align-items: center;
    @include var.small {
      font-size: var.psd(42);
    }
    span {
      display: block;
      font-size: var.psd(90px);
      margin: 0 2px;
      @include var.small {
        font-size: var.psd(42);
      }
    }
  }
}
</style>
