import React, { useState } from 'react';
import '../App.css';
import Modal from './Modal'; 

function TodoPages() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [isButtonEnabled, setIsButtonEnabled] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalInput, setModalInput] = useState('');
    const [modalIndex, setModalIndex] = useState(-1);

    const onChange = (event) => {
        setInput(event.target.value);
    };

    const receiveInput = (event) => {
        event.preventDefault();
        if (input.trim() === '') {
            return;
        }
        const newList = [...list, input];
        setList(newList);
        setInput('');
        setIsButtonEnabled([...isButtonEnabled, true]);
    };

    const editInput = (index) => {
        setModalIndex(index);
        setModalInput(list[index]);
        setShowModal(true);
    };

    const handleModalInputChange = (event) => {
        setModalInput(event.target.value);
    };

    const handleModalSave = () => {
        if (modalInput.trim() === '') {
            setIsButtonEnabled(new Array(list.length).fill(false));
            setShowModal(false);
            return;
        }
        const newList = [...list];
        newList[modalIndex] = modalInput;
        setList(newList);
        setIsButtonEnabled(new Array(list.length).fill(true));
        setShowModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <input type="text" placeholder="name" value={input} onChange={onChange}/>
            <button onClick={receiveInput} disabled={input.trim() === ''}>Добавить</button>

            {list.length > 0 ? (
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => editInput(index)} disabled={!isButtonEnabled[index]}>Поменять</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <h3>Список пуст</h3>
            )}

            {showModal && (
                <Modal
                    value={modalInput}
                    onChange={handleModalInputChange}
                    onSave={handleModalSave}
                    onCancel={handleCloseModal}
                />
            )}
        </div>
    );
}

export default TodoPages;
