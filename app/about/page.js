import Navbar from '../ui/nav'; 

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <div className="container">
        <header>
          <h1>About Our Project Title</h1>
          <p>Thank you for checking out our website!</p>
        </header>

        <section>
          <h2>Our Story</h2>
           {/* TODO: i want to move the paragraph to the side or smth? then a picture
            on the right or smth to fill the space*/}
          <p>
            We created this website because we believe every child should learn how to
            care for animals with confidence and kindness. Growing up,
            many of us loved pets but didn’t always know how to keep them
            healthy or understand their bodies. So we wanted to build a fun,
            easy-to-learn space where kids can explore animal anatomy, discover
            how different pets live, and learn the basics of responsible care. Our
            goal is to make education engaging, accessible, and full of curiosity -- just
            like animals themselves!
          </p>
          
          {/* TODO: i want to move the paragraph to the side or smth? */}
          <h2>Meet the Team</h2>
          <p>
            We are students at the University of California, San Diego,
            studying a variety of STEM majors, mainly Computer Science.
            Even though we spend most of our time coding, experimenting,
            and problem-solving, we all share a huge love for animals. Together,
            we combined our technical skills and creativity to build this educational
            website. We hope it inspires young learners to understand, appreciate,
            and care for the pets in their lives
          </p>
          {/* add image of persons face */}
          <p>Nicole Fong | <em>Role</em></p>
          <ul>
            <li>Set up website template</li>
            <li>Installed Next JS dependencies and organization</li>
          </ul>

          {/* add image of persons face */}
          <p>Hannah | <em>Role</em></p>
          <ul>
            <li>contribution 1</li>
            <li>contribution 2</li>
          </ul>

          {/* add image of persons face */}
          <p>Shazi | <em>Role</em></p>
          <ul>
            <li>contribution 1</li>
            <li>contribution 2</li>
          </ul>

          {/* add image of persons face */}
          <p>Jocelyn | <em>Role</em></p>
          <ul>
            <li>contribution 1</li>
            <li>contribution 2</li>
          </ul>

          {/* add image of persons face */}
          <p>Nagasree | <em>Role</em></p>
          <ul>
            <li>contribution 1</li>
            <li>contribution 2</li>
          </ul>
        </section>
      </div>
    </>
  );
}