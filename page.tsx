export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to your Next.js App</h1>
        <p className="text-lg opacity-80 mb-8">
          Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-sm opacity-60">
          Get started by editing{" "}
          <code className="bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded">
            src/app/page.tsx
          </code>
        </p>
      </div>
    </main>
  );
}
