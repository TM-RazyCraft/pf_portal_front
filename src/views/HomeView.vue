<script setup lang="ts">
import { ref, computed } from 'vue'
import StartButton from '../components/StartButton.vue'
import BackGround from '../components/BackGround.vue'

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
      <BackGround
        :flag="reactiveStartUp"
      />
    </div>
  </main>
</template>
<style scoped>
.frame {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
</style>
