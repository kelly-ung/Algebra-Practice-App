type SummaryProps = {
  correctCount: number;
};

// Display summary of questions correctly answered
const Summary: React.FC<SummaryProps> = ({ correctCount }) => {
  return (
    <div className="text-3xl font-bold mb-10">
      <h1>{correctCount} out of 5 Correct</h1>
    </div>
  );
};

export default Summary;