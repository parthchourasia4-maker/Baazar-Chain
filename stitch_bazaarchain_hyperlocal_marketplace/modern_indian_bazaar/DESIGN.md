---
name: Modern Indian Bazaar
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#584237'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#8c7164'
  outline-variant: '#e0c0b1'
  surface-tint: '#9d4300'
  primary: '#9d4300'
  on-primary: '#ffffff'
  primary-container: '#f97316'
  on-primary-container: '#582200'
  inverse-primary: '#ffb690'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#6e5e0d'
  on-tertiary: '#ffffff'
  tertiary-container: '#bfab56'
  on-tertiary-container: '#4b3f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#783200'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#f9e287'
  tertiary-fixed-dim: '#dcc66e'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#534600'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 20px
  stack-gap: 16px
  section-margin: 32px
  grid-gutter: 12px
---

## Brand & Style

This design system captures the energy of a bustling Indian market and refines it into a high-trust, hyperlocal digital experience. The brand personality is "Vibrant, Neighborly, and Transparent." It balances the organized chaos of a bazaar with the precision of modern fintech.

The visual style is **Modern-Glassmorphic**. It utilizes deep, rounded containers and translucent layers to create a sense of physical presence and depth. The aesthetic is designed to feel welcoming to all age groups, prioritizing legibility and tactile interaction while maintaining a premium, "app-first" feel.

## Colors

The palette is rooted in cultural significance and functional clarity.
- **Primary Orange (#F97316):** Used for primary actions, price highlights, and energetic "Sale" states. It represents the warmth and energy of the marketplace.
- **Trust Teal (#0D9488):** Reserved for "Verified" badges, secure checkout elements, and successful transaction states to instill confidence.
- **Surface & Background:** Pure white is the canvas, but glassmorphic overlays (70% opacity with 20px blur) are used for floating navigation and top-level modals.
- **Functional Accents:** A soft Marigold (#FDE68A) is used for secondary backgrounds to differentiate community posts from commerce listings.

## Typography

The typography system uses **Plus Jakarta Sans** for headlines to provide a friendly, geometric, and high-energy feel. **Be Vietnam Pro** is used for body copy and UI labels due to its exceptional legibility at small scales and modern, humanist character.

**Micro-copy Style:** Use "Hinglish" to maintain a conversational tone (e.g., "Best Deals for you, Beta," or "Apna Order Track Karein"). Headings should be bold and punchy, while body text remains clean and spacious to ensure the app doesn't feel cluttered.

## Layout & Spacing

This design system follows a **Fluid Grid** model optimized for mobile-first hyperlocal browsing. 
- **Margins:** A generous 20px side margin ensures content doesn't feel cramped.
- **Vertical Rhythm:** Elements are stacked using a 4px base unit, with 16px being the standard gap between related items and 32px between distinct sections.
- **Layout Adaptration:** On larger screens (tablets), the content remains centered with a max-width of 768px to maintain the "feed" feel. Cards reflow from a single column to a 2-column masonry grid.

## Elevation & Depth

Depth is conveyed through a combination of **Glassmorphism** and **Colored Shadows**:
- **Soft Orange Shadows:** Instead of neutral greys, elevated cards use a soft, diffused shadow tinted with the primary color (e.g., `rgba(249, 115, 22, 0.15)` with 30px blur and 10px Y-offset). This creates a "glowing" effect on the white background.
- **Backdrop Filters:** Bottom navigation bars and floating headers must use a `saturate(180%) blur(20px)` effect to allow the vibrant colors of the market feed to peek through while maintaining legibility.
- **Tiers:** Level 0 is the background; Level 1 is the standard card; Level 2 is the active/pressed card state or modal.

## Shapes

The shape language is extremely rounded to evoke a "friendly and approachable" vibe. 
- **Standard Cards:** Use 24px (xl) corner radius.
- **Featured Banners & Modals:** Use 32px (2xl) corner radius for a soft, pillow-like appearance.
- **Buttons:** Use fully rounded (pill) shapes for primary actions to distinguish them from content cards.
- **Trust Badges:** Use a subtle 8px radius or a circular "seal" shape.

## Components

- **Interactive Cards:** Large-format cards with 24px radius. They should feature "quick-add" buttons in the bottom right and a "Trust Teal" verified icon in the top left.
- **Bottom Navigation:** A floating bar (inset from screen edges by 16px) with a glassmorphic background and 32px rounded corners. Icons should be chunky and duo-tone.
- **Trust Badges:** "Ekdum Asli" (100% Genuine) or "Local Hero" badges using Trust Teal backgrounds with white bold text.
- **Primary Buttons:** High-contrast Orange with white text. Use "Squishy" press animations (scale down to 0.96) to reinforce the tactile market feel.
- **Input Fields:** Thick 2px borders that turn Trust Teal on focus, with large hit areas for easy thumb interaction.
- **Hinglish Labels:** Buttons should use localized micro-copy like "Abhi Kharidein" (Buy Now) or "Share Karein" (Share).