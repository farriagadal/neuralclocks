import { type SessionType } from './SessionType'

export interface Session {
  id?: number
  type?: SessionType
  duration?: number
}
