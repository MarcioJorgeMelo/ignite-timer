# ⏱️ Timer de Tarefas (Projeto de Estudos)

Este projeto foi desenvolvido exclusivamente para fins de estudo, com o objetivo de revisitar fundamentos do React e melhorar a forma como utilizo suas principais ferramentas no dia a dia.

A proposta aqui não é criar algo pronto para produção, mas sim **voltar aos princípios**, reforçando conceitos essenciais e explorando abordagens mais eficientes e conscientes no desenvolvimento.

---

## 📌 Sobre o projeto

A aplicação consiste em um **timer de tarefas**, permitindo:

* Criar timers com duração definida
* Iniciar contagens regressivas
* Visualizar múltiplos timers ativos simultaneamente
* Persistir os timers da sessão utilizando **Local Storage**

---

## 🧠 Foco de aprendizado

Este projeto foi guiado principalmente pela necessidade de reforçar conceitos fundamentais do React, como:

### 📋 Formulários (Controlled vs Uncontrolled)

```js
// Formas de gerar formulários
// controlled x uncontrolled
// mantenho o estado dos dados na aplicação x busco os dados apenas quando for usar as mesmas
// maior controle dos dados e funcionalidade com os mesmos x menor perca de performance
// formulários menores (login, cadastro, ...) x formulários com muitos inputs
```

**Aprendizado:**
Entender quando vale a pena ter controle total do estado vs quando otimizar performance evitando re-renderizações desnecessárias.

---

### 🔄 useReducer

```js
/* useReducer -> é um hook avançado do React, feito para lidar com estados complexos que necessitam de mudanças constantes, que demandam muitas funções.
                     Ele espera actions específicas para lidar de forma diferente com a informação, como abaixo
*/
```

**Aprendizado:**

* Melhor organização de lógica de estado complexa
* Separação clara entre ações e mutações
* Escalabilidade na gestão de estados

---

## ⚙️ Funcionalidades

* ⏳ Criação de timers
* ▶️ Controle de execução
* 📋 Listagem de timers ativos
* 💾 Persistência com Local Storage

---

## 🛠️ Tecnologias

* React
* TypeScript
* Local Storage API

---

## 💡 Objetivo final

Mais do que o resultado visual ou funcional, o foco principal deste projeto é:

> **Evoluir na tomada de decisão técnica dentro do React**, entendendo melhor quando e como usar cada ferramenta disponível.

---

## 📎 Observação

Este repositório é apenas um espaço de aprendizado e experimentação.
Pode conter refatorações frequentes, mudanças de abordagem e código não otimizado propositalmente para fins de estudo.
