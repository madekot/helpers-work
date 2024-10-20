import SheetCalculator from '@/components/SheetCalculator/SheetCalculator';
import Head from 'next/head';

export default function SheetCalculatorPage() {
    return (
        <div>
            <Head >
                <link rel="manifest" href="/manifest-calculator.json" />
                <meta name="theme-color" content="#000000" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <link rel="apple-touch-icon" href="/calculator-apple-touch-icon.png" />
            </Head>
            <SheetCalculator />
        </div>
    );
}
