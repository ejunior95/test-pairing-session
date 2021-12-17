import { GiphyFetch } from '@giphy/js-fetch-api'
import { Carousel, Gif, Grid } from '@giphy/react-components'
import { useState } from 'react'
import ResizeObserver from 'react-resize-observer'
import { Container } from './styles'

const giphyFetch = new GiphyFetch('47T7d1BX1kgrXAbahAEjWVUnK3kqj1ub')

function CarouselDemo() {
  const fetchGifs = (offset: number) => giphyFetch.search('dogs', { offset, limit: 10 })
  return <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={6} />
}

function GridDemo({ onGifClick }: any) {
  const fetchGifs = (offset: number) => giphyFetch.trending({ offset, limit: 10 })
  const [width, setWidth] = useState(window.innerWidth)
  return (
    <>
      <Grid onGifClick={onGifClick} fetchGifs={fetchGifs} width={width} columns={3} gutter={6} />
      <ResizeObserver
        onResize={({ width: newWidth }) => {
          setWidth(newWidth)
        }}
      />
    </>
  )
}

export const Home = () => {
  const [modalGif, setModalGif] = useState()
  return (
    <Container>
      <GridDemo
        onGifClick={(gif: any, e: any) => {
          e.preventDefault()
          setModalGif(gif)
        }}
      />
      {modalGif && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, .8)',
          }}
          onClick={e => {
            e.preventDefault()
            setModalGif(undefined)
          }}
        >
          <Gif gif={modalGif} width={200} />
        </div>
      )}
    </Container>
  )
}
