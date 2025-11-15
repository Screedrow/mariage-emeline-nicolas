
import React from 'react';
import { Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in-up text-center">
      <h1 className="text-4xl font-serif text-primary mb-12">Contactez-nous</h1>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <p className="text-lg text-foreground/90 mb-6">
          Pour toutes questions ou pour l'organisation de surprises pour le grand jour, n'hésitez pas à nous contacter ou à joindre nos témoins ou notre coordinatrice jour J.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start justify-center gap-3">
            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <span className="text-foreground text-left flex-1">
              Les Mariés :{' '}
              <a href="tel:+33783597252" className="text-primary hover:underline">
                07.83.59.72.52
              </a>
              {' '}&{' '}
              <a href="tel:+33687046269" className="text-primary hover:underline">
                06.87.04.62.69
              </a>
            </span>
          </div>
          <div className="flex items-start justify-center gap-3">
            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <span className="text-foreground text-left flex-1">
              Témoin - Valentine :{' '}
              <a href="tel:+33651902896" className="text-primary hover:underline">
                06.51.90.28.96
              </a>
            </span>
          </div>
          <div className="flex items-start justify-center gap-3">
            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <span className="text-foreground text-left flex-1">
              Témoin - Karine :{' '}
              <a href="tel:+33651902896" className="text-primary hover:underline">
                06.51.90.28.96
              </a>
            </span>
          </div>
          <div className="flex items-start justify-center gap-3">
            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <span className="text-foreground text-left flex-1">
              Témoin - Jérémy :{' '}
              <a href="tel:+33649585002" className="text-primary hover:underline">
                06.49.58.50.02
              </a>
            </span>
          </div>
          <div className="flex items-start justify-center gap-3">
            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <span className="text-foreground text-left flex-1">
              Témoin - Adrien :{' '}
              <a href="tel:+33682695852" className="text-primary hover:underline">
                06.82.69.58.52
              </a>
            </span>
          </div>
          <div className="flex items-start justify-center gap-3">
            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <span className="text-foreground text-left flex-1">
              Coordinatrice Jour J - Marie :{' '}
              <a href="tel:+33695588087" className="text-primary hover:underline">
                06.95.58.80.87
              </a>
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Nous avons hâte de partager ce moment avec vous !
        </p>
        {/* Optional: Add a simple contact form later if needed */}
      </div>
    </div>
  );
};

export default Contact;
