# N Health Web Design Guideline

**Version**: 3.0.0  
**Updated**: January 2026  
**Status**: Production Ready

## 🚀 Overview

The **N Health Web Design Guideline** is a comprehensive, responsive, and modern design system built for N Health web applications. It provides a unified user interface with consistent typography, color palettes, and interactive components, strictly adhering to **Ant Design** principles while maintaining N Health's unique branding identity.

This project is built with **Vanilla HTML, CSS, and JavaScript**, ensuring lightweight performance and easy integration without heavy framework dependencies.

## ✨ Key Features

- **🎨 Modern Design System**: A professional medical-grade aesthetic using "Modern Medical Blue" and "Teal" accents.
- **📱 Fully Responsive**: Adaptive layouts for Desktop, Tablet, and Mobile devices with a custom slide-out mobile navigation menu.
- **🌙 Dark Mode Support**: Native dark mode integration with seamless toggling and persistent state storage.
- **🌐 Internationalization (i18n)**: Built-in support for **English (EN)** and **Thai (TH)** language switching.
- **⚡ Interactive Components**: A rich library of pre-built components including data tables, forms, cards, and modals.
- **🔐 Ready-to-use Templates**: Production-ready pages for Login (Azure AD), Dashboard, Settings, and User Management.

## 🛠 Technology Stack

- **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling**: Native CSS Variables (Custom Properties) for extensive theming capability.
- **Icons**: [Font Awesome 6 Free](https://fontawesome.com/) (via CDN)
- **Typography**: `DB Helvethaica X` (Local Asset) - Optimized for both English and Thai.

## 📂 Project Structure

```
├── assets/                 # Images and Fonts (DB Helvethaica X)
├── styles.css             # Main Design System (CSS Variables, Utilities, Components)
├── main.js                # Core Logic (Theme, Language, Mobile Menu, Interactivity)
├── index.html             # Documentation Hub & Overview
├── components-demo.html   # Component Library Showcase
├── dashboard-demo.html    # Example Application Dashboard
├── login.html             # Login Page (with Azure AD UI)
├── signup.html            # Registration Page
├── settings.html          # User Settings & Profile
├── user-management.html   # Admin User Management
├── data-table-crud.html   # Advanced Data Table with CRUD UI
├── error-pages.html       # 404, 500, and Maintenance Pages
└── figma-docs.html        # Design System Documentation
```

## 🎨 Design System

### Color Palette

The system uses a sophisticated scale of blues and neutrals.

**Primary Colors (Medical Blue)**
- `Primary 50` - `#f0f5ff` (Backgrounds)
- `Primary 400` - `#597ef7` (Dark Mode Text)
- `Primary 600` - `#1d39c4` (Primary Buttons, Active States)
- `Primary 800` - `#061178` (Headers, Gradients)
- `Primary 900` - `#030852` (Deep Backgrounds)

**Functional Colors**
- ✅ Success: `#10b981`
- ⚠️ Warning: `#f59e0b`
- ❌ Error: `#ef4444`
- ℹ️ Info: `#3b82f6`

### Typography

**Font Family**: `DB Helvethaica X`, `-apple-system`, `Roboto`, `sans-serif`

- **Headings**: Bold weights (700), optimized for hierarchy.
  - H1: 48px
  - H2: 38px
  - H3: 30px
  - H4: 22px
- **Body**: Regular weights (400/500), high readability.
  - Base: 16px
  - Small: 14px

## 💻 Usage & Development

### 1. Setup
Simply serve the files using any static file server (e.g., Live Server in VS Code, Python SimpleHTTPServer) to avoid CORS issues with local fonts/modules.

### 2. Linking the System
Include the core files in the `<head>` and `<body>` of your HTML pages:

```html
<!-- In <head> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="styles.css">

<!-- End of <body> -->
<script src="main.js"></script>
```

### 3. Using Components
Copy-paste code directly from the [Component Library](components-demo.html).

**Example Button**:
```html
<button class="btn btn-primary">
    <i class="fa-solid fa-check"></i> Submit
</button>
```

**Example Card**:
```html
<div class="card">
    <div class="card-header">
        <h4 class="card-title">Patient Info</h4>
    </div>
    <p>Content goes here...</p>
</div>
```

## 📱 Responsive & Mobile Behavior

- **Desktop (>1024px)**: Full sidebar/topbar navigation.
- **Tablet & Mobile (≤1024px)**: 
  - Navigation collapses into a **Hamburger Menu**.
  - Grid layouts (`.grid-cols-*`) automatically stack vertically.
  - Typography scales down slightly for better fit.
- **Menu Toggle**: The mobile menu includes integrated controls for **Language** and **Theme** switching.

## 🤝 Contribution

1. Always use CSS variables (`var(--color-...)`) instead of hardcoded hex values.
2. Ensure all new pages include the `top-nav` structure and link `main.js`.
3. Check designs in both **Light** and **Dark** modes before committing.

---

*N Health Brand Identity Integrated*
