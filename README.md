# Cronômetro de Estudos

Aplicação React para registrar o tempo de estudo de cada matéria. A pessoa cadastra as matérias, escolhe uma, inicia o cronômetro e, ao finalizar, a sessão vai para o histórico com o total estudado por matéria.

**Deploy:** https://pomodoro-school-subject.vercel.app/

Projeto das atividades das Aulas 08 e 09 de Frameworks Front-end (ADS · SENAI · 2026-2).

## Funcionalidades

| Página | Rota | O que faz |
|--------|------|-----------|
| Matérias | `/materias` | Cadastra matérias (obrigatório, mínimo de 2 letras, sem repetir) e permite remover |
| Estudar | `/estudar` | Escolhe a matéria, inicia, pausa e finaliza o cronômetro e mostra uma frase motivacional vinda de uma API |
| Histórico | `/historico` | Lista as sessões salvas, da mais recente para a mais antiga, e o total estudado por matéria. Mostra uma mensagem quando está vazio |

Outras regras do app:

- Não inicia o cronômetro sem uma matéria selecionada.
- Ao finalizar, salva a sessão e leva para o histórico.
- Se a matéria de uma sessão foi removida, o histórico mostra "Matéria removida".
- Rotas inexistentes levam para uma página 404 com link de volta.
- Os dados ficam no `localStorage` do navegador (chaves `cronometro:materias` e `cronometro:sessoes`), sem backend.

## Conceitos utilizados

### Aula 08 — Projeto React

| Conceito | Onde aparece |
|----------|--------------|
| **JSX** | Todos os componentes retornam JSX, com expressões entre `{}` (ex.: `{formatarSegundos(segundos)}`) |
| **Componentes** | Funções com nome em maiúscula, separadas em `components/` (Navbar, Cronometro, MateriaForm...) e `pages/` |
| **Props** | `MateriaList` passa `materia` e `onRemover` para `MateriaItem`; `Cronometro` recebe `segundos`, `rodando` e os callbacks dos botões |
| **Virtual DOM** | A cada mudança de estado (ex.: `setSegundos` a cada segundo), o React recalcula a tela e atualiza só o que mudou, como o texto do cronômetro |
| **Listas** | `materias.map(...)` com `key={materia.id}` em `MateriaList` e `SeletorMateria` |
| **Renderização condicional** | `rodando ? Pausar : Iniciar` em `Cronometro`; lista vazia ou com itens em `MateriaList`; carregando, erro ou frase em `FraseMotivacional`; `erro && <p>` no formulário |

### Aula 09 — Projeto React 02

| Conceito | Onde aparece |
|----------|--------------|
| **State e `useState`** | `MateriasPage` (matérias, nome, erro) e `EstudarPage` (matéria escolhida, segundos, se está rodando, frase) |
| **Formulários** | `MateriaForm` com campo controlado (`value` + `onChange`), `onSubmit` com `preventDefault` e validação em `utils/validacao.js` |
| **`useEffect`** | Em `EstudarPage`: o `setInterval` do cronômetro (com limpeza no `return`) e a busca da frase ao abrir a página |
| **Consumo de API** | `services/adviceService.js` faz `fetch` na [Advice Slip API](https://api.adviceslip.com/advice), confere `res.ok` e a página trata carregando e erro |
| **React Router** | `Routes` e `Route` em `App.jsx`, rota-pai com `Layout` e `Outlet`, `NavLink` na Navbar, `Navigate` do `/` para `/materias`, `useNavigate` para ir ao histórico e rota `*` para a 404 |

## Tecnologias

- React 19
- React Router 7
- Vite
- oxlint (lint)
- Deploy na Vercel

## Como rodar

```bash
npm install
npm run dev
```

Outros comandos: `npm run build` (gera `dist/`), `npm run preview` e `npm run lint`.

## Estrutura

```text
src/
├── components/   componentes reutilizáveis (Navbar, Cronometro, MateriaForm...)
├── pages/        uma página por rota (Matérias, Estudar, Histórico, 404)
├── services/     acesso ao localStorage e à API de frases
├── utils/        funções puras (validação, formatação de tempo, totais)
├── App.jsx       definição das rotas
└── main.jsx      ponto de entrada
```
