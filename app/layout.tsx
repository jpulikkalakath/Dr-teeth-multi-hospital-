import type {Metadata} from 'next';
import './globals.css'; // Global styles
import DemoProtection from '@/components/DemoProtection';
import DemoOverlay from '@/components/DemoOverlay';

export const metadata: Metadata = {
  title: 'Dr. Teeth Dental Clinic',
  description: 'Premium multi-speciality dental clinic website in Kozhikode, Kerala.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <DemoProtection />
        <DemoOverlay />
        {children}
      </body>
    </html>
  );
}
