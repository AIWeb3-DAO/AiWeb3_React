import Link from 'next/link'

import Image from 'next/image';

export default function Logo() {
  return (
    <figure aria-label="Cruip logo">
      <Image className="w-16 h-16" src="/images/aiweb3.jpg" alt="Cruip" width={32} height={32} />
      <figcaption>AiWeb3</figcaption>
    </figure>
  )
}
