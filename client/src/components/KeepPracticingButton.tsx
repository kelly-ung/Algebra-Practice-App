type KeepPracticingButtonProps = {
  onClick: () => void;
};

// Button to keep practicing questions
const KeepPracticingButton: React.FC<KeepPracticingButtonProps> = ({ onClick }) => {
  return (
    <button className="p-2 px-4 bg-bee-yellow hover:bg-amber-400 transform hover:scale-105 transition duration-300 rounded" onClick={onClick}>Keep Practicing</button>
  );
}

export default KeepPracticingButton;