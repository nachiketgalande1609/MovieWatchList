const Modal = ({ onClose }) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>Close</button>
                <p>Click outside to close</p>
            </div>
        </div>,
        document.getElementById("portal-root")
    );
};
