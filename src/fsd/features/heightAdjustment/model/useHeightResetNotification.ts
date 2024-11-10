import { useEffect } from 'react';
import { notifyResetHeight } from './notifications';

export const useHeightResetNotification = (
    height: number,
    material: unknown,
) => {
    useEffect(() => {
        if (height) {
            notifyResetHeight();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [material]);
};
