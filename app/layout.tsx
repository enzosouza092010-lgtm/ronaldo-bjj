import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vision Jiu Jitsu | Prof. Ronaldo Reis',
  description: 'Jiu-Jitsu para a vida em Caraguatatuba — disciplina, respeito e evolução.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
