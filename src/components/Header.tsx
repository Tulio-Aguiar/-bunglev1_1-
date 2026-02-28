import { useTheme } from '../context/ThemeContext'

export function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="card">
      <h1>Context API com React + TypeScript</h1>
      <p>
        Tema global atual: <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme}>Alternar tema</button>
    </header>
  )
}
