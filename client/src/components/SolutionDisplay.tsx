import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

type SolutionProps = {
  show: boolean;
  a: number | null;
  b: number | null;
  c: number | null;
  x: number | null;
  operation: string;
  variable: string;
};

// Display the solution to the algebra equation
const SolutionDisplay: React.FC<SolutionProps> = ({ show, a, b, c, x, operation, variable }) => {
  
  // Format the solution based on the equation
  const format = () => {
    // If any of the values are null, return an empty string
    if (a == null || b == null || c == null || x == null) return;

    if (operation === "+" && variable === "") {
      return `\\begin{align*}
                ${a}x + ${b} &= ${c} \\\\
                -${b} & \\ \\ \\ -${b} \\\\
                \\hline
                ${a}x &= ${c - b} \\\\
                \\frac{${a}x}{${a}} &= \\frac{${c - b}}{${a}} \\\\
                x &= ${x}
              \\end{align*}`;
    } else if (operation === "+" && variable === "x") {
      return `\\begin{align*}
                ${a}x + ${b}x &= ${c} \\\\
                ${a + b}x &= ${c} \\\\
                \\frac{${a + b}x}{${a + b}} &= \\frac{${c}}{${a + b}} \\\\
                x &= ${x}
              \\end{align*}`;
    } else if (operation === "-" && variable === "") {
      return `\\begin{align*}
                ${a}x - ${b} &= ${c} \\\\
                +${b} & \\ \\ \\ +${b} \\\\
                \\hline
                ${a}x &= ${c + b} \\\\
                \\frac{${a}x}{${a}} &= \\frac{${c + b}}{${a}} \\\\
                x &= ${x}
              \\end{align*}`;
    } else if (operation === "-" && variable === "x") {
      return `\\begin{align*}
                ${a}x - ${b}x &= ${c} \\\\
                ${a - b}x &= ${c} \\\\
                \\frac{${a - b}x}{${a - b}} &= \\frac{${c}}{${a - b}} \\\\
                x &= ${x}
              \\end{align*}`;
    }
  };

  return (
    <div>
      {show ? (
        <>
          <h1>Solution</h1>
          <BlockMath math={format() ?? ""} />
        </>
      ) : null}
    </div>
  );
};

export default SolutionDisplay;
