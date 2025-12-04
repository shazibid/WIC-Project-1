'use client';

import { useState } from 'react';
import Navbar from '../../ui/nav';
import ThemeSwitcher from '../../ui/themeSwitcher';
import Link from 'next/link';
import InfoModal from '../../ui/infoModal';
import InteractiveAnatomy from '../../ui/interactiveAnatomy';
import '../stylesPets.css';

export default function CatsPage() {
  const [openModal, setOpenModal] = useState(null);

  const catInfo = {
    personalities: {
      title: 'Cat Personalities and Traits',
      summary: 'Cats are independent, curious, and playful companions with unique personalities that vary from social butterflies to quiet loners.',
      bullets: [
        'Each cat has a unique personality - some love attention while others prefer solitude',
        'Many cats are territorial and enjoy having their own space',
        'Cats have strong hunting instincts, even indoor cats will "hunt" toys',
        'Most cats thrive on routine and can get stressed by sudden changes',
        'Some cats are very social and love being around people',
        'Others prefer quiet time alone and may hide when overwhelmed'
      ],
      imageSrc: '/miltonCat.jpeg',
      imageAlt: 'A friendly cat showing personality traits'
    },
    breeds: {
      title: 'Cat Breeds and Lifespan',
      summary: 'There are many cat breeds with different characteristics, and indoor cats typically live longer than outdoor cats.',
      bullets: [
        'Common breeds include Persian, Maine Coon, Siamese, and American Shorthair',
        'Indoor cats typically live 12-18 years with proper care',
        'Outdoor cats may have shorter lifespans due to risks like traffic and disease',
        'Each breed has unique characteristics - some are more active, others more laid-back',
        'Mixed breed cats (moggies) are just as wonderful as purebreds',
        'Regular vet checkups help ensure your cat lives a long, healthy life'
      ],
      imageSrc: '/jellybeanCat.jpeg',
      imageAlt: 'Different cat breeds'
    },
    feeding: {
      title: 'What to Feed Your Cat',
      summary: 'Cats are obligate carnivores who need meat to survive, so feed them high-quality commercial cat food and always provide fresh water.',
      bullets: [
        'Cats are obligate carnivores - they MUST eat meat to survive',
        'Feed high-quality commercial cat food that meets nutritional needs',
        'Always provide fresh, clean water - cats prefer running water',
        'NEVER feed cats: chocolate, onions, garlic, grapes, or anything with caffeine',
        'These foods are toxic and can make cats very sick',
        'Kittens need special kitten food, adult cats need adult food',
        'Talk to your vet about the right amount to feed your cat'
      ],
      imageSrc: '/wilsonCat.jpeg',
      imageAlt: 'Cat eating food'
    },
    anatomy: {
      title: 'Basic Cat Anatomy',
      summary: 'Cats have amazing physical features like flexible spines, retractable claws, excellent night vision, and sensitive whiskers that help them navigate.',
      bullets: [
        'Cats have flexible spines that let them twist and turn easily',
        'Sharp retractable claws help them climb and defend themselves',
        'Excellent night vision helps them see in low light',
        'Sensitive whiskers help them navigate and sense their surroundings',
        'Ears can rotate independently to detect sounds from different directions',
        'Tails help with balance and communication - watch the tail to understand mood',
        'Cats have rough tongues perfect for grooming'
      ],
      imageSrc: '/miltonCat.jpeg',
      imageAlt: 'Cat anatomy features'
    },
    petting: {
      title: 'How to Pet a Cat',
      summary: 'Most cats enjoy being petted on their head, chin, and back, but always let the cat come to you and watch for signs they want you to stop.',
      bullets: [
        'Start slowly and let the cat come to you - don\'t force interaction',
        'Most cats enjoy being petted on their head, chin, and along their back',
        'Watch for signs they\'re enjoying it: purring, kneading, leaning into your hand',
        'Stop if you see: tail swishing, ears back, moving away, or hissing',
        'Some cats like belly rubs, but many don\'t - be careful!',
        'Respect when a cat wants to be left alone',
        'Each cat has different preferences - learn what your cat likes'
      ],
      imageSrc: '/jellybeanCat.jpeg',
      imageAlt: 'Person petting a cat'
    },
    affection: {
      title: 'How to Tell if Your Cat Likes You',
      summary: 'Signs your cat likes you include purring, slow blinking, kneading, bringing you toys, rubbing against you, and following you around.',
      bullets: [
        'Purring when you\'re near is a sign of contentment',
        'Slow blinking (cat kisses!) shows trust and affection',
        'Kneading with their paws is a sign of happiness',
        'Bringing you "gifts" like toys shows they care',
        'Rubbing against you marks you as part of their family',
        'Following you around means they want to be near you',
        'A cat that shows you their belly trusts you completely'
      ],
      imageSrc: '/wilsonCat.jpeg',
      imageAlt: 'Cat showing affection'
    }
  };

  return (
    <>
      <header>
        <div className="veryTop">
          <div className="themeSwitch"><ThemeSwitcher/></div>
          <div><Navbar/></div>
        </div>
        <h1>Feline Friends (Cats)</h1>
        <p>Click on a topic to learn more about caring for your cat</p>
      </header>

      <section className="container">
        <div className="info-buttons-grid">
          <button 
            className="info-button"
            onClick={() => setOpenModal('personalities')}
          >
            Cat Personalities and Traits
          </button>
          
          <button 
            className="info-button"
            onClick={() => setOpenModal('breeds')}
          >
            Cat Breeds and Lifespan
          </button>
          
          <button 
            className="info-button"
            onClick={() => setOpenModal('feeding')}
          >
            What to Feed Your Cat
          </button>
          
          <button 
            className="info-button"
            onClick={() => setOpenModal('petting')}
          >
            How to Pet a Cat
          </button>
          
          <button 
            className="info-button"
            onClick={() => setOpenModal('affection')}
          >
            How to Tell if Your Cat Likes You
          </button>
        </div>

        {/* Interactive Anatomy Section */}
        <InteractiveAnatomy
          title="Basic Cat Anatomy"
          imageSrc="/miltonCat.jpeg"
          imageAlt="Cat anatomy diagram"
          anatomyParts={[
            {
              id: 'whiskers',
              name: 'Whiskers',
              description: 'Sensitive whiskers help cats navigate and sense their surroundings, even in the dark.',
              x: 15,
              y: 30,
              width: 8,
              height: 8
            },
            {
              id: 'ears',
              name: 'Ears',
              description: 'Cats can rotate their ears independently to detect sounds from different directions.',
              x: 20,
              y: 15,
              width: 12,
              height: 12
            },
            {
              id: 'eyes',
              name: 'Eyes',
              description: 'Excellent night vision helps cats see in low light, perfect for hunting.',
              x: 25,
              y: 25,
              width: 10,
              height: 10
            },
            {
              id: 'spine',
              name: 'Flexible Spine',
              description: 'Cats have very flexible spines that let them twist and turn easily.',
              x: 50,
              y: 40,
              width: 15,
              height: 25
            },
            {
              id: 'claws',
              name: 'Retractable Claws',
              description: 'Sharp claws that can retract help cats climb and defend themselves.',
              x: 15,
              y: 70,
              width: 8,
              height: 8
            },
            {
              id: 'tail',
              name: 'Tail',
              description: 'Tails help with balance and communication - watch the tail to understand mood.',
              x: 50,
              y: 75,
              width: 8,
              height: 15
            },
            {
              id: 'tongue',
              name: 'Rough Tongue',
              description: 'Cats have rough tongues perfect for grooming their fur.',
              x: 30,
              y: 45,
              width: 8,
              height: 8
            }
          ]}
        />
        
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/pets">← Back to All Pets</Link>
        </div>
      </section>

      {/* Modals */}
      {openModal === 'personalities' && (
        <InfoModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
          {...catInfo.personalities}
        />
      )}
      
      {openModal === 'breeds' && (
        <InfoModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
          {...catInfo.breeds}
        />
      )}
      
      {openModal === 'feeding' && (
        <InfoModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
          {...catInfo.feeding}
        />
      )}
      
      {openModal === 'petting' && (
        <InfoModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
          {...catInfo.petting}
        />
      )}
      
      {openModal === 'affection' && (
        <InfoModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
          {...catInfo.affection}
        />
      )}
    </>
  );
}

// cats
// cats pesonalities and traits and breeds and lifespan
// cats eating what to eat what not to eat
// cat anatomy (very basic)
// where they like to be pet maybe??
// how to take care of cat
// what do cats like
// how to tell if cat likes you

// do the same for dogs

// maybe a page for adoption / buying pet resources
// recommended links page ^^ for this + any other important stuff for like parents idk
// basically all sources ^