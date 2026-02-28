import { Header } from './components/Header'
import { InfoCard } from './components/InfoCard'
import { useTheme } from './context/ThemeContext'

export default function App() {
  const { theme } = useTheme()

  return (
    <main className={`app app--${theme}`}>
      <Header />
      <InfoCard />
    </main>
  )
}
