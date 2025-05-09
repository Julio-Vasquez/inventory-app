type loginType = {
  username: string
  password: string
}

type Payload = {
  token: string
  message: string
  success: boolean
} & ResponseLogin

type loginSuccessType = {
  payload: Payload
  type: string
}

type State = {
  authentication: boolean | Promise<boolean>
  error: boolean
  loading: boolean
  message: string
  success: boolean
} & ResponseLogin

export type { loginSuccessType, State, loginType, Payload }
