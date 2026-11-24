import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'DuSi Pet Kuaför & PetShop | Gayrettepe, İstanbul',
  description: 'Gayrettepe’de kedi ve köpekler için anestezisiz pet kuaförlüğü, yıkama, tıraş, tüy ve hijyen bakımı. DuSi Pet Kuaför & PetShop ile randevu alın.',
  applicationName: 'DuSi Pet Kuaför & PetShop',
  keywords: ['DuSi Pet', 'pet kuaför', 'Gayrettepe pet kuaför', 'kedi kuaförü', 'köpek kuaförü', 'petshop Beşiktaş'],
  openGraph: {
    title: 'DuSi Pet Kuaför & PetShop',
    description: 'Her pati için, sevgiyle. Gayrettepe’de anestezisiz, özenli kedi ve köpek bakımı.',
    locale: 'tr_TR',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#faf8f1',
  colorScheme: 'light',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
