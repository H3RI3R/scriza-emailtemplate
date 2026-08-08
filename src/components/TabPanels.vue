<script setup lang="ts">
import type { SignatureData } from '../types'
import { SOCIAL_PLATFORMS } from '../types'

const props = defineProps<{
  activeTab: string
  signature: SignatureData
}>()

const fontList = [
  'Arial, sans-serif',
  'Helvetica, sans-serif',
  'Georgia, serif',
  'Times New Roman, serif',
  'Trebuchet MS, sans-serif',
  'Verdana, sans-serif',
  'Courier New, monospace',
  'Tahoma, sans-serif'
]

const colorSwatches = [
  '#4f46e5', '#2563eb', '#0284c7', '#059669', '#16a34a',
  '#d97706', '#dc2626', '#e11d48', '#9333ea', '#475569'
]

const templates = [
  { id: 'split', name: 'Side-by-Side Split', desc: 'Left image column with right aligned contact card' },
  { id: 'image-right', name: 'Right Portrait Card', desc: 'Clean contact details with right portrait picture' },
  { id: 'image-top', name: 'Top Featured Image Card', desc: 'Large banner photo header with contact card below' },
  { id: 'image-double', name: 'Double Image & Logo Split', desc: 'Left avatar photo + right company logo card' },
  { id: 'image-float', name: 'Floating Portrait Badge', desc: 'Overlapping avatar photo with accent card background' },
  { id: 'image-circle-top', name: 'Circle Photo Hero Header', desc: 'Centered profile picture with clean details grid below' },
  { id: 'modern', name: 'Modern Left Accent', desc: 'Vertical accent color bar with structured fields' },
  { id: 'banner', name: 'Header Card', desc: 'Bold header background card with clean details below' },
  { id: 'minimal', name: 'Clean Minimal', desc: 'Minimalist lightweight layout' },
  { id: 'badge', name: 'Executive Badge', desc: 'Pill header badge layout with icon grid' }
]

function toggleSocial(id: string) {
  if (id in props.signature.socialLinks) {
    delete props.signature.socialLinks[id]
  } else {
    props.signature.socialLinks[id] = 'https://'
  }
}

// Define which add-ons each template supports
const templateAddons: Record<string, string[]> = {
  'modern':           ['disclaimer', 'banner', 'logo', 'meet'],
  'banner':           ['disclaimer', 'banner', 'logo'],
  'minimal':          ['disclaimer'],
  'split':            ['disclaimer', 'banner', 'meet'],
  'image-right':      ['disclaimer', 'banner', 'meet'],
  'image-top':        ['disclaimer', 'banner'],
  'image-double':     ['disclaimer', 'logo'],
  'image-float':      ['disclaimer'],
  'image-circle-top': ['disclaimer', 'banner', 'meet'],
  'badge':            ['disclaimer', 'banner', 'logo', 'meet'],
}

function supportsAddon(addon: string): boolean {
  const layout = props.signature.layoutTemplate
  return (templateAddons[layout] ?? ['disclaimer']).includes(addon)
}
</script>

<template>
  <div class="h-full overflow-y-auto pr-2 space-y-6">
    <!-- TAB 1: TEMPLATES / LAYOUT -->
    <div v-if="activeTab === 'templates'" class="space-y-4">
      <div>
        <h3 class="text-sm font-bold text-white tracking-tight">1. Layout Templates</h3>
        <p class="text-xs text-slate-400">Choose a template style for your email signature</p>
      </div>

      <div class="space-y-3">
        <div
          v-for="t in templates"
          :key="t.id"
          @click="signature.layoutTemplate = t.id"
          class="p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer space-y-2.5"
          :class="signature.layoutTemplate === t.id 
            ? 'border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/10' 
            : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'"
        >
          <div class="flex items-start justify-between">
            <div>
              <h4 class="text-xs font-bold text-white">{{ t.name }}</h4>
              <p class="text-[11px] text-slate-400 mt-0.5">{{ t.desc }}</p>
            </div>
            <div class="w-4 h-4 rounded-full border-2 flex items-center justify-center" :class="signature.layoutTemplate === t.id ? 'border-indigo-500' : 'border-slate-600'">
              <div v-if="signature.layoutTemplate === t.id" class="w-2 h-2 rounded-full bg-indigo-500" />
            </div>
          </div>

          <!-- Template Mini Preview Box -->
          <div class="p-2.5 bg-white rounded-xl border border-slate-200/80 shadow-xs text-slate-800 text-[10px]">
            <!-- Modern Accent Mini Preview -->
            <div v-if="t.id === 'modern'" class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-indigo-500 shrink-0" />
              <div class="space-y-1 flex-1 pl-1 border-l-2 border-indigo-500">
                <div class="w-16 h-1.5 bg-slate-800 rounded-xs font-bold" />
                <div class="w-24 h-1 bg-slate-400 rounded-xs" />
                <div class="w-20 h-1 bg-slate-300 rounded-xs" />
              </div>
            </div>

            <!-- Banner Header Mini Preview -->
            <div v-else-if="t.id === 'banner'" class="space-y-1.5">
              <div class="p-1.5 bg-indigo-600 text-white rounded-xs">
                <div class="w-16 h-1.5 bg-white rounded-xs" />
                <div class="w-20 h-1 bg-indigo-200 rounded-xs mt-1" />
              </div>
              <div class="space-y-1 pt-1">
                <div class="w-24 h-1 bg-slate-400 rounded-xs" />
                <div class="w-20 h-1 bg-slate-300 rounded-xs" />
              </div>
            </div>

            <!-- Minimal Mini Preview -->
            <div v-else-if="t.id === 'minimal'" class="space-y-1">
              <div class="w-16 h-1.5 bg-slate-900 rounded-xs" />
              <div class="w-24 h-1 bg-slate-400 rounded-xs" />
              <div class="w-28 h-1 bg-slate-300 rounded-xs" />
            </div>

            <!-- Side-by-Side Split Mini Preview -->
            <div v-else-if="t.id === 'split'" class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-md bg-indigo-600 shrink-0" />
              <div class="space-y-1 flex-1">
                <div class="w-16 h-1.5 bg-slate-900 rounded-xs" />
                <div class="w-20 h-1 bg-indigo-500 rounded-xs" />
                <div class="w-24 h-1 bg-slate-300 rounded-xs" />
              </div>
            </div>

            <!-- Top Featured Image Mini Preview -->
            <div v-else-if="t.id === 'image-top'" class="space-y-1.5">
              <div class="h-6 w-full bg-indigo-500 rounded-xs" />
              <div class="space-y-1">
                <div class="w-20 h-1.5 bg-slate-900 rounded-xs" />
                <div class="w-28 h-1 bg-slate-400 rounded-xs" />
              </div>
            </div>

            <!-- Right Portrait Mini Preview -->
            <div v-else-if="t.id === 'image-right'" class="flex items-center justify-between gap-2">
              <div class="space-y-1 flex-1">
                <div class="w-20 h-1.5 bg-indigo-600 rounded-xs" />
                <div class="w-24 h-1 bg-slate-400 rounded-xs" />
              </div>
              <div class="w-7 h-7 rounded-full bg-indigo-500 shrink-0" />
            </div>

            <!-- Double Image & Logo Split Mini Preview -->
            <div v-else-if="t.id === 'image-double'" class="flex items-center justify-between gap-2">
              <div class="w-6 h-6 rounded-full bg-indigo-500 shrink-0" />
              <div class="space-y-1 flex-1">
                <div class="w-16 h-1 bg-slate-900 rounded-xs" />
                <div class="w-20 h-1 bg-indigo-400 rounded-xs" />
              </div>
              <div class="w-6 h-6 rounded-md bg-purple-600 shrink-0" />
            </div>

            <!-- Floating Portrait Badge Mini Preview -->
            <div v-else-if="t.id === 'image-float'" class="relative pt-2">
              <div class="w-6 h-6 rounded-full bg-indigo-500 absolute -top-1 left-2 border-2 border-white shadow-xs" />
              <div class="p-2 bg-indigo-50 rounded-xs pt-4 space-y-1">
                <div class="w-20 h-1 bg-slate-800 rounded-xs" />
                <div class="w-24 h-1 bg-slate-400 rounded-xs" />
              </div>
            </div>

            <!-- Circle Photo Hero Header Mini Preview -->
            <div v-else-if="t.id === 'image-circle-top'" class="space-y-1.5 text-center">
              <div class="w-7 h-7 rounded-full bg-indigo-600 mx-auto" />
              <div class="w-20 h-1 bg-slate-900 mx-auto rounded-xs" />
              <div class="w-28 h-1 bg-slate-400 mx-auto rounded-xs" />
            </div>

            <!-- Executive Badge Mini Preview -->
            <div v-else class="space-y-1.5 text-center">
              <div class="w-14 h-3 bg-indigo-500 mx-auto rounded-full" />
              <div class="w-20 h-1 bg-slate-700 mx-auto rounded-xs" />
              <div class="w-24 h-1 bg-slate-400 mx-auto rounded-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2: PERSONAL INFO -->
    <div v-if="activeTab === 'personal'" class="space-y-4">
      <div>
        <h3 class="text-sm font-bold text-white tracking-tight">2. Personal Information</h3>
        <p class="text-xs text-slate-400">Fill in your identity details and photo preferences</p>
      </div>

      <div class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
          <input v-model="signature.fullName" type="text" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Job Title</label>
          <input v-model="signature.jobTitle" type="text" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Company</label>
          <input v-model="signature.company" type="text" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500" />
        </div>

        <div class="pt-2 border-t border-slate-800/80 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-300">Show Profile Photo</span>
            <input v-model="signature.showAvatar" type="checkbox" class="w-4 h-4 accent-indigo-500 rounded cursor-pointer" />
          </div>

          <div v-if="signature.showAvatar" class="space-y-3 pl-1">
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">Photo Image URL</label>
              <input v-model="signature.avatarUrl" type="text" placeholder="https://example.com/avatar.jpg" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1">Photo Shape</label>
              <div class="grid grid-cols-3 gap-2">
                <button
                  v-for="shape in (['round', 'rounded', 'square'] as const)"
                  :key="shape"
                  @click="signature.avatarShape = shape"
                  class="py-1.5 rounded-lg border text-xs font-medium capitalize cursor-pointer"
                  :class="signature.avatarShape === shape ? 'border-indigo-500 bg-indigo-500/20 text-indigo-300' : 'border-slate-800 bg-slate-900 text-slate-400'"
                >
                  {{ shape }}
                </button>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-xs text-slate-300 mb-1">
                <span>Photo Size</span>
                <span class="font-bold text-indigo-400">{{ signature.avatarSize }}px</span>
              </div>
              <input v-model.number="signature.avatarSize" type="range" min="50" max="130" class="w-full accent-indigo-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 3: CONTACT & SOCIALS -->
    <div v-if="activeTab === 'socials'" class="space-y-4">
      <div>
        <h3 class="text-sm font-bold text-white tracking-tight">3. Contact & Socials</h3>
        <p class="text-xs text-slate-400">Add email, phone, website, and company social icons</p>
      </div>

      <div class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
          <input v-model="signature.email" type="email" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
          <input v-model="signature.phone" type="text" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Website URL</label>
          <input v-model="signature.website" type="text" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-indigo-500" />
        </div>

        <div class="pt-3 border-t border-slate-800/80 space-y-3">
          <label class="block text-xs font-bold text-slate-300">Social Media Library</label>
          <div class="grid grid-cols-2 gap-2">
            <button
              v-for="platform in SOCIAL_PLATFORMS"
              :key="platform.id"
              @click="toggleSocial(platform.id)"
              class="px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-between cursor-pointer transition-all duration-200"
              :class="platform.id in signature.socialLinks ? 'border-indigo-500 bg-indigo-500/20 text-white' : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'"
            >
              <div class="flex items-center gap-2">
                <img :src="platform.logoUrl" :alt="platform.name" class="w-4 h-4 object-contain rounded-xs bg-white/10 p-0.5" />
                <span>{{ platform.name }}</span>
              </div>
              <span class="text-xs font-bold">{{ platform.id in signature.socialLinks ? '✓' : '+' }}</span>
            </button>
          </div>

          <!-- Active Social Inputs -->
          <div class="space-y-2.5 pt-2">
            <div v-for="(url, key) in signature.socialLinks" :key="key" class="flex items-center gap-2">
              <span class="text-xs font-semibold capitalize text-indigo-400 min-w-[70px]">{{ key }}:</span>
              <input v-model="signature.socialLinks[key]" type="text" class="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 4: STYLING -->
    <div v-if="activeTab === 'styling'" class="space-y-4">
      <div>
        <h3 class="text-sm font-bold text-white tracking-tight">4. Styling & Customization</h3>
        <p class="text-xs text-slate-400">Control font sizes, typography, and accent colors</p>
      </div>

      <div class="space-y-4">
        <!-- Color Picker -->
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-2">Accent Theme Color</label>
          <div class="flex items-center gap-3 mb-2">
            <input v-model="signature.themeColor" type="color" class="w-10 h-10 rounded-xl cursor-pointer bg-transparent border-0" />
            <input v-model="signature.themeColor" type="text" class="w-28 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white uppercase font-mono" />
          </div>
          <div class="flex items-center gap-1.5 flex-wrap">
            <button
              v-for="c in colorSwatches"
              :key="c"
              @click="signature.themeColor = c"
              class="w-6 h-6 rounded-full cursor-pointer transition-transform border border-white/20"
              :class="signature.themeColor === c ? 'scale-125 border-white shadow-md' : 'hover:scale-110'"
              :style="{ backgroundColor: c }"
            />
          </div>
        </div>

        <!-- Typography -->
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Font Family</label>
          <select v-model="signature.fontFamily" class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500">
            <option v-for="f in fontList" :key="f" :value="f">{{ f }}</option>
          </select>
        </div>

        <!-- Font Size Range -->
        <div>
          <div class="flex justify-between text-xs text-slate-300 mb-1">
            <span>Font Size</span>
            <span class="font-bold text-indigo-400">{{ signature.fontSize }}px</span>
          </div>
          <input v-model.number="signature.fontSize" type="range" min="11" max="16" class="w-full accent-indigo-500 cursor-pointer" />
        </div>
      </div>
    </div>

    <!-- TAB 5: ADDONS -->
    <div v-if="activeTab === 'addons'" class="space-y-4">
      <div>
        <h3 class="text-sm font-bold text-white tracking-tight">5. Add-ons</h3>
        <p class="text-xs text-slate-400">Available add-ons for the selected layout</p>
      </div>

      <!-- No add-ons badge -->
      <div v-if="!supportsAddon('disclaimer') && !supportsAddon('banner') && !supportsAddon('logo') && !supportsAddon('meet')" class="text-xs text-slate-500 italic py-2">
        No add-ons available for this layout.
      </div>

      <div class="space-y-4">
        <!-- Disclaimer -->
        <div v-if="supportsAddon('disclaimer')" class="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-200">Legal Disclaimer</span>
            <input v-model="signature.showDisclaimer" type="checkbox" class="w-4 h-4 accent-indigo-500 rounded cursor-pointer" />
          </div>
          <textarea v-if="signature.showDisclaimer" v-model="signature.disclaimerText" rows="3" class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-indigo-500" />
        </div>

        <!-- Banner -->
        <div v-if="supportsAddon('banner')" class="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-200">Promotional Banner</span>
            <input v-model="signature.showBanner" type="checkbox" class="w-4 h-4 accent-indigo-500 rounded cursor-pointer" />
          </div>
          <div v-if="signature.showBanner" class="space-y-2">
            <input v-model="signature.bannerImageUrl" type="text" placeholder="Banner Image URL" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white" />
            <input v-model="signature.bannerLinkUrl" type="text" placeholder="Banner Click Target URL" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white" />
          </div>
        </div>

        <!-- Logo -->
        <div v-if="supportsAddon('logo')" class="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-200">Secondary Logo</span>
            <input v-model="signature.showLogo" type="checkbox" class="w-4 h-4 accent-indigo-500 rounded cursor-pointer" />
          </div>
          <input v-if="signature.showLogo" v-model="signature.logoUrl" type="text" placeholder="Logo Image URL" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white" />
        </div>

        <!-- Meet Links -->
        <div v-if="supportsAddon('meet')" class="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-200">Video Call Link</span>
            <input v-model="signature.showMeet" type="checkbox" class="w-4 h-4 accent-indigo-500 rounded cursor-pointer" />
          </div>
          <div v-if="signature.showMeet" class="space-y-2">
            <input v-model="signature.meetText" type="text" placeholder="Button Text (e.g. Meet on Google Meet)" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white" />
            <input v-model="signature.meetUrl" type="text" placeholder="Meeting URL" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
