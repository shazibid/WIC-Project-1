import Navbar from '../ui/nav';
import Link from 'next/link';

export default function PetsPage() {
  return (
    <>
      <Navbar />

      <div className="container">
        <header>
          <h1>Pets!</h1>
          <p>animals text</p>
        </header>

        {/* --- PETS CONTENT --- */}
        <section>
          <h2>Featured Pets</h2>
          
          {/* sub-page links using link component */}
          <div>
            <h3><Link href="/pets/cats">View Cats</Link></h3>
            <p>Find information and photos of all our feline friends.</p>
          </div>

          <div>
            <h3><Link href="/pets/dogs">View Dogs</Link></h3>
            <p>Find information and photos of all our canine companions.</p>
          </div>
          
          {/* add stuff here */}
        </section>
      </div>
    </>
  );
}