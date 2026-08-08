export interface SignatureData {
  // 1. Personal Info
  fullName: string
  jobTitle: string
  company: string
  avatarUrl: string
  showAvatar: boolean
  avatarShape: 'round' | 'square' | 'rounded'
  avatarSize: number

  // 2. Contact & Socials
  email: string
  phone: string
  website: string
  socialLinks: Record<string, string> // key: platform id, value: url

  // 3. Styling & Options
  themeColor: string
  fontFamily: string
  fontSize: number
  layoutTemplate: string

  // 4. Addons
  showDisclaimer: boolean
  disclaimerText: string
  showBanner: boolean
  bannerImageUrl: string
  bannerLinkUrl: string
  showLogo: boolean
  logoUrl: string
  showMeet: boolean
  meetText: string
  meetUrl: string
}

export interface SocialPlatform {
  id: string
  name: string
  logoUrl: string
  color: string
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  { id: 'linkedin', name: 'LinkedIn', logoUrl: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', color: '#0a66c2' },
  { id: 'github', name: 'GitHub', logoUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', color: '#24292e' },
  { id: 'twitter', name: 'Twitter / X', logoUrl: 'https://cdn-icons-png.flaticon.com/512/5969/5969020.png', color: '#1da1f2' },
  { id: 'facebook', name: 'Facebook', logoUrl: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', color: '#1877f2' },
  { id: 'instagram', name: 'Instagram', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', color: '#e4405f' },
  { id: 'youtube', name: 'YouTube', logoUrl: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', color: '#ff0000' },
  { id: 'whatsapp', name: 'WhatsApp', logoUrl: 'https://cdn-icons-png.flaticon.com/512/733/733585.png', color: '#25d366' },
  { id: 'telegram', name: 'Telegram', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png', color: '#0088cc' },
  { id: 'dribbble', name: 'Dribbble', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111388.png', color: '#ea4c89' },
  { id: 'behance', name: 'Behance', logoUrl: 'https://cdn-icons-png.flaticon.com/512/733/733539.png', color: '#1769ff' },
  { id: 'medium', name: 'Medium', logoUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968854.png', color: '#000000' },
  { id: 'discord', name: 'Discord', logoUrl: 'https://cdn-icons-png.flaticon.com/512/3670/3670157.png', color: '#5865f2' },
]
