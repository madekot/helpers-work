import s from './Layout.module.scss';
import {ReactNode} from "react";

interface LayoutProps {
    title: ReactNode;
    materialSelect: ReactNode;
    buttonGroupDecrement: ReactNode;
    buttonGroupIncrement: ReactNode;
    sheetsCountLabel: ReactNode;
    heightRangeSlider: ReactNode;
    saveButton: ReactNode;
    calculationList: ReactNode;
    logo: ReactNode;
}

const Layout = (p: LayoutProps) => {
    return (
        <main>
            <section className={s.container}>
                {p.title}
                {p.materialSelect}
                <div className={s.heightControls}>
                    <div className={s.heightControlsColumn}>
                        {p.buttonGroupDecrement}
                    </div>
                    <div className={s.sheetsCount}>
                        {p.sheetsCountLabel}
                    </div>
                    <div className={s.heightControlsColumn}>
                        {p.buttonGroupIncrement}
                    </div>
                </div>
                {p.heightRangeSlider}
                {p.saveButton}
                {p.calculationList}
            </section>
            {p.logo}
        </main>
    )
}

export default Layout;