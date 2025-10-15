const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="relative">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 border-2 border-primary backdrop-blur-sm shadow-[0_0_20px_rgba(227,30,36,0.6)]">
          <span className="text-2xl font-bold text-primary font-heading drop-shadow-[0_0_10px_rgba(227,30,36,0.8)]">
            US
          </span>
        </div>
        <div className="absolute inset-0 rounded-lg bg-primary/10 blur-md animate-pulse"></div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold text-primary font-heading drop-shadow-[0_0_10px_rgba(227,30,36,0.6)]">
          URAGAN
        </span>
        <span className="text-xs text-foreground/80 font-semibold tracking-wider">
          SHOW
        </span>
      </div>
    </div>
  );
};

export default Logo;
