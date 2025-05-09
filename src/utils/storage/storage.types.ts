export type Key = {
  key?: string
  type?: 'sessionStorage' | 'localStorage'
}

export type Payload<T> = {
  newItem: T
} & Key

export type Token = ResponseLogin & { iat: number; exp: number }
