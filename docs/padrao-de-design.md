# Padrão de design — Curso Power BI + IPIT

**Versão:** 1.0 · **Escopo:** site docente, formulários, fichas e materiais futuros · **Aplicação técnica:** `design-system.css` vinculado ao `index.html`.

## 1. Diretriz

**Tema:** *Dados com propósito — da investigação à decisão.*

O visual deve diferenciar claramente o percurso pedagógico IPIT do conteúdo operacional Power BI, sem comprometer a leitura de textos longos, exercícios, tabelas e formulários.

- **Clareza:** título, objetivo, tempo, conteúdo, prática, intervenção, entregável e registro em sequência previsível.
- **Uso pedagógico:** destacar ações do docente, evidências e campos para preencher, não apenas conteúdo expositivo.
- **Consistência:** os mesmos componentes e estilos nas oito etapas, instrumentos de avaliação e páginas de consulta.
- **Sobriedade:** adotar tons de azul-profundo, verde-petróleo e acento dourado discreto, sem replicar marcas ou logotipos de terceiros.
- **Acessibilidade:** labels reais, foco visível, alvos adequados, layout responsivo e opção de impressão.

## 2. Identidade cromática

| Token | HEX | Função |
|---|---|---|
| `--brand-950` | `#10243c` | Fundo técnico, código, títulos muito fortes |
| `--brand-900` | `#163653` | Títulos, botões primários e navegação |
| `--brand-700` | `#20577f` | Links e ações de apoio |
| `--accent-600` | `#0b7f86` | Destaque IPIT, foco e etapas |
| `--accent-100` | `#dff4f2` | Fundo de orientação |
| `--gold-600` | `#b77410` | Alertas e atenção didática |
| `--success-700` | `#176a52` | Validações e checklist |
| `--danger-700` | `#9e333b` | Limpeza de dados / ações destrutivas |
| `--gray-950` | `#15293b` | Texto principal |
| `--gray-700` | `#486075` | Texto secundário |
| `--gray-300` | `#d5e0ea` | Bordas |
| `--gray-100` | `#f2f6f9` | Fundo da página |
| `--white` | `#ffffff` | Superfícies e formulários |

**Regra:** nunca comunicar sucesso, erro ou atenção apenas pela cor; sempre combinar com texto.

## 3. Tipografia e hierarquia

- **Família:** `system-ui`, com alternativas padrão do sistema. Sem dependências externas de fontes.
- **Título do curso:** responsivo, de 25 a 39 px.
- **Título da etapa:** responsivo, de 24 a 31 px.
- **Subtítulos:** aproximadamente 18 px.
- **Texto:** 15 px, altura de linha próxima a 1,58.
- **Metadados:** 12–13 px.
- **Código DAX:** monoespaçado, com alto contraste e preservação de quebras.

Evitar parágrafos excessivamente longos e usar detalhes expansíveis para exemplos técnicos.

## 4. Componentes padronizados

| Componente | Uso no curso | Regras |
|---|---|---|
| Cabeçalho | Nome e proposta do curso | Gradiente azul e detalhe dourado |
| Menu lateral | Acesso a planejamento, oito etapas e fichas | Item atual destacado; responsivo no celular |
| Painel | Contexto de cada etapa | Fundo branco, borda suave, espaçamento consistente |
| Indicador numérico | Carga horária, encontros e etapas | Mesmo estilo de cartão |
| Aviso | Orientação importante | Fundo verde-pálido, borda em verde-petróleo |
| Atenção | Direitos autorais, riscos e pré-requisitos | Fundo âmbar, borda dourada |
| Tabela | Cronograma, rubrica e critérios | Cabeçalhos de alto contraste e linhas alternadas |
| Formulário | Planejamento e evidências | Label visível, borda e foco destacado |
| Checklist | Entregável demonstrável | Caixa de seleção visível e feedback textual |
| Botão primário | Próximo, exportação | Azul profundo |
| Botão secundário | Importação, impressão | Superfície branca e borda |
| Botão de risco | Limpar respostas | Vermelho discreto, confirmação obrigatória |
| Bloco DAX | Medidas de referência | Fundo azul-escuro e texto claro |

## 5. Modelo de organização da etapa

A ordem deve ser estável:

1. Identificação: número da etapa, duração e momento do cronograma.
2. Objetivo e pergunta orientadora.
3. Correspondência com páginas da apostila.
4. Conteúdo técnico em tópicos expansíveis.
5. Roteiro docente com tempo, atividade e intervenção.
6. Exercício prático e verificação.
7. Ficha preenchível e evidência produzida.
8. Navegação anterior/próxima etapa.

**Exemplo — Etapa 7:** DAX e construção do dashboard aparecem com referência técnica e roteiros de quatro incrementos de 2h; os resultados reais dos testes ficam em campos preenchíveis.

## 6. Responsividade, impressão e uso offline

- Desktop: navegação lateral e conteúdo principal.
- Tablet/celular: menu horizontal rolável, campos em coluna única, tabelas com rolagem.
- Impressão: ocultar menu e ferramentas, remover efeitos decorativos, preservar os conteúdos e respostas preenchidas.
- O site continua sem fontes externas ou dependências de bibliotecas JS de terceiros.
- Para uso offline, manter juntos `index.html`, `design-system.css` e `professor-preenchido.js`.

## 7. Estados de dados

- **Planejamento proposto:** texto previamente preenchido (ajustável).
- **Evidência coletada:** campo preenchido após uma atividade.
- **Nível atribuído:** valor de rubrica selecionado depois da avaliação.
- **Não preenchido:** dado institucional, observação ou resultado ainda inexistente.

Não pré-preencher notas, conclusões quantitativas ou resultados de testes como se já tivessem ocorrido. O salvamento local do navegador é uma conveniência: recomenda-se exportar o JSON periodicamente, evitando inserir dados pessoais sensíveis.

## 8. Referências

- Metodologia e autoria: [IPIT — Sandra Maria Pereira](https://github.com/smp-sandramariapereira/IPIT_origin).
- Conteúdo técnico do curso: *Apostila Digital — Power BI Básico*, Diego Monutti / Hashtag Treinamentos (52 páginas). O material tem direitos próprios e não é redistribuído integralmente neste repositório.
- Implementação: [`index.html`](../index.html), [`design-system.css`](../design-system.css) e [`professor-preenchido.js`](../professor-preenchido.js).

## 9. Manutenção do padrão

Ao incluir novas fichas ou ferramentas, reutilizar os tokens, os padrões de títulos e os componentes. Validar contraste, teclado, impressão, responsividade e exportação antes de publicar.
