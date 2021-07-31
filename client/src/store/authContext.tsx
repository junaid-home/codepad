import {
  Dispatch,
  SetStateAction,
  useContext,
  createContext,
  useState,
  useEffect,
} from 'react'

export const userContext = createContext<Ctx>({} as Ctx)

function AuthProvider(props: {children: any}) {
  const [user, setUser] = useState<User | null>(
    () => JSON.parse(localStorage.getItem('user') as string) || null,
  )

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return <userContext.Provider value={[user, setUser]} {...props} />
}

function useAuth() {
  const context = useContext(userContext)
  if (context === undefined) throw new Error(`useAuth must be used within a AuthProvider`)

  return context
}

interface User {
  _id: string
  firstName: string
  lastName: string
  username: string
  email: string
  createdAt: string
  updatedAt: string
}
type Ctx = [x: User | null, y: Dispatch<SetStateAction<User | null>>]

export {AuthProvider, useAuth}
