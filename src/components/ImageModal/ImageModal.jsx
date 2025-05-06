import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root"); // для доступності

const ImageModal = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  const { src, alt, photographer, url } = data;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeBtn} onClick={onClose}>✖</button>
      <img src={src.large} alt={alt} className={css.image} />
      <div className={css.caption}>
        <p>📷 By <a href={url} target="_blank" rel="noreferrer">{photographer}</a></p>
        <p className={css.alt}>{alt}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
