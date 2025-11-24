import '../styles.css';
import Footer from './ui/footer';

// Define RootLayout component.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Head content (meta tags + title) goes here.
        Next.js handles most of this automatically
        can be overridden by specific page.js files.
      */}
      <head>
        <title>Project Title</title>
      </head>

      <body>

        <main>
          {children} 
        </main>
        
        <Footer/>
        
        {/* If you MUST use plain JS fn, put in body or use <script> component */}
        <script src="/script.js" defer></script> 
      </body>
    </html>
  );
}