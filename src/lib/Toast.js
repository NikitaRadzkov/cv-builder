import React from 'react';
import { toast, Slide } from 'react-toastify';
import { ToastUndo } from '@component';

const config = {
  position: 'bottom-left',
  autoClose: 7000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  transition: Slide,
};

const Toast = {
  showUndo: (id, data, type, message = 'item removed') => {
    toast.dismiss();
    toast(<ToastUndo itemId={id} data={data} message={message} type={type} />, config);
  },

  show: (message = '...') => {
    toast.dismiss();
    toast(message, config);
  },

  dismiss: () => {
    toast.dismiss();
  },
};

/* Export ================================ */
export default Toast;
