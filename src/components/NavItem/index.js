import './index.css'

const NavItem = props => {
  const {score, timer} = props

  return (
    <nav className="nav-bar-container">
      <div className="nav-content-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="web-logo-styles"
        />
        <div className="score-timer-container">
          <p className="score-styles">
            Score: <span className="digital-score">{score}</span>
          </p>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-logo-styles"
            />
            <p className="seconds-styles">{timer} Sec</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavItem
