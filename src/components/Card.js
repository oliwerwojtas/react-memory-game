import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <img className="front" src={props.src} alt="card front" />
        <img className="back" src="/img/ball.png" alt="card back" />
      </div>
    </div>
  );
};

export default Card;
