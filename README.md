# BeautyMatch

A polished React + Vite front-end portfolio demo for personalized beauty e-commerce.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in your terminal.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to Vercel

1. Create a GitHub repository and upload this project.
2. Go to Vercel and import the repository.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

The included `vercel.json` enables SPA routing.

## Important

- This is a front-end demo/portfolio project.
- Product data, images, ratings and reviews are demo content.
- No real payments, email alerts, authentication or backend are included.
- User preferences, cart, wishlist and points use browser `localStorage`.
- Recommendations use a transparent rule-based score in `src/main.jsx`.
- Some demo product images use Unsplash image URLs; replace them with your own licensed/local assets if you want a fully self-contained deployment.
- Recommendations are for general informational purposes and are not medical advice.
