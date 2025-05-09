import './style.css'

type AvatarProps = {
  src: string
}

export default function Avatar({ src }: AvatarProps) {
  return <img src={src} alt="avatar" className="avatar" />
}
