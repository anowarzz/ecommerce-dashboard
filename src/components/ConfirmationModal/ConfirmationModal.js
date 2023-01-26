import React from 'react';

const ConfirmationModal = ({ title,
    message,
    closeModal,
    modalData,
    successAction,
    successButtonName,

  }) => {
    return (
        <div>
        <div>
          <input
            type="checkbox"
            id="confirmation-modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{title}</h3>
           
  
              <div className="modal-action">
                <label
                  onClick={() => successAction(modalData)}
                  htmlFor="confirmation-modal"
                  className="btn btn-error"
                >
                  {successButtonName}
                </label>
  
                <button onClick={closeModal}  className="btn btn-info mx-2">
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ConfirmationModal;