import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-black py-20 px-6 min-h-[70vh] flex flex-col justify-between sticky bottom-0 z-0">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="max-w-md">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-6">Studio Address</h2>
          <address className="not-italic text-lg font-serif mb-6 leading-relaxed">
            Near Hanuman Mandir,<br />
            Gokul Nagar, Nanded,<br />
            Maharashtra
          </address>
          <h2 className="text-xs font-bold uppercase tracking-widest mb-2">Inquiries</h2>
          <p className="text-lg font-serif opacity-70">Visit our studio for packages and booking details.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-bold uppercase tracking-widest">Connect</h2>
          <div className="flex gap-8">
            {['Instagram', 'Facebook', 'Justdial'].map(social => (
              <a key={social} href="#" className="text-xs uppercase tracking-widest hover:line-through transition-all hover-trigger">{social}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="font-serif italic text-[10vw] md:text-[12vw] leading-none tracking-tighter text-center opacity-100 whitespace-nowrap">
          Akshara Digital
        </h1>
        <div className="flex justify-between items-end mt-4 text-[10px] uppercase tracking-widest border-t border-black pt-4">
          <span>© 2024 Akshara Digital Photo Studio</span>
          <span>Established 2012</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;