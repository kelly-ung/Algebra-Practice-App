type ResultProps = {
  result: boolean | null;
  wrongCount: number;
};

// Display the result of the user's answer
const ResultMessage: React.FC<ResultProps> = ({ result, wrongCount }) => {
  return (
    <div>
      {(result === true) && <p>Correct!</p>}
      {(result === false && wrongCount !== 3) && <p>Incorrect, try again!</p>}
    </div>
  );
}

export default ResultMessage;