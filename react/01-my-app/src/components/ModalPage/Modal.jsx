import React from 'react';
import './ModalPage.css'

function Modal({children, onCloseModal}) {
    return (
        <div className='overlay'>
            <div className='modal'>
                <button className='close-button' onClick={onCloseModal}>❌</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;