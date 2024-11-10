import { showInfo, showSuccess } from '@/fsd/shared/lib/utils/toastService';

export const notifySaveSuccess = () => {
    showSuccess('Расчет успешно сохранен!');
};

export const notifySaveAlready = () => {
    showInfo('Вы уже сохранили этот расчет!');
};