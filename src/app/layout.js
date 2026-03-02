import '@/styles/globals.css'

import Header from '@/components/Header'
import { ReservationProvider } from '@/components/ReservationContext'
import { NextIntlClientProvider } from 'next-intl'
import { Josefin_Sans } from 'next/font/google'
import { cookies } from 'next/headers'
import { getTranslations } from 'next-intl/server'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export async function generateMetadata({ params }) {
  const t = await getTranslations('Layout')

  return {
    title: {
      template: `%s / ${t('siteName')}`,
      default: `${t('welcome')} / ${t('siteName')}`,
    },
    description: t('description'),
  }
}

export default async function RootLayout({ children }) {
  const store = await cookies()
  const locale = store.get('locale')?.value || 'zh'
  // const font = locale === 'en' ? josefin.className : misans.className

  return (
    <html lang={locale}>
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider>
          <Header />

          <div className='flex-1 px-8 py-12 grid'>
            <main className='max-w-7xl mx-auto w-full'>
              <ReservationProvider>{children}</ReservationProvider>
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
