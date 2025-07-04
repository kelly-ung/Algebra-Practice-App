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
    <h1 className="text-3xl font-bold mb-10">
      {a}x {operation} {b}{variable} = {c}
    </h1>
  );
}

export default EquationDisplay;