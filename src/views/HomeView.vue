<script setup lang="ts">
import { ref, computed } from 'vue'
import StartButton from '../components/StartButton.vue'
import BackGround from '../components/BackGround.vue'
import DesktopView from './DesktopView.vue';
const $startUpRef = ref(false)
const $startUpShowRef = ref(true)
const startUp = () => {
  $startUpRef.value = true
  setTimeout(() => {
    $startUpShowRef.value = false
  }, 1000)
}

const reactiveStartUp = computed(() => {
  return $startUpRef.value
})
</script>

<template>
  <main>
    <div class="frame">
      <template v-if="$startUpShowRef">
        <StartButton
          @start-up="startUp"
        />
      </template>
      <template v-else>
        <DesktopView />
      </template>
      <BackGround
        :flag="reactiveStartUp"
      />
    </div>
  </main>
</template>
<style lang="scss" scoped>
@use '@/styles/_variable.scss' as var;

.frame {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
</style>
