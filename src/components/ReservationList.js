'use client'
import { useOptimistic } from 'react'
import { deleteBooking } from '../lib/actions'
import ReservationCard from './ReservationCard'

function ReservationList({ bookings }) {
  const [optimisicBookings, optimisicDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) =>
      curBookings.filter(booking => booking.id !== bookingId),
  )

  async function handleDelete(bookingId) {
    optimisicDelete(bookingId)
    await deleteBooking(bookingId)
  }

  return (
    <ul className='space-y-6'>
      {bookings.map(booking => (
        <ReservationCard
          onDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  )
}

export default ReservationList
