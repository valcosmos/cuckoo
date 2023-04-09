import ClientProvider from '@/components/ClientProvider'
import DataProvider from '@/components/DataProvider'
import Header from '@/components/Header'
import PromptInput from '@/components/PromptInput'
import '@/styles/globals.css'

export const metadata = {
  title: 'Cuckoo',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DataProvider>
          <ClientProvider>
            {/* Header */}
            <Header />
            {/* prompt input*/}
            <PromptInput />
            {children}
          </ClientProvider>
        </DataProvider>
      </body>
    </html>
  )
}
