type AnswerFormProps = {
  userAnswer: number | null;
  setUserAnswer: (val: number | null) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

// Form for user to input an answer
const AnswerForm: React.FC<AnswerFormProps> = ({ userAnswer, setUserAnswer, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>x = </label>
      <input
        className="border border-gray-300 rounded p-2"
        type="number"
        value={userAnswer ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          setUserAnswer(value === "" ? null : Number(value)); // Prevent autofill with 0
        }}
        onWheel={(e) => e.currentTarget.blur()} // Prevents scrolling to change input
      />
    </form>
  );
}

export default AnswerForm;