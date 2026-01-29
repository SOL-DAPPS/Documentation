export const HeroCard = ({ title, description, image, href }) => {
  return (
    <a 
      href={href} 
      className="group block rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="aspect-video overflow-hidden bg-zinc-800">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </a>
  );
};

export const HeroSection = ({ title, subtitle, children }) => {
  return (
    <div className="relative -mx-6 -mt-6 px-6 pt-24 pb-16 mb-8 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/images/banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950" />
      <div className="relative text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg text-zinc-400">{subtitle}</p>
        {children}
      </div>
    </div>
  );
};
