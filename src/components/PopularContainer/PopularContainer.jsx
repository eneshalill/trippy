import "./PopularContainer.css";

const PopularContainer = ({ title, text, firstImg, secImg, reverse}) => {
  return (
    // <div className={`popularcontainer ${reverse ? "reverse" : ""}`}>
    <div className={`popularcontainer ${reverse?"reverse":""}`}>
      <div className="txt">
        <h1> {title} </h1>
        <p>{text}</p>
      </div>
      <div className="images">
        <img src={firstImg} alt="1" />
        <img src={secImg} alt="2" />
      </div>
    </div>
  );
};

export default PopularContainer;
