export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
<div className="logo">
  <img
    src="/images/logo.png"
    alt="DentAssist"
  />

</div>

      {/* Center Links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#how">How it works</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      {/* Right Button */}
      <div className="nav-auth">
        <a href="/login" className="login-btn">
        Login / Sign Up
        </a>
      </div>
    </nav>
  );
}