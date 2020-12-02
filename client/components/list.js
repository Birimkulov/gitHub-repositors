import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const List = (props) => {
  const [search, setSearch] = useState('')
  const filteredList = props.repoList.filter((el) => el.name.includes(search))
  return (
    <div>
      <Head title="Hello" />
      <div className="flex justify-end">
        <input
          type="text"
          className=".border-solid .border-gray-600 border-2 pl-5 "
          placeholder="Search"
          onChange={(el) => setSearch(el.target.value)}
        />
      </div>
      <div className="px-2">
        <div className="flex -mx-2">
          <div className="w-1/3 px-2">
            <div>
              <div className="text-lg font-medium mb-5">Name</div>
              {filteredList.map((el) => (
                <div key={el.name}>
                  <Link to={`${props.userName}/${el.name}`} className="text-base">
                    {el.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3 px-2">
            <div className="text-lg font-medium mb-5">Deployment</div>
            <div>
              {filteredList.map((el) => (
                <div key={el.html_url}>
                  <Link to={`${props.userName}/${el.html_url}`} className="text-base">
                    Go
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3 px-2">
            <div className="text-lg font-medium mb-5">Last commit</div>
            <div>
              {filteredList.map((el) => (
                <div key={el.updated_at}>
                  <div className="text-base">{el.updated_at}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

List.propTypes = {}

export default List
