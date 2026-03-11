import React, {useState} from 'react';
import './ModalPage.css'
import Modal from "./Modal.jsx";

function ModalPage(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div className='modal-page'>
            <button className='open-button' onClick={toggleModal}>Показать модальное окно</button>
            {isModalOpen && <Modal onCloseModal={toggleModal}>
                <h2 style={{color: "black"}}>Заголовок (модальное окно)</h2>
                <p style={{color: "black"}}>Содержимое (модальное окно)</p>
            </Modal>}

        </div>
    );
}



export default ModalPage;