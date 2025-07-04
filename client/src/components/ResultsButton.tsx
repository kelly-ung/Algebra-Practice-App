type ResultsButtonProps = {
  show: boolean;
  onClick: () => void;
};

// Button to show a summary of questions correctly answered
const ResultsButton: React.FC<ResultsButtonProps> = ({ show, onClick }) => {
  return (
    show ? <button className="p-2 px-4 bg-bee-yellow hover:bg-amber-400 transform hover:scale-105 transition duration-300 rounded" onClick={onClick}>Results</button> : null
  );
}

export default ResultsButton;