import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Automating Policy Modeling with Multi-Agent AI',
  description: 'How PolicyEngine built a multi-agent system that encodes tax and benefit policy into code',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
