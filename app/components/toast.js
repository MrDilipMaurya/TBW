import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  return (
    <>
      <ToastContainer />
    </>
  );
};

export const showToast = (message, options = {}) => {
  toast(message, options);
};

export default Toast;
