import Navbar from '../ui/nav'; 

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <header className="container">
        <h1>About Our Project Title</h1>
        <p>This page provides more detail on the mission and goals of our website.</p>
      </header>

      <section>
        <h2>Our Story</h2>
        <p>
          project inspiration + team members description
        </p>
        
        {/* content */}
        <ul>
          <li>list 2</li>
          <li>list 1</li>
        </ul>
      </section>
    </>
  );
}