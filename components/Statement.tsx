import React from 'react';

const Statement: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.3] text-gray-600">
          <span className="text-white">Akshara Digital Photo Studio</span> has been Nanded's trusted choice since <span className="text-white">2012</span>.
          We specialize in creative and reliable services, capturing life's
          <span className="italic text-white hover-trigger transition-colors duration-300"> special moments</span> to turn them into
          <span className="text-white hover-trigger transition-colors duration-300"> timeless masterpieces</span>.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {[
            { title: "Trusted Legacy", desc: "Serving Nanded since 2012 with a reputation for professionalism and high customer satisfaction." },
            { title: "Creative Vision", desc: "From weddings to fashion shoots, we bring a unique creative perspective to every frame we capture." },
            { title: "Excellence", desc: "Rated 4.9/5 by our customers for our reliable service and quality digital photography." }
          ].map((item) => (
            <div key={item.title} className="border-t border-white/20 pt-6">
              <h4 className="text-sm uppercase tracking-widest mb-4">{item.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statement;