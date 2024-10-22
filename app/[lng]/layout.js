import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Cairo, Afacad } from 'next/font/google';

const afacad = Afacad({
  subsets: ['latin'],
  weights: ['400', '700']
});

const cairo = Cairo({
  subsets: ['arabic'],
  weights: ['400', '700']
});



export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={`b-gray-50 ${lng === 'ar' ? cairo.className : afacad.className}`}>
        <AntdRegistry>
            {children}
          </AntdRegistry>
      </body>
    </html>
  )
}