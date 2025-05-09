import Avatar from '../../atoms/Avatar'

import user from '../../../assets/img/user.png'

import './style.css'
import { useDispatch } from 'react-redux'
import { logout } from '../../../services/auth.slice'

export default function Topbar() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
  }

  return (
    <div className="topbar">
      <span>🔔</span>
      <Avatar src={user} />

      <button className="topbar_action" onClick={handleClick}>
        U
      </button>
    </div>
  )
}
