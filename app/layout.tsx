import type { Metadata, Viewport } from 'next';
import './globals.css';
import Sidebar from '../components/Sidebar';

export const metadata: Metadata = {
  title: 'Karanjit Singh - Principal Software Engineer',
  description: 'Portfolio of Karanjit Singh - Principal Software Engineer with 12+ years of expertise in Golang, cloud technologies, and system architecture.',
  authors: [{ name: 'Karanjit Singh' }],
  keywords: [
       'principal software engineer',
       'golang',
       'cloud architecture',
       'devops',
       'system architecture',
       'karanjitsingh',
       ],
   openGraph: {
     title: 'Karanjit Singh - Principal Software Engineer',
     description: 'Principal Software Engineer with 12+ years of expertise in Golang and cloud technologies.',
     type: 'website',
     url: 'https://karanparhar.github.io/',
     siteName: 'Karanjit Singh Portfolio',
     locale: 'en_US',
    },
   robots: 'index, follow',
   twitter: {
      card: 'summary_large_image',
      title: 'Karanjit Singh - Principal Software Engineer',
      description: 'Principal Software Engineer with 12+ years of expertise in Golang and cloud technologies.',
     },
 };

export const viewport: Viewport = {
   themeColor: '#0a0a08',
   width: 'device-width',
   initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className="scroll-smooth">
        <body className="antialiased">
          <div className="grain-overlay" />
          <div className="ambient-bg" />
          <Sidebar />
          <main className="relative z-10 ml-0 lg:ml-[20rem] min-h-screen">
            {children}
          </main>
        </body>
      </html>
    );
}
