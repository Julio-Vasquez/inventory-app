// StorageManager.ts
import { JWT_KEY } from '../constants/environment.constant'
import type { Key, Payload, TypeStorage } from './storage.types'

/**
 * Class responsible for interacting with browser storage (localStorage or sessionStorage).
 * Handles basic operations such as set, get, delete, and clear.
 */
export class StorageManager {
  private storage: Storage

  constructor(private type: TypeStorage = 'localStorage') {
    this.storage = type === 'sessionStorage' ? sessionStorage : localStorage
  }

  // Previously named: saveItem
  setItem<T = unknown>({ key = JWT_KEY, newItem }: Payload<T>): void {
    this.storage.setItem(key, JSON.stringify(newItem))
  }

  // * Previously named: getItem
  getRawItem({ key = JWT_KEY }: Key): string | null {
    return this.storage.getItem(key)
  }

  /** Previously named: removeItem */
  deleteItem({ key = JWT_KEY }: Key): void {
    this.storage.removeItem(key)
  }

  /** Previously named: clearData */
  clearAll(): void {
    this.storage.clear()
  }
}
