const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://cdn.poehali.dev/files/2e9e9085-d8b4-4d51-860a-ac9763acadea.png" 
        alt="URAGAN SHOW Logo"
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;