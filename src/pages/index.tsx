import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href={'./sheet-calculator'}>Калькулятор листов</Link>
        </li>
      </ul>
    </>
  );
}
