import './index.css'

const ThumbnailImg = props => {
  const {eachThumbnailImgDetails, onClickThumbnailImg} = props
  const {id, thumbnailUrl} = eachThumbnailImgDetails

  const onClickThumbnailImgBtn = () => {
    onClickThumbnailImg(id)
  }

  return (
    <li className="thumbnail-container">
      <button
        type="button"
        className="thumbnail-img-btn-styles"
        onClick={onClickThumbnailImgBtn}
      >
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-img-styles"
        />
      </button>
    </li>
  )
}

export default ThumbnailImg
