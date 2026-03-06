import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gembali Dinesh | Full Stack Developer & Software Engineer',
  description: 'Portfolio of Gembali Dinesh - Full Stack Developer, Software Engineer, and AI Enthusiast. Specializing in modern web development with React, Node.js, and cutting-edge technologies.',
  keywords: ['Gembali Dinesh', 'Full Stack Developer', 'Software Engineer', 'Web Developer', 'React', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Gembali Dinesh' }],
  creator: 'Gembali Dinesh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gembalidinesh.com',
    title: 'Gembali Dinesh | Full Stack Developer',
    description: 'Portfolio of Gembali Dinesh - Full Stack Developer & Software Engineer',
    siteName: 'Gembali Dinesh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gembali Dinesh | Full Stack Developer',
    description: 'Portfolio of Gembali Dinesh - Full Stack Developer & Software Engineer',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
