import { cookies } from 'next/headers'

export async function GET() {
  const store = await cookies()
  const locale = store.get('locale')?.value || 'zh'

  return Response.json({ locale })
}

export async function POST(request) {
  const { locale } = await request.json()

  const store = await cookies()
  store.set('locale', locale)

  return Response.json({ success: true, locale })
}
