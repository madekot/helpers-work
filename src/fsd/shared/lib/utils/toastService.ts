import { toast, ToastOptions, Flip } from 'react-toastify';

const defaultOptions: ToastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Flip
};

export const showSuccess = (message: string, options: ToastOptions = {}) => {
    toast.success(message, { ...defaultOptions, ...options });
};

export const showError = (message: string, options: ToastOptions = {}) => {
    toast.error(message, { ...defaultOptions, ...options });
};

export const showInfo = (message: string, options: ToastOptions = {}) => {
    toast.info(message, { ...defaultOptions, ...options });
};

export const showWarning = (message: string, options: ToastOptions = {}) => {
    toast.warning(message, { ...defaultOptions, ...options });
};