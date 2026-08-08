<script setup lang="ts">
import { ref, reactive } from 'vue'
import SidebarNav from './components/SidebarNav.vue'
import TabPanels from './components/TabPanels.vue'
import SignaturePreview from './components/SignaturePreview.vue'
import type { SignatureData } from './types'

const activeTab = ref('templates')
const copied = ref(false)

const signature = reactive<SignatureData>({
  fullName: 'Ritik Soni',
  jobTitle: 'Software Engineer',
  company: 'Scriza',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  showAvatar: true,
  avatarShape: 'round',
  avatarSize: 80,
  email: 'ritik@scriza.in',
  phone: '+91 98765 43210',
  website: 'https://scriza.in',
  socialLinks: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/H3RI3R'
  },
  themeColor: '#4f46e5',
  fontFamily: 'Arial, sans-serif',
  fontSize: 13,
  layoutTemplate: 'modern',
  showDisclaimer: true,
  disclaimerText: 'Confidentiality Notice: This message and any attachments are intended solely for the addressee.',
  showBanner: false,
  bannerImageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=80',
  bannerLinkUrl: 'https://scriza.in',
  showLogo: true,
  logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
  showMeet: false,
  meetText: 'Schedule Video Call',
  meetUrl: 'https://meet.google.com'
})

async function copySignature() {
  const el = document.getElementById('signature-container')
  if (!el) return

  const html = el.innerHTML
  const plainText = el.innerText

  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        'text/html': new Blob([html], { type: 'text/html' }),
        'text/plain': new Blob([plainText], { type: 'text/plain' })
      })
    ])
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (e) {
    console.error('Copy failed', e)
  }
}
</script>

<template>
  <div class="h-screen bg-slate-950 text-slate-100 flex overflow-hidden font-sans">
    <!-- Left Navigation Sidebar -->
    <SidebarNav v-model:activeTab="activeTab" />

    <!-- Center Tab Options Panel -->
    <main class="w-[420px] bg-slate-950 p-6 border-r border-slate-800 flex flex-col h-full overflow-hidden">
      <TabPanels :activeTab="activeTab" :signature="signature" />
    </main>

    <!-- Right Live Preview Workspace -->
    <section class="flex-1 bg-slate-900/40 p-8 flex flex-col justify-start h-full overflow-y-auto">
      <div class="max-w-2xl w-full mx-auto space-y-4">
        <!-- Top Toolbar -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Live Signature Preview</span>
            <span class="text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
              ● HTML Ready
            </span>
          </div>

          <button
            @click="copySignature"
            class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-xs transition-all duration-200 shadow-lg shadow-indigo-500/25 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span v-if="!copied">📋 Copy Signature</span>
            <span v-else>✨ Copied to Clipboard!</span>
          </button>
        </div>

        <!-- Live Preview Card Container -->
        <SignaturePreview :signature="signature" />
      </div>
    </section>
  </div>
</template>
