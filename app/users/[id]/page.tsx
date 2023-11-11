import React from 'react'

interface Props {
    params:{
        id:number
    }
}

const UserPage:React.FunctionComponent<Props> = ({params:{id}}) => {
  return (
    <div>UserPage {id} </div>
  )
}

export default UserPage