'use client'
import { LanguageIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LanguageSwitcher() {
  const router = useRouter()
  const [locale, setLocale] = useState('zh')

  useEffect(() => {
    // Get the current locale from cookies
    const getLocale = async () => {
      try {
        const response = await fetch('/api/locale')
        const data = await response.json()
        setLocale(data.locale)
      } catch (error) {
        console.error('Failed to get locale:', error)
      }
    }
    getLocale()
  }, [])

  const toggleLocale = async () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh'
    setLocale(newLocale)

    // Update locale via API
    try {
      await fetch('/api/locale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ locale: newLocale }),
      })
      // Refresh the page to apply the new locale
      router.refresh()
    } catch (error) {
      console.error('Failed to update locale:', error)
    }
  }

  const isZH = locale === 'zh'
  return (
    <button
      onClick={toggleLocale}
      className='relative p-1 hover:text-accent-400 transition-colors'
      title={isZH ? 'Switch to English' : '切换到英文'}
    >
      <LanguageIcon className='h-6 w-6' />
      <span
        className={`absolute bottom-0 ${isZH ? '-right-2' : '-right-3'} text-xs font-bold hover:text-accent-400 transition-colors rounded-full w-4 h-4 flex items-center justify-center`}
      >
        {isZH ? '中' : 'EN'}
      </span>
    </button>
  )
}
