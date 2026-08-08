<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['copy'])
const copied = ref(false)

function handleCopy() {
  emit('copy')
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2500)
}
</script>

<template>
  <header class="h-16 px-6 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between sticky top-0 z-50">
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-indigo-500/20">
        S
      </div>
      <div>
        <h1 class="font-extrabold text-base tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Scriza
        </h1>
        <p class="text-[11px] text-slate-400 font-medium">EmailTemplateTool</p>
      </div>
    </div>

    <div class="flex items-center gap-3">
      <button
        @click="handleCopy"
        class="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-xs transition-all duration-200 shadow-md shadow-indigo-500/25 active:scale-95 flex items-center gap-2 cursor-pointer"
      >
        <span v-if="!copied">📋 Copy Signature</span>
        <span v-else>✨ Signature Copied!</span>
      </button>
    </div>
  </header>
</template>
