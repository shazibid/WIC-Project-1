import './stylesPets.css';
import Navbar from '../ui/nav';
import ThemeSwitcher from '../ui/themeSwitcher';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Nearby Pets - Pet Hub',
  description: 'Browse featured pets available for adoption at local animal shelters',
};

export default function PetsPage() {
  return (
    <div>

      {/* --- HEADINGS --- */}
      <header>
        <div className="veryTop">
          {/* Light/Dark Mode Button */}
          <div className="themeSwitch"><ThemeSwitcher/></div>
          {/* Navigation Bar Button */}
          <div><Navbar/></div>
        </div>

        <h1>Nearby Pets</h1>
        <p>Looking to adopt? Find your pet of your dreams at a local animal shelter!</p>
      </header>

      <div>
        {/* --- PETS CONTENT --- */}
        <section>
          <h2>Featured Pets</h2>

          {/* CATS */}
          <div className="pets-grid">
            <div className="pet-card">
              Milton (M)
              <Image 
                id="milton" 
                src="/miltonCat.jpeg" 
                alt="Milton, a male cat available for adoption"
                width={200}
                height={200}
              />
            </div>
            <div className="pet-card">
              Jellybean (F)
              <Image 
                id="jellybean" 
                src="/jellybeanCat.jpeg" 
                alt="Jellybean, a female cat available for adoption"
                width={200}
                height={200}
                style={{ objectPosition: '0 -60px' }}
              />
            </div>
            <div className="pet-card">
              Wilson (M)
              <Image 
                id="wilson" 
                src="/wilsonCat.jpeg" 
                alt="Wilson, a male cat available for adoption"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <div>
              <h3><Link href="/pets/cats">View Cats</Link></h3>
              <p>Learn about feline care, diets, and behaviors.</p>
            </div>
            <div>
              <h3><Link href="/pets/dogs">View Dogs</Link></h3>
              <p>Learn about canine care, diets, and behaviors.</p>
            </div>
          </div>

        </section>

        {/* --- LINKS TO ANIMAL SHELTERS --- */}
        <section>
          <h2>Local Animal Shelters</h2>
          <p>
            <a href="https://animalcenter.org/" target="_blank" rel="noopener noreferrer">
              San Diego Animal Center 
            </a> 
          </p>
        </section>
      </div>
    </div>
  );
}