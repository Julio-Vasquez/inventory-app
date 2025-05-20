import { DeleteOutlined } from '@ant-design/icons'

import { Button, Form, Input, InputNumber, Select, Space } from 'antd'

import type { Product } from '../../../hooks/api/useProducts'
import { CURRENCIES } from '../../../utils/constants/form.constant'

export type ProductFormValues = Omit<Product, '_id'>
type ProductFormProps = {
  onSubmit: (values: ProductFormValues) => void
  initialValues?: ProductFormValues
}

export const ProductForm = ({ onSubmit, initialValues }: ProductFormProps) => {
  const [form] = Form.useForm<ProductFormValues>()

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmit}
      autoComplete="off"
      initialValues={initialValues}
    >
      <Form.Item
        label="Nombre del producto"
        name="name"
        rules={[
          {
            required: true,
            message: 'Por favor ingresa el nombre del producto',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="pricesByCurrency"
        rules={[{ required: true, message: 'Debes añadir al menos un precio' }]}
        noStyle
      >
        <Form.List name="pricesByCurrency">
          {(fields, { add, remove }) => (
            <>
              <label>Precios por moneda</label>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: 'flex', marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, 'currencyCode']}
                    rules={[
                      { required: true, message: 'Selecciona una moneda' },
                    ]}
                    hasFeedback
                  >
                    <Select placeholder="Moneda" style={{ width: 120 }}>
                      {CURRENCIES.map(c => (
                        <Select.Option key={c} value={c}>
                          {c}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, 'value']}
                    rules={[{ required: true, message: 'Ingresa el precio' }]}
                    hasFeedback
                  >
                    <InputNumber placeholder="Precio" min={0} />
                  </Form.Item>

                  <Button type="link" danger onClick={() => remove(name)}>
                    <DeleteOutlined />
                  </Button>
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block>
                  Añadir moneda
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item
        label="Cantidad"
        name="quantity"
        rules={[{ required: true, message: 'Por favor ingresa la cantidad' }]}
        hasFeedback
      >
        <InputNumber min={0} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Características"
        name="characteristics"
        rules={[
          {
            required: true,
            message: 'Por favor ingresa al menos una característica',
          },
        ]}
        hasFeedback
      >
        <Select
          mode="tags"
          style={{ width: '100%' }}
          placeholder="Escribe y presiona Enter"
        >
          {/* Las opciones se generan automáticamente al escribir */}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {initialValues ? 'Enviar' : 'Actualizar'}
        </Button>
      </Form.Item>
    </Form>
  )
}
