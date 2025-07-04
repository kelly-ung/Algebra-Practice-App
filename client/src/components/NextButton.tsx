type NextButtonProps = {
  show: boolean;
  onClick: () => void;
};

// Button to go to the next question
const NextButton: React.FC<NextButtonProps> = ({ show, onClick }) => {
  return (
    show ? <button className="p-2 px-4 bg-[#f1bc68] hover:bg-amber-400 transform hover:scale-105 transition duration-300 rounded" onClick={onClick}>Next</button> : null
  );
}

export default NextButton;