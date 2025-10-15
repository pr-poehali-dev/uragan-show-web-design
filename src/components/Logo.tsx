const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="relative">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 border-2 border-white/30 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <span className="text-2xl font-bold text-white font-heading drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            US
          </span>
        </div>
        <div className="absolute inset-0 rounded-lg bg-white/5 blur-md animate-pulse"></div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold text-white font-heading drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
          URAGAN
        </span>
        <span className="text-xs text-white/70 font-semibold tracking-wider">
          SHOW
        </span>
      </div>
    </div>
  );
};

export default Logo;