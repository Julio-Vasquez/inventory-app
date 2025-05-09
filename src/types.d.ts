interface BaseResponse {
  message: string
  statusCode: HttpStatus
}

interface Success<T> {
  payload: T
  status: 'success'
}

interface Error {
  status: 'error'
}

export type ApiResponse<T> = BaseResponse & (Success<T> | Error)

declare global {
  type Account = {
    email: string
    password: string
  }

  type ResponseLogin = {
    email: string
    name: string
    role: string
    _id: string
    token: string
  }
}
