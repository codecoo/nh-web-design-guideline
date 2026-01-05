# N_Health Design System - Figma Documentation

## Overview
This document outlines the Figma design file structure for the N_Health Design System. The Figma file serves as the single source of truth for all design specifications and should be used by designers when creating new features or components.

## File Structure

### 📄 Page 1: Design Tokens

#### Color System
**Primary Colors** (Modern Professional Blue)
- `Primary/900`: #1E40AF - Deep royal blue for headers and primary backgrounds
- `Primary/800`: #3B82F6 - Bright professional blue for buttons and interactive elements
- `Primary/600`: #60A5FA - Lighter blue for focus states
- `Primary/100`: #DBEAFE - Very light blue for backgrounds/active states

**Accent Colors** (Teal/Cyan)
- `Accent/900`: #0E7490 - Deep teal for secondary actions
- `Accent/800`: #06B6D4 - Bright cyan for accent highlights
- `Accent/600`: #22D3EE - Light cyan

**Neutral Colors**
- `Neutral/900`: #111827 - Nearly black for headings
- `Neutral/700`: #374151 - Dark gray for body text
- `Neutral/500`: #6B7280 - Medium gray for secondary text and icons
- `Neutral/300`: #D1D5DB - Light gray for borders
- `Neutral/100`: #F3F4F6 - Very light gray/white smoke for backgrounds
- `Neutral/50`: #F9FAFB - Almost white for main page backgrounds

**Status Colors**
- `Success`: #10B981 - Green for completed states
- `Processing`: #3B82F6 - Blue for in-progress states
- `Warning`: #F59E0B - Amber for pending/warning states
- `Error`: #EF4444 - Red for error/rejected states

#### Typography Scale
**Font Families**
- Primary: **DB Helvethaica X**
- Fallback: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)

**Text Styles**
- `Heading/1`: DB Helvethaica X, 38px, Bold (700), 1.35 line height
- `Heading/2`: DB Helvethaica X, 30px, Bold (700), 1.35 line height
- `Heading/3`: DB Helvethaica X, 24px, Bold (700), 1.35 line height
- `Heading/4`: DB Helvethaica X, 20px, Bold (700), 1.35 line height
- `Body/Large`: DB Helvethaica X, 16px, Regular (400), 1.5715 line height
- `Body/Base`: DB Helvethaica X, 14px, Regular (400), 1.5715 line height
- `Body/Small`: DB Helvethaica X, 12px, Regular (400), 1.5715 line height
- `Caption`: DB Helvethaica X, 12px, Regular (400), 1.5715 line height, muted color

#### Spacing Scale
Based on 4px grid system:
- `spacing-1`: 4px
- `spacing-2`: 8px
- `spacing-3`: 12px
- `spacing-4`: 16px
- `spacing-5`: 20px
- `spacing-6`: 24px
- `spacing-8`: 32px
- `spacing-10`: 40px
- `spacing-12`: 48px

#### Shadows
- `shadow-sm`: 0 1px 2px rgba(0,0,0,0.05)
- `shadow-md`: 0 4px 6px -1px rgba(0,0,0,0.1)
- `shadow-card`: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)
- `shadow-hover`: 0 10px 15px -3px rgba(0,0,0,0.1)

#### Border Radius
- `radius-sm`: 4px
- `radius-md`: 6px
- `radius-lg`: 8px
- `radius-xl`: 12px

---

### 📄 Page 2: Component Library

#### Icons (New)
- **Library**: **Iconoir** (Open Source)
- **Style**: Line icons, 1.5px stroke width (default)
- **Size**: 24px default, 20px small, 16px extra small

#### Buttons
**Variants**: Primary, Secondary, Dashed, Danger, Ghost, Azure AD
**States**: Default, Hover, Active, Disabled
**Components**:
- `btn-primary`: Blue background, white text
- `btn-secondary`: White background, gray border
- `btn-azure`: Dark gray background, Microsoft logo
- `btn-icon`: Square icon button

#### Navigation (New)
**Top Navigation Bar**
- Sticky positioning
- Logo on left
- Menu items with Icons + Text
- Right-aligned User Profile
- Dropdown for Pages

#### Form Elements
**Input Fields**
- Text input (default, focus with blue ring, error red ring)
- Search input with Iconoir icon on the left
- Select dropdown

#### Status Badges
- `badge-completed`: Green background/text
- `badge-processing`: Blue background/text
- `badge-pending`: Amber background/text
- `badge-rejected`: Red background/text

---

### 📄 Page 3: Page Templates

#### Authentication Pages
**Login**
- Azure AD SSO Button (Prominent)
- OR Divider
- Traditional Email/Password Form
- Unified Top Nav integration

**Signup**
- Multi-field form
- Password strength

#### Dashboard Layout
**Patient Lab Portal**
- Unified Top Navigation
- 4-column stat cards
- Filter tabs
- Data table with action buttons
- Sidebar for System Status

#### Data Management
- CRUD Table with specialized Toolbar (Add, Export, Delete)
- Modal dialogs used for data entry

#### Settings Page
- Tabbed Interface (Profile, Security, Notifications, Preferences)
- Iconoir icons for each tab

#### User Management
- Admin dashboard view with role badges
- Approval workflows for pending users

#### Error Pages
- Selector for 404, 403, 500, Offline
- Consistent branding with Top Nav to allow escape

---

## Design Principles (Ant Design x N_Health)

1. **Natural**: Visual system derived from nature with intuitive elements
2. **Certain**: Highly certain interface reducing ambiguity
3. **Meaningful**: Every element has clear purpose
4. **Professional**: Clean, trusted medical aesthetic using the new blue/teal palette

## Usage Guidelines

### Typography
- Use `DB Helvethaica X` for all text.
- Ensure proper fallback to system fonts if the font file is missing.
- Use Bold (700) for headings and Regular (400) for body text.

### 3. Iconography
**Library:** Font Awesome 6 Free (Solid)
**CDN:** `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`

**Usage:**
- Use `<i class="fa-solid fa-icon-name"></i>` for icons.
- Ensure icons are recognizable and consistent.
- Standard icon size is 1em to 1.25em relative to the text.

| Icon Name | Usage | Class |
| :--- | :--- | :--- |
| Home | Dashboard/Home link | `fa-solid fa-house` |
| User | User profiles, avatars | `fa-solid fa-user` |
| Settings | Configuration pages | `fa-solid fa-gear` |
| Search | Search inputs | `fa-solid fa-magnifying-glass` |
| Bell | Notifications | `fa-solid fa-bell` |
| Chevron Down | Dropdowns | `fa-solid fa-chevron-down` |
| Plus | Add actions | `fa-solid fa-plus` |
| Trash | Delete actions | `fa-solid fa-trash` |
| Pen/Edit | Edit actions | `fa-solid fa-pen-to-square` |

*(Note: Iconoir was previously used but has been fully replaced by Font Awesome 6)*

### Color Usage
- Primary Blue (#3B82F6) for main actions.
- Neutral Gray (#6B7280) for secondary text to reduce visual noise.
- Use Status colors strictly for their semantic meaning.

---

## Maintenance

### Change Log
- **v2.0.0** (2026-01-05): Major revision. Added DB Helvethaica X font support, switched to Iconoir icons, implemented unified Top Navigation, and refreshed color palette to modern "Medical Blue" theme. Added Azure AD login.

## Resources
- Design System Hub: [index.html](file:///d:/APPS/hello-antigravity/design-system/index.html)
- Typography: DB Helvethaica X (Local Asset)
- Icons: [Iconoir](https://iconoir.com/)
