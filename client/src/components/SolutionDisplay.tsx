type SolutionProps = {
  show: boolean;
  a: number | null;
  b: number | null;
  c: number | null;
  x: number | null;
  operation: string;
  variable: string;
}

// Display the solution to the algebra equation
const SolutionDisplay: React.FC<SolutionProps> = ({ show, a, b, c, x, operation, variable }) => {
  return (
    <h1>
      TODO
    </h1>
  );
}

export default SolutionDisplay;