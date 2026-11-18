# Ficha 07 — Desenvolvimento e testes (IPIT) | 8 horas
**Equipe:** [Preencher] · **Arquivo / versão .pbix:** [Preencher]
## Incrementos técnicos
### Incremento A — Power Query e modelo (2h)
- [ ] Importar cadastros e vendas 2022–2024.
- [ ] Corrigir títulos, vazios, colunas, textos, idade/faixa, tipos/locale quando aplicáveis.
- [ ] Acrescentar vendas anuais **como nova** consulta; desabilitar carga intermediária.
- [ ] Criar e conferir relações com as dimensões; salvar.
### Incremento B — DAX (2h)
- [ ] Quantidade vendida = SUM('Base Vendas'[Qtd. Vendida]).
- [ ] Devoluções = SUM('Base Vendas'[Qtd. Devolvida]).
- [ ] % Devoluções = DIVIDE([Total Devoluções], [Qtd. Vendida Total]).
- [ ] Faturamento por linha: quantidade × preço unitário, após validar locale e unidade.
- [ ] Faturamento Total = SUM('Base Vendas'[Faturamento na Venda]).
- [ ] Ticket médio: declarar se é média por linha ou por pedido; não confundir.
- [ ] Vendas Online: CALCULATE com filtro Tipo Loja = "Online".
- [ ] % Online = DIVIDE([Vendas Online], [Qtd. Vendida Total]).
- [ ] Clientes distintos = DISTINCTCOUNT('Base Vendas'[ID Cliente]).
### Incremento C — Visuais (2h)
- [ ] Cartões: faturamento, unidades, clientes, ticket definido.
- [ ] Evolução temporal; conferir ordem de mês/ano.
- [ ] Ranking por marca (barras).
- [ ] Composição por gênero ou canal (rosca/empilhado apropriado).
- [ ] Região (mapa, ou barras quando mapa indisponível).
### Incremento D — Testes, revisão e documentação (2h)
- [ ] Formatação, contraste, títulos e filtros claros.
- [ ] Revisar medidas em matriz e em diferentes recortes.
- [ ] Garantir que as três checagens abaixo foram executadas.
## Registro de testes
| Teste | Procedimento | Esperado | Observado | Passou? | Correção/issue |
|---|---|---|---|---|---|
| T1 — Modelo | Cidade + quantidade, com e sem relação | sem relação total repete; com relação varia | | | |
| T2 — Medidas | Comparar cartões e total de matriz, sem filtros | totais compatíveis | | | |
| T3 — Atualização | Incluir linha fictícia e atualizar | transformações se repetem | | | |
| T4 — Interação | Filtrar marca, região e período | números recalculam | | | |
## Evidências
- **Capturas permitidas:** [link]
- **Versão e local seguro do .pbix:** [link]
- **Issues/commits importantes:** [links]
- **Limitações conhecidas:** [Preencher]
- **Correções priorizadas:** [Preencher]
**Critério de saída:** MVP demonstrável; testes e limitações registrados. Não publicar base de clientes reais ou credenciais.
