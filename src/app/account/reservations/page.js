import ReservationList from '@/components/ReservationList'
import { auth } from '@/lib/auth'
import { getBookings } from '@/lib/data-service'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export default async function Page() {
  const {
    user: { guestId },
  } = await auth()
  const bookings = await getBookings(guestId)
  const t = await getTranslations('Account')

  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
        {t('yourReservations')}
      </h2>

      {bookings.length === 0 ? (
        <p className='text-lg'>
          {t('noReservations')}{' '}
          <Link className='underline text-accent-500' href='/cabins'>
            {t('luxuryCabins')}
          </Link>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  )
}
