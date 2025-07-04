import honeycomb from "../assets/honeycomb.png";

type LivesProps = {
  wrongCount: number;
};

// Display the number of lives left based on wrong answer count
const LivesDisplay: React.FC<LivesProps> = ({ wrongCount }) => {
    return (
        <div className="flex flex-row justify-center gap-2 mb-10">
            {[0, 1, 2].map((i) => (
                <img
                    key={i}
                    src={honeycomb}
                    alt="Honeycomb"
                    className={`w-6 h-auto ${wrongCount > i ? "grayscale" : ""}`} // Apply grayscale effect to honeycomb images based on wrong answer count
                />
            ))}
        </div>
    );
}

export default LivesDisplay;