export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Nishant Kumar</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">FullStack</span> <br />
            Developer
          </h1>

          <p className="hero--section-description">
            I am a passionate and detail-oriented Frontend Developer with a keen
            eye for creating dynamic, responsive, and user-friendly web
            applications,
            {/* <br /> visually engaging experiences. */}
          </p>
        </div>
        <a href="https://github.com/Nishantk2001">
          <button className="btn btn-primary">Get In Touch</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
