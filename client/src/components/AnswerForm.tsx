type AnswerFormProps = {
  userAnswer: number | null;
  setUserAnswer: (val: number | null) => void;
  setResult: (val: boolean | null) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

// Form for user to input an answer
const AnswerForm: React.FC<AnswerFormProps> = ({ userAnswer, setUserAnswer, setResult, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label className="text-3xl">x = </label>
      <input
        className="border border-gray-300 rounded p-2 w-24"
        type="number"
        value={userAnswer ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          setUserAnswer(value === "" ? null : Number(value)); // Prevent autofill with 0
          setResult(null); // Reset result when user types so the result message is not shown
        }}
        onWheel={(e) => e.currentTarget.blur()} // Prevents scrolling to change input
        required
      />
    </form>
  );
}

export default AnswerForm;