import { SITE, SOCIAL } from '../data/content';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-bottom">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <nav className="footer-links" aria-label="Footer">
            {SOCIAL.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
