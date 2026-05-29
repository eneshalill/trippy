import "./card.css";
const Card = ({ photo, title1, text1 }) => {
  return (
    <div className="containertrips">
      <img src={photo} alt="4" />
      <h2>{title1}</h2>
      <p>{text1}</p>
    </div>
  );
};

export default Card;
