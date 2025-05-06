import css from "./ImageCard.module.css";

const ImageCard = ({ data, onClick }) => {
  if (!data?.src?.small) return null; 

  const { src, alt, photographer } = data;

  return (
    <div className={css.card} onClick={() => onClick(data)}>
      <img
        src={src.small}
        alt={alt || "Pexels photo"}
        className={css.image}
        loading="lazy"
        title={`By ${photographer}`}
      />
    </div>
  );
};

export default ImageCard;
