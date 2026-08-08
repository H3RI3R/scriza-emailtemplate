<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  activeTab: string
}>()

const emit = defineEmits(['update:activeTab'])

const navItems = [
  { id: 'templates', label: 'Layouts', icon: '🎨' },
  { id: 'personal', label: 'Personal', icon: '👤' },
  { id: 'socials', label: 'Contact & Socials', icon: '🌐' },
  { id: 'styling', label: 'Styling', icon: '✨' },
  { id: 'addons', label: 'Add-ons', icon: '🧩' },
]
</script>

<template>
  <aside class="w-64 bg-slate-900/90 backdrop-blur-xl border-r border-slate-800 flex flex-col h-full select-none">
    <div class="p-5 border-b border-slate-800/80 flex items-center gap-3">
      <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/25">
        S
      </div>
      <div>
        <h2 class="font-extrabold text-sm tracking-tight text-white">Scriza Signature</h2>
        <span class="text-[10px] font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
          PRO EDITOR
        </span>
      </div>
    </div>

    <nav class="p-3 space-y-1.5 flex-1 overflow-y-auto">
      <button
        v-for="item in navItems"
        :key="item.id"
        @click="emit('update:activeTab', item.id)"
        class="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer group text-left"
        :class="activeTab === item.id 
          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 scale-[1.02]' 
          : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'"
      >
        <span class="text-base group-hover:scale-110 transition-transform duration-200">{{ item.icon }}</span>
        <span class="tracking-tight">{{ item.label }}</span>
      </button>
    </nav>

    <div class="p-4 border-t border-slate-800/80 text-[11px] text-slate-500 text-center">
      © 2026 Scriza • Ritzzz22
    </div>
  </aside>
</template>
