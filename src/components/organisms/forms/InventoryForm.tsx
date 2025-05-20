import { Form, InputNumber, Select, Button } from 'antd'

import type { Inventory, Product } from '../../../hooks/api'

export type InventoryFormValues = Pick<Inventory, '_id' | 'quantity'> & {
  productId: string
}

interface InventoryFormProps {
  products?: Product[]
  onSubmit: (values: InventoryFormValues) => void
  initialValues?: InventoryFormValues
}

const InventoryForm = ({
  products = [],
  onSubmit,
  initialValues,
}: InventoryFormProps) => {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmit}
      autoComplete="off"
      initialValues={initialValues}
    >
      <Form.Item
        label="Cantidad"
        name="quantity"
        rules={[{ required: true, message: 'La cantidad es obligatoria' }]}
        hasFeedback
      >
        <InputNumber min={1} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Producto"
        name="productId"
        rules={[{ required: true, message: 'Seleccione un producto' }]}
        hasFeedback
      >
        <Select
          placeholder="Seleccione un producto"
          showSearch
          optionFilterProp="children"
        >
          {products.map(product => (
            <Select.Option key={product._id} value={product._id}>
              {product.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {!initialValues ? 'Crear' : 'Actualizar'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default InventoryForm
