'use client'

// components
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { useTranscription } from '@/contexts/transcription.context'

export default function Home() {
  const { transcriptionText } = useTranscription()

  return (
    <main className="flex h-screen flex-col items-center lg:max-h-screen">
      <Header />

      <div className="mt-6 flex h-full w-[90%] max-w-[1440px] grid-cols-home-container flex-col-reverse gap-4 lg:grid lg:max-h-[70%]">
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
