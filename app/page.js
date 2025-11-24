import './stylesHome.css'; {/*This is for Style.*/}
import Navbar from './ui/nav';
import ThemeSwitcher from './ui/themeSwitcher';
import Footer from './ui/footer';
import Link from 'next/link';

export default function HomePage() {
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
        
        <h1>Pet Hub</h1>
        <h2>Not sure what's the best care for your pet? We got you.</h2>

        {/* Move "your-image.jpg" to "public" folder */}
        <img 
          src="homeBanner.jpeg"
          alt="Header Image" 
          className="homeImage"
          priority="true" //Load important image first
        /> 
      </header>

      {/* --- MAIN CONTENT --- */}
      <h2>Click on a card to learn more.</h2>

      <div className='cardSection'>
        <Link className="petCard" href="/pets">
          <h3>Cats</h3>
          <img src="miltonCat.jpeg"></img>
          <p>
            Image Source: Milton, a very gentle boy from the San Diego Humane Society. 
            He's looking to be adopted!
          </p>
        </Link>

        <Link className="petCard" href="/pets">
          <h3>Dogs</h3>
          <img src="mulliganDog.jpeg"></img>
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