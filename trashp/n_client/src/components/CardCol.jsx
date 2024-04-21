import { Fragment } from 'react'
import Releases from './Releases'
import Soon from './Soon'

function CardCol() {
  return (
    <Fragment>
    <Releases />\
    <Soon />
    </Fragment>
  )
}

export default CardCol