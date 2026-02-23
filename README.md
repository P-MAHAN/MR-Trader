# MR TRADERS — Professional Painting Services Website

A modern, responsive commercial website for **MR TRADERS** painting services built with **React + Vite + Tailwind CSS**.

## 🖥️ Tech Stack
- **React 18** (functional components + hooks)
- **Vite** (fast dev server + build tool)
- **Tailwind CSS v3** (utility-first styling)
- **Lucide React** (icons)

## 📁 Project Structure
```
src/
├── assets/          ← Images & logo
│   ├── logo.jpeg
│   ├── image1.jpeg
│   ├── image2.jpeg
│   └── image3.jpeg
├── components/
│   ├── Navbar.jsx         ← Sticky navbar with mobile hamburger
│   ├── Hero.jsx           ← Full-screen hero with CTA
│   ├── About.jsx          ← About section with highlights
│   ├── Services.jsx       ← 6 service cards with hover effects
│   ├── WhyChooseUs.jsx    ← 8 feature cards
│   ├── Gallery.jsx        ← Filterable gallery + lightbox
│   ├── Testimonials.jsx   ← Testimonial slider
│   ├── CallToAction.jsx   ← CTA banner
│   ├── Contact.jsx        ← Contact form + map
│   └── Footer.jsx         ← Footer with social links
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Running Locally

### Prerequisites
- Node.js (v18+)
- npm

### Steps
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

### Build for Production
```bash
npm run build
# Output in: dist/
```

## ✏️ Customization

### Update Contact Info
Edit these files to update phone numbers, email, and address:
- `src/components/Navbar.jsx` — WhatsApp & phone links
- `src/components/Contact.jsx` — contact info cards
- `src/components/Footer.jsx` — footer contact details

### Replace Images
- Drop new images in `src/assets/`
- Update import paths in `Hero.jsx`, `About.jsx`, `Gallery.jsx`, `CallToAction.jsx`

### Change Colors
Edit `tailwind.config.js` — the `brand` color object controls primary palette.

### SEO Meta Tags
Edit `index.html` — update `<title>`, `<meta name="description">`, keywords, etc.

## 📞 Contact Buttons
By default, WhatsApp link is: `https://wa.me/919876543210`  
Phone: `tel:+919876543210`  
Update these throughout the components with your actual number.
