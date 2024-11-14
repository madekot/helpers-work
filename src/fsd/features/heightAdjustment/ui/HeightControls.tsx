import styles from './HeightControls.module.scss';

interface HeightControlsProps {
    leftColumn: React.ReactNode
    middleColumn: React.ReactNode
    rightColumn: React.ReactNode
}

export const HeightControls: React.FC<HeightControlsProps> = ({ leftColumn: leftColum, rightColumn: rightColumn, middleColumn }) => {
    return (
        <div className={styles.heightControls}>
            <div className={styles.heightControlsColumn}>
                {leftColum}
            </div>
            <div className={styles.sheetsCount}>
                {middleColumn}
            </div>
            <div className={styles.heightControlsColumn}>
                {rightColumn}
            </div>
        </div>
    );
};