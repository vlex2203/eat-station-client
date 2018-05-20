import React from 'react';
import './Modal.css';

const Modal = ({marker, onClose}) => (
  <div className="modal show">
    <div className="modal-content">
      <h4>{marker.name}</h4>
      <p>Phone: {marker.phone}</p>
      <p className="restaurant-category">Category: {marker.category}</p>
    </div>
    <div className="modal-footer">
      <a onClick={onClose} className="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
);

export default Modal;
