import { User } from "@/types/types"

  
export type UserStore = {
    user?: User | null
    setUser: (user: User) => void
}
  