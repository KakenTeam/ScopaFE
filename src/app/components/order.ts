import { User } from "./user";

export interface Order {
  _id: string, 
  payment: number, 
  created_at: string, 
  id_water: number, 
  owner: User,
}