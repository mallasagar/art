import React from 'react'
 import Myhomebanner from './homebanner'

import Myhomeservice from './service/home.service'
import Homebannerbrand from './brand/home.brand'
import Homepackage from './package/home.package'

function Myhome() {
  return (
    <>
      <Myhomebanner></Myhomebanner>
      <Homebannerbrand></Homebannerbrand>
     <Homepackage></Homepackage>
      <Myhomeservice></Myhomeservice>



    </>
  )
}

export default Myhome