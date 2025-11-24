import Navbar from '../../ui/nav'; 
import Link from 'next/link';

export default function CatsPage() {
  return (
    <>
      <Navbar />
      
      <header className="container">
        <h1>Feline Friends (Cats)</h1>
        <p>add a bunch of buttons here</p>
      </header>

      <section>
        <h2>Our Favorite Breeds</h2>
        {/* content */}
        <p>info on cats</p>
        
        <Link href="/pets">← Back to All Pets</Link>
      </section>
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