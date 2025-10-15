const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-white border-2 border-white">
        <span className="text-3xl font-bold text-background italic font-heading" style={{ fontStyle: 'italic' }}>
          US
        </span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold text-white font-heading">
          URAGAN
        </span>
        <span className="text-xs text-white/80 font-semibold tracking-wider">
          SHOW
        </span>
      </div>
    </div>
  );
};

export default Logo;