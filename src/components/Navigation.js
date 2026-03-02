import Link from 'next/link'
import { auth } from '../lib/auth'
import LanguageSwitcher from './LanguageSwitcher'
import { getTranslations } from 'next-intl/server'

export default async function Navigation() {
  const session = await auth()
  const t = await getTranslations('Navigation')
  const navItem = [
    { name: t('cabins'), href: '/cabins' },
    { name: t('about'), href: '/about' },
  ]
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        {navItem.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className='hover:text-accent-400 transition-colors'
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <LanguageSwitcher />
        </li>
        {session?.user?.image ? (
          <Link
            href='/account'
            className='hover:text-accent-400 transition-colors flex items-center gap-4'
          >
            <img
              className='h-8 rounded-full'
              src={session.user.image}
              alt={session.user.name}
              referrerPolicy='no-referrer'
            />
            <span>{t('guestArea')}</span>
          </Link>
        ) : (
          <Link
            href='/account'
            className='hover:text-accent-400 transition-colors'
          >
            {t('guestArea')}
          </Link>
        )}
      </ul>
    </nav>
  )
}
