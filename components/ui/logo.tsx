import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/nexus_logo.svg"
      alt="Logo"
      width={32}
      height={32}
      className={className}
    />
  )
}
