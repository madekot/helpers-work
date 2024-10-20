import SheetCalculator from '@/components/SheetCalculator/SheetCalculator';
import Head from 'next/head';

export default function SheetCalculatorPage() {
    return (
        <div>
            <Head >
                <link rel="apple-touch-icon" href="/calculator-apple-touch-icon.png" />
            </Head>
            <SheetCalculator />
        </div>
    );
}
