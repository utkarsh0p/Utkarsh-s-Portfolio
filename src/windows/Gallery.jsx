import WindowWrapper from '@hoc/WindowWrapper.jsx'
import { WindowControlls } from '@components'
import { photosLinks, gallery } from '@constants/index.js'

const Photos = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target="photos" />
        <h2>Photos</h2>
      </div>

      <div className="flex">
        {/* SIDEBAR */}
        <div className="sidebar">
          <h2>Albums</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* GALLERY */}
        <div className="gallery">
          <ul>
            {gallery.map(({ id, img }) => (
              <li key={id}>
                <img src={img} alt={`gallery-${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default WindowWrapper(Photos, 'photos')
