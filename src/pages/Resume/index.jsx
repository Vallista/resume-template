import React from 'react'

import styles from './style.module.scss'

import { Switch, Route, HashRouter as Router } from 'react-router-dom'

import CareerPage from '../Career'
import IntroducePage from '../Introduce'
import TechPage from '../Tech'

import Sidebar from '../../components/Sidebar'

const Resume = () => {
  return (
    <div className={styles.resume}>
      <Router>
        <aside className={styles.leftSide}>
          <Sidebar />
        </aside>
        <aside className={styles.rightSide}>
          <Switch>
            <Route path='/tech' component={TechPage} />
            <Route path='/career' component={CareerPage} />
            <Route path='/' component={IntroducePage} />
          </Switch>
        </aside>
      </Router>
    </div>
  )
}

export default Resume
