import { useDispatch } from 'react-redux'

import Avatar from '../../atoms/Avatar'

import user from '../../../assets/img/user.png'

import './style.css'
import { logout } from '../../../services/auth.slice'
import { storageManager } from '../../../utils/storage'

export default function Topbar() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
    storageManager.clearAll()
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
