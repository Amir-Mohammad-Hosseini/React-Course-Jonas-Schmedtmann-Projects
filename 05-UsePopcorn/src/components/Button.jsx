const Button = ({ onShow, isOpen }) => {
  return (
    <button className="btn-toggle" onClick={onShow}>
      {isOpen ? "–" : "+"}
    </button>
  );
};

export default Button;
