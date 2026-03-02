import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid'
import { useTranslations } from 'next-intl'
import { signOutAction } from '../lib/actions'

function SignOutButton() {
  const t = useTranslations('SignOut')
  return (
    <form action={signOutAction}>
      <button className='py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full'>
        <ArrowRightStartOnRectangleIcon className='h-5 w-5 text-primary-600' />
        <span>{t('signOut')}</span>
      </button>
    </form>
  )
}

export default SignOutButton
