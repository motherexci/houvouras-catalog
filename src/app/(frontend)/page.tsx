import config from '@/payload.config'
import { getPayload } from 'payload'
import React from 'react'

export default async function Gallery() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: artworks } = await payload.find({
    collection: 'political-artworks',
    limit: 100,
  })

  return (
    <>
      <nav className="nav-2">
        <div className="nav-container">
          <div className="nav-menu-wrap">
            <div data-w-id="62875dc8-5da2-b955-8050-8bd4592fb2bc" className="nav-icon-wrap">
              <div className="menu-ham-text-wrap">
                <div className="menu-ham-text menu">MENU</div>
                <div className="menu-ham-text close">CLOSE</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="page-wrapper">
        <div className="loading_wrap">
          <div className="loading-word">
            <div className="loading-word_text hover-effect--cursor-square">
              Discovery portfolio home of Matthew Houvouras
            </div>
          </div>
        </div>

        <div className="main-wrapper">
          <div className="image-collection w-dyn-list">
            <div role="list" className="image-collection w-dyn-items w-row">
              {artworks.map((art) => {
                const imageUrl =
                  typeof art.imageHero === 'object' && art.imageHero !== null
                    ? (art.imageHero as any).url
                    : ''

                return (
                  <div
                    key={art.id}
                    data-filter={art.year || ''}
                    role="listitem"
                    className="canvas__item w-dyn-item w-col w-col-3"
                  >
                    <div className="project_image-wrap">
                      <img src={imageUrl} alt={art.name} className="project_image" />
                    </div>
                    <div className="project_text-wrap">
                      <div className="project_text hover-effect">{art.name}</div>
                      <div className="project_sub-text hover-effect">{art.year}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}