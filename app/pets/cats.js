import Navbar from '../../ui/nav'; 
import Link from 'next/link';

export default function CatsPage() {
  return (
    <>
      <Navbar />
      
      <header className="container">
        <h1>Feline Friends (Cats)</h1>
        <p>cats cats cats</p>
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