function Header() {
  return (
    <header className="nav-header">
      <img src="src/assets/react.svg" alt="The react logo" className="nav-logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;