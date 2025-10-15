const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-white border-2 border-white">
        <span className="text-4xl font-bold text-background font-bebas tracking-tight" style={{ fontStyle: 'italic' }}>
          US
        </span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-3xl font-bebas text-white tracking-wider">
          URAGAN
        </span>
        <span className="text-sm text-white/90 font-bebas tracking-[0.3em]">
          SHOW
        </span>
      </div>
    </div>
  );
};

export default Logo;