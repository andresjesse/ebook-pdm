import SnackEmbedded from '@site/src/components/Snack/SnackEmbedded';

# Anatomia de um Projeto Expo

Agora que seu ambiente está configurado, vamos entender o que compõe um projeto mobile moderno. Antes de escrevermos nossa primeira linha de interface, precisamos compreender as fundações onde o Expo e o React Native se apoiam.

## O Ecossistema React no Mobile

Diferente do desenvolvimento web tradicional, onde manipulamos o DOM (Document Object Model) do navegador, no **React Native** utilizamos o React para gerenciar componentes nativos do Android e iOS.

O segredo está na **ponte (bridge)** ou nos novos mecanismos de renderização (como o **Fabric**), que traduzem seu código JavaScript/TypeScript para botões, listas e textos reais do sistema operacional.

## Por que TypeScript como Padrão?

Nesta disciplina, utilizaremos exclusivamente o **TypeScript**.

Embora o React Native aceite JavaScript puro, o TypeScript é o padrão da indústria por um motivo simples: **segurança e previsibilidade**.

- **Tipagem Estática:** Evitamos erros comuns como tentar ler uma propriedade de um objeto que está `undefined`.
- **Autocompletar (IntelliSense):** O VSCode entende seu código e sugere propriedades dos componentes do Expo automaticamente.
- **Documentação Viva:** O tipo de um dado serve como uma documentação que não fica desatualizada.

> Se você já conhece JavaScript, pense no TypeScript como um "escudo" que avisa onde seu código pode quebrar antes mesmo de você abrir o emulador.

## Modularização: `import` e `export`

A organização de um projeto React baseia-se em **módulos**. Para manter o código limpo, dividimos a lógica em vários arquivos. No padrão **ES6+ (ECMAScript)** que o TypeScript utiliza, temos duas formas principais de compartilhar código:

### 1. Exportação Padrão (`export default`)

Usada quando um arquivo exporta apenas uma coisa principal (geralmente um Componente).

```typescript
// Arquivo de origem (o que exporta): Header.tsx
export default function Header() { ... }

// Arquivo de destino (o que importa): App.tsx
import Header from './Header';
```

### 2. Exportação Nomeada (`export`)

Usada para exportar múltiplas funções ou constantes do mesmo arquivo.

```typescript
// Arquivo: Utils.ts
export const soma = (a: number, b: number) => a + b;

export const PI = 3.14;

export function prettyPrint(obj: any) {
  console.log(JSON.stringify(obj, null, 2));
}

// Para importar em outro arquivo: (precisa usar chaves e o nome exato)
import { soma, PI, prettyPrint } from "./Utils";
```

## O Ponto de Entrada da Aplicação

Em um projeto Expo moderno, o coração de tudo é o arquivo **`App.tsx`** (ou `index.ts` em estruturas mais complexas).

Pense no ponto de entrada como a **porta principal** da sua casa: é por aqui que o sistema operacional (Android/iOS) entra para começar a desenhar a interface.

### O Fluxo de Execução:

1. O **Expo Go** lê o arquivo de configuração (`app.json`).
2. Ele procura o arquivo principal definido (geralmente o `App.tsx`).
3. O React "monta" o componente principal e o exibe na tela.

### O que é um Componente no React?

Imagine que construir um aplicativo é como projetar um **carro moderno**. Você não fabrica o carro como uma peça única de metal; você projeta o motor, o sistema de som, os faróis e o painel de instrumentos como unidades separadas. No React, um **Componente** é exatamente isso: uma unidade lógica independente que encapsula sua própria aparência e comportamento.

Cada componente possui sua própria lógica e aparência (seu código TSX e seu estilo). Por exemplo, em um aplicativo de mensagens, a _barra de busca_ é um componente, _cada conversa_ é o render de outro componente e a _barra de atalhos_ é composta por mais componentes. Essa modularidade favorece a organização do código e permite a reutilização de componentes em diferentes telas do aplicativo.

**⚡ Exploração Prática**: Vamos ver componentes de perto? O **Snack** a seguir apresenta o exemplo anterior de forma prática. Perceba que:

- O ponto de entrada da aplicação é o `App.tsx`;
- Os componentes são organizados em diferentes arquivos, sendo `exportados` e `importados`;
- Os demais componentes ficam na pasta `components`, isso não é regra, mas uma convenção no mundo React;
- Os nomes dos componentes sempre iniciam com letra maiúscula;
- Cada componente é composto por uma `função`, que pode ter uma `parte lógica`, seguida de um `retorno de uma Tag TSX`;
- Opcionalmente, os arquivos dos componentes podem ter um objeto de estilização `StyleSheet`.

Vá em frente, explore e edite este código aqui no Snack, ou clone-o do git:

- `git clone https://github.com/andresjesse/ebook-pdm-examples.git`
- branch: `02-01-components`

<SnackEmbedded snackId="@andresjesse/ebook-pdm-example-02-01" />

## Renderização de Elementos React

Diferente do desenvolvimento Web, onde usamos `<div>`, `<span>` ou `<h1>`, no Mobile usamos componentes nativos abstratos. O React Native faz a "tradução" automática, são exemplos de componentes:

- **`<View>`**: O equivalente à `<div>`. É o container básico para layout (Flexbox).
- **`<Text>`**: O equivalente ao `<span>` ou `<p>`. **No mobile, todo texto deve estar obrigatoriamente dentro de um componente `<Text>`.**
- **`<Image>`**: Para exibição de fotos e ícones.

### JSX/TSX: O HTML dentro do Código

A sintaxe que usamos é o **TSX** (TypeScript XML). Ela permite escrevermos a estrutura da interface diretamente dentro das funções.

```tsx
export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Olá, Mundo Mobile!</Text>
    </View>
  );
}
```

:::warning Atenção ao Render
Lembre-se: Um componente React deve sempre retornar um único elemento pai. Se você precisar retornar dois botões, eles devem estar "embrulhados" em uma `<View>` ou em um Fragment `<> ... </>`.
:::

## ⚡ Aprenda na Prática

> **Desafio do Dia:** Tente criar um novo arquivo chamado `Profile.tsx` no seu Snack/Projeto, crie um componente simples e tente importá-lo dentro do seu `App.tsx`.

---

:::info Próxima Aula: Interpolação no TSX
Agora que você já sabe como construir e organizar as peças do seu app, o próximo passo é dar vida a elas! Na próxima aula, vamos aprender Interpolação no TSX: o segredo para transformar interfaces estáticas em experiências dinâmicas que reagem aos seus dados.
:::
