import Button from '@/fsd/shared/ui/Button';
import { DECREMENT_ONE, DECREMENT_POINT_ONE, HEIGHT_INCREMENT_ONE, HEIGHT_INCREMENT_POINT_ONE } from '../model/constants';
import styles from './HeightControls.module.scss';

interface HeightControlsProps {
    decreaseHeight: (value: number) => void;
    increaseHeight: (value: number) => void;
    canDecreaseByOne: boolean;
    canDecreaseByPointOne: boolean;
    material: { label: string } | null;
    children: React.ReactNode
}

export const HeightControls: React.FC<HeightControlsProps> = ({ decreaseHeight, increaseHeight, canDecreaseByOne, canDecreaseByPointOne, material, children }) => {
    return (
        <div className={styles.heightControls}>
            <div className={styles.heightControlsColumn}>
                <Button onClick={() => decreaseHeight(DECREMENT_ONE)} disabled={!material || !canDecreaseByOne}>- {DECREMENT_ONE} cm</Button>
                <Button onClick={() => decreaseHeight(DECREMENT_POINT_ONE)} disabled={!material || !canDecreaseByPointOne}>- {DECREMENT_POINT_ONE} cm</Button>
            </div>
            <div className={styles.sheetsCount}>
                {children}
            </div>
            <div className={styles.heightControlsColumn}>
                <Button onClick={() => increaseHeight(HEIGHT_INCREMENT_ONE)} disabled={!material}>+ {HEIGHT_INCREMENT_ONE} cm</Button>
                <Button onClick={() => increaseHeight(HEIGHT_INCREMENT_POINT_ONE)} disabled={!material}>+ {HEIGHT_INCREMENT_POINT_ONE} cm</Button>
            </div>
        </div>
    );
};