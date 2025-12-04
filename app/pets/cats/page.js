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
      dos: [
        'Feed high-quality commercial cat food that meets nutritional needs',
        'Remember cats are obligate carnivores - they MUST eat meat to survive',
        'Always provide fresh, clean water - cats prefer running water',
        'Give kittens special kitten food for proper growth',
        'Feed adult cats appropriate adult cat food',
        'Talk to your vet about the right amount to feed your cat'
      ],
      donts: [
        'NEVER feed cats chocolate - it\'s toxic and can be fatal',
        'NEVER feed cats onions or garlic - they damage red blood cells',
        'NEVER feed cats grapes or raisins - they can cause kidney failure',
        'NEVER feed cats anything with caffeine - it\'s extremely toxic',
        'Don\'t feed table scraps that may contain harmful ingredients',
        'Don\'t overfeed - follow portion guidelines to prevent obesity'
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
      dos: [
        'Start slowly and let the cat come to you - don\'t force interaction',
        'Pet cats on their head, chin, and along their back - these are usually safe spots',
        'Watch for positive signs: purring, kneading, leaning into your hand, slow blinking',
        'Respect when a cat wants to be left alone',
        'Learn what your individual cat likes - each cat has different preferences'
      ],
      donts: [
        'Don\'t force interaction - let the cat come to you first',
        'Don\'t pet a cat that is showing signs of discomfort: tail swishing, ears back, moving away, or hissing',
        'Don\'t immediately go for belly rubs - many cats don\'t like them, be careful!',
        'Don\'t approach a cat from behind or suddenly - this can startle them',
        'Don\'t continue petting if the cat shows any signs of wanting to stop',
        'Don\'t pet a cat that is eating, sleeping, or seems stressed'
      ],
      imageSrc: '/jellybeanCat.jpeg',
      imageAlt: 'Person petting a cat'
    },
    affection: {
      title: 'How to Tell if Your Cat Likes You',
      summary: 'Signs your cat likes you include purring, slow blinking, kneading, bringing you toys, rubbing against you, and following you around.',
      dos: [
        'YES - Purring when you\'re near is a sign of contentment',
        'YES - Slow blinking (cat kisses!) shows trust and affection',
        'YES - Kneading with their paws is a sign of happiness',
        'YES - Bringing you "gifts" like toys shows they care',
        'YES - Rubbing against you marks you as part of their family',
        'YES - Following you around means they want to be near you',
        'YES - A cat that shows you their belly trusts you completely'
      ],
      donts: [],
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
          imageSrc="/catAnatomy.png"
          imageAlt="Cat anatomy diagram"
          anatomyParts={[
            {
              id: 'whiskers',
              name: 'Whiskers',
              description: 'Sensitive whiskers help cats navigate and sense their surroundings, even in the dark.',
              x: 90,
              y: 30
            },
            {
              id: 'ears',
              name: 'Ears',
              description: 'Cats can rotate their ears independently to detect sounds from different directions.',
              x: 77,
              y: 15
            },
            {
              id: 'eyes',
              name: 'Eyes',
              description: 'Excellent night vision helps cats see in low light, perfect for hunting.',
              x: 90,
              y: 25
            },
            {
              id: 'spine',
              name: 'Flexible Spine',
              description: 'Cats have very flexible spines that let them twist and turn easily.',
              x: 45,
              y: 25
            },
            {
              id: 'claws',
              name: 'Retractable Claws',
              description: 'Sharp claws that can retract help cats climb and defend themselves.',
              x: 75,
              y: 67
            },
            {
              id: 'tail',
              name: 'Tail',
              description: 'Tails help with balance and communication - watch the tail to understand mood.',
              x: 9,
              y: 33
            },
            {
              id: 'tongue',
              name: 'Rough Tongue',
              description: 'Cats have rough tongues perfect for grooming their fur.',
              x: 87,
              y: 35
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