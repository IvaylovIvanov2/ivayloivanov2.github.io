import NavbarStyledWrapper from "./styled";

export const Navbar = () => {
  return (
    <NavbarStyledWrapper>
      <div className="portfolio-routes">
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/projects">Projects</a>
      </div>
      <div className="page-routes">
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100003872254850"
        >
          <i className="fab fa-xl fa-facebook"></i>
        </a>
        <a target="_blank" href="https://www.instagram.com/ivaylo.ivv/">
          <i className="fab fa-xl fa-instagram"></i>
        </a>
        <a target="_blank" href="https://github.com/IvaylovIvanov2">
          <i className="fab fa-xl fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ivaylo-ivanov-a44455158/"
        >
          <i className="fab fa-xl fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          href="mailto:ivailo.ivov.ivanov@gmail.com"
        >
          <i className="fa-solid fa-envelope fa-xl"></i>
        </a>
      </div>
    </NavbarStyledWrapper>
  );
};
