import React from 'react'

const Users = ({loading,users}) => {
    return loading ? (
          <div id="main" className='img'>
            <img src='https://i.gifer.com/VAyR.gif' alt="Loading.." className="loader"/>
          </div>
        ) :
        (
          <div id="main">
          {users.map(user =>
                      <div className="project column3">
                        {
                          console.log(user)
                        }
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User ID: {user.id}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users;