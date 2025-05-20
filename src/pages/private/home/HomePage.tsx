import { Card, Typography } from 'antd'

import { useAuth } from '../../../hooks/useAuth'
import { RemoteWrapper } from '../../../components/molecules/RemoteWrapper/RemoteWrapper'

const { Title, Paragraph } = Typography

const HomePage = () => {
  const { name, loading } = useAuth()

  return (
    <Card variant="borderless" loading={loading}>
      <Title level={2}>¡Bienvenido! {name}</Title>
      <Paragraph>Gracias por ingresar a la plataforma.</Paragraph>
      {/* <RemoteWrapper /> */}
    </Card>
  )
}

export default HomePage
