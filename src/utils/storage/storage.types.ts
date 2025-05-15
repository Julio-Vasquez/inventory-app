export type TypeStorage = 'sessionStorage' | 'localStorage'

export type Key = {
  key?: string
}

export type Payload<T> = {
  newItem: T
} & Key

export type Token = ResponseLogin & { iat: number; exp: number }
