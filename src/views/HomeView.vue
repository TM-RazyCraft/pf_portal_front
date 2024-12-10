<script setup lang="ts">
import { ref, computed } from 'vue'
import StartButton from '../components/StartButton.vue'
import BackGround from '../components/BackGround.vue'

const $startUpRef = ref(false)
const startUp = () => {
  $startUpRef.value = true
}

const reactiveStartUp = computed(() => {
  return $startUpRef.value
})
</script>

<template>
  <main>
    <div class="frame">
      <StartButton
        @start-up="startUp"
      />
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
