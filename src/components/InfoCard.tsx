import { useTheme } from '../context/ThemeContext'

export function InfoCard() {
  const { theme } = useTheme()

  return (
    <section className="card">
      <h2>Como a Context API funciona</h2>
      <ol>
        <li>Você cria um contexto tipado com createContext.</li>
        <li>O Provider guarda o estado compartilhado (theme).</li>
        <li>Componentes filhos consomem esse estado via useContext.</li>
      </ol>
      <p>
        Este card está em outro componente, mas lê o mesmo valor global: <strong>{theme}</strong>.
      </p>
    </section>
  )
}
