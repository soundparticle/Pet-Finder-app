const RightArrow = (props) => {
  return (
    <div onClick={props.goToNextSlide}>
      <i className="fas fa-arrow-right"></i>
    </div>
  );
};

export default RightArrow;