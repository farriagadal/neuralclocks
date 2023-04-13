export interface Routine {
  name: string
  sessions: Session[]
}

interface Session {
  type: SessionType
  duration: number
}

interface SessionType {
  id: number
  name: string
}
