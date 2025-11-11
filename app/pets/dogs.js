import Navbar from '../../ui/nav'; 
import Link from 'next/link';

export default function DogsPage() {
  return (
    <>
      <Navbar />
      
      <header className="container">
        <h1>Canine Companions (Dogs)</h1>
        <p>dogs dogs dogs</p>
      </header>

      <section>
        <h2>Our Favorite Breeds</h2>
        {/* content */}
        <p>info about dogs</p>
        
        <Link href="/pets">← Back to All Pets</Link>
      </section>
    </>
  );
}