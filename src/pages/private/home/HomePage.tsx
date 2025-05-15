import { Card, Typography } from 'antd'

import { useAuth } from '../../../hooks/useAuth'
import { useCompanies } from '../../../hooks/useCompanies'

const { Title, Paragraph } = Typography

const HomePage = () => {
  const { name, loading } = useAuth()
  const { data } = useCompanies()
  console.log(data)
  return (
    <Card variant="borderless" loading={loading}>
      <Title level={2}>¡Bienvenido! {name}</Title>
      <Paragraph>Gracias por ingresar a la plataforma.</Paragraph>
    </Card>
  )
}

export default HomePage
