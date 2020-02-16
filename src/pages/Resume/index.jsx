import React from 'react'

import styles from './style.module.scss'

import { Switch, Route, HashRouter as Router } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'

import { Sidebar as SidebarData } from '../../DB'

const sidebarDataReverse = SidebarData.contents.slice().reverse()

const Resume = () => {
  return (
    <div className={styles.resume}>
      <Router>
        <aside className={styles.leftSide}>
          <Sidebar />
        </aside>
        <aside className={styles.rightSide}>
          <Switch>{sidebarDataReverse.map((data) => <Route path={data.path} component={data.component} />)}</Switch>
        </aside>
      </Router>
    </div>
  )
}

export default Resume
