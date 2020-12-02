import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../header'
import List from '../list'
import Read from '../ReadMe/read'
import Footer from '../footer'
import './home.scss'

const Home = () => {
  const [repoList, setRepoList] = useState([])
  const { userName, repositoryName } = useParams()
  const [readme, setReadme] = useState('')
  const [user, setUser] = useState({})
  useEffect(() => {
    if (typeof repositoryName !== 'undefined') {
      axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`, {
        headers: { accept: 'application/vnd.github.VERSION.raw+json' }
      }).then(({ data }) => setReadme(data))
    }
  }, [repositoryName, userName])

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => setRepoList(data))
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setUser(data))
  }, [userName])
  return (
    <div className="page-container ">
      <div className="content-wrap">
        <Header userName={userName} repositoryName={repositoryName} user={user} />
        <div className="container mx-auto py-20">
          <Route
            exact
            path="/:userName"
            component={() => <List repoList={repoList} userName={userName} />}
          />
          <Route
            exact
            path="/:userName/:repositoryName"
            component={() => <Read readme={readme} />}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
