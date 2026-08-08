<script setup lang="ts">
import type { SignatureData } from '../types'
import { SOCIAL_PLATFORMS } from '../types'

defineProps<{
  signature: SignatureData
}>()

function getBorderRadius(shape: string) {
  if (shape === 'round') return '50%'
  if (shape === 'rounded') return '12px'
  return '0px'
}

function getSocialLogo(id: string) {
  const match = SOCIAL_PLATFORMS.find(p => p.id === id)
  return match?.logoUrl || ''
}
</script>

<template>
  <div id="signature-container" class="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden" :style="{ fontFamily: signature.fontFamily, fontSize: `${signature.fontSize}px` }">
    
    <!-- TEMPLATE 1: Modern Left Vertical Accent Template -->
    <table v-if="signature.layoutTemplate === 'modern'" cellpadding="0" cellspacing="0" style="border-collapse: collapse; line-height: 1.4; color: #1e293b; width: 100%;">
      <tbody>
        <tr>
          <!-- Avatar Cell -->
          <td v-if="signature.showAvatar && signature.avatarUrl" valign="top" style="padding-right: 16px; border-right: 3px solid #4f46e5;" :style="{ borderColor: signature.themeColor }">
            <img
              :src="signature.avatarUrl"
              alt="Avatar"
              :style="{
                width: `${signature.avatarSize}px`,
                height: `${signature.avatarSize}px`,
                borderRadius: getBorderRadius(signature.avatarShape)
              }"
              style="object-fit: cover; display: block;"
            />
          </td>
          <!-- Details Cell -->
          <td valign="top" :style="{ paddingLeft: signature.showAvatar && signature.avatarUrl ? '16px' : '0px' }">
            <div style="font-size: 1.25em; font-weight: 700;" :style="{ color: signature.themeColor }">
              {{ signature.fullName }}
            </div>
            <div style="font-size: 0.95em; color: #64748b; font-weight: 500; margin-bottom: 8px;">
              {{ signature.jobTitle }} <span v-if="signature.company">at {{ signature.company }}</span>
            </div>

            <!-- Contact Information -->
            <table cellpadding="0" cellspacing="0" style="font-size: 0.9em; color: #334155;">
              <tbody>
                <tr v-if="signature.email">
                  <td style="padding-bottom: 3px; font-weight: 600;" :style="{ color: signature.themeColor }">Email:</td>
                  <td style="padding-bottom: 3px; padding-left: 6px;"><a :href="`mailto:${signature.email}`" style="color: #334155; text-decoration: none;">{{ signature.email }}</a></td>
                </tr>
                <tr v-if="signature.phone">
                  <td style="padding-bottom: 3px; font-weight: 600;" :style="{ color: signature.themeColor }">Phone:</td>
                  <td style="padding-bottom: 3px; padding-left: 6px;">{{ signature.phone }}</td>
                </tr>
                <tr v-if="signature.website">
                  <td style="padding-bottom: 3px; font-weight: 600;" :style="{ color: signature.themeColor }">Web:</td>
                  <td style="padding-bottom: 3px; padding-left: 6px;"><a :href="signature.website" target="_blank" style="color: #334155; text-decoration: none;">{{ signature.website }}</a></td>
                </tr>
              </tbody>
            </table>

            <!-- Social Media Icon Logos -->
            <div v-if="Object.keys(signature.socialLinks).length" style="margin-top: 10px;">
              <a
                v-for="(url, key) in signature.socialLinks"
                :key="key"
                :href="url"
                target="_blank"
                style="display: inline-block; margin-right: 8px; text-decoration: none;"
              >
                <img
                  v-if="getSocialLogo(key)"
                  :src="getSocialLogo(key)"
                  :alt="key"
                  style="width: 18px; height: 18px; display: inline-block; vertical-align: middle;"
                />
                <span v-else style="font-size: 0.85em; font-weight: 700; text-transform: capitalize;" :style="{ color: signature.themeColor }">{{ key }}</span>
              </a>
            </div>
          </td>
        </tr>

        <!-- Addons -->
        <tr v-if="signature.showMeet && signature.meetUrl">
          <td colspan="2" style="padding-top: 12px;">
            <a :href="signature.meetUrl" target="_blank" style="display: inline-block; padding: 6px 14px; border-radius: 6px; color: #ffffff; text-decoration: none; font-size: 0.85em; font-weight: 600;" :style="{ backgroundColor: signature.themeColor }">
              📹 {{ signature.meetText || 'Schedule Video Call' }}
            </a>
          </td>
        </tr>
        <tr v-if="signature.showLogo && signature.logoUrl">
          <td colspan="2" style="padding-top: 12px;">
            <img :src="signature.logoUrl" alt="Logo" style="max-height: 40px; display: block;" />
          </td>
        </tr>
        <tr v-if="signature.showBanner && signature.bannerImageUrl">
          <td colspan="2" style="padding-top: 12px;">
            <a :href="signature.bannerLinkUrl || '#'" target="_blank">
              <img :src="signature.bannerImageUrl" alt="Banner" style="max-width: 100%; border-radius: 6px; display: block;" />
            </a>
          </td>
        </tr>
        <tr v-if="signature.showDisclaimer && signature.disclaimerText">
          <td colspan="2" style="padding-top: 12px; font-size: 0.8em; color: #94a3b8; border-top: 1px solid #e2e8f0; margin-top: 10px;">
            {{ signature.disclaimerText }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- TEMPLATE 2: Header Card Template -->
    <table v-else-if="signature.layoutTemplate === 'banner'" cellpadding="0" cellspacing="0" style="border-collapse: collapse; color: #1e293b; width: 100%;">
      <tbody>
        <tr>
          <td style="padding: 14px 18px; border-radius: 10px;" :style="{ backgroundColor: signature.themeColor }">
            <table cellpadding="0" cellspacing="0" style="width: 100%;">
              <tbody>
                <tr>
                  <td v-if="signature.showAvatar && signature.avatarUrl" style="padding-right: 14px; width: 1%;">
                    <img
                      :src="signature.avatarUrl"
                      alt="Avatar"
                      :style="{
                        width: `${signature.avatarSize}px`,
                        height: `${signature.avatarSize}px`,
                        borderRadius: getBorderRadius(signature.avatarShape)
                      }"
                      style="object-fit: cover; display: block; border: 2px solid #ffffff;"
                    />
                  </td>
                  <td valign="middle">
                    <div style="font-size: 1.35em; font-weight: 700; color: #ffffff;">{{ signature.fullName }}</div>
                    <div style="font-size: 0.95em; color: #ffffff; opacity: 0.9;">{{ signature.jobTitle }} <span v-if="signature.company">• {{ signature.company }}</span></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding-top: 14px;">
            <table cellpadding="0" cellspacing="0" style="font-size: 0.9em; color: #475569;">
              <tbody>
                <tr v-if="signature.email">
                  <td style="padding-bottom: 4px; font-weight: 600;">Email:</td>
                  <td style="padding-bottom: 4px; padding-left: 8px;"><a :href="`mailto:${signature.email}`" style="color: #475569; text-decoration: none;">{{ signature.email }}</a></td>
                </tr>
                <tr v-if="signature.phone">
                  <td style="padding-bottom: 4px; font-weight: 600;">Phone:</td>
                  <td style="padding-bottom: 4px; padding-left: 8px;">{{ signature.phone }}</td>
                </tr>
                <tr v-if="signature.website">
                  <td style="padding-bottom: 4px; font-weight: 600;">Website:</td>
                  <td style="padding-bottom: 4px; padding-left: 8px;"><a :href="signature.website" target="_blank" style="color: #475569; text-decoration: none;">{{ signature.website }}</a></td>
                </tr>
              </tbody>
            </table>

            <!-- Social Media Icon Logos -->
            <div v-if="Object.keys(signature.socialLinks).length" style="margin-top: 10px;">
              <a
                v-for="(url, key) in signature.socialLinks"
                :key="key"
                :href="url"
                target="_blank"
                style="display: inline-block; margin-right: 8px; text-decoration: none;"
              >
                <img
                  v-if="getSocialLogo(key)"
                  :src="getSocialLogo(key)"
                  :alt="key"
                  style="width: 18px; height: 18px; display: inline-block; vertical-align: middle;"
                />
              </a>
            </div>
          </td>
        </tr>

        <!-- Addons -->
        <tr v-if="signature.showDisclaimer && signature.disclaimerText">
          <td style="padding-top: 12px; font-size: 0.8em; color: #94a3b8; border-top: 1px solid #e2e8f0;">
            {{ signature.disclaimerText }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- TEMPLATE 3: Clean Minimal Template -->
    <div v-else-if="signature.layoutTemplate === 'minimal'" style="color: #334155; line-height: 1.5;">
      <div style="font-size: 1.25em; font-weight: 700;" :style="{ color: signature.themeColor }">{{ signature.fullName }}</div>
      <div style="color: #64748b; font-size: 0.95em;">{{ signature.jobTitle }} <span v-if="signature.company">| {{ signature.company }}</span></div>

      <div style="margin-top: 6px; font-size: 0.9em; color: #475569;">
        <span v-if="signature.email"><a :href="`mailto:${signature.email}`" style="color: #475569; text-decoration: none;">{{ signature.email }}</a></span>
        <span v-if="signature.phone"> • {{ signature.phone }}</span>
        <span v-if="signature.website"> • <a :href="signature.website" target="_blank" style="color: #475569; text-decoration: none;">{{ signature.website }}</a></span>
      </div>

      <!-- Social Media Icon Logos -->
      <div v-if="Object.keys(signature.socialLinks).length" style="margin-top: 8px;">
        <a
          v-for="(url, key) in signature.socialLinks"
          :key="key"
          :href="url"
          target="_blank"
          style="display: inline-block; margin-right: 8px; text-decoration: none;"
        >
          <img
            v-if="getSocialLogo(key)"
            :src="getSocialLogo(key)"
            :alt="key"
            style="width: 18px; height: 18px; display: inline-block; vertical-align: middle;"
          />
        </a>
      </div>

      <div v-if="signature.showDisclaimer && signature.disclaimerText" style="padding-top: 10px; margin-top: 10px; font-size: 0.8em; color: #94a3b8; border-top: 1px solid #e2e8f0;">
        {{ signature.disclaimerText }}
      </div>
    </div>

    <!-- TEMPLATE 4: Side-by-Side Split -->
    <table v-else-if="signature.layoutTemplate === 'split'" cellpadding="0" cellspacing="0" style="border-collapse: collapse; color: #1e293b; width: 100%;">
      <tbody>
        <tr>
          <!-- Avatar Column -->
          <td valign="top" style="padding-right: 18px;">
            <img
              :src="signature.showAvatar && signature.avatarUrl ? signature.avatarUrl : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'"
              alt="Avatar"
              :width="signature.avatarSize + 10"
              :height="signature.avatarSize + 10"
              :style="{
                width: `${signature.avatarSize + 10}px`,
                height: `${signature.avatarSize + 10}px`,
                maxWidth: `${signature.avatarSize + 10}px`,
                borderRadius: getBorderRadius(signature.avatarShape)
              }"
              style="object-fit: cover; display: block; border: 3px solid #e2e8f0;"
            />
          </td>
          <!-- Details Card Column -->
          <td valign="top" style="width: 100%;">
            <div style="background-color: #f8fafc; padding: 14px 18px; border-radius: 14px; border: 1px solid #e2e8f0;">
              <div style="font-size: 1.3em; font-weight: 800;" :style="{ color: signature.themeColor }">{{ signature.fullName }}</div>
              <div style="font-size: 0.95em; color: #64748b; font-weight: 600;">{{ signature.jobTitle }} <span v-if="signature.company">@ {{ signature.company }}</span></div>

              <div style="margin-top: 8px; font-size: 0.9em; color: #334155; line-height: 1.6;">
                <div v-if="signature.email">📧 <a :href="`mailto:${signature.email}`" style="color: #334155; text-decoration: none;">{{ signature.email }}</a></div>
                <div v-if="signature.phone">📞 {{ signature.phone }}</div>
                <div v-if="signature.website">🌐 <a :href="signature.website" target="_blank" style="color: #334155; text-decoration: none;">{{ signature.website }}</a></div>
              </div>

              <!-- Social Media Icon Logos -->
              <div v-if="Object.keys(signature.socialLinks).length" style="margin-top: 10px;">
                <a
                  v-for="(url, key) in signature.socialLinks"
                  :key="key"
                  :href="url"
                  target="_blank"
                  style="display: inline-block; margin-right: 8px; text-decoration: none;"
                >
                  <img
                    v-if="getSocialLogo(key)"
                    :src="getSocialLogo(key)"
                    :alt="key"
                    style="width: 18px; height: 18px; display: inline-block; vertical-align: middle;"
                  />
                </a>
              </div>
            </div>
          </td>
        </tr>
        <!-- Addons: Meet -->
        <tr v-if="signature.showMeet && signature.meetUrl">
          <td colspan="2" style="padding-top: 10px;">
            <a :href="signature.meetUrl" target="_blank" style="display: inline-block; padding: 6px 14px; border-radius: 6px; color: #ffffff; text-decoration: none; font-size: 0.85em; font-weight: 600;" :style="{ backgroundColor: signature.themeColor }">
              📹 {{ signature.meetText || 'Schedule Video Call' }}
            </a>
          </td>
        </tr>
        <!-- Addons: Banner -->
        <tr v-if="signature.showBanner && signature.bannerImageUrl">
          <td colspan="2" style="padding-top: 10px;">
            <a :href="signature.bannerLinkUrl || '#'" target="_blank">
              <img :src="signature.bannerImageUrl" alt="Banner" style="max-width: 100%; border-radius: 6px; display: block;" />
            </a>
          </td>
        </tr>
        <!-- Addons: Disclaimer -->
        <tr v-if="signature.showDisclaimer && signature.disclaimerText">
          <td colspan="2" style="padding-top: 10px; font-size: 0.8em; color: #94a3b8; border-top: 1px solid #e2e8f0;">
            {{ signature.disclaimerText }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- TEMPLATE 5: Top Featured Image Card -->
    <div v-else-if="signature.layoutTemplate === 'image-top'" style="color: #1e293b; width: 100%;">
      <div v-if="signature.showAvatar && signature.avatarUrl" style="margin-bottom: 14px;">
        <img
          :src="signature.avatarUrl"
          alt="Avatar"
          :style="{
            width: '100%',
            maxHeight: '180px',
            borderRadius: signature.avatarShape === 'round' ? '16px' : getBorderRadius(signature.avatarShape)
          }"
          style="object-fit: cover; display: block;"
        />
      </div>

      <div style="font-size: 1.3em; font-weight: 800;" :style="{ color: signature.themeColor }">{{ signature.fullName }}</div>
      <div style="font-size: 0.95em; color: #64748b; font-weight: 600; margin-bottom: 8px;">{{ signature.jobTitle }} <span v-if="signature.company">at {{ signature.company }}</span></div>

      <table cellpadding="0" cellspacing="0" style="font-size: 0.9em; color: #334155; width: 100%;">
        <tbody>
          <tr v-if="signature.email">
            <td style="padding-bottom: 3px; font-weight: 600;" :style="{ color: signature.themeColor }">Email:</td>
            <td style="padding-bottom: 3px; padding-left: 8px;"><a :href="`mailto:${signature.email}`" style="color: #334155; text-decoration: none;">{{ signature.email }}</a></td>
          </tr>
          <tr v-if="signature.phone">
            <td style="padding-bottom: 3px; font-weight: 600;" :style="{ color: signature.themeColor }">Phone:</td>
            <td style="padding-bottom: 3px; padding-left: 8px;">{{ signature.phone }}</td>
          </tr>
          <tr v-if="signature.website">
            <td style="padding-bottom: 3px; font-weight: 600;" :style="{ color: signature.themeColor }">Web:</td>
            <td style="padding-bottom: 3px; padding-left: 8px;"><a :href="signature.website" target="_blank" style="color: #334155; text-decoration: none;">{{ signature.website }}</a></td>
          </tr>
        </tbody>
      </table>

      <!-- Social Media Icon Logos -->
      <div v-if="Object.keys(signature.socialLinks).length" style="margin-top: 10px;">
        <a
          v-for="(url, key) in signature.socialLinks"
          :key="key"
          :href="url"
          target="_blank"
          style="display: inline-block; margin-right: 8px; text-decoration: none;"
        >
          <img
            v-if="getSocialLogo(key)"
            :src="getSocialLogo(key)"
            :alt="key"
            style="width: 18px; height: 18px; display: inline-block; vertical-align: middle;"
          />
        </a>
      </div>

      <!-- Addons: Banner -->
      <div v-if="signature.showBanner && signature.bannerImageUrl" style="margin-top: 10px;">
        <a :href="signature.bannerLinkUrl || '#'" target="_blank">
          <img :src="signature.bannerImageUrl" alt="Banner" style="max-width: 100%; border-radius: 6px; display: block;" />
        </a>
      </div>

      <!-- Addons: Disclaimer -->
      <div v-if="signature.showDisclaimer && signature.disclaimerText" style="padding-top: 10px; margin-top: 10px; font-size: 0.8em; color: #94a3b8; border-top: 1px solid #e2e8f0;">
        {{ signature.disclaimerText }}
      </div>
    </div>

    <!-- TEMPLATE 6: Right Portrait Card -->
    <table v-else-if="signature.layoutTemplate === 'image-right'" cellpadding="0" cellspacing="0" style="border-collapse: collapse; color: #1e293b; width: 100%;">
      <tbody>
        <tr>
          <!-- Details Left Column -->
          <td valign="top" style="width: 100%;">
            <div style="font-size: 1.3em; font-weight: 800;" :style="{ color: signature.themeColor }">{{ signature.fullName }}</div>
            <div style="font-size: 0.95em; color: #64748b; font-weight: 600; margin-bottom: 8px;">{{ signature.jobTitle }} <span v-if="signature.company">• {{ signature.company }}</span></div>

            <div style="font-size: 0.9em; color: #334155; line-height: 1.6;">
              <div v-if="signature.email"><a :href="`mailto:${signature.email}`" style="color: #334155; text-decoration: none;">{{ signature.email }}</a></div>
              <div v-if="signature.phone">{{ signature.phone }}</div>
              <div v-if="signature.website"><a :href="signature.website" target="_blank" style="color: #334155; text-decoration: none;">{{ signature.website }}</a></div>
            </div>

            <!-- Social Media Icon Logos -->
            <div v-if="Object.keys(signature.socialLinks).length" style="margin-top: 10px;">
              <a
                v-for="(url, key) in signature.socialLinks"
                :key="key"
                :href="url"
                target="_blank"
                style="display: inline-block; margin-right: 8px; text-decoration: none;"
              >
                <img
                  v-if="getSocialLogo(key)"
                  :src="getSocialLogo(key)"
                  :alt="key"
                  style="width: 18px; height: 18px; display: inline-block; vertical-align: middle;"
                />
              </a>
            </div>
          </td>

          <!-- Right Avatar Image Column -->
          <td v-if="signature.showAvatar && signature.avatarUrl" valign="top" style="padding-left: 18px;">
            <img
              :src="signature.avatarUrl"
              alt="Avatar"
              :width="signature.avatarSize + 10"
              :height="signature.avatarSize + 10"
              :style="{
                width: `${signature.avatarSize + 10}px`,
                height: `${signature.avatarSize + 10}px`,
                maxWidth: `${signature.avatarSize + 10}px`,
                borderRadius: getBorderRadius(signature.avatarShape)
              }"
              style="object-fit: cover; display: block; border: 3px solid #e2e8f0;"
            />
          </td>
        </tr>
        <!-- Addons: Meet -->
        <tr v-if="signature.showMeet && signature.meetUrl">
          <td colspan="2" style="padding-top: 10px;">
            <a :href="signature.meetUrl" target="_blank" style="display: inline-block; padding: 6px 14px; border-radius: 6px; color: #ffffff; text-decoration: none; font-size: 0.85em; font-weight: 600;" :style="{ backgroundColor: signature.themeColor }">
              📹 {{ signature.meetText || 'Schedule Video Call' }}
            </a>
          </td>
        </tr>
        <!-- Addons: Banner -->
        <tr v-if="signature.showBanner && signature.bannerImageUrl">
          <td colspan="2" style="padding-top: 10px;">
            <a :href="signature.bannerLinkUrl || '#'" target="_blank">
              <img :src="signature.bannerImageUrl" alt="Banner" style="max-width: 100%; border-radius: 6px; display: block;" />
            </a>
          </td>
        </tr>
        <!-- Addons: Disclaimer -->
        <tr v-if="signature.showDisclaimer && signature.disclaimerText">
          <td colspan="2" style="padding-top: 10px; font-size: 0.8em; color: #94a3b8; border-top: 1px solid #e2e8f0;">
            {{ signature.disclaimerText }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- TEMPLATE 7: Double Image & Logo Split -->
    <table v-else-if="signature.layoutTemplate === 'image-double'" cellpadding="0" cellspacing="0" style="border-collapse: collapse; color: #1e293b; width: 100%;">
      <tbody>
        <tr>
          <!-- Left Avatar Photo Column -->
          <td valign="top" style="padding-right: 14px; white-space: nowrap;">
            <img
              :src="signature.showAvatar && signature.avatarUrl ? signature.avatarUrl : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'"
              alt="Profile Photo"
              :width="signature.avatarSize"
              :height="signature.avatarSize"
              :style="{
                width: `${signature.avatarSize}px`,
                height: `${signature.avatarSize}px`,
                minWidth: `${signature.avatarSize}px`,
                maxWidth: 'none',
                display: 'block',
                borderRadius: getBorderRadius(signature.avatarShape)
              }"
              style="object-fit: cover; border: 2px solid #e2e8f0;"
            />
          </td>

          <!-- Center Details Column -->
          <td valign="top" style="width: 99%;">
            <div style="font-size: 1.25em; font-weight: 800;" :style="{ color: signature.themeColor }">{{ signature.fullName }}</div>
            <div style="font-size: 0.9em; color: #64748b; font-weight: 600;">{{ signature.jobTitle }} • {{ signature.company }}</div>

            <div style="margin-top: 6px; font-size: 0.88em; color: #475569; line-height: 1.5;">
              <div v-if="signature.email"><a :href="`mailto:${signature.email}`" style="color: #475569; text-decoration: none;">{{ signature.email }}</a></div>
              <div v-if="signature.phone">{{ signature.phone }}</div>
              <div v-if="signature.website"><a :href="signature.website" target="_blank" style="color: #475569; text-decoration: none;">{{ signature.website }}</a></div>
            </div>

            <!-- Social Media Icon Logos -->
            <div v-if="Object.keys(signature.socialLinks).length" style="margin-top: 8px;">
              <a
                v-for="(url, key) in signature.socialLinks"
                :key="key"
                :href="url"
                target="_blank"
                style="display: inline-block; margin-right: 8px; text-decoration: none;"
              >
                <img
                  v-if="getSocialLogo(key)"
                  :src="getSocialLogo(key)"
                  :alt="key"
                  style="width: 18px; height: 18px; display: inline-block; vertical-align: middle;"
                />
              </a>
            </div>
          </td>
          <!-- Right Company Logo Column -->
          <td valign="middle" style="padding-left: 14px; white-space: nowrap;">
            <img
              v-if="signature.showLogo && signature.logoUrl"
              :src="signature.logoUrl"
              alt="Company Logo"
              style="height: 55px; width: 85px; display: block; object-fit: contain; border-radius: 6px; max-width: none;"
            />
          </td>
        </tr>
        <!-- Addons: Disclaimer -->
        <tr v-if="signature.showDisclaimer && signature.disclaimerText">
          <td colspan="3" style="padding-top: 10px; font-size: 0.8em; color: #94a3b8; border-top: 1px solid #e2e8f0;">
            {{ signature.disclaimerText }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- TEMPLATE 8: Floating Portrait Badge -->
    <div v-else-if="signature.layoutTemplate === 'image-float'" style="color: #1e293b; width: 100%;">
      <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; table-layout: fixed;">
        <tbody>
          <tr>
            <td valign="top" :style="{ width: `${signature.avatarSize + 19}px`, paddingRight: '14px' }">
              <img
                :src="signature.showAvatar && signature.avatarUrl ? signature.avatarUrl : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'"
                alt="Avatar"
                :width="signature.avatarSize + 15"
                :height="signature.avatarSize + 15"
                :style="{
                  width: `${signature.avatarSize + 15}px`,
                  height: `${signature.avatarSize + 15}px`,
                  minWidth: `${signature.avatarSize + 15}px`,
                  maxWidth: 'none',
                  borderRadius: getBorderRadius(signature.avatarShape)
                }"
                style="object-fit: cover; display: block; border: 3px solid #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"
              />
            </td>
            <td valign="middle" style="background-color: #f1f5f9; padding: 14px 18px; border-radius: 14px;">
              <div style="font-size: 1.3em; font-weight: 800;" :style="{ color: signature.themeColor }">{{ signature.fullName }}</div>
              <div style="font-size: 0.9em; color: #64748b; font-weight: 600; margin-bottom: 6px;">{{ signature.jobTitle }} <span v-if="signature.company">| {{ signature.company }}</span></div>

              <div style="font-size: 0.85em; color: #334155; line-height: 1.5;">
                <span v-if="signature.email"><a :href="`mailto:${signature.email}`" style="color: #334155; text-decoration: none;">{{ signature.email }}</a></span>
                <span v-if="signature.phone"> • {{ signature.phone }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Addons: Disclaimer -->
      <div v-if="signature.showDisclaimer && signature.disclaimerText" style="padding-top: 10px; margin-top: 10px; font-size: 0.8em; color: #94a3b8; border-top: 1px solid #e2e8f0;">
        {{ signature.disclaimerText }}
      </div>
    </div>

    <!-- TEMPLATE 9: Circle Photo Hero Header -->
    <div v-else-if="signature.layoutTemplate === 'image-circle-top'" style="color: #1e293b; text-align: center; width: 100%;">
      <div v-if="signature.showAvatar && signature.avatarUrl" style="margin-bottom: 12px;">
        <img
          :src="signature.avatarUrl"
          alt="Avatar"
          :style="{
            width: `${signature.avatarSize + 20}px`,
            height: `${signature.avatarSize + 20}px`,
            borderRadius: '50%'
          }"
          style="object-fit: cover; display: inline-block; border: 4px solid #f1f5f9;"
        />
      </div>

      <div style="font-size: 1.35em; font-weight: 800;" :style="{ color: signature.themeColor }">{{ signature.fullName }}</div>
      <div style="font-size: 0.95em; color: #64748b; font-weight: 600; margin-bottom: 8px;">{{ signature.jobTitle }} • {{ signature.company }}</div>

      <div style="display: inline-block; background-color: #f8fafc; padding: 10px 20px; border-radius: 12px; border: 1px solid #e2e8f0; font-size: 0.88em; color: #334155;">
        <span v-if="signature.email"><a :href="`mailto:${signature.email}`" style="color: #334155; text-decoration: none;">📧 {{ signature.email }}</a></span>
        <span v-if="signature.phone" style="margin-left: 12px;">📞 {{ signature.phone }}</span>
        <span v-if="signature.website" style="margin-left: 12px;"><a :href="signature.website" target="_blank" style="color: #334155; text-decoration: none;">🌐 {{ signature.website }}</a></span>
      </div>

      <!-- Social Media Icon Logos -->
      <div v-if="Object.keys(signature.socialLinks).length" style="margin-top: 10px;">
        <a
          v-for="(url, key) in signature.socialLinks"
          :key="key"
          :href="url"
          target="_blank"
          style="display: inline-block; margin: 0 5px; text-decoration: none;"
        >
          <img
            v-if="getSocialLogo(key)"
            :src="getSocialLogo(key)"
            :alt="key"
            style="width: 20px; height: 20px; display: inline-block; vertical-align: middle;"
          />
        </a>
      </div>

      <!-- Addons: Meet -->
      <div v-if="signature.showMeet && signature.meetUrl" style="margin-top: 10px;">
        <a :href="signature.meetUrl" target="_blank" style="display: inline-block; padding: 6px 14px; border-radius: 6px; color: #ffffff; text-decoration: none; font-size: 0.85em; font-weight: 600;" :style="{ backgroundColor: signature.themeColor }">
          📹 {{ signature.meetText || 'Schedule Video Call' }}
        </a>
      </div>

      <!-- Addons: Banner -->
      <div v-if="signature.showBanner && signature.bannerImageUrl" style="margin-top: 10px;">
        <a :href="signature.bannerLinkUrl || '#'" target="_blank">
          <img :src="signature.bannerImageUrl" alt="Banner" style="max-width: 100%; border-radius: 6px; display: block;" />
        </a>
      </div>

      <!-- Addons: Disclaimer -->
      <div v-if="signature.showDisclaimer && signature.disclaimerText" style="padding-top: 10px; margin-top: 10px; font-size: 0.8em; color: #94a3b8; border-top: 1px solid #e2e8f0;">
        {{ signature.disclaimerText }}
      </div>
    </div>

    <!-- TEMPLATE 7: Executive Badge -->
    <div v-else style="color: #1e293b; text-align: center;">
      <div v-if="signature.showAvatar && signature.avatarUrl" style="margin-bottom: 10px;">
        <img
          :src="signature.avatarUrl"
          alt="Avatar"
          :style="{
            width: `${signature.avatarSize}px`,
            height: `${signature.avatarSize}px`,
            borderRadius: getBorderRadius(signature.avatarShape)
          }"
          style="object-fit: cover; display: inline-block; border: 3px solid #ffffff; shadow: 0 4px 6px rgba(0,0,0,0.1);"
        />
      </div>

      <div style="display: inline-block; padding: 4px 16px; border-radius: 999px; color: #ffffff; font-weight: 700; font-size: 1.1em; margin-bottom: 4px;" :style="{ backgroundColor: signature.themeColor }">
        {{ signature.fullName }}
      </div>
      <div style="font-size: 0.95em; color: #64748b; font-weight: 600;">{{ signature.jobTitle }} • {{ signature.company }}</div>

      <div style="margin-top: 10px; font-size: 0.9em; color: #475569;">
        <span v-if="signature.email"><a :href="`mailto:${signature.email}`" style="color: #475569; text-decoration: none;">{{ signature.email }}</a></span>
        <span v-if="signature.phone"> | {{ signature.phone }}</span>
        <span v-if="signature.website"> | <a :href="signature.website" target="_blank" style="color: #475569; text-decoration: none;">{{ signature.website }}</a></span>
      </div>

      <!-- Social Media Icon Logos -->
      <div v-if="Object.keys(signature.socialLinks).length" style="margin-top: 10px;">
        <a
          v-for="(url, key) in signature.socialLinks"
          :key="key"
          :href="url"
          target="_blank"
          style="display: inline-block; margin: 0 4px; text-decoration: none;"
        >
          <img
            v-if="getSocialLogo(key)"
            :src="getSocialLogo(key)"
            :alt="key"
            style="width: 20px; height: 20px; display: inline-block; vertical-align: middle;"
          />
        </a>
      </div>

      <!-- Addons: Meet -->
      <div v-if="signature.showMeet && signature.meetUrl" style="margin-top: 10px;">
        <a :href="signature.meetUrl" target="_blank" style="display: inline-block; padding: 6px 14px; border-radius: 6px; color: #ffffff; text-decoration: none; font-size: 0.85em; font-weight: 600;" :style="{ backgroundColor: signature.themeColor }">
          📹 {{ signature.meetText || 'Schedule Video Call' }}
        </a>
      </div>

      <!-- Addons: Banner -->
      <div v-if="signature.showBanner && signature.bannerImageUrl" style="margin-top: 10px;">
        <a :href="signature.bannerLinkUrl || '#'" target="_blank">
          <img :src="signature.bannerImageUrl" alt="Banner" style="max-width: 100%; border-radius: 6px; display: block;" />
        </a>
      </div>

      <!-- Addons: Logo -->
      <div v-if="signature.showLogo && signature.logoUrl" style="margin-top: 10px;">
        <img :src="signature.logoUrl" alt="Logo" style="max-height: 40px; display: block;" />
      </div>

      <!-- Addons: Disclaimer -->
      <div v-if="signature.showDisclaimer && signature.disclaimerText" style="padding-top: 10px; margin-top: 10px; font-size: 0.8em; color: #94a3b8; border-top: 1px solid #e2e8f0;">
        {{ signature.disclaimerText }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Override Tailwind's global img { max-width: 100% } which collapses avatar images in table cells */
#signature-container table td img {
  max-width: none !important;
  flex-shrink: 0;
}
</style>
