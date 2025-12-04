import './stylesHome.css'; {/*This is for Style.*/}
import Navbar from './ui/nav';
import ThemeSwitcher from './ui/themeSwitcher';
import Footer from './ui/footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Pet Hub - Learn About Pet Care',
  description: 'Educational website for young pet owners to learn about pet diets, health, and behaviors',
};

export default function HomePage() {
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
        
        <h1>Pet Hub</h1>
        <h2>Not sure what's the best care for your pet? We got you.</h2>

        {/* Move "your-image.jpg" to "public" folder */}
        <Image 
          src="/homeBanner.jpeg"
          alt="Pet Hub banner showing happy pets" 
          className="homeImage"
          width={1200}
          height={300}
          priority
        /> 
      </header>

      {/* --- MAIN CONTENT --- */}
      <h2>Click on a card to learn more.</h2>

      <div className='cardSection'>
        <Link className="petCard" href="/pets/cats">
          <h3>Cats</h3>
          <Image 
            src="/miltonCat.jpeg" 
            alt="Milton, a gentle cat available for adoption"
            width={400}
            height={250}
          />
          <p>
            Image Source: Milton, a very gentle boy from the San Diego Humane Society. 
            He's looking to be adopted!
          </p>
        </Link>

        <Link className="petCard" href="/pets/dogs">
          <h3>Dogs</h3>
          <Image 
            src="/mulliganDog.jpeg" 
            alt="Mulligan, a friendly dog available for adoption"
            width={400}
            height={250}
          />
          <p>
            Image Source: Mulligan, a goofy boy from the San Diego Humane Society.
            He's looking to be adopted!
          </p>
        </Link>
      </div>
      

      {/* --- ABOUT --- */}
      <p className="miniAbout">
        This website is intended for educating young pet owners on 
        the diets, health, and behaviors of their beloved pets. 
        <br></br>Further research into a specific species is highly encouraged as
        every animal is different.
      </p>
      {/* <p>What is this website trying to educate others on? Who is the audience?</p> */}
    </div>
  );
}