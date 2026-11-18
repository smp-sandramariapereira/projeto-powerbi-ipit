# Curso Power BI Básico com metodologia IPIT

**Carga horária:** 20 horas (5 encontros de 4h) · **Nível:** básico · **Formato sugerido:** presencial em laboratório · **Produto:** MVP de dashboard comercial em Power BI.

Este repositório contém o plano de desenvolvimento pedagógico e fichas editáveis do curso, organizado segundo as oito etapas do **IPIT — Ideathon Pedagógico de Inovação Tecnológica**, metodologia de **Sandra Maria Pereira**.

## Identidade visual do curso

O design system **Dados com propósito — da investigação à decisão** está aplicado à página do professor. Consulte o [guia de padrão de design](docs/padrao-de-design.md) e o arquivo [CSS](design-system.css). Para executar localmente, mantenha `index.html`, `design-system.css` e `professor-preenchido.js` na mesma pasta.

## Estado do material: pronto para aplicação

A página [**index.html**](index.html) inclui um [arquivo de configuração docente](professor-preenchido.js) com **conteúdo e planejamento padrão já preenchidos**, roteiros de aula com divisão de tempo para as oito etapas IPIT, perguntas disparadoras, respostas-modelo, intervenções e exemplos de entregáveis. O professor ajusta a identificação da escola, turma, datas e evidências reais. Os níveis de avaliação e os resultados observados permanecem em branco até a aplicação.

**Uso local:** mantenha `index.html` e `professor-preenchido.js` na mesma pasta ao baixar, pois a página carrega o arquivo JavaScript. **GitHub Pages:** a publicação como site depende de ativar Settings → Pages na branch `main` e pasta `/ (root)`.

## Interface interativa para o professor

Abra [**index.html**](index.html) para acessar o curso em uma página HTML com conteúdo técnico distribuído pelas oito etapas IPIT, formulários preenchíveis, checklists, avaliação e opções de exportar/importar respostas em JSON, gerar relatório Markdown e imprimir. Para usar localmente, baixe o arquivo HTML e abra-o no navegador. O preenchimento é armazenado no navegador utilizado; exporte JSON para backup.

> **Publicação web:** para disponibilizar a página como site, configure GitHub Pages na branch `main`, pasta `/ (root)`, em Settings → Pages (se a opção estiver habilitada). O arquivo `index.html` já está na raiz.

## Comece aqui
- [Plano de desenvolvimento completo](docs/plano-de-desenvolvimento.md)
- [Ficha 01 — Descoberta](fichas/01-descoberta.md)
- [Ficha 02 — Ideação](fichas/02-ideacao.md)
- [Ficha 03 — Solução](fichas/03-solucao.md)
- [Ficha 04 — Tecnologia](fichas/04-tecnologia.md)
- [Ficha 05 — MVP](fichas/05-mvp.md)
- [Ficha 06 — Arquitetura](fichas/06-arquitetura.md)
- [Ficha 07 — Desenvolvimento e testes](fichas/07-desenvolvimento.md)
- [Ficha 08 — Pitch e finalização](fichas/08-pitch-finalizacao.md)
- [Ficha — Acordo de equipe](fichas/acordo-de-equipe.md)
- [Ficha — Diário de bordo](fichas/diario-de-bordo.md)
- [Ficha — Registro de uso de IA](fichas/registro-uso-ia.md)
- [Ficha — Retrospectiva](fichas/retrospectiva.md)
- [Rubrica de avaliação](docs/rubrica-avaliacao.md)

## Percurso de 20 horas

| Etapa IPIT | Horas | Evidência principal |
|---|---:|---|
| 01 Descoberta | 2 | Problema e público definidos com evidências |
| 02 Ideação | 1 | Proposta de valor selecionada |
| 03 Solução | 1 | Fluxo e wireframe |
| 04 Tecnologia | 2 | Ferramentas justificadas e primeira consulta |
| 05 MVP | 1 | Escopo mínimo e critérios de sucesso |
| 06 Arquitetura | 3 | Esquema estrela, fluxo de dados e backlog |
| 07 Desenvolvimento | 8 | Dashboard funcional com testes |
| 08 Pitch e finalização | 2 | Pitch, documentação e retrospectiva |
| **Total** | **20** | |

## Desafio integrador
Uma empresa fictícia de varejo tem vendas de 2022, 2023 e 2024, além de cadastros de clientes, lojas e produtos. Como transformar os dados em decisões sobre receita, produtos, devoluções, marcas e regiões?

As equipes formulam uma pergunta prioritária e constroem um dashboard comercial para respondê-la. O professor atua como mediador, com demonstrações técnicas breves conforme a necessidade do projeto.

## Materiais e direitos
- **Metodologia de referência:** [IPIT_origin](https://github.com/smp-sandramariapereira/IPIT_origin) — Sandra Maria Pereira. Conteúdo metodológico original sob CC BY 4.0; verificar [licença](https://github.com/smp-sandramariapereira/IPIT_origin/blob/main/LICENSE).
- **Referência técnica:** *Apostila Digital — Power BI Básico*, Diego Monutti, Hashtag Treinamentos, 52 páginas. Apostila de terceiro utilizada como base de organização curricular; não é redistribuída neste repositório. Obter as bases de exercício pelos canais autorizados do material.
- **Adaptação:** plano e fichas contextualizados para curso de Power BI com 20 horas. Não são transcrição literal dos modelos IPIT.

> **Privacidade:** trabalhar com dados fictícios ou anonimizados. Não publicar cadastros reais de clientes, credenciais, dados pessoais de estudantes ou arquivos .pbix com dados sensíveis.

## Uso
O docente adapta os campos [Preencher] nas fichas, organiza equipes de 3 a 5 pessoas e coleta evidências ao final de cada etapa. Os alunos podem copiar as fichas para o próprio repositório ou preencher versões locais. A avaliação acompanha **processo e produto**, não apenas a aparência do dashboard.
