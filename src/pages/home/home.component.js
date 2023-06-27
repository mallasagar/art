import React from 'react'
 import Myhomebanner from './homebanner'
import Myhomepackage from './home.package'
import Myhomeservice from './service/home.service'
import Homebannerbrand from './brand/home.brand'

function Myhome() {
  return (
    <>
      <Myhomebanner></Myhomebanner>
      <Homebannerbrand></Homebannerbrand>
      <Myhomepackage></Myhomepackage>
      <Myhomeservice></Myhomeservice>



    </>
  )
}

export default Myhome