import { User } from "@/types/types"

  
export type UserStore = {
    user?: User | null
    isLoading: boolean
    setUser: (user: User) => void
    getMe: (token : string) => Promise<User | null>
}
  