import PropTypes from "prop-types";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/" className="site-title">
        Health Care
      </Link>
      <ul>
        <CustomLink href="/contact">Contact</CustomLink>
        <CustomLink href="/book">Book Now</CustomLink>
      </ul>
    </nav>
  );
}

export default NavBar;

//about, contact, book

function CustomLink({ href, children, ...props }) {
  const resolvedPath = useResolvedPath(href);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive}>
      <Link to={href} {...props}>
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
