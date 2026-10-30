# GUIA — Cronômetro de Estudos

Estrutura e visual já estão prontos. **A lógica é sua.**
Tempo total: **320 min (≈ 5h20)**.

Como usar:
- Faça os passos **em ordem**.
- Para achar onde mexer: busque `TODO [passo` no projeto.
- Em cada passo:
  - **Observação** = explicação simples (só leitura).
  - **Faça** = o que você executa no código.

---

## 1. Visão geral

**3 páginas**

| Rota | O que faz |
|---|---|
| `/materias` | Cadastra matérias (obrigatório, mín. 2 letras, sem repetir) e remove |
| `/estudar` | Escolhe matéria, inicia/pausa/finaliza cronômetro, mostra frase da API |
| `/historico` | Lista sessões, total por matéria, mensagem se estiver vazio |

**Dados**

```
Materia = { id, nome }
Sessao  = { id, materiaId, data, duracaoSegundos }
```

**Como os arquivos se conectam**

```
main.jsx → App.jsx (rotas) → Layout (Navbar + Outlet)
   ├─ MateriasPage  → MateriaForm, MateriaList → MateriaItem
   ├─ EstudarPage   → FraseMotivacional, SeletorMateria, Cronometro
   └─ HistoricoPage → TotalPorMateria, SessaoList → SessaoItem

services/  → fala com fora (localStorage, API)
utils/     → funções simples (formatar, calcular, validar)
data/      → dados de exemplo (apagar no passo 14)
```

**Regras do projeto**
- A **página** guarda o state. Os **componentes** só recebem props e mostram.
- As páginas não dividem state: gravam e leem do **localStorage**.
- O lint avisa "parâmetro não usado". É normal, some conforme você avança.

---

## 2. Fundamentos × onde aparecem

| Fundamento | Arquivo | Passo |
|---|---|---|
| JSX | `Layout.jsx`, `Navbar.jsx`, `MateriaForm.jsx` | 1 |
| Componentes | `PageHeader.jsx` (você cria) | 2 |
| Props | `MateriaItem`, `SessaoItem`, páginas | 3 |
| Virtual DOM | Seção 4 + experimento | 14 |
| Listas e keys | `MateriaList`, `SessaoList`, `TotalPorMateria`, `SeletorMateria` | 4, 11 |
| Renderização condicional | `MateriaForm`, `Cronometro`, `SessaoList`, `FraseMotivacional` | 5, 9, 12 |
| State e useState | `MateriasPage`, `EstudarPage` | 7, 9 |
| Formulários | `MateriaForm`, `validacao.js` | 8 |
| useEffect | `EstudarPage` (timer e frase) | 9, 12 |
| Consumo de APIs | `adviceService.js`, `EstudarPage` | 12 |
| React Router | `App.jsx`, `Navbar.jsx`, `NotFoundPage.jsx` | 13 |

---

## 3. Passos

| Passo | Tema | Min |
|---|---|---|
| 1 | JSX | 15 |
| 2 | Componentes | 15 |
| 3 | Props | 20 |
| 4 | Listas e keys | 20 |
| 5 | Renderização condicional | 20 |
| 6 | Utils e localStorage | 20 |
| 7 | State: matérias | 25 |
| 8 | Formulário | 30 |
| 9 | Cronômetro | 50 |
| 10 | Finalizar sessão | 20 |
| 11 | Histórico | 25 |
| 12 | API da frase | 35 |
| 13 | React Router | 15 |
| 14 | Virtual DOM + revisão | 10 |
| | **Total** | **320** |

---

### Passo 1 — JSX · 15 min

**Fundamento:** JSX · **Arquivos:** `Layout.jsx`, `Navbar.jsx`, `MateriaForm.jsx`

**Observação**
- JSX é HTML escrito dentro do JavaScript.
- Chaves `{ }` deixam você colocar valores e cálculos no meio dele. Aceitam expressão (um valor), não aceitam `if`.
- JSX **não é HTML de verdade**. Palavras que o JavaScript já usa mudam de nome: `class` vira `className` e `for` vira `htmlFor`. Por isso, se você escrever o nome do HTML, o React reclama no console.

**Faça**
1. Em `Layout.jsx`, troque o ano fixo do rodapé por uma expressão dentro de `{ }`. *(Já feito!)*
2. Em `Navbar.jsx`, crie uma variável `nomeApp` acima do `return` com o texto "Cronômetro de Estudos".
3. Troque o texto fixo da marca (`navbar__brand`) por `{nomeApp}`.
4. Em `MateriaForm.jsx`, troque `className="card materia-form"` por `class="card materia-form"` e salve. Abra `/materias` e veja o aviso no console.
5. Desfaça a troca do passo 4.
6. Ainda em `MateriaForm.jsx`, troque `htmlFor` por `for` no `<label>`, salve e veja o aviso no console. Desfaça.

**Erro comum:** comentário `//` dentro do JSX. Use `{/* */}`.
**Leia:** https://react.dev/learn/javascript-in-jsx-with-curly-braces
**Pronto quando:** rodapé e Navbar usam expressões `{ }`, e você viu os 2 avisos de console e desfez as trocas.

---

### Passo 2 — Componentes · 15 min

**Fundamento:** Componentes · **Arquivos:** as 3 `*Page.jsx` + novo `components/PageHeader.jsx`

**Observação**
- Componente é um pedaço de tela reutilizável: uma função que devolve JSX.
- O nome começa com **letra maiúscula**. Em minúscula, o React acha que é uma tag HTML.
- Se um bloco se repete, vira componente.

**Faça**
1. Crie `src/components/PageHeader.jsx` com uma função `PageHeader` que devolve o bloco `<header className="page-header">` (copie de uma página).
2. Na assinatura, declare as props `titulo` e `descricao`.
3. Termine o arquivo com `export default PageHeader`.
4. Em cada uma das 3 páginas: importe o `PageHeader` e troque o bloco do cabeçalho por `<PageHeader />`.

**Erro comum:** esquecer o `import` ou o `export default`.
**Leia:** https://react.dev/learn/your-first-component
**Pronto quando:** as 3 páginas usam `<PageHeader />` e o visual continua igual.

---

### Passo 3 — Props · 20 min

**Fundamento:** Props · **Arquivos:** `PageHeader`, `MateriaItem`, `SessaoItem`, `TotalPorMateria`, `FraseMotivacional`, páginas, `data/dadosExemplo.js`

**Observação**
- Props são os dados que o pai entrega ao filho. São **só leitura**.
- Dados **descem** (pai → filho).
- Avisos **sobem** por funções (callbacks): o filho chama a função que o pai passou.

**Faça**
1. Em `PageHeader`, mostre `{titulo}` e `{descricao}` no lugar do texto fixo.
2. Nas 3 páginas, passe `titulo` e `descricao` no `<PageHeader />`.
3. Em `MateriaItem`, mostre `{materia.nome}` no lugar de "Matemática". (Chaves `{ }`, não colchetes.)
4. Em `SessaoItem`, mostre `{sessao.data}`, `{nomeMateria}` e `{sessao.duracaoSegundos}` (valores crus; a formatação vem no passo 11). Nunca `{sessao}` sozinho: objeto não pode ser mostrado.
5. Em `MateriasPage`, importe `MATERIAS_EXEMPLO` e passe `materias={MATERIAS_EXEMPLO}` para `<MateriaList />`.
6. Em `MateriaList`, passe uma matéria para cada um dos 3 `<MateriaItem />` fixos: `materia={materias[0]}`, `materia={materias[1]}`, `materia={materias[2]}`. (Provisório: no passo 4 o `map` substitui isso.)
7. Em `HistoricoPage`, importe `SESSOES_EXEMPLO` e `MATERIAS_EXEMPLO` e passe `sessoes` e `materias` para `<SessaoList />`.
8. Em `SessaoList`, passe `sessao={sessoes[0]}`, `[1]`, `[2]` para os 3 `<SessaoItem />` e `nomeMateria="Matemática"` (texto fixo provisório; o nome real vem no passo 11).
9. Em `EstudarPage`, importe `MATERIAS_EXEMPLO` e passe `materias={MATERIAS_EXEMPLO}` para `<SeletorMateria />` (o passo 4 vai usar essa prop; sem ela a página quebra).

**Erro comum:** passar a função já executada (`onRemover={f()}`). Passe a referência (`onRemover={f}`).
**Leia:** https://react.dev/learn/passing-props-to-a-component
**Pronto quando:** os componentes mostram o que a página manda, não texto fixo.

---

### Passo 4 — Listas e keys · 20 min

**Fundamento:** Listas e keys · **Arquivos:** `MateriaList`, `SeletorMateria`, `SessaoList`, `TotalPorMateria`

**Observação**
- `.map()` transforma cada item do array em um pedaço de JSX.
- Cada item precisa de uma `key` **única e estável**. Ela ajuda o React a saber qual item é qual.
- Use o `id`, não o índice (itens podem ser removidos e o índice muda).

**Faça**
1. Em `MateriaList`, apague os 3 `<MateriaItem />` fixos.
2. No lugar, use `materias.map(...)` devolvendo `<MateriaItem />` com a `key` e a prop `materia`.
3. Troque o `(3)` do título pela quantidade real do array.
4. Em `SeletorMateria`, troque as 3 `<option>` fixas por um `map` (com `key` e `value`).
5. Em `SessaoList`, troque os 3 `<SessaoItem />` por um `map` sobre `sessoes`.
6. Em `TotalPorMateria`, troque as 3 `<li>` por um `map` sobre `materias` (por enquanto mostre só o nome).
7. Teste: adicione um item em `dadosExemplo.js` e veja a tela mudar.

**Erro comum:** esquecer o `return` dentro do `map`.
**Leia:** https://react.dev/learn/rendering-lists
**Pronto quando:** a tela acompanha o array e o console não mostra aviso de `key`.

---

### Passo 5 — Renderização condicional · 20 min

**Fundamento:** Renderização condicional · **Arquivos:** `MateriaForm`, `MateriaList`, `SessaoList`, `Cronometro`, `EstadoVazio`

**Observação**
- Mostrar ou esconder partes da tela conforme um valor.
- `condição && <Algo />` mostra se for verdadeiro.
- `condição ? <A /> : <B />` escolhe entre dois.
- Elemento escondido some do HTML. Elemento `disabled` continua lá, só não clica.
- `.length` é uma propriedade (sem parênteses). Array vazio: `lista.length === 0`.

**Faça** (cada item diz o arquivo, a condição e o que mostrar)

| # | Arquivo | Condição | Resultado |
|---|---|---|---|
| 1 | `EstadoVazio` | — | usa `{titulo}` e `{mensagem}` no lugar dos textos fixos |
| 2 | `MateriaForm` | `erro` tem texto | mostra `<p className="form-error">{erro}</p>`; senão, some |
| 3 | `MateriaList` | `materias` vazio | mostra `<EstadoVazio titulo=".." mensagem=".." />` no lugar do `<ul>` |
| 4 | `SessaoList` | `sessoes` vazio | mostra `<EstadoVazio titulo=".." mensagem=".." />` no lugar da `<table>` |
| 5 | `Cronometro` | `rodando` | `true` → só "Pausar"; `false` → só "Iniciar" |
| 6 | `Cronometro` | `podeFinalizar` falso | "Finalizar" fica `disabled` (sempre visível) |
| 7 | páginas | — | teste (abaixo) |

**Teste (item 7):** passe valores de mentira direto na página e desfaça depois: `materias={[]}`, `sessoes={[]}`, `erro="Teste"` / `erro=""`, `rodando={true}`.

**Erro comum:** `lista.length && ...` mostra um `0` na tela se a lista for vazia. Use `lista.length === 0 ? ... : ...`.
**Leia:** https://react.dev/learn/conditional-rendering
**Pronto quando:** array vazio mostra a mensagem, erro vazio some, botões mudam conforme as props.

---

### Passo 6 — Utils e localStorage · 20 min

**Fundamento:** pré-requisito · **Arquivos:** `utils/formatarTempo.js`, `utils/sessoes.js`, `services/storageService.js`

**Observação**
- Aqui é JavaScript puro, sem React.
- localStorage só guarda **texto**. Para guardar uma lista: `JSON.stringify`. Para ler de volta: `JSON.parse`.
- `getItem` devolve `null` se a chave não existe. Trate isso (devolva `[]`).

**Faça**
1. `formatarSegundos`: 3725 → `"01:02:05"` (use `Math.floor`, `%` e `padStart`).
2. `formatarData`: data ISO → texto pt-BR (`new Date(...)` + `toLocaleString('pt-BR')`).
3. `calcularTotalPorMateria`: some `duracaoSegundos` por `materiaId` e devolva um objeto.
4. `buscarNomeDaMateria`: procure com `find` e devolva o nome (ou um texto alternativo).
5. `lerMaterias` / `lerSessoes`: leia a chave, trate `null`, faça `JSON.parse`.
6. `salvarMaterias` / `salvarSessoes`: `JSON.stringify` e `setItem`.
7. Teste cada função com `console.log` (use 0, 59, 60, 3599, 3600 e 3725 segundos).

**Erro comum:** `JSON.parse(null)` sem tratar.
**Leia:** https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage
**Pronto quando:** os testes dão o resultado certo e você grava e lê no DevTools (Application → Local Storage).

---

### Passo 7 — State: matérias · 25 min

**Fundamento:** useState · **Arquivos:** `MateriasPage`, `MateriaList`, `MateriaItem`, `utils/gerarId.js`

**Observação**
- State é a "memória" do componente. Quando muda, a tela atualiza.
- Nunca altere o array do state direto. Crie uma **cópia nova** e passe para o `setState`.
- Para remover: `filter` devolve uma cópia só com os itens que ficam.
- Para ler o localStorage só na 1ª vez, passe uma **função** ao `useState`.

**Faça**
1. Implemente `gerarId` com `crypto.randomUUID()`.
2. Em `MateriasPage`, importe `useState` e crie o state `materias`, começando com `lerMaterias()`.
3. Crie a função `removerMateria(id)`: gera a lista nova com `filter`, chama `setMaterias` e `salvarMaterias`.
4. Passe `materias` e `onRemover={removerMateria}` para `MateriaList`.
5. Em `MateriaItem`, faça o botão chamar `onRemover` com o `id` da matéria (`onClick`).
6. Para ter o que remover (o formulário vem no passo 8), grave matérias à mão no DevTools (Application → Local Storage) na chave usada no `storageService`.
7. Remova uma matéria e dê F5.

**Erro comum:** alterar o array do state diretamente.
**Leia:** https://react.dev/learn/updating-arrays-in-state
**Pronto quando:** remover funciona e a lista sobrevive ao F5.

---

### Passo 8 — Formulário · 30 min

**Fundamento:** Formulários · **Arquivos:** `MateriaForm`, `MateriasPage`, `utils/validacao.js`

**Observação**
- Input **controlado**: o React guarda o texto digitado no state e o input mostra esse state.
- `value` sem `onChange` trava o campo.
- O formulário recarrega a página ao enviar. `event.preventDefault()` impede isso.

**Faça**
1. Em `MateriasPage`, crie os states `nome` (texto do campo) e `erro`.
2. Em `MateriaForm`, ligue no input: `value={valor}` e `onChange={onChange}`. No `<form>`, ligue `onSubmit={onSubmit}`.
3. Em `MateriasPage`, crie `handleChange` (atualiza `nome` com `evento.target.value`) e passe como `onChange`.
4. Implemente `validarNomeMateria(nome, materias)`:
   - vazio → mensagem de erro;
   - menos de 2 letras (depois do `trim`) → mensagem;
   - repetido (compare com `toLowerCase`, use `some`) → mensagem;
   - ok → devolve `''`.
5. Crie `handleSubmit(evento)`: `preventDefault`, valida e, se houver erro, faz `setErro` e para.
6. Sem erro: crie `{ id: gerarId(), nome: nome.trim() }`, atualize `materias`, salve, limpe `nome` e `erro`.
7. Passe `valor`, `erro`, `onChange`, `onSubmit` para `MateriaForm`.
8. Teste: `""`, `"a"`, uma matéria repetida (com maiúsculas diferentes) e um nome válido.

**Erro comum:** esquecer o `preventDefault` (a página recarrega).
**Leia:** https://react.dev/reference/react-dom/components/input
**Pronto quando:** os 3 erros aparecem, um nome válido entra na lista e sobrevive ao F5.

---

### Passo 9 — Cronômetro · 50 min

**Fundamento:** useState + useEffect · **Arquivos:** `EstudarPage`, `Cronometro`, `SeletorMateria`

**Observação**
- `useEffect` roda código **depois** da tela aparecer. Serve para ligar coisas de fora, como um `setInterval`.
- O array de dependências diz **quando** o efeito roda de novo.
- A função que o efeito devolve é a **limpeza** (desliga o intervalo).
- Dentro do intervalo, `segundos` fica "velho". Use `setSegundos(anterior => ...)` para somar certo.
- Se o contador pula de 2 em 2, falta o `clearInterval`.

**Parte A — só state**
1. Em `EstudarPage`, crie `const materias = lerMaterias()` (por enquanto, sem state).
2. Crie os states `materiaId` (`''`), `segundos` (`0`) e `rodando` (`false`).
3. Passe ao `SeletorMateria`: `materias`, `valor={materiaId}`, `onChange` (atualiza `materiaId`) e `desabilitado={rodando}`.
4. Crie `iniciar` (só liga `rodando` se houver `materiaId`) e `pausar` (desliga `rodando`).
5. Passe ao `Cronometro`: `segundos`, `rodando`, `podeFinalizar` (`segundos > 0`), `onIniciar`, `onPausar`, `onFinalizar` (vazia por ora).
6. No `Cronometro`, mostre `formatarSegundos(segundos)` no display e ligue os `onClick`.

**Parte B — o relógio**
7. Importe `useEffect` e crie um efeito: se `rodando`, liga `setInterval` de 1000 ms somando 1 em `segundos`.
8. Devolva do efeito uma função que chama `clearInterval`.
9. Dependências: só `[rodando]`.
10. Teste: inicie, pause, retome, troque de página e volte.

**Erro comum:** colocar `segundos` nas dependências (recria o intervalo a cada segundo).
**Leia:** https://react.dev/learn/synchronizing-with-effects
**Pronto quando:** conta 1 por segundo, pausa e retoma, e trocar de página não gera erro no console.

---

### Passo 10 — Finalizar sessão · 20 min

**Fundamento:** state + eventos + localStorage · **Arquivos:** `EstudarPage`, `storageService`

**Observação**
- Finalizar = parar, montar o objeto `Sessao`, salvar e zerar.
- Monte a sessão **antes** de zerar `segundos`, senão salva 0.
- Para acrescentar sem apagar o resto: leia a lista, crie uma nova com o item e salve.

**Faça**
1. Crie a função `finalizar` em `EstudarPage` e passe como `onFinalizar`.
2. Dentro dela, chame `setRodando(false)`.
3. Monte `{ id: gerarId(), materiaId, data: new Date().toISOString(), duracaoSegundos: segundos }`.
4. Leia `lerSessoes()`, crie a lista nova (`[...antigas, nova]`) e chame `salvarSessoes`.
5. Zere `segundos`.
6. Se `segundos` for 0 ou `materiaId` vazio, saia da função sem salvar.
7. Crie um state `mensagem` e mostre "Sessão salva!" quando existir.
8. Teste e confira a sessão no localStorage pelo DevTools.

**Erro comum:** sobrescrever a lista em vez de acrescentar.
**Pronto quando:** cada "Finalizar" cria exatamente 1 sessão com os 4 campos certos.

---

### Passo 11 — Histórico · 25 min

**Fundamento:** listas e keys, condicional · **Arquivos:** `HistoricoPage`, `SessaoList`, `SessaoItem`, `TotalPorMateria`

**Observação**
- O total por matéria **não precisa ser state**: dá para calcular a partir das sessões a cada render (valor derivado).
- `sort` altera o array original. Copie antes (`[...sessoes]`).

**Faça**
1. Em `HistoricoPage`, troque os dados de exemplo por `lerMaterias()` e `lerSessoes()`.
2. Calcule `const totais = calcularTotalPorMateria(sessoes)`.
3. Passe `sessoes`, `materias` e `totais` aos componentes.
4. Em `SessaoList`, passe a cada `SessaoItem` o `nomeMateria` usando `buscarNomeDaMateria`.
5. Em `SessaoItem`, mostre `formatarData` e `formatarSegundos`.
6. Em `TotalPorMateria`, use `totais[materia.id] ?? 0` com `formatarSegundos`, uma linha por matéria.
7. Confirme que `EstadoVazio` aparece sem sessões.
8. Opcional: ordene da mais recente para a mais antiga (em uma cópia).

**Erro comum:** `formatarSegundos(undefined)` quando a matéria não tem total.
**Pronto quando:** os totais batem com a soma da tabela e sem sessões a mensagem aparece.

---

### Passo 12 — API da frase · 35 min

**Fundamento:** Consumo de APIs + useEffect · **Arquivos:** `adviceService.js`, `EstudarPage`, `FraseMotivacional`

**Observação**
- Buscar dados de fora tem 3 estados: **carregando**, **sucesso**, **erro**.
- `fetch` **não** dá erro em 404/500. Só `res.ok` avisa.
- Efeito não pode ser `async` direto. Crie uma função `async` dentro dele e chame.
- Em desenvolvimento aparecem 2 requisições por causa do `StrictMode`. Não é bug.
- A resposta da API é `{ slip: { id, advice } }`. O texto está em `slip.advice`.

**Faça**
1. Abra https://api.adviceslip.com/advice no navegador para ver o JSON.
2. Em `buscarConselho`: `fetch` na URL, `if (!res.ok) throw new Error(...)`, `res.json()` e devolva `dados.slip.advice`.
3. Em `EstudarPage`, crie os states `frase` (`''`), `carregando` (`true`) e `erro` (`''`).
4. Crie um `useEffect` com `[]` nas dependências que chama `buscarConselho` com `try/catch/finally`:
   - sucesso → `setFrase`;
   - erro → `setErro`;
   - finally → `setCarregando(false)`.
5. Passe `frase`, `carregando` e `erro` ao `FraseMotivacional`.
6. Em `FraseMotivacional`, mostre "Carregando..." se `carregando`, o erro se `erro`, senão a `frase`.
7. Adicione a classe `frase--carregando` ou `frase--erro` no `<figure>` conforme o caso.
8. Teste: DevTools → Network → "Slow 4G" (carregando) e "Offline" (erro).

**Erro comum:** efeito sem array de dependências (requisições infinitas).
**Leia:** https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
**Pronto quando:** você vê os 3 estados e não há erro vermelho no console.

---

### Passo 13 — React Router · 15 min

**Fundamento:** React Router · **Arquivos:** `App.jsx`, `Navbar.jsx`, `EstudarPage`, novo `pages/NotFoundPage.jsx`

**Observação**
- Cada URL mostra uma página, **sem recarregar** o site.
- `Routes`/`Route` ligam URL → página.
- `Layout` + `Outlet`: a Navbar fica fixa e só o miolo troca.
- `NavLink` é um link que sabe qual página está ativa (ele põe a classe `active`).
- `useNavigate` é para navegar por **código** (depois de uma ação, não de um clique).

**Faça**
1. Crie `src/pages/NotFoundPage.jsx` com um título "Página não encontrada" e um `<Link to="/materias">`.
2. Em `App.jsx`, importe a página e registre `<Route path="*" element={<NotFoundPage />} />`.
3. Em `EstudarPage`, importe `useNavigate` e chame `const navigate = useNavigate()`.
4. Em `finalizar`, depois de salvar, chame `navigate('/historico')`.
5. Teste: digite `/abc` na barra, finalize uma sessão e clique no menu.

**Erro comum:** navegar **antes** de salvar a sessão.
**Leia:** https://reactrouter.com/api/hooks/useNavigate
**Pronto quando:** `/abc` mostra o 404, finalizar leva ao histórico, o menu destaca a página atual.

---

### Passo 14 — Virtual DOM + revisão · 10 min

**Fundamento:** Virtual DOM · **Arquivos:** vários

**Observação**
- Leia a seção 4 deste guia (é curta).
- O que observar: quando o cronômetro anda, `EstudarPage`, `Cronometro` e filhos "rodam de novo", mas o navegador só altera o **texto do tempo**.
- No Chrome (DevTools → Elements), o nó que acabou de mudar pisca em roxo.

**Faça**
1. Coloque `console.log('render X')` no corpo de `EstudarPage`, `Cronometro`, `SeletorMateria` e `Navbar` (troque X pelo nome).
2. Inicie o cronômetro e olhe o console. Veja quais logs repetem e quais não.
3. Remova os `console.log`.
4. Apague `src/data/dadosExemplo.js` e corrija qualquer import que sobrar.
5. Rode `npm run lint` e `npm run build`.
6. Teste o fluxo: cadastrar 2 matérias → tentar duplicada → estudar → pausar → retomar → finalizar → histórico → remover matéria → F5.
7. Marque o checklist da seção 5.

**Pronto quando:** lint e build sem erro e o checklist completo.

---

## 4. Virtual DOM neste app

**Em uma frase:** o React monta uma cópia leve da tela na memória, compara com a anterior e só altera no navegador o que **realmente mudou**.

**O ciclo (a cada mudança de state)**
1. **Gatilho:** um state muda.
2. **Render:** o React roda a função do componente dono do state (e dos filhos). Só cria uma descrição. A tela ainda não mudou.
3. **Diff:** compara a descrição nova com a antiga.
4. **Commit:** aplica no navegador só as diferenças. Depois rodam os efeitos.

**Quando o cronômetro anda (1x por segundo)**

| Componente | Roda a função de novo? | A tela muda de verdade? |
|---|---|---|
| `EstudarPage` | Sim (dona do state) | Não diretamente |
| `Cronometro` | Sim | **Sim**: só o texto do tempo |
| `SeletorMateria` | Sim (filho da página) | **Não** (mantém foco e seleção) |
| `FraseMotivacional` | Sim | **Não** (a frase fica igual) |
| `Navbar` e `Layout` | **Não** (estão acima) | Não |

**O que aprender daqui**
- "Rodar a função" é barato. O que custa é mudar o navegador, e o React só faz isso onde achou diferença.
- A API **não** é chamada de novo: o efeito da frase só roda quando suas dependências mudam, e `segundos` não está nelas.
- Se `segundos` morasse no `App`, a `Navbar` também renderizaria toda hora. **Quanto mais baixo o state, menos re-renderiza.**
- Remover uma matéria: com `key` = `id`, o React sabe **qual** item sumiu e remove só ele. Com `key` = índice, pode bagunçar os outros.
- Trocar de página **desmonta** a anterior (roda a limpeza dos efeitos, tipo o `clearInterval`) e **monta** a nova. O state antigo se perde. Por isso o localStorage.
- `StrictMode` (em `main.jsx`) roda render e efeitos **duas vezes em desenvolvimento**, de propósito, para revelar limpezas esquecidas.

**Responda sozinho no passo 14**
1. Qual state faz o `Cronometro` renderizar e em que arquivo ele mora?
2. Por que o `SeletorMateria` roda de novo mas não perde a seleção?
3. Qual a diferença entre **render** e **commit**?

---

## 5. Checklist final

Marque quando você souber **explicar** e **mostrar onde** no app.

- [ ] **JSX** (passo 1)
- [ ] **Componentes** (passo 2)
- [ ] **Props** (passo 3)
- [ ] **Virtual DOM** (passo 14)
- [ ] **Listas e keys** (passos 4 e 11)
- [ ] **Renderização condicional** (passos 5, 9 e 12)
- [ ] **State e useState** (passos 7 e 9)
- [ ] **Formulários** (passo 8)
- [ ] **useEffect** (passos 9 e 12)
- [ ] **Consumo de APIs** (passo 12)
- [ ] **React Router** (passo 13)

Extras:
- [ ] `npm run lint` e `npm run build` sem erros
- [ ] Console limpo no fluxo completo
- [ ] Dados sobrevivem ao F5
- [ ] `data/dadosExemplo.js` apagado

---

## Se travar

1. Releia a **Observação** do passo.
2. Use `console.log` para ver o valor real.
3. Isole uma função e teste sozinha.
4. Mais de 15 min no mesmo ponto? Anote a dúvida, siga em frente e volte depois.
