import Navbar from './ui/nav';
import Image from 'next/image';
import ThemeSwitcher from './ui/themeSwitcher';
import './stylesHome.css'; {/*This is for Style.*/}

export default function HomePage() {
  return (
    <div>
      {/*Importing Fonts*/}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Chewy&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
      </style>

      {/*Navigation Bar Button*/}
      <Navbar/>

      {/* --- HEADINGS --- */}
      <header className="container">
        <h1>Pet Hub</h1>
        <h3>Not sure what's the best care for your pet? We got you.</h3>

        {/*Light/Dark Mode Button*/}
        <ThemeSwitcher/>

        {/* Move "your-image.jpg" to "public" folder */}
        <Image 
          src="/catdog.jpg"
          alt="Header Image" 
          className="header-item"
          width={500} //Width / Height - Set to actual dimensions.
          height={300}
          priority //Load important image first
        /> 
      </header>

      {/* --- MAIN CONTENT --- */}
      <div className="card">
        <h2>Cats</h2>
        <p>placeholder for main content</p>
      </div>

      <div className="card">
        <h2>Dogs</h2>
        <p>placeholder for main content</p>
      </div>

      {/* --- ABOUT --- */}
      <h2>About My Topic</h2>
      <p>What is this website trying to educate others on? Who is the audience?</p>
  
      {/* --- DATA --- */}
      <h3>Data about my topic</h3>
      {/* content */}
      {/* <Image src="/chart-image.png" alt="Data Chart" width={600} height={400} /> */}
      <h4>Add some charts + captions that illustrate my topic and some interesting facts</h4>
  
      <ul>
          <li> less than 15%</li>
          <li> 15%-25%</li>
          <li> 25%-35%</li>
          <li> 35%-45%</li>
          <li> &gt;45%</li>
      </ul>
  
      {/* --- Additional Resources --- */}
      <h2>Additional Resources!</h2>
      <h3>Where can you learn more about this topic?</h3>
      <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer"> Visit this website!</a>
    </div>
  );
}