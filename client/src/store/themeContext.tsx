import {
  Dispatch,
  SetStateAction,
  useContext,
  createContext,
  useState,
  useEffect,
} from 'react'

export const ThemeContext = createContext<Ctx>({} as Ctx)

function ThemeProvider(props: {children: any}) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'light',
  )

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={[theme, setTheme]} {...props} />
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined)
    throw new Error(`useTheme must be used within a ThemeProvider`)

  return context
}

type Theme = 'light' | 'dark'
type Ctx = [x: Theme, y: Dispatch<SetStateAction<Theme>>]

export {ThemeProvider, useTheme}
