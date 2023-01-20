import './index.css'

const NavItem = props => {
  const {score, timer} = props

  return (
    <nav className="nav-bar-container">
      <ul className="nav-content-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="web-logo-styles"
          />
        </li>

        <li>
          <p className="score-styles">
            Score: <span className="digital-score">{score}</span>
          </p>
        </li>

        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo-styles"
          />
          <p className="seconds-styles">{timer} Sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavItem
