<script setup lang="ts">
import type { SignatureData } from '../types'

defineProps<{
  signature: SignatureData
}>()

const templates = [
  { id: 'modern', name: 'Modern Vertical' },
  { id: 'banner', name: 'Header Card' },
  { id: 'minimal', name: 'Clean Minimal' }
]

const colorOptions = ['#4f46e5', '#2563eb', '#059669', '#d97706', '#dc2626', '#7c3aed']
const fontOptions = ['Arial, sans-serif', 'Georgia, serif', 'Trebuchet MS, sans-serif', 'Courier New, monospace']
</script>

<template>
  <div class="space-y-6">
    <!-- Template Picker -->
    <div class="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-3">
      <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400">1. Select Layout</h3>
      <div class="grid grid-cols-3 gap-2">
        <button
          v-for="t in templates"
          :key="t.id"
          @click="signature.layoutTemplate = t.id"
          class="p-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer"
          :class="signature.layoutTemplate === t.id ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400' : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'"
        >
          {{ t.name }}
        </button>
      </div>
    </div>

    <!-- Personal Info -->
    <div class="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
      <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400">2. Personal Information</h3>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Full Name</label>
          <input v-model="signature.fullName" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 text-white" />
        </div>
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Job Title</label>
          <input v-model="signature.jobTitle" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 text-white" />
        </div>
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Company</label>
          <input v-model="signature.company" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 text-white" />
        </div>
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Avatar Image URL</label>
          <input v-model="signature.avatarUrl" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 text-white" />
        </div>
      </div>
    </div>

    <!-- Contact & Socials -->
    <div class="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
      <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400">3. Contact & Socials</h3>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Email</label>
          <input v-model="signature.email" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 text-white" />
        </div>
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Phone</label>
          <input v-model="signature.phone" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 text-white" />
        </div>
        <div class="col-span-2">
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Website URL</label>
          <input v-model="signature.website" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 text-white" />
        </div>
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">LinkedIn URL</label>
          <input v-model="signature.socialLinks.linkedin" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 text-white" />
        </div>
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">GitHub URL</label>
          <input v-model="signature.socialLinks.github" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 text-white" />
        </div>
      </div>
    </div>

    <!-- Style Options -->
    <div class="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
      <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400">4. Styling</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-2">Accent Color</label>
          <div class="flex items-center gap-2">
            <button
              v-for="c in colorOptions"
              :key="c"
              @click="signature.themeColor = c"
              class="w-7 h-7 rounded-full transition-transform cursor-pointer border-2"
              :class="signature.themeColor === c ? 'scale-110 border-white' : 'border-transparent hover:scale-105'"
              :style="{ backgroundColor: c }"
            />
          </div>
        </div>
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Font Family</label>
          <select v-model="signature.fontFamily" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 text-white">
            <option v-for="f in fontOptions" :key="f" :value="f">{{ f }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
