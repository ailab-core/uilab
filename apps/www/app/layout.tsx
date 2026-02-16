import { RootProvider } from 'fumadocs-ui/provider/next';
import { Chiron_GoRound_TC } from 'next/font/google';
import { Toaster } from '@/registry/ionia/components/sonner';
import { ConfirmationProvider } from '@/registry/ionia/components/confirmation';
import './global.css';

const chiron = Chiron_GoRound_TC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
  adjustFontFallback: true,
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={chiron.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Toaster richColors />
        <ConfirmationProvider>
          <RootProvider>{children}</RootProvider>
        </ConfirmationProvider>
      </body>
    </html>
  );
}
