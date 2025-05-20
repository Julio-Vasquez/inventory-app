import { Form, Input, Button } from 'antd'

import type { Company } from '../../../providers/company'

export type CompanyFormValues = Omit<Company, '_id'>

type CompanyFormProps = {
  onSubmit: (values: CompanyFormValues) => void
  initialValues?: CompanyFormValues
}

const CompanyForm = ({ onSubmit, initialValues }: CompanyFormProps) => {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmit}
      initialValues={initialValues}
      autoComplete="off"
    >
      <Form.Item
        name="nit"
        label="NIT"
        rules={[{ required: true, message: 'El NIT es obligatorio' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="name"
        label="Nombre"
        rules={[
          { required: true, message: 'El nombre es obligatorio' },
          { min: 1, max: 50, message: 'Debe tener entre 1 y 50 caracteres' },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="address"
        label="Dirección"
        rules={[{ required: true, message: 'La dirección es obligatoria' }]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Teléfono"
        rules={[
          { required: true, message: 'El teléfono es obligatorio' },
          { pattern: /^\d+$/, message: 'Solo se permiten números' },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Correo electrónico"
        rules={[
          { required: true, message: 'El correo es obligatorio' },
          { type: 'email', message: 'El formato no es válido' },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {initialValues ? 'Enviar' : 'Actualizar'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CompanyForm
