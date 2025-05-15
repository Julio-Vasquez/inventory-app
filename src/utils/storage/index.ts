import { AuthStore } from './auth.store'
import { StorageManager } from './storage.manager'

// Singleton de StorageManager con localStorage por defecto
const storageManager = new StorageManager('localStorage')

// Singleton de AuthReader usando la instancia anterior
const authStore = new AuthStore(storageManager)

export { storageManager, authStore }
