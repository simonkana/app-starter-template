export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 sm:p-24">
      <h1 className="text-4xl font-bold">🚀 App Starter</h1>
      <p className="sm:text-lg text-center">
        Welcome to your new Next.js app with Tailwind CSS & daisyUI 🌼
      </p>
      <article className="prose text-center my-4 glass p-8 rounded-box">
        <h2 className="text-2xl font-bold">Getting Started</h2>
        <p className="sm:text-lg">
          Edit <code>app/page.tsx</code> and save to reload.
        </p>
        <p className="sm:text-lg">
          Edit <code>app/layout.tsx</code> to change the layout.
        </p>
        <p className="sm:text-lg">
          Edit <code>tailwind.config.ts</code> to customize the theme.
        </p>
      </article>
      <footer className="text-sm text-gray-400">
        <p className="text-center">
          <span className="block mb-2 font-semibold text-base text-primary">
            App Starter v0.1
          </span>
          Made with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Next.js
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Tailwind CSS
          </a>{" "}
          &{" "}
          <a
            href="https://daisyui.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            daisyUI
          </a>{" "}
          <br />
          by{" "}
          <a
            href="https://github.com/teabookcodes/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-neutral-500"
          >
            @teabookcodes
          </a>
          <span className="block mt-2">&copy; {currentYear}</span>
        </p>
      </footer>
    </main>
  );
}
