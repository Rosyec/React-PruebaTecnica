import { NavLink } from 'react-router-dom'
import { User } from '../../interfaces/user'
import Logo from '../../assets/user.png'
import { useState } from 'react'

export const Card = ({ user }: Props) => {
  return (
    <>
      <div className="card">
          <img src={ (!user.avatar.includes('https')) ? Logo : user.avatar } className="card-img-top p-5" style={{height: '400px'}} alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {user.first_name} {user.second_name} </h5>
          <p className="card-text"> {user.email} </p>
          <div className="row">
            <NavLink to={ `/app/edit/${ user.id }` } className="btn btn-primary my-1">Edit</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

interface Props {
  user: User
}
