import { NavLink } from 'react-router-dom'
import { User } from '../../interfaces/user'

export const Card = ({ user }: Props) => {
  return (
    <>
      <div className="card">
        <img src={user.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {user.first_name} {user.second_name} </h5>
          <p className="card-text"> {user.email} </p>
          <div className="row">
            <NavLink to={ `/app/edit/${ user.id }` } className="btn btn-primary my-1">Edit</NavLink>
            <NavLink to={ '/app/delete' } className="btn btn-danger">Delete</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

interface Props {
  user: User
}
