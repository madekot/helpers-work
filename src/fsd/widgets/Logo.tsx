import clsx from 'clsx';
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    className?: string;
}

export const Logo = ({ className }: Props) => {
    return (
        <Link className={clsx(className)} href={'https://t.me/+vHUsZ-G5YN82ZmYy'}>
            <Image
                src="/Mishka-I-Shishka-production.png"
                width={100}
                height={100}
                alt="Мишка И Шишка продакшен"
            />
        </Link>

    )
}