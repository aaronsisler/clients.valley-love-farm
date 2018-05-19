import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const __templateModal = (props) => (
    <Modal
        isOpen={!!props.isModalOpen}
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
        className="template_modal"
        appElement={document.getElementById('app')}
    >
        {props.isModalOpen && (
            <section>
                <div className="close_modal">
                    <span className="close_modal_span" onClick={props.closeModal}>&times;</span>
                </div>
                <div className="template_modal_content">
                <h1>
                    Template Modal Content
                </h1>
                </div>
            </section>
        )}
    </Modal>
);

__templateModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.any.isRequired,
};

export default __templateModal;
