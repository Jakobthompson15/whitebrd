export function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neutral, lightweight background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      {/* Subtle vignette + overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
}
