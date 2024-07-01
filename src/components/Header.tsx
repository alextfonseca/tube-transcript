import { GithubLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex w-full items-center justify-center border-b border-zinc-800 pb-2">
      <header className="flex w-[90%] max-w-[1440px] items-center justify-between py-4">
        <p className="text-2xl font-bold">TubeTranscription</p>

        <Link
          className="flex items-center gap-2 rounded-md border border-zinc-500 px-4 py-2 text-zinc-50 transition-all hover:bg-zinc-600"
          href={'https://github.com/alextfonseca/tube-transcript'}
          target={'_blank'}
        >
          <GithubLogo size={24} color={'#fff'} />
          Github
        </Link>
      </header>
    </div>
  )
}
