import { useState, useEffect } from "react";
import axios from "axios";

import EquationDisplay from "./components/EquationDisplay";
import AnswerForm from "./components/AnswerForm";
import ResultMessage from "./components/ResultMessage";
import NextButton from "./components/NextButton";
import SolutionDisplay from "./components/SolutionDisplay";

type Equation = {
    a: number | null;
    b: number | null;
    c: number | null;
    x: number | null;
    operation: string;
    variable: string;
  };

function App() {
  const [equation, setEquation] = useState<Equation>({
    a: null,
    b: null,
    c: null,
    x: null,
    operation: "",
    variable: "",
  });
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [result, setResult] = useState<boolean | null>(null);
  const [wrongCount, setWrongCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  // Fetch a new equation from the server
  const fetchEquation = async () => {
    try {
      const response = await axios.get("http://localhost:5001/equation");
      // Reset state for new equation
      setWrongCount(0);
      setUserAnswer(null);
      setResult(null);
      
      // Update equation state with fetched data
      setEquation({
        a: response.data.a,
        b: response.data.b,
        c: response.data.c,
        x: response.data.x,
        operation: response.data.operation,
        variable: response.data.variable,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching equation:", error);
    }
  };

  // Fetch the first equation when the component mounts
  useEffect(() => {
    fetchEquation();
  }, []);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Check if the user's answer is correct
    if (userAnswer !== equation.x) {
      setResult(false);
      setWrongCount(wrongCount + 1);
    } else { 
      setResult(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Title</h1>
      {!loading && (
        <div>
          <EquationDisplay
            a={equation.a}
            b={equation.b}
            c={equation.c}
            operation={equation.operation}
            variable={equation.variable}
          />

          {(result || wrongCount === 3) ? (
            <p>x = {equation.x}</p>
          ) : (
            <AnswerForm
              userAnswer={userAnswer}
              setUserAnswer={setUserAnswer}
              handleSubmit={handleSubmit}
            />
          )}

          <ResultMessage result={result} wrongCount={wrongCount} />

          {/* Show Next button if user has answered incorrectly 3 times or answered correctly */}
          <NextButton show={wrongCount === 3 || result === true} onClick={fetchEquation} />
          
          {/* Show solution if user has answered incorrectly 3 times */}
          <SolutionDisplay 
            show={wrongCount === 3} 
            a={equation.a}
            b={equation.b}
            c={equation.c}
            x={equation.x}
            operation={equation.operation}
            variable={equation.variable}
          />
        </div>
      )}
    </div>
  );
}

export default App;