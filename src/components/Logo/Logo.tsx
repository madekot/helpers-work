import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href={'https://t.me/Mikhail_Golubtsov'}>
            <Image
                src="/Mishka-I-Shishka-production.png"
                width={100}
                height={100}
                alt="Мишка И Шишка продакшен"
            />
        </Link>

    )
}

export default Logo