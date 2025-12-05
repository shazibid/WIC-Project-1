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
        <title>Pet Hub - Learn About Pet Care</title>
        <meta name="description" content="Educational website for young pet owners to learn about pet diets, health, and behaviors" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      </head>

      <body>
        {/* Apply theme immediately before React hydration to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
                  if (shouldBeDark) {
                    document.body.classList.add('dark-mode');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

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