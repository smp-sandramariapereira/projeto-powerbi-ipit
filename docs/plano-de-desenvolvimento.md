# Plano de desenvolvimento pedagógico — Power BI Básico com IPIT (20 horas)

**Versão:** 1.0 · **Data:** 18/11/2026 · **Situação:** proposta para aplicação e contextualização local.

## 1. Identificação e intencionalidade
- **Curso:** Power BI na Prática: dos Dados à Decisão.
- **Carga horária:** 20 horas, distribuídas em cinco encontros de 4 horas (horas de atividades, excluídos eventuais intervalos).
- **Público:** estudantes e profissionais iniciantes em análise de dados.
- **Modalidade de referência:** presencial, com laboratório; admite adaptação.
- **Pré-requisitos:** informática básica, noções de planilhas e acesso a computador compatível com Power BI Desktop.
- **Organização:** equipes de 3 a 5 estudantes; tarefas coletivas com demonstração de aprendizagem individual.
- **Objetivo geral:** investigar uma necessidade de análise comercial e construir um MVP de dashboard interativo no Power BI, com dados tratados, modelo coerente, indicadores confiáveis e argumentação baseada em evidências.

### Competências esperadas
1. Delimitar problema e público, distinguir perguntas de negócio de gráficos meramente decorativos.
2. Importar e limpar dados de múltiplas fontes no Power Query, registrando transformações reproduzíveis.
3. Explicar tabela fato, dimensões, chaves, cardinalidade, direção de filtro e esquema estrela.
4. Criar e validar medidas DAX com SUM, AVERAGE, DIVIDE, CALCULATE e DISTINCTCOUNT.
5. Selecionar visuais adequados, aplicar filtros e verificar consistência dos indicadores.
6. Documentar decisões, testar a solução, trabalhar em equipe e comunicar resultados com transparência.

## 2. Alinhamento metodológico
A jornada segue as oito etapas **Descoberta → Ideação → Solução → Tecnologia → MVP → Arquitetura → Desenvolvimento → Pitch e finalização**, conforme [IPIT_origin](https://github.com/smp-sandramariapereira/IPIT_origin/blob/main/docs/oito-etapas.md). Cada etapa conclui com **entregável verificável**, critérios de conclusão e registro de decisões. O professor orienta e questiona; a equipe investiga, decide, executa, testa e explica.

**Adaptação específica:** em vez de software web, o MVP é um arquivo `.pbix` (ou demonstração equivalente autorizada) com dashboard comercial; o GitHub documenta planejamento e evidências. Não se exige desenvolvimento de frontend/backend, Web3 ou publicação em serviço pago.

## 3. Situação-problema
**Contexto:** empresa fictícia de varejo com histórico de vendas de 2022–2024, Cadastro Clientes, Cadastro Lojas e Cadastro Produtos.
**Desafio:** "Como apoiar a gestão comercial a entender receita, volume vendido, devoluções, perfil de clientes, marcas, canais e regiões?"
**Usuário potencial:** gestor comercial ou analista da empresa fictícia.
**Limite:** o projeto analisa dados disponíveis; não atribuir causalidade sem evidência, não apresentar valores de exemplo como resultados reais.
**Pergunta prioritária:** definida por equipe na etapa Descoberta, com justificativa e critérios de resposta.

## 4. Cronograma executável

| Encontro | Horário relativo | Etapa | Atividade orientada | Entregável |
|---|---|---|---|---|
| Dia 1 | 0h–2h | 1 Descoberta (2h) | Contexto, exploração da base disponível, usuários, evidências, problema | Ficha 01 |
| Dia 1 | 2h–3h | 2 Ideação (1h) | Brainstorm, matriz impacto/esforço, seleção da hipótese | Ficha 02 |
| Dia 1 | 3h–4h | 3 Solução (1h) | Fluxo, layout em papel, feedback rápido | Ficha 03 |
| Dia 2 | 0h–2h | 4 Tecnologia (2h) | Interface, importação de Excel, Power Query, justificativa técnica | Ficha 04 + consulta inicial |
| Dia 2 | 2h–3h | 5 MVP (1h) | Prioridades, essencial × futuro, critérios de aceite | Ficha 05 |
| Dia 2 | 3h–4h | 6 Arquitetura (1/3) | Levantamento de tabelas e chaves, backlog | Ficha 06 parcial |
| Dia 3 | 0h–2h | 6 Arquitetura (2/3) | Esquema estrela, relacionamentos planejados, teste previsto | Ficha 06 concluída |
| Dia 3 | 2h–4h | 7 Desenvolvimento (2/8) | Limpeza, tipos, colunas, append anual, testes de atualização, relações | .pbix versão 1 |
| Dia 4 | 0h–2h | 7 Desenvolvimento (4/8) | Faturamento, devoluções, ticket, clientes, online com DAX | Medidas validadas |
| Dia 4 | 2h–4h | 7 Desenvolvimento (6/8) | Cartões, séries temporais, barras, rosca, mapa ou substituto | Dashboard versão 1 |
| Dia 5 | 0h–2h | 7 Desenvolvimento (8/8) | Filtros, revisão, testes de dados, acessibilidade, README | MVP testado |
| Dia 5 | 2h–3h | 8 Pitch (1/2) | Apresentação/demonstração e perguntas | Pitch |
| Dia 5 | 3h–4h | 8 Finalização (2/2) | Feedback, retrospectiva, documentação, rubrica | Ficha 08 + retrospectiva |

**Conferência:** 2+1+1+2+1+3+8+2 = **20 horas**. Ajustar a duração do pitch conforme número de equipes.

## 5. Conteúdo técnico e correspondência com apostila
Apostila de referência: **Diego Monutti / Hashtag Treinamentos, Curso Básico de Power BI**, 52 p.

| Conteúdo de referência | Páginas | Integração IPIT |
|---|---|---|
| BI, problema, cinco fases, base de varejo | 4–5 | Descoberta e ideação |
| Instalar, obter dados, primeira limpeza, etapas aplicadas | 6–12 | Tecnologia e desenvolvimento |
| Clientes, tipos, colunas, produtos, append vendas 2022–2024, atualização | 13–19 | Arquitetura e desenvolvimento |
| Fato/dimensão, relacionamentos, filtro, cardinalidade, esquema estrela | 20–24 | Arquitetura e desenvolvimento |
| Medidas SUM, AVERAGE, DIVIDE, CALCULATE, indicadores | 25–31 | Desenvolvimento |
| Escolha de gráficos e hierarquias | 32–37 | Solução e desenvolvimento |
| Montagem, formatação, DISTINCTCOUNT, interação, publicação | 38–43 | Desenvolvimento e pitch |
| Prática, exercícios, gabarito e glossário | 44–51 | Testes, avaliação e consulta |

**Nota didática:** o tratamento do separador decimal deve partir da inspeção da origem e dos tipos/locale. A divisão por 100 apresentada na apostila só é correta quando o erro observado é precisamente um fator de 100; nunca aplicá-la indiscriminadamente. Para o ticket médio, explicitar o conceito adotado: `AVERAGE(Faturamento na Venda)` mede média por linha da base; se uma venda/pedido tem múltiplas linhas, o ticket por pedido exige identificador e outra medida. Validar se o conjunto disponível contém esse identificador.

## 6. MVP e critérios de aceite
**Essenciais (requisitos iniciais a negociar por equipe):**
- Quatro conjuntos de dados utilizáveis: fato Vendas e dimensões Clientes, Lojas, Produtos.
- Power Query com transformações documentadas, tipos coerentes e consolidação dos anos.
- Relacionamentos fato→dimensões corretos, predominantemente muitos-para-um e filtro unidirecional.
- Pelo menos quatro cartões: faturamento, quantidade vendida, ticket médio **com definição declarada** e clientes distintos.
- Tendência mensal, ranking por marca, uma análise de composição e ao menos um filtro cruzado.
- Ao menos três testes de consistência (medidas/totais, relações/filtros, atualização), com resultado registrado.
- Um insight de negócio que decorra dos dados e uma limitação reconhecida.
- README com objetivo, fonte, instruções, imagens permitidas, testes e responsáveis.

**Desejáveis:** mapa (quando configuração/serviço permitir), refinamento visual e publicação em workspace com permissão institucional. **Fora do escopo básico:** gateway, segurança em nível de linha, DAX avançado e compartilhamento pago obrigatório.

**Critério de conclusão:** usuário simulado consegue identificar o resultado das perguntas priorizadas; equipe demonstra e explica os filtros e os cálculos.

## 7. Estratégia de facilitação
Em cada bloco: **pergunta-problema → exploração orientada → demonstração curta do recurso necessário → execução pelas equipes → teste/feedback → registro de evidências**. Reservar tempo para dúvidas técnicas e apoio diferenciado. Evitar exposição longa de comandos antes de definir seu uso.

**Exemplo de disparador DAX:** "Qual a participação de unidades vendidas pelas lojas online?" Estudantes localizam Tipo Loja no Cadastro Lojas, identificam o relacionamento com Base Vendas, criam medida filtrada com CALCULATE e usam DIVIDE para proporção. Testam o resultado ao filtrar outra região.

## 8. Infraestrutura e recursos
- Laboratório com máquinas Windows compatíveis, Power BI Desktop atualizado, acesso local aos arquivos de exercício e editor Markdown.
- Acesso ao GitHub quando possível; alternativa offline com pasta estruturada e sincronização posterior.
- Projetor, quadro, modelo de wireframe em papel, roteiro de testes, apostila autorizada para consulta.
- Bases: vendas 2022/2023/2024, clientes, lojas e produtos; **confirmar previamente a obtenção legal**. A apostila descreve os conjuntos, mas o PDF por si só não disponibiliza arquivos estruturados.
- Preparar base fictícia equivalente se as planilhas originais não estiverem disponíveis.
- Inclusão: alternativa textual ao mapa, legendas legíveis, contraste, possibilidade de apresentação sem conexão e distribuição de funções rotativas.

## 9. Evidências, acompanhamento e avaliação
- Fichas 01–08, acordo de equipe, diário de bordo por encontro, registro de IA quando utilizada, testes e retrospectiva.
- Feedback ao final de cada etapa; revisão do MVP antes do pitch.
- Rubrica detalhada em [rubrica-avaliacao.md](rubrica-avaliacao.md): investigação 15%; proposta/solução/MVP 15%; arquitetura/modelagem 20%; implementação/testes 25%; colaboração/documentação/ética 10%; pitch/retrospectiva 15%.
- Escala IPIT: **1 insuficiente, 2 parcial, 3 adequada, 4 consistente**. Pesos são desta adaptação, não prescritos pelo IPIT_origin.
- Evidência individual: cada participante explica ao menos uma transformação, medida, relação ou decisão visual.

## 10. Gestão do projeto e riscos
| Risco | Sinal | Resposta |
|---|---|---|
| Arquivos-base indisponíveis | laboratório sem planilhas | validar downloads antes da aula, usar amostra fictícia de reserva |
| Ambiente ou acesso limitado | instalação/conta bloqueada | pré-instalação institucional, demonstração em dupla, arquivos locais |
| Dados inconsistentes | totais divergentes | revisar tipos, locale, chaves, duplicatas, medidas e filtros |
| Escopo excessivo | poucos testes, muitas telas | reduzir para uma página de MVP |
| Inexperiência no GitHub | atrasos documentais | fornecer modelos .md, permitir registro offline |
| Privacidade | dados pessoais na base/repositório | usar dados fictícios/anonimizados e não publicar arquivos sensíveis |
| Gráficos de mapa indisponíveis | bloqueio ou configurações locais | visual de barras/tabela por região |

## 11. Checklist de preparação docente
- [ ] Definir turma, calendário, acesso e critérios locais de certificação.
- [ ] Validar instalações e licenças necessárias.
- [ ] Obter bases de exercício autorizadas e testar arquivos de ponta a ponta.
- [ ] Rever definição de ticket médio e formatação numérica com a base real.
- [ ] Imprimir ou distribuir as fichas.
- [ ] Explicar o desafio, objetivos, critérios e proteção de dados.
- [ ] Definir formato de registro e alternativas de acessibilidade.
- [ ] Preparar rubrica e roteiro do pitch.

## 12. Referências e atribuições
1. **PEREIRA, Sandra Maria.** *IPIT — Ideathon Pedagógico de Inovação Tecnológica*. GitHub, 2026. [Repositório original](https://github.com/smp-sandramariapereira/IPIT_origin), [metodologia](https://github.com/smp-sandramariapereira/IPIT_origin/blob/main/docs/metodologia.md), [avaliação](https://github.com/smp-sandramariapereira/IPIT_origin/blob/main/docs/avaliacao.md).
2. **MONUTTI, Diego.** *Apostila Digital — Power BI Básico*. Hashtag Treinamentos, material de apoio, 52 páginas. Referência técnica de terceiros; não reproduzida integralmente neste projeto.

**Adaptação curricular:** distribuição de horas, atividades, fichas específicas e critérios de aceite foram elaborados para este curso. Respeitar licenças e atribuição autoral ao reutilizar os modelos do IPIT.
