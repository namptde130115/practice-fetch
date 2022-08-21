import { IBuilding } from '../building'
import { IUserInfor } from '../user'

export interface IStaff extends IUserInfor {
  status: string
  assignBuilding: IBuilding[]
  role: string
}
