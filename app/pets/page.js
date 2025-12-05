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

          <h2><a href="/pets/cats">Feline Friends</a></h2>
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

          <h2><a href="/pets/dogs">Canine Companions</a></h2>
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

          <a className="animalShelter" target="_blank" href="https://sdhumane.org/">
            <img src="sanDiegoHumaneSociety.png"></img>
            <div className="animalShelterText">
              <h3>The San Diego<br></br>Humane Society</h3>
              <p>
              Location:<br></br>- 5500 Gaines St, San Diego, CA 92110<br></br>
              Hours:<br></br>- Monday: Closed<br></br>
              - Wednesday: 10 AM to 2 PM<br></br>
              - Others: 10 AM to 5 PM<br></br>
              Phone Number:<br></br>
              - +1 (619) 299-7012
              </p>
            </div>
          </a>

          <a className="animalShelter" target="_blank" href="https://pawsofcoronado.org/">
            <img src="pawsOfCoronado.png"></img>
            <div className="animalShelterText">
              <h3>PAWS of Coronado</h3>
              <p>
              Location:<br></br>- 1395 1st St, Coronado, CA 92118<br></br>
              Hours:<br></br>- Daily: 9 AM to 4 PM<br></br>
              Phone Number:<br></br>
              - +1 (619) 435-8247
              </p>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}