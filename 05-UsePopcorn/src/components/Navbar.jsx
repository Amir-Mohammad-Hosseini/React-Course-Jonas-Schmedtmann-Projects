import Search from "./Search";
import Logo from "./Logo";
import MoviesLength from "./MoviesLength";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <MoviesLength />
    </nav>
  );
};

export default Navbar;
