import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollTop from '../ScrollTop/ScrollTop'
import Nav from '../Nav/Nav'

export default function Layout() {
  return (
    <Fragment>
      <Nav />
      <ScrollTop />
      <Outlet />
    </Fragment>
  )
}
