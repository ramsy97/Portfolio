import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center px-6">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="grid gap-8 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-accent">404</p>
            <h1 className="mt-5 text-2xl font-semibold tracking-tight">
              Page not found
            </h1>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-[52ch] text-[15px] leading-[1.75] text-muted-ink">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Head back to the homepage.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-canvas transition-colors hover:bg-accent-strong"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}