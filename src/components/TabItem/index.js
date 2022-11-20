import './index.css'

const TabItem = props => {
  const {tabDetails, isTabIdActive, onClickTabId} = props

  const {tabId, displayText} = tabDetails

  const onClickTabButton = () => {
    onClickTabId(tabId)
  }

  const classNameForActiveTab = isTabIdActive ? 'active-tab-styles' : ''
  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn-styles ${classNameForActiveTab}`}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
