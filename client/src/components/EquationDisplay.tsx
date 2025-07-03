type EquationProps = {
  a: number | null;
  b: number | null;
  c: number | null;
  operation: string;
  variable: string;
}

// Display the algebra equation
const EquationDisplay: React.FC<EquationProps> = ({ a, b, c, operation, variable }) => {
  return (
    <h1>
      {a}{variable} {operation} {b}x = {c}
    </h1>
  );
}

export default EquationDisplay;