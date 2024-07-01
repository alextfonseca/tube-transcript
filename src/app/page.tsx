'use client'

// components
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { useTranscription } from '@/contexts/transcription.context'

export default function Home() {
  const { transcriptionText } = useTranscription()

  return (
    <main className="flex h-screen max-h-screen flex-col items-center">
      <Header />

      <div className="mt-6 grid h-full max-h-[70%] w-[90%] max-w-[1440px] grid-cols-home-container gap-4">
        <div className="h-full overflow-y-scroll rounded border border-zinc-800 p-6">
          <p className="text-base text-white" id={'transcriptionText'}>
            {transcriptionText ? transcriptionText : '...'}
          </p>
        </div>

        <Sidebar />
      </div>

      <Footer />
    </main>
  )
}
