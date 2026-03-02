import { auth } from '@/lib/auth'
import { getTranslations } from 'next-intl/server'

export default async function Page() {
  const session = await auth()
  const firstName = session.user.name.split(' ').at(0)
  const t = await getTranslations('Account')

  return (
    <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
      {t('welcome')} {firstName}
    </h2>
  )
}
