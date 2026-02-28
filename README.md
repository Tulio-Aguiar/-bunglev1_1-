# React + TypeScript: Context API (do zero)

Este projeto demonstra o conceito de **Context API** no React usando TypeScript.

## Conceito

A Context API permite compartilhar dados entre vários componentes sem passar `props` manualmente por muitos níveis (prop drilling).

Neste exemplo:
- `ThemeProvider` guarda o estado global `theme`.
- `useTheme` é um hook customizado para consumir o contexto com segurança.
- `Header` e `InfoCard` acessam o mesmo estado global em pontos diferentes da árvore.

## Estrutura

- `src/context/ThemeContext.tsx`: criação do contexto, provider e hook customizado.
- `src/components/Header.tsx`: alterna o tema global.
- `src/components/InfoCard.tsx`: lê o tema global em outro componente.
- `src/App.tsx`: aplica tema global na interface.

## Como rodar

```bash
npm install
npm run dev
```

## Melhores práticas aplicadas

1. **Tipagem explícita** (`Theme`, `ThemeContextValue`).
2. **Hook customizado** (`useTheme`) para encapsular `useContext`.
3. **Erro claro fora do provider** para evitar bugs silenciosos.
4. **`useMemo` no value** do Provider para reduzir renders desnecessários.
