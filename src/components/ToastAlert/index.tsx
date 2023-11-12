import { ToastContainer } from 'react-toastify';

export function ToastAlert({ ...rest }) {
  return (
    <ToastContainer
      theme="colored"
      limit={2}
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      {...rest}
    />
  );
}
