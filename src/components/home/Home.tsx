import React, { useEffect, useState } from 'react'
import { useGetUser } from '../../hooks/useUser'
import { User } from '../../interfaces/user';
import { getAllUsers } from '../../services/users.service';
import { Card } from '../cards/Card';

export const Home = () => {

  const { user, isLoading } = useGetUser();

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-4">
          {
            (isLoading) 
            ?
            <h1>Cargando...</h1>
            :
            user.map((user) => {
              return (
                <Card key={user.id} user={user} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}
