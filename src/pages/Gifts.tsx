
import React from 'react';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gifts: React.FC = () => {
  return (
    <div className="animate-fade-in-up text-center">
      <h1 className="text-4xl font-serif text-primary mb-12">Liste de Cadeaux</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
        <p className="text-lg text-foreground/90 mb-4">
          Ce qui nous touche le plus, c’est de vous savoir à nos côtés pour célébrer cette journée.
        </p>
        <p className="text-foreground/80 mb-8">
          Pour ceux qui le souhaitent, les mariés mettront à disposition une urne le jour J afin de contribuer à leur voyage de noces et à leurs futurs projets.
          Merci d'avance pour vos gentilles attentions !
        </p>
        <p className="mt-8 text-sm text-muted-foreground">
          Votre présence et vos messages sont ce qui compte le plus pour nous. Merci infiniment !
        </p>
      </div>
    </div>
  );
};

export default Gifts;
