import './stylesPets.css';
import Navbar from '../ui/nav';
import ThemeSwitcher from '../ui/themeSwitcher';
import Link from 'next/link';

export default function PetsPage() {
  return (
    <div className="page">
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
          <h2 className="biggerH2">Featured Pets</h2>

          <h2>Feline Friends</h2>
          {/* CATS */}
          <div className="petCategory">
            <a className="petIndividual" target="_blank" href="https://sdhumane.org/adopt/available-pets/animal-single/?petId=963403">
              Milton (M)
              <img id="milton" src="miltonCat.jpeg"></img>
            </a>
            <a className="petIndividual" target="_blank" href="https://sdhumane.org/adopt/available-pets/animal-single/?petId=140693">
              Jellybean (F)
              <img id="jellybean" src="jellybeanCat.png"></img>
            </a>
            <a className="petIndividual" target="_blank" href="https://sdhumane.org/adopt/available-pets/animal-single/?petId=550244">
              Wilson (M)
              <img id="wilson" src="wilsonCat.jpeg"></img>
            </a>
          </div>

          <h2>Canine Companions</h2>
          {/* DOGS */}
          <div className="petCategory">
            <a className="petIndividual" target="_blank" href="https://sdhumane.org/adopt/available-pets/animal-single/?petId=966991">
              Joey (M)
              <img id="joey" src="joeyDog.png"></img>
            </a>
            <a className="petIndividual" target="_blank" href="https://sdhumane.org/adopt/available-pets/animal-single/?petId=945592">
              Brie (F)
              <img id="brie" src="brieDog.png"></img>
            </a>
            <a className="petIndividual" target="_blank" href="https://sdhumane.org/adopt/available-pets/animal-single?petId=954966">
              Zoe (F)
              <img id="zoe" src="zoeDog.jpeg"></img>
            </a>
          </div>
        </section>

        {/* --- LINKS TO ANIMAL SHELTERS --- */}
        <section>
          <h2 className="biggerH2">Local Animal Shelters</h2>
        </section>
      </div>
    </div>
  );
}