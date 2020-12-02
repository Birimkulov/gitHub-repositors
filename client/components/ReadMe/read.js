import React from 'react'
import Markdown from 'markdown-to-jsx'
import './read.scss'

const Read = (props) => {
  return <Markdown className="markdown-body">{props.readme}</Markdown>
}
Read.propTypes = {}

export default Read
