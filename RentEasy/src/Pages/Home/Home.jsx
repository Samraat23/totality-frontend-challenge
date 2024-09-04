import React from 'react'
import Banner from '../../Component/Banner/Banner'
import Searchbox from '../../Component/Searchfilter/Searchbox'
import Houselisting from '../../Component/Houslisting/Houselisting'

function Home() {
  return (
    <div>
      <Banner/>
      <Searchbox/>
      <Houselisting/>
    </div>
  )
}

export default Home
