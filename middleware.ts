import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['en', 'es']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // 1. Verificar si el pathname ya tiene un locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // 2. Si no tiene, redirigir al default (es)
  const locale = 'es'
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // EXTREMADAMENTE IMPORTANTE: No procesar imágenes, íconos ni archivos de Next.js
  matcher: ['/((?!api|_next/static|_next/image|projects|logos|favicon.ico).*)'],
}