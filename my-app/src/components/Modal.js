import React from 'react';

function Modal({ value, onChange, onSave, onCancel }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <input type="text" value={value} onChange={onChange}/>
                <button onClick={onSave}>Сохранить</button>
                <button onClick={onCancel}>Отмена</button>
            </div>
        </div>
    );
}

export default Modal;
