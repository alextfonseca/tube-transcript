import { AntdRegistry } from '@ant-design/nextjs-registry'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { theme } from '@/theme'
import './globals.css'

import { ConfigProvider } from 'antd'

import { UseTranscription } from '@/contexts/transcription.context'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tube Transcription',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ToastContainer />
          <ConfigProvider theme={theme}>
            <UseTranscription>{children}</UseTranscription>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
