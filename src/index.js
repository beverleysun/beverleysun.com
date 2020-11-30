import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Blob } from 'react-blob';

ReactDOM.render(
  <React.StrictMode>
    <Blob size="80vh"
    style={{
      position: 'absolute',
        top: '10vh',
        right: 'calc(50vw - 40vh)',
        zIndex: -1,
        backgroundColor: '#21D4FD',
        color: 'white',
        opacity: 0.3,
        fontSize: '7em',
      }}

    > Coming Soon </Blob>
  </React.StrictMode>,
  document.getElementById('root')
);
