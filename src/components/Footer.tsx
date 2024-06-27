import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-auto w-[90%] max-w-[1440px] py-4">
      <div className="flex items-center gap-1">
        <p>Feito com 💜 por </p>
        <Link
          className="text-purple-400 underline transition-all hover:text-purple-500"
          href={'https://github.com/alextfonseca'}
          target={'_blank'}
        >
          Alex Teixeira da Fonseca
        </Link>
      </div>
    </footer>
  )
}
