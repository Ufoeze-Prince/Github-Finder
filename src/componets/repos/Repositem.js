import React from 'react'
import PropTypes from 'prop-types'

const Repositem = ({ repo }) => {
    return (
        <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a href={repo.html_url}>{repo.name}</a>
        </li>
       </ul>
    )
}

Repositem.propTypes ={
    repo: PropTypes.object.isRequired,
}

export default Repositem
