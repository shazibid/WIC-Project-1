import './stylesPets.css';
import Navbar from '../ui/nav';
import ThemeSwitcher from '../ui/themeSwitcher';
import Link from 'next/link';

export default function PetsPage() {
  return (
    <div>
      {/*Importing Fonts*/}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Chewy&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
      </style>

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
          <div className="gray">
            <div className="pink">
              Milton (M)
              <img id="milton" src="miltonCat.jpeg"></img>
            </div>
            <div className="pink">
              Jellybean (F)
              <img id="jellybean" src="jellybeanCat.jpeg"></img>
            </div>
            <div className="pink">
              Wilson (M)
              <img id="wilson" src="wilsonCat.jpeg"></img>
            </div>
          </div>

          <div>
            <h3><Link href="/pets/dogs">View Dogs</Link></h3>
            <p>Find information and photos of all our canine companions.</p>
          </div>
        </section>

        {/* --- LINKS TO ANIMAL SHELTERS --- */}
        <section>
          <h2>Local Animal Shelters</h2>
        </section>
      </div>
    </div>
  );
}