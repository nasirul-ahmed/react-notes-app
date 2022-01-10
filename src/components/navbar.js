import { Link } from "react-router-dom";

function NavBar(props) {
  const { title } = props;
  return (
    <div className="nav-bar">
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <span id="header">{title}</span>
      </Link>

      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/addnote"
          >
            Add Notes
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
