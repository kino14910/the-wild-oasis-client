import SelectCountry from '@/components/SelectCountry'
import UpdateProfileForm from '@/components/UpdateProfileForm'
import { auth } from '@/lib/auth'
import { getGuest } from '@/lib/data-service'
import { getTranslations } from 'next-intl/server'

export default async function Page() {
  const session = await auth()
  const guest = await getGuest(session.user.email)
  const t = await getTranslations('Account')

  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-400 mb-4'>
        {t('updateProfile')}
      </h2>

      <p className='text-lg mb-8 text-primary-200'>
        {t('profileDescription')}
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name='nationality'
          id='nationality'
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  )
}
