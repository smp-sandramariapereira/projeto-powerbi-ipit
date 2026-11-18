# Ficha 06 — Arquitetura (IPIT) | 3 horas
**Equipe:** [Preencher] · **Repositório/pasta:** [Preencher]
## Fluxo dos dados
`Vendas 2022/2023/2024 (arquivos)` → `Power Query: acrescentar como novas` → `Base Vendas [fato]` → `modelo estrela` → `medidas DAX` → `visuais`.
## Tabelas e chaves
| Tabela | Papel | Chave / ligação esperada | Checagem |
|---|---|---|---|
| Base Vendas | Fato | IDs de cliente, loja e produto | granularidade e tipos |
| Cadastro Clientes | Dimensão | ID Cliente único | duplicidade/nulos |
| Cadastro Lojas | Dimensão | ID Loja único | duplicidade/nulos |
| Cadastro Produtos | Dimensão | ID Produto único | duplicidade/nulos |
## Modelo
- **Cardinalidade esperada:** muitos para um (fato → dimensão).
- **Direção de filtro desejada:** única (dimensão → fato).
- **Diagrama / print do modelo:** [Link]
- **Riscos detectados (chaves, locale, datas, faltantes):** [Preencher]
## Backlog
| Tarefa | Responsável | Prioridade | Dependência | Aceite |
|---|---|---|---|---|
| Tratar cadastro de lojas | | Alta | arquivo | colunas corretas |
| Tratar clientes e produtos | | Alta | arquivos | tipos e valores |
| Consolidar vendas anuais | | Alta | arquivos | contagem conciliada |
| Criar relações | | Alta | chaves | filtros corretos |
| Criar medidas e visuais | | Alta | modelo | testes |
## Checagem
- [ ] Relações planejadas antes de criar visuais.
- [ ] Contagens e unicidade das dimensões verificadas.
- [ ] Responsáveis e ordem de execução registrados.
**Entregável:** esquema estrela + fluxo + backlog. **Critério de saída:** equipe sabe o que desenvolver, testar e documentar.
