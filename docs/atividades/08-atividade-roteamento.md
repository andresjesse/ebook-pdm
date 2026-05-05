---
sidebar_label: "⚡ Atividade: Expo Router"
---

# ⚡ Atividade: Roteamento com Expo Router

Nesta atividade, vamos construir um fluxo simples e muito comum em aplicativos móveis: uma tela de Login que, ao autenticar o usuário com sucesso, redireciona para uma tela Principal (Dashboard/Home), passando parâmetros de uma rota para a outra e manipulando corretamente a pilha de navegação.

## Objetivo
Usar o layout do tipo `Stack` e criar duas telas utilizando o roteamento baseado em arquivos do **Expo Router**:
1. **Tela de Login** (`app/index.tsx`): Formulário básico de autenticação na raiz do app.
2. **Tela Home** (`app/home/index.tsx`): Dashboard do usuário logado.

---

## Instruções da Atividade

Para iniciar, crie um novo projeto Expo com o template de navegação:
1. `yarn create expo --template`
2. Selecione a opção `Navigation (TypeScript)`
3. Esse template vem com algumas telas de exemplo, remova todas e crie apenas as telas necessárias para a atividade.

> Você pode excluir, seguramente, as pastas `components`, `constants`, e todo o conteúdo da pasta `app/`.

### 1. Construção da Tela de Login (`app/index.tsx`)
Crie a tela inicial do seu aplicativo na raiz do roteador. Ela deve conter:
- Um componente de texto com o título (ex: "Acesso ao Sistema").
- Dois campos de entrada de texto (`TextInput`) para capturar o **username** e a **password** do usuário.
- Um botão de "Entrar" (`Button` ou `Pressable`).
- Gerencie o estado (o que o usuário digita) desses campos utilizando o hook `useState`.

### 2. Lógica de Autenticação e Navegação
Ao pressionar o botão "Entrar", você deve verificar as credenciais inseridas:
- Login autorizado apenas para `username="fulano"` e `password="123"` (deixe esses valores hardcoded na função de autenticação).
- Em caso de falha na autenticação, exiba um alerta nativo (`Alert.alert`) informando que o usuário ou senha estão incorretos.

Se a autenticação for bem-sucedida, você deve **navegar para a tela Home** (`/home`). 
- **Restrição de Pilha:** A tela de login **não deve** deixar rastros na pilha de navegação. Ou seja, ao chegar na Home, se o usuário pressionar o botão de voltar do celular, ele não deve retornar ao Login (ele deve sair do aplicativo). Para isso, utilize o método apropriado do objeto `router` (dica: *substitua* a rota em vez de *empilhar* uma nova).
- **Envio de Parâmetros:** A navegação deve enviar o `username` validado como um **query param** para a nova rota.

### 3. Construção da Tela Home (`app/home/index.tsx`)
Crie um novo diretório chamado `home` dentro de `app` e adicione um arquivo `index.tsx` dentro dele. Esta será a nossa rota `/home`.
- Esta tela deve possuir um título de boas-vindas.
- Utilize o hook `useLocalSearchParams()` do Expo Router para resgatar os parâmetros enviados pela rota de Login.
- Exiba no meio da tela a mensagem dinâmica: `"Bem-vindo(a), [username_resgatado]!"` utilizando o valor capturado.

### 4. Tela de Detalhes de um Item e Path Params
Como um desafio adicional, vamos implementar uma tela de detalhes para praticar os **Path Params** (além dos query params que você já usou na home):
- Na tela Home, adicione dois ou mais botões simulando itens genéricos da sua aplicação (ex: "Ver Produto A" e "Ver Produto B" ou "Ler Mensagem 10" e "Ler Mensagem 11"). Pode usar o componente `<Link>` ou o objeto `router` para a navegação.
- Ao clicar em um desses botões, o usuário deve ser redirecionado para a rota dinâmica `app/details/[id].tsx`. Essa navegação deve embutir o identificador único do item selecionado (A, B, 10, 11, etc.) diretamente como parte do caminho da URL (um Path Param).
- Crie o arquivo e os diretórios correspondentes para essa nova rota dinâmica.
- Nesta nova tela de detalhes, resgate o `id` capturado da URL e exiba na tela o texto correspondente: `"Exibindo detalhes do item: [id]"`.

---

### 5. O que Você Deve Observar?

- **Comportamento da Pilha**: Observe a diferença crítica no botão "Voltar" do seu celular ao usar métodos de navegação distintos. Se você usar *substituição* no Login, o sistema fecha o app ao voltar da Home. Se você *empilhar* na Home, o celular apenas "desempilha" a tela de Detalhes e retorna corretamente à Home.
- **Captura Unificada**: Note como o Expo Router facilita a captura de dados entre as telas, não importando se os dados vieram via Query Params (ex: `?username=fulano`) ou Path Params (ex: `/details/10`). Ambos são magicamente unificados e acessados através do mesmo hook `useLocalSearchParams()`.
- **Rotas Dinâmicas em Ação**: Perceba como a criação de um arquivo com colchetes (`[id].tsx`) permite que uma única tela sirva de molde visual para inúmeros itens diferentes (Produto A, Produto B, etc), recuperando a informação correta pela URL sem a necessidade de duplicar arquivos.
