import Link from 'next/link';

export default function NotFound() {
  return (
      <main className="min-h-screen flex items-center justify-center bg-bg-deep relative overflow-hidden px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-accent/[0.02]" />
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-accent/3 blur-3xl pointer-events-none" />

          <div className="text-center relative z-10">
              <h1 className="font-heading text-[120px] md:text-[200px] font-bold text-text-primary leading-none">
                  4<span className="text-accent">0</span>4
              </h1>

              <h2 className="font-heading text-2xl md:text-4xl font-bold text-text-primary mt-4 mb-4 tracking-tight">
                  Page Not Found
              </h2>

              <p className="text-text-secondary/70 text-lg md:text-xl max-w-md mx-auto mb-10">
                  The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>

              <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent/10 text-accent rounded-lg font-heading font-semibold text-sm hover:bg-accent/15 border border-accent/20 transition-all duration-300"
              >
                  Go Home
              </Link>

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                  <Link href="/#about" className="text-text-muted/60 hover:text-accent transition-colors">
                      About
                  </Link>
                  <span className="text-text-muted/30">/</span>
                  <Link href="/#experience" className="text-text-muted/60 hover:text-accent transition-colors">
                      Experience
                  </Link>
                  <span className="text-text-muted/30">/</span>
                  <Link href="/#projects" className="text-text-muted/60 hover:text-accent transition-colors">
                      Projects
                  </Link>
                  <span className="text-text-muted/30">/</span>
                  <Link href="/#contact" className="text-text-muted/60 hover:text-accent transition-colors">
                      Contact
                  </Link>
              </div>
          </div>
      </main>
    );
}
