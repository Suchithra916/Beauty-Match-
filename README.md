# Next.js

A modern Next.js 15 application built with TypeScript and Tailwind CSS.

## 🚀 Features

- **Next.js 15** - Latest version with improved performance and features
- **React 19** - Latest React version with enhanced capabilities
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:4028](http://localhost:4028) with your browser to see the result.

## 📁 Project Structure

```
nextjs-app/
├── public/             # Static assets
├── src/
│   ├── app/            # App router components
│   │   ├── layout.tsx  # Root layout component
│   │   └── page.tsx    # Main page component
│   ├── components/     # Reusable UI components
│   ├── styles/         # Global styles and Tailwind configuration
├── next.config.mjs     # Next.js configuration
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## 📦 Available Scripts

- `npm run dev` - Start development server on port 4028
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run serve` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier

## 📱 Deployment

Build the application for production:

```bash
npm run build
```

Then deploy to [Vercel](https://vercel.com) for free hosting — push this repo to GitHub and import it in the Vercel dashboard.
