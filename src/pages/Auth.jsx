import { Link, Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div>
        <h1>hi Iam auth</h1>
        <Link to="/auth/sign_up">sign_up</Link>
        <Link to="/auth/login">login</Link>
         <Outlet/>
    </div>
  )
}

export default Auth