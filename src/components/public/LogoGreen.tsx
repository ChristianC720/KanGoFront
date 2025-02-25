export default function Logo({
    variant = "default",
  }: {
    variant?: "default" | "green";
  }) {
    return (
      <div
        className={`select-none flex flex-col items-center justify-center text-2xl leading-none font-black ${variant == "default" ? "text-[#04843c]" : variant == "green" ? "text-[#04843c]" : ""}`}
      >
        <p>Kan</p>
        <p>Go!</p>
      </div>
    );
  }