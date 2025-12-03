# Debut Invitation Website

A beautiful and interactive 18th birthday debut invitation website built with Next.js, React, and Tailwind CSS.

## Features

- 🎉 Elegant debutant profile display with circular image
- 💌 Interactive mail button that opens invitation
- 🎂 Detailed event information including:
  - 18 Roses ceremony
  - 18 Shots celebration
  - Cotillion/First Dance
  - Grand Revelry
  - Cake Cutting
  - Special Surprises
- 🎨 Beautiful gradient backgrounds and animations
- 📱 Fully responsive design
- ✨ Smooth transitions and interactive elements

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd Debut
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
Debut/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and tailwind directives
├── components/
│   ├── Debutant.tsx        # Debutant profile component
│   └── MailInvitation.tsx  # Interactive mail invitation component
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── next.config.js          # Next.js configuration
```

## Customization

### Change Debutant Name and Image
Edit `app/page.tsx` and update the `Debutant` component props:
```tsx
<Debutant 
  name="Your Name" 
  image="your-image-url"
/>
```

### Customize Event Details
Edit `components/MailInvitation.tsx` to add, remove, or modify event items.

### Change Colors
Modify `tailwind.config.ts` to customize the color scheme, or update individual component classes.

## Technologies Used

- **Next.js 14** - React framework with server-side rendering
- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **TypeScript** - Type safety
- **PostCSS & Autoprefixer** - CSS processing

## Building for Production

```bash
npm run build
npm start
```

## License

This project is open source and available under the MIT License.

---

Enjoy your debut celebration! 🎉✨
# Princess
