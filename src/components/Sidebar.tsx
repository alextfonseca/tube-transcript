'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'

// context
import { useTranscription } from '@/contexts/transcription.context'

// icons
import { Copy, MagicWand } from '@phosphor-icons/react'

// components
import { Button, Form, Input } from 'antd'
import { Player } from './Player'

export function Sidebar() {
  const { setTranscriptionText, transcriptionText } = useTranscription()

  const [videoUrl, setVideoUrl] = useState<string>('')

  const [urlIsInvalid, setUrlIsInvalid] = useState<boolean>(false)
  const [gettingData, setGettingData] = useState<boolean>(false)

  async function fetchTranscription() {
    if (!videoUrl) {
      return
    }
    setGettingData(true)
    setUrlIsInvalid(false)

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: videoUrl
        })
      })

      const data = await response.json()

      setTranscriptionText(data.data)
    } catch (error) {
      setUrlIsInvalid(true)
      toast.error('Erro ao buscar transcrição, verifique a URL do vídeo.')
    }
    setGettingData(false)
  }

  function handleCopyTranscription() {
    navigator.clipboard.writeText(transcriptionText)
    toast.success('Transcrição copiada para a área de transferência.')
  }

  return (
    <div>
      <Player videoUrl={videoUrl} />
      <Form className="mt-10 flex flex-col gap-2">
        <label
          className="text-base font-medium text-zinc-50"
          htmlFor="videoUrl"
        >
          URL do vídeo copiado do youtube
        </label>
        <Form.Item
          name={'videoUrl'}
          rules={[
            {
              required: true,
              message: 'Por favor, insira a URL do vídeo.'
            }
          ]}
        >
          <Input
            id={'videoUrl'}
            placeholder="
          https://www.youtube.com/watch?v=videoId
        "
            onChange={e => setVideoUrl(e.target.value)}
          />
        </Form.Item>
      </Form>
      <Button
        className="mt-4 w-full"
        onClick={fetchTranscription}
        disabled={!videoUrl || urlIsInvalid}
        loading={gettingData}
      >
        Executar <MagicWand size={20} />
      </Button>
      <button
        className="hover: mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-zinc-600 py-2 text-zinc-100 transition-colors duration-300 ease-in-out hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={!transcriptionText}
        onClick={handleCopyTranscription}
      >
        Copiar transcrição <Copy size={20} />
      </button>
    </div>
  )
}
