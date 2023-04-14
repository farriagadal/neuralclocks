import { type Session } from './Session'

export interface Routine {
  id: string
  name: string
  sessions: Session[]
}
