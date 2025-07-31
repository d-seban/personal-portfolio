# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14 and TypeScript, designed to showcase your projects and writing.

## Features

- 🎨 Clean, minimal design matching the reference layout
- 📱 Fully responsive (mobile-friendly)
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Optimized for Vercel deployment
- 🖼️ Optimized image loading with Next.js Image component
- 🎪 Beautiful icons with Lucide React
- 🎨 Styled with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your profile photo**
   - Replace `public/profile-photo.jpg` with your actual photo
   - Recommended size: 300x300 pixels
   - Format: JPG, PNG, or WebP

4. **Customize the content**
   - Edit `src/components/Header.tsx` to update your name and navigation
   - Edit `src/components/Hero.tsx` to update the hero section
   - Edit `src/components/Summary.tsx` to update your summary and social links
   - Edit `src/components/Projects.tsx` to add your projects
   - Edit `src/components/Writing.tsx` to add your articles

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Import your GitHub repository in Vercel
3. Vercel will automatically detect it's a Next.js project
4. Deploy with zero configuration!

## Customization

### Styling
- The project uses Tailwind CSS for styling
- Customize colors and fonts in `tailwind.config.js`
- Global styles are in `src/app/globals.css`

### Content
- All content is stored in the component files
- Update the data arrays in `Projects.tsx` and `Writing.tsx` to add your content
- Social links are in `Summary.tsx`

### Icons
- The project uses Lucide React for icons
- Browse available icons at [lucide.dev](https://lucide.dev/)

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Summary.tsx
│   ├── Projects.tsx
│   └── Writing.tsx
└── public/
    └── profile-photo.jpg
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Vercel** - Deployment platform

## License

This project is open source and available under the [MIT License](LICENSE). 