export function Divider() {
  return (
    <div className="relative w-full px-6 md:px-8 py-8">
      <div className="max-w-7xl mx-auto relative flex items-center justify-center">
        {/* Gradient Line */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        {/* Central Accent with Enhanced Glow */}
        <div className="relative z-10 h-2 w-2 rounded-full bg-primary shadow-[0_0_20px_8px_rgba(92,99,200,0.6)] animate-pulse"></div>
      </div>
    </div>
  );
}
