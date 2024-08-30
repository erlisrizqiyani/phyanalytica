import createMiddleware from 'next-intl/middleware';
import { routing } from './routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames, including /solution
  matcher: ['/', '/(de|en)/:path*',
    '/solution','/(de|en)/solution/:path*',
    '/portfolio', '/(de|en)/portfolio/:path*'  ]
};
