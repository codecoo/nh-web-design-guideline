# N_Health Design System - Updated Edition

## 🎨 What's New

### Design Updates
- ✅ **Modern Color Palette**: Soft professional blues (#3B82F6) and teal accents (#06B6D4)
- ✅ **Thai Language Support**: Sarabun font (compatible with Thai and English)
- ✅ **Professional Icons**: Iconoir icon library integration
- ✅ **Azure AD Login**: Microsoft SSO option on login page

### Quick Access

**Main Pages** 
- [Design System Hub](index.html) - Overview, colors, typography
- [Component Library](components-demo.html) - All UI components
- [Login with Azure AD](login.html) - Authentication with Microsoft SSO
- [Dashboard](dashboard-demo.html) - Patient Lab Portal
- [Data Management](data-table-crud.html) - CRUD operations
- [Settings](settings.html) - User preferences
- [User Management](user-management.html) - Admin dashboard
- [**Error Pages**](error-pages.html) ⭐ - 404, 403, 500, Offline templates

**Authentication**
- [Login](login.html)
- [Signup](signup.html)

## 🎨 Color Palette

### Primary (Soft Professional Blue)
- `#3B82F6` - Primary 800 (Buttons, links)
- `#1E40AF` - Primary 900 (Hover states)
- `#60A5FA` - Primary 600 (Light accents)
- `#DBEAFE` - Primary 100 (Backgrounds)

### Accent (Modern Teal)
- `#06B6D4` - Accent 800 (Highlights)
- `#0E7490` - Accent 900 (Dark teal)
- `#22D3EE` - Accent 600 (Light cyan)

### Status Colors
- `#10B981` - Success (Green)
- `#3B82F6` - Processing (Blue)
- `#F59E0B` - Warning (Amber)
- `#EF4444` - Error (Red)

### Neutrals
- `#111827` - Text primary
- `#6B7280` - Text secondary
- `#D1D5DB` - Borders
- `#F9FAFB` - Background

## 🔤 Typography

**Font**: Sarabun (Google Fonts)
- Supports: English ✅, Thai ✅ (ภาษาไทย)
- Weights: 300, 400, 500, 600, 700

**Examples**:
- English: The quick brown fox jumps over the lazy dog
- Thai: สวัสดี ยินดีต้อนรับสู่ระบบ N_Health

## 🎯 Icon System

Using **Iconoir** - Free, open-source icon library

### Usage Examples
```html
<!-- Icon only -->
<i class="iconoir-search"></i>
<i class="iconoir-user"></i>
<i class="iconoir-settings"></i>

<!-- Icon with button -->
<button class="btn btn-primary">
  <i class="iconoir-plus"></i>
  Add New
</button>
```

### Available Icons
- `iconoir-search` - Search
- `iconoir-user` - User/Profile
- `iconoir-settings` - Settings
- `iconoir-trash` - Delete
- `iconoir-edit-pencil` - Edit
- `iconoir-eye` - View
- `iconoir-folder` - Folder/Files
- [Full icon list](https://iconoir.com/)

## 🔐 Azure AD Login

The login page now features Microsoft Azure AD SSO:

1. Open [login.html](login.html)
2. Click "Sign in with Microsoft" button
3. Standard email/password login still available below

## 🚨 Accessing Error Pages

**Direct Link**: [error-pages.html](error-pages.html)

**Available Templates**:
- 404 Not Found
- 403 Forbidden  
- 500 Internal Server Error
- Offline/Network Error

Use the dropdown selector on the error pages to switch between different error states.

## 📱 Responsive Design

All pages work on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🛠️ For Developers

### Using Components

```html
<!-- Include stylesheet -->
<link rel="stylesheet" href="styles.css">

<!-- Buttons -->
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary</button>

<!-- Form Input -->
<input type="text" class="form-input" placeholder="Enter text" />

<!-- Status Badge -->
<span class="badge badge-completed">Completed</span>

<!-- With Icons -->
<button class="btn btn-primary">
  <i class="iconoir-plus"></i>
  Add New
</button>
```

### Color Variables

```css
/* Use CSS variables */
color: var(--color-primary-800);
background: var(--color-neutral-50);
border: 1px solid var(--color-neutral-300);
```

## 📋 Component Checklist

- ✅ Buttons (6 variants)
- ✅ Forms (inputs, selects, checkboxes, textareas)
- ✅ File upload (with error states)
- ✅ Status badges (4 types)
- ✅ Data tables
- ✅ Cards & stat cards
- ✅ Modals
- ✅ Toggle switches
- ✅ Progress bars
- ✅ Avatars
- ✅ Azure AD button

## 🌐 Language Support

### Thai Examples (ภาษาไทย)

**Headers**: 
- ระบบสุขภาพ N_Health
- แดชบอร์ดผู้ป่วย

**UI Text**:
- เข้าสู่ระบบ (Login)
- ลงทะเบียน (Register)
- บันทึก (Save)
- ยกเลิก (Cancel)

**Mixed Content**:
- Patient Name: นพ. สมชาย รัตนกุล
- Department: แผนกหัวใจ (Cardiology)

## 📚 Files Overview

Core Files:
- `styles.css` - Complete design system (870+ lines)
- `index.html` - Design hub
- `components-demo.html` - Component showcase
- `login.html` - Auth with Azure AD
- `error-pages.html` - Error templates ⭐

## 🔗 Quick Links

1. **Start Here**: [index.html](index.html)
2. **See Components**: [components-demo.html](components-demo.html)
3. **Test Login**: [login.html](login.html) (Azure AD enabled)
4. **View Dashboard**: [dashboard-demo.html](dashboard-demo.html)
5. **Error Pages**: [error-pages.html](error-pages.html) ⭐

## 💡 Tips

- Error pages can be accessed directly via `error-pages.html`
- Azure AD button triggers an alert (demo mode)
- All colors now use modern soft blue/teal palette
- Iconoir icons loaded via CDN
- Thai font (Sarabun) loads from Google Fonts

---

**Version**: 2.0 (Revised Edition)  
**Updated**: January 2026  
**Font**: Sarabun (Thai + English)  
**Icons**: Iconoir  
**Auth**: Azure AD Support

🎨 Built with modern colors, professional icons, and multilingual support!
