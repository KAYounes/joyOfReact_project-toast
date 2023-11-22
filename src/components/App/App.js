import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastShelf from '../ToastShelf/ToastShelf';
import ToastProvider from '../ToastProvider/ToastProvider';

function App() {

  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
      <ToastShelf />
    </ToastProvider>
  );
}

export default App;
