import CabinList from '@/components/CabinList'
import { Suspense } from 'react'
import Filter from '../../components/Filter'
import ReservationReminder from '../../components/ReservationReminder'
import Spinner from '../../components/Spinner'
import { getTranslations } from 'next-intl/server'

// only work for statically generated pages
// because of searchParams, this now no longer take any effect
// export const revalidate = 3600

export default async function Page({ searchParams }) {
  const { capacity } = await searchParams
  const filter = capacity ?? 'all'
  const t = await getTranslations('Cabins')

  return (
    <div>
      <h1 className='text-4xl mb-5 text-accent-400 font-medium'>
        {t('header')}
      </h1>
      <p className='text-primary-200 text-lg mb-10'>
        {t('description')}
      </p>

      <div className='flex justify-end mb-8'>
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  )
}
