import { jwtDecode } from 'jwt-decode'
import { JWT_KEY } from '../constants/environment.constant'
import type { Payload as Data } from '../../services/auth.types'
import type { Token } from './storage.types'
import { StorageManager } from './storage.manager'

/**
 * Class responsible for storing, decoding, and validating authentication tokens.
 * Depends on a StorageManager instance to access stored values.
 */
export class AuthStore {
  constructor(private storage: StorageManager) {}

  /** Previously named: getToken */
  getStoredToken(): string {
    const data = this.storage.getRawItem({ key: JWT_KEY })
    if (!data) return ''
    const { token } = JSON.parse(data)
    return token
  }

  /** Previously named: getData */
  getStoredPayload(): Data {
    const data = this.storage.getRawItem({ key: JWT_KEY })
    if (!data) return {} as Data
    return JSON.parse(data) as Data
  }

  /** Previously named: getInfoToken */
  getDecodedToken(currentToken?: string): Token {
    return jwtDecode(currentToken ?? this.getStoredToken())
  }

  /** Previously named: validateToken */
  isTokenValid(token: string): boolean {
    try {
      const decoded: Token = jwtDecode(token)
      return decoded && decoded.exp! >= Math.floor(Date.now() / 1000)
    } catch {
      return false
    }
  }
}
