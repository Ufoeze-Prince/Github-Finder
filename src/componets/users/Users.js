import React, { useContext } from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'

// const userstyles = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gridGap: '1rem'
// }
const Users = () => {
    const githubContext = useContext(GithubContext);
    const { users, loading } = githubContext;
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="container">
                <div className="row">
                {users.map(user => (
                    <Useritem key={user.id} user={user} />
                ))}
                </div>
            </div>
        )
    }
}





export default Users
