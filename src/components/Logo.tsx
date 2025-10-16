const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://cdn.poehali.dev/projects/afad4840-81ff-41c7-af05-d5db6a5ab3a9/files/4a75b81e-73dc-48d9-9454-4a294b710111.jpg" 
        alt="US Logo"
        className="h-12 w-12 rounded-full object-cover"
      />
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