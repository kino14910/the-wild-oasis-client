import { getCabins } from '@/lib/data-service'
import image1 from '@/public/about-1.jpg'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 86400

export async function generateMetadata() {
  const t = await getTranslations('About')
  return {
    title: t('About'),
  }
}

export default async function Page() {
  const cabinNum = (await getCabins()).length
  const t = await getTranslations('About')

  return (
    <div className='grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center'>
      <div className='col-span-3'>
        <h1 className='text-4xl mb-10 text-accent-400 font-medium'>
          {t('welcomeTitle')}
        </h1>

        <div className='space-y-8'>
          <p>{t('welcomeParagraph1')}</p>
          <p>{t('welcomeParagraph2')}</p>
          <p>{t('welcomeParagraph3')}</p>
        </div>
      </div>

      <div className='col-span-2'>
        <Image
          src={image1}
          alt={t('image1Alt')}
          placeholder='blur'
          quality={80}
        />
      </div>

      <div className='relative aspect-square col-span-2'>
        <Image
          src='/about-2.jpg'
          fill
          className='object-cover'
          alt={t('image2Alt')}
        />
      </div>

      <div className='col-span-3'>
        <h1 className='text-4xl mb-10 text-accent-400 font-medium'>
          {t('managedTitle')}
        </h1>

        <div className='space-y-8'>
          <p>{t('managedParagraph1')}</p>
          <p>{t('managedParagraph2')}</p>

          <div>
            <Link
              href='/cabins'
              className='inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all'
            >
              {t('exploreCabins')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
