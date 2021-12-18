import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api'
import { Carousel, Gif, Grid } from '@giphy/react-components'
import { useEffect, useState } from 'react'
import ResizeObserver from 'react-resize-observer'
import { SearchBox } from '../../components/SearchBox'

import { Container } from './styles'

const giphyFetch = new GiphyFetch('47T7d1BX1kgrXAbahAEjWVUnK3kqj1ub')

function CarouselDemo() {
  const fetchGifs = (offset: number) => giphyFetch.search('dogs', { offset, limit: 10 })
  return <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={6} />
}

function GridDemo({ onGifClick, gifs }: any) {
  const [width, setWidth] = useState(window.innerWidth)
  return (
    <>
      <Grid onGifClick={onGifClick} fetchGifs={gifs} width={width} columns={3} gutter={6} />
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
  const [offset, setOffset] = useState()
  const [search, setSearch] = useState('dogs')
  const [gifList, setGifList] = useState<GifsResult>({} as GifsResult)

  useEffect(() => {
    giphyFetch.search(search, { offset, limit: 10 }).then(res => {
      setGifList(res)
    })
  }, [offset, search])

  return (
    <Container>
      <SearchBox placeholder="Search your favorite gifs..." onChange={setSearch} value={search} />
      <GridDemo
        onGifClick={(gif: any, e: any) => {
          e.preventDefault()
          setModalGif(gif)
        }}
        gifs={gifList}
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
