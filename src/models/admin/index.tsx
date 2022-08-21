import { IUserInfor } from '../user'

export interface IAdmin extends IUserInfor {
  role: string
}
