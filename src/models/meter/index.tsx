import { IStaff } from '../staff'

export interface IMeter {
  id: string
  no: string
  type: string
  roomId: string
  qrCode: string
  staff: IStaff
}

export interface IMeterHistory {
  id: string
  meterId: string
  start: number
  end: number
  value: number
  image: string
  staffCreated: IStaff
}
