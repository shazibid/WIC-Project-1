'use client';

// test push comment -- delete later

import { useState } from 'react';
import Navbar from '../../ui/nav';
import ThemeSwitcher from '../../ui/themeSwitcher';
import Link from 'next/link';
import InfoModal from '../../ui/infoModal';
import InteractiveAnatomy from '../../ui/interactiveAnatomy';
import '../stylesPets.css';

export default function DogsPage() {
  const [openModal, setOpenModal] = useState(null);

  const dogInfo = {
    personalities: {
      title: 'Dog Personalities and Traits',
      summary: 'Dogs are loyal, social animals that thrive on companionship and come in all shapes and sizes, each with unique personalities.',
      bullets: [
        'Dogs are pack animals and form strong bonds with their families',
        'Many dogs are energetic and need regular exercise and playtime',
        'Some dogs are more laid-back and prefer quiet activities',
        'Each dog has a unique personality - some are shy, others are outgoing',
        'Dogs are very social and usually love being around people',
        'They communicate through body language, barking, and tail wagging',
        'Dogs need mental stimulation as well as physical exercise'
      ],
      imageSrc: '/mulliganDog.jpeg',
      imageAlt: 'A friendly dog showing personality traits'
    },
    breeds: {
      title: 'Dog Breeds and Lifespan',
      summary: 'There are hundreds of dog breeds from tiny Chihuahuas to giant Great Danes, and smaller breeds typically live longer than larger breeds.',
      bullets: [
        'Smaller breeds often live 12-16 years with proper care',
        'Larger breeds typically live 8-12 years',
        'Popular breeds include Labrador Retrievers, Golden Retrievers, German Shepherds, and French Bulldogs',
        'Each breed has different energy levels, grooming needs, and temperaments',
        'Mixed breed dogs (mutts) are wonderful companions too',
        'Research breeds before choosing to find one that fits your lifestyle',
        'Regular vet checkups help ensure your dog lives a long, healthy life'
      ],
      imageSrc: '/zoeDog.jpeg',
      imageAlt: 'Different dog breeds'
    },
    feeding: {
      title: 'What to Feed Your Dog',
      summary: 'Feed your dog high-quality commercial dog food appropriate for their age, size, and activity level, and always provide fresh water.',
      dos: [
        'Feed high-quality commercial dog food that meets nutritional needs',
        'Give puppies special puppy food for proper growth',
        'Provide senior dogs with senior formulas with appropriate nutrients',
        'Always provide fresh, clean water daily',
        'Talk to your vet about the right amount and type of food for your dog',
        'Watch for signs of food allergies like itching or stomach upset'
      ],
      donts: [
        'NEVER feed dogs chocolate - it\'s toxic and can be fatal',
        'NEVER feed dogs grapes or raisins - they can cause kidney failure',
        'NEVER feed dogs onions or garlic - they damage red blood cells',
        'NEVER feed dogs foods with xylitol (sugar-free gum, candy) - it\'s extremely toxic',
        'Don\'t feed table scraps that may contain harmful ingredients',
        'Don\'t overfeed - follow portion guidelines to prevent obesity'
      ],
      imageSrc: '/brieDog.png',
      imageAlt: 'Dog eating food'
    },
    anatomy: {
      title: 'Basic Dog Anatomy',
      summary: 'Dogs have powerful senses of smell, excellent hearing, strong jaws, and use their body language to communicate how they\'re feeling.',
      bullets: [
        'Dogs have powerful senses of smell - much stronger than humans',
        'Excellent hearing helps them detect sounds we can\'t hear',
        'Good vision helps them see movement and navigate',
        'Strong jaws are perfect for chewing toys and food',
        'Padded paws help them walk comfortably on different surfaces',
        'Tails help with balance and communication - watch the tail to understand mood',
        'Body language (tail position, ear position, posture) tells you how they feel',
        'Dogs have 42 teeth - puppies have 28 baby teeth that fall out'
      ],
      imageSrc: '/mulliganDog.jpeg',
      imageAlt: 'Dog anatomy features'
    },
    petting: {
      title: 'How to Pet a Dog',
      summary: 'Most dogs love being petted! Start by letting the dog sniff your hand, then gently pet their chest, shoulders, or back.',
      dos: [
        'Always ask the owner before petting a dog you don\'t know',
        'Let the dog sniff your hand first - this is how they say hello',
        'Gently pet their chest, shoulders, or back - these are usually safe spots',
        'Watch for positive body language: leaning into your hand, wagging tail, relaxed posture',
        'Respect when a dog wants to be left alone',
        'Learn what your individual dog likes - each dog has different preferences'
      ],
      donts: [
        'Don\'t approach a dog from behind or suddenly - this can startle them',
        'Don\'t pet a dog on the head immediately - let them get comfortable first',
        'Don\'t continue petting if the dog shows discomfort: growling, moving away, or stiffening',
        'Don\'t force belly rubs - not all dogs like them, watch their body language',
        'Don\'t stare directly into a dog\'s eyes - this can be seen as threatening',
        'Don\'t pet a dog that is eating, sleeping, or caring for puppies'
      ],
      imageSrc: '/joeyDog.png',
      imageAlt: 'Person petting a dog'
    },
    affection: {
      title: 'How to Tell if Your Dog Likes You',
      summary: 'Signs your dog likes you include wagging tail, bringing you toys, following you around, leaning against you, and getting excited when you come home.',
      dos: [
        'YES - Wagging tail (especially a relaxed, full-body wag) shows happiness',
        'YES - Bringing you toys is a sign of trust and wanting to play',
        'YES - Following you around means they want to be near you',
        'YES - Leaning against you shows they feel safe and comfortable',
        'YES - Licking you is a sign of affection (dog kisses!)',
        'YES - Getting excited when you come home shows they missed you',
        'YES - Relaxed ears and a soft, open mouth indicate a happy, comfortable dog',
        'YES - Dogs that show you their belly trust you completely'
      ],
      donts: [],
      imageSrc: '/zoeDog.jpeg',
      imageAlt: 'Dog showing affection'
    }
  };

  return (
    <div className="page">
      <header>
        <div className="veryTop">
          <div className="themeSwitch"><ThemeSwitcher/></div>
          <div><Navbar/></div>
        </div>
        <h1 style={{fontSize: 60}}>Canine Companions (Dogs)</h1>
        <p>Click on a topic to learn more about caring for your dog!</p>
      </header>

      <section className="container">
        <div className="info-buttons-grid">
          <button 
            className="info-button"
            onClick={() => setOpenModal('personalities')}
          >
            Dog Personalities and Traits
          </button>
          
          <button 
            className="info-button"
            onClick={() => setOpenModal('breeds')}
          >
            Dog Breeds and Lifespan
          </button>
          
          <button 
            className="info-button"
            onClick={() => setOpenModal('feeding')}
          >
            What to Feed Your Dog
          </button>
          
          <button 
            className="info-button"
            onClick={() => setOpenModal('petting')}
          >
            How to Pet a Dog
          </button>
          
          <button 
            className="info-button"
            onClick={() => setOpenModal('affection')}
          >
            Signs Your Dog Likes You
          </button>
        </div>

        {/* Interactive Anatomy Section */}
        <InteractiveAnatomy
          title="Basic Dog Anatomy"
          imageSrc="/dogAnatomy.png"
          imageAlt="Dog anatomy diagram showing different body parts"
          anatomyParts={[
            {
              id: 'nose',
              name: 'Nose',
              description: 'Dogs have powerful senses of smell - much stronger than humans! They can detect scents we can\'t even imagine. Their nose has up to 300 million scent receptors compared to our 6 million.',
              x: 10,
              y: 20
            },
            {
              id: 'ears',
              name: 'Ears',
              description: 'Excellent hearing helps dogs detect sounds we can\'t hear. Dogs can hear frequencies up to 65,000 Hz (humans only hear up to 20,000 Hz). Watch ear position to understand their mood!',
              x: 25,
              y: 20
            },
            {
              id: 'eyes',
              name: 'Eyes',
              description: 'Good vision helps dogs see movement and navigate. They can see better in dim light than humans, but see fewer colors. Dogs have a wider field of vision - about 240 degrees!',
              x: 15,
              y: 17
            },
            {
              id: 'jaws',
              name: 'Strong Jaws',
              description: 'Strong jaws are perfect for chewing toys and food. Dogs have 42 teeth - puppies have 28 baby teeth that fall out. Their jaw strength varies by breed.',
              x: 20,
              y: 30
            },
            {
              id: 'heart',
              name: 'Heart',
              description: 'A dog\'s heart pumps blood throughout their body. Smaller dogs have faster heart rates (100-140 beats per minute) than larger dogs (60-100 beats per minute).',
              x: 35,
              y: 35
            },
            {
              id: 'lungs',
              name: 'Lungs',
              description: 'Dogs breathe faster than humans - about 10-30 breaths per minute. Their lungs help bring oxygen to their body, especially important during exercise!',
              x: 45,
              y: 30
            },
            {
              id: 'spine',
              name: 'Spine',
              description: 'A dog\'s spine is flexible and strong, allowing them to run, jump, and twist. It protects the spinal cord which sends messages between the brain and body.',
              x: 50,
              y: 25
            },
            {
              id: 'stomach',
              name: 'Stomach',
              description: 'A dog\'s stomach is where food digestion begins. Dogs have shorter digestive tracts than humans, which is why they digest food faster.',
              x: 53,
              y: 40
            },
            {
              id: 'legs',
              name: 'Legs',
              description: 'A dog\'s legs are powerful and built for running. The front legs carry about 60% of their weight, while the back legs provide propulsion for running and jumping.',
              x: 65,
              y: 50
            },
            {
              id: 'paws',
              name: 'Padded Paws',
              description: 'Padded paws help dogs walk comfortably on different surfaces like hot pavement or rough terrain. The pads act like shock absorbers and provide grip.',
              x: 17,
              y: 57
            },
            {
              id: 'tail',
              name: 'Tail',
              description: 'Tails help with balance and communication - watch the tail position to understand how your dog feels! A wagging tail doesn\'t always mean happy - it depends on the position and speed.',
              x: 85,
              y: 18
            }
          ]}
        />
        
        <div id="backToPetsBtn">
          <Link href="/pets">← Back to All Pets</Link>
        </div>
      </section>

      {/* Modals */}
      {openModal === 'personalities' && (
        <InfoModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
          {...dogInfo.personalities}
        />
      )}
      
      {openModal === 'breeds' && (
        <InfoModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
          {...dogInfo.breeds}
        />
      )}
      
      {openModal === 'feeding' && (
        <InfoModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
          {...dogInfo.feeding}
        />
      )}
      
      {openModal === 'petting' && (
        <InfoModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
          {...dogInfo.petting}
        />
      )}
      
      {openModal === 'affection' && (
        <InfoModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
          {...dogInfo.affection}
        />
      )}
    </div>
  );
}