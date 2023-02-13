import React, { useEffect, useState } from 'react'
import { useGetUser } from '../../hooks/useUser'
import { User } from '../../interfaces/user';
import { getAllUsers } from '../../services/users.service';
import { Card } from '../cards/Card';

export const Home = () => {

  const { user, isLoading } = useGetUser();

  return (
    <>
      <div className="container">
        <div className="row">
            {
              (isLoading)
                ?
                <div className="col-md-12">
                  <span className="loader"></span>
                </div>
                :
                user.map((user) => {
                  return (
                    <div key={user.id} className="col-md-4 col-sm-10">
                      <Card user={user} />
                    </div>
                  )
                })
            }
        </div>
      </div>
    </>
  )
}
