type ProgressBarProps = {
  questionResults: (boolean | null)[];
};

// Display the progress bar based on the results of the questions
const ProgressBar: React.FC<ProgressBarProps> = ({ questionResults }) => {
  return (
    <div className="flex flex-row justify-center gap-2 mb-10">
       {questionResults.map((result, index) => (
            <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white tex-sm ${
                result === true
                ? 'bg-green-500' // Correct answer
                : result === false
                ? 'bg-red-500' // Incorrect answer
                : 'bg-gray-300' // Not answered yet
            }`}
            >
          {result === true ? '✓' : result === false ? '✗' : '?'}
        </div>
       ))}
    </div>
  );
};

export default ProgressBar;