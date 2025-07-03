type NextButtonProps = {
  show: boolean;
  onClick: () => void;
};

// Button to go to the next question
const NextButton: React.FC<NextButtonProps> = ({ show, onClick }) => {
  return (
    show ? <button onClick={onClick}>Next</button> : null
  );
}

export default NextButton;