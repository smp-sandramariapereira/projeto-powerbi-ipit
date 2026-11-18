/* Guia docente pré-configurado. Conteúdos sugeridos: não representam evidências ou notas reais. */
(()=>{
'use strict';
const defaults={
'config__turma':'Curso de Power BI Básico — iniciantes (identificação local a ajustar).',
'config__modalidade':'Presencial, laboratório de informática, equipes de 3 a 5 estudantes.',
'config__prerequisitos':'Informática básica, organização de arquivos e noções de planilhas; não exige programação ou Excel avançado.',
'config__objetivo':'Ao final de 20 horas, investigar uma questão comercial e produzir um dashboard Power BI com dados importados, limpos, relacionados, medidas DAX, visuais interativos, testes e documentação das decisões.',
'config__recursos':'Computadores com Windows e Power BI Desktop; projetor; bases de vendas 2022–2024 e cadastros de clientes, lojas e produtos; quadro ou papel para wireframes; GitHub ou pasta local para fichas; rubrica IPIT.',
'config__acessibilidade':'Instruções projetadas e escritas; fontes legíveis e contraste; papéis rotativos; alternativa de gráfico de barras ao mapa; dados e fichas locais se não houver internet.',
'config__origem':'Apostila Power BI Básico, Diego Monutti / Hashtag Treinamentos, 52 páginas. Obter arquivos de exercício por canais autorizados; o PDF não contém as planilhas. Se necessário, usar dados sintéticos equivalentes.',
'config__avaliacao':'Formativa e baseada em evidências, escala IPIT de 1 a 4. Pesos adaptados: investigação 15%; ideação/solução/MVP 15%; arquitetura 20%; desenvolvimento/testes 25%; colaboração/ética/documentação 10%; pitch/reflexão 15%.',
'agenda__d1':'4h: Descoberta (2h), Ideação (1h), Solução (1h). Data e local a definir.',
'agenda__d2':'4h: Tecnologia (2h), MVP (1h), Arquitetura (1h). Data e local a definir.',
'agenda__d3':'4h: Arquitetura (2h), Desenvolvimento (2h). Data e local a definir.',
'agenda__d4':'4h: Desenvolvimento: DAX (2h) e visuais (2h). Data e local a definir.',
'agenda__d5':'4h: Desenvolvimento/testes (2h), Pitch e finalização (2h). Data e local a definir.',
's1__usuario':'Gestor(a) comercial de empresa fictícia de varejo — persona didática.',
's1__contexto':'Cenário proposto: histórico de vendas e três cadastros ainda não integrados para análises comerciais. O objetivo é apoiar decisões sobre períodos, marcas, canais e regiões.',
's1__fontes':'Base Vendas 2022/2023/2024: data, cliente, produto, loja, quantidade, devoluções e preço. Cadastro Clientes: nome, gênero e nascimento. Cadastro Lojas: localidade, cidade, tipo. Cadastro Produtos: categoria, marca, preços e custos.',
's1__hipoteses':'Hipóteses para INVESTIGAR, não resultados: sazonalidade de receita, concentração por marca e região, diferenças de devolução e participação do online.',
's1__pergunta':'Como evoluiu o faturamento e quais marcas e regiões concentram os melhores resultados do período?',
's1__problema':'Problema-modelo para discussão: a gestão precisa transformar dados dispersos em indicadores comparáveis para compreender desempenho comercial e orientar decisões.',
's2__alt1':'Painel de indicadores gerais e evolução mensal de faturamento — visão executiva e tendência.',
's2__alt2':'Ranking de faturamento por marca e por região — comparação de desempenho.',
's2__alt3':'Taxa de devoluções, canal online e perfil dos clientes — qualidade e composição do negócio.',
's2__criterios':'Matriz impacto × esforço (1–4). Avaliar relação com o problema, campos disponíveis, facilidade de interpretação e execução em 20h.',
's2__proposta':'Para o gestor comercial, um dashboard de uma página com KPIs, evolução de receita e detalhamento por marca, região e canal, com filtros cruzados.',
's2__persona':'Gestor(a) comercial fictício(a), responsável por comparar desempenho ao longo dos meses e identificar recortes que merecem investigação.',
's3__jornada':'Abrir painel → ler receita, volume e clientes → selecionar período → comparar marcas e regiões → investigar recorte com filtro → relatar um achado e uma limitação.',
's3__wireframe':'Proposta para esboço: título e filtros; quatro cartões no topo; série temporal no meio; ranking de marcas, composição e região abaixo. A turma desenhará e validará a versão concreta.',
's3__layout':'Aplicar hierarquia do geral para o específico, títulos sem ambiguidade, contraste, espaçamento, rótulos legíveis e interações coerentes.',
's4__stack':'Power BI Desktop (modelo e relatórios); Power Query (ETL); DAX (medidas); GitHub/Markdown (rastreabilidade). Cada ferramenta deve responder a uma necessidade.',
's4__passos':'Sequência demonstrativa: Obter Dados → Excel → Transformar Dados → renomear Cadastro Lojas → remover nulos/linhas em branco → promover cabeçalho → dividir Localidade por " - " → mesclar gerente → Fechar e Aplicar.',
's4__riscos':'Verificar instalação Windows, origem autorizada dos dados, caminhos de arquivos, tipos e configurações regionais. Não usar clientes reais nem expor credenciais.',
's5__definicao':'MVP proposto: dashboard comercial em uma página com modelo estrela, quatro KPIs, evolução mensal, ranking, composição e filtro cruzado funcional.',
's5__essencial':'Importação/limpeza, relações, receita, unidades, clientes distintos, ticket definido corretamente, série temporal, ranking, análise de composição, filtros e três testes registrados.',
's5__opcional':'Mapa, tema refinado, páginas adicionais e publicação autorizada no serviço Power BI.',
's5__fora':'DAX avançado, gateway, segurança em nível de linha, agendamentos corporativos e compartilhamento pago.',
's5__aceite':'Totais conciliados, filtros funcionando, ao menos três testes com esperado/observado, um insight baseado nos dados, .pbix demonstrável e README.',
's5__demo':'Abrir painel → ler KPIs → filtrar região/mês → comparar resultado → explicar cálculo e relacionamento → mostrar evidência de teste.',
's6__modelo':'Base Vendas (fato) e dimensões Cadastro Clientes, Cadastro Lojas, Cadastro Produtos; ligações por IDs compatíveis.',
's6__etls':'Planejar limpeza dos cadastros; nomes e gênero; idade/faixa etária; tipos numéricos; acrescentar vendas 2022–2024 como nova consulta; desabilitar carga das intermediárias.',
's6__grano':'Verificar a granularidade real da Base Vendas. A média do faturamento por linha não representa necessariamente ticket por pedido; usar nome explícito até verificar ID de pedido.',
's6__relacoes':'Modelo estrela, chaves únicas no lado dimensão, cardinalidade muitos-para-um e direção de filtro única da dimensão para a fato; validar matriz por cidade.',
's6__tarefas':'Backlog-modelo: (1) fontes, (2) ETL lojas/clientes/produtos, (3) append vendas, (4) relacionamentos, (5) DAX, (6) visuais, (7) testes, (8) documentação. Atribuir responsabilidades na turma.',
's6__riscos':'Chaves duplicadas ou ausentes, datas e números convertidos incorretamente, separador decimal, caminhos quebrados, mapas indisponíveis.',
's7__etla':'PLANEJADO — importar e limpar tabelas, consolidar vendas anuais, verificar dados, relacionar fato e dimensões e salvar versão do .pbix.',
's7__daxb':'PLANEJADO — SUM para quantidades, DIVIDE para taxas, SUM de faturamento, AVERAGE por linha devidamente nomeada, CALCULATE para loja online e DISTINCTCOUNT para clientes.',
's7__visc':'PLANEJADO — quatro cartões, evolução temporal, barras por marca, composição por gênero/canal e mapa ou barras por região. Testar realce/filtragem.',
's8__roteiro':'Roteiro-modelo de apresentação: problema, usuário, evidências, proposta de valor, demonstração de dois KPIs e um filtro, modelo/medidas, testes, limites e próximos passos.',
's8__continuidade':'Próxima versão sugerida: medida de ticket por pedido com identificador, refinamento de acessibilidade, novos indicadores e publicação quando houver condições.',
'acordo__funcoes':'Papéis sugeridos e rotativos: pesquisa; ETL; modelo/DAX; visuais/testes; documentação/pitch. Todos explicam pelo menos um componente técnico.',
'acordo__comunicacao':'Ponto de acompanhamento ao final de cada encontro, diário de bordo e registro de decisões.',
'acordo__prazos':'Comunicar bloqueios na aula, dividir tarefas em entregas pequenas e priorizar o MVP antes de recursos opcionais.',
'acordo__decisao':'Decisão guiada por evidências; buscar consenso; professor media impasses; anotar alterações de escopo.',
'acordo__autoria':'Creditar fontes, usar apenas dados fictícios ou anonimizados, registrar IA e verificar resultados humanos antes da divulgação.',
'avaliacao__evidencias':'Coletar fichas 01–08, wireframe, modelo, .pbix, registros de testes, diário, README e pitch. Atribuir NÍVEIS somente após evidências observadas.',
'diario__objetivo':'Orientação para aplicar: relatar atividades, dificuldades, testes e próximos passos reais após cada encontro.'
};
const guides=[
{steps:[['00–15','Apresentar o desafio comercial e a finalidade de um indicador para decisão.'],['15–35','Explicar BI e o fluxo importar, tratar, relacionar, calcular e visualizar.'],['35–65','Explorar as quatro fontes descritas na apostila e diferenciar dados, evidências e hipóteses.'],['65–95','Equipes descrevem público, problema e perguntas comerciais com campos necessários.'],['95–115','Validação cruzada: outra equipe verifica se a pergunta pode ser respondida.'],['115–120','Preencher ficha de descoberta e registrar as dúvidas.']],q:'Que decisão comercial os gestores precisam tomar que as planilhas isoladas ainda não ajudam a responder?',answer:'Exemplo de problema, não resultado observado: o gestor precisa comparar evolução, marcas e regiões. Evidência é o conjunto de dados disponível; razões de queda ou alta ainda são hipóteses.',intervention:'Se o estudante escolher o gráfico antes da pergunta, solicite que explique a decisão gerencial pretendida.'},
{steps:[['00–10','Relembrar pergunta comercial e distinguir indicador, dimensão e tipo de gráfico.'],['10–25','Brainstorm de ao menos três alternativas.'],['25–40','Matriz impacto × esforço e verificação da disponibilidade de campos.'],['40–55','Definir proposta de valor e conjunto de gráficos possíveis.'],['55–60','Registrar decisão e justificativa.']],q:'Qual indicador responde melhor à pergunta e qual visual permite compará-lo?',answer:'Cartão para total, barras para ranking, linha/área para tempo, rosca para poucas categorias de uma composição. Justificar a escolha pelo objetivo, não por aparência.',intervention:'Pedir uma alternativa descartada e o motivo técnico da exclusão.'},
{steps:[['00–10','Revisar proposta de valor.'],['10–25','Desenhar exemplo de hierarquia de leitura em tela.'],['25–45','Equipes criam wireframe e fluxo do usuário.'],['45–55','Teste por colega: encontrar a resposta usando apenas o esboço.'],['55–60','Registrar melhorias.']],q:'Quais informações precisam estar visíveis sem que o gestor tenha que procurar?',answer:'Proposta de layout: topo KPIs, meio evolução mensal, parte inferior marcas e região, filtros claros e títulos informativos.',intervention:'Se houver muitos elementos, solicite reduzir os visuais até caber no MVP.'},
{steps:[['00–15','Verificar instalações e localizar exibições Relatório, Tabela e Modelo.'],['15–30','Demonstrar Obter Dados → Excel → Transformar Dados.'],['30–70','Equipes tratam Cadastro Lojas e observam Etapas Aplicadas.'],['70–95','Explicar a atualização do ETL e a diferença entre origem e transformações.'],['95–110','Salvar .pbix; justificar Power Query, modelo, DAX e Markdown.'],['110–120','Checagem técnica e registro.']],q:'Por que transformar na consulta em vez de corrigir cada planilha exportada manualmente?',answer:'Power Query registra passos repetíveis e preserva o arquivo de origem. Espera-se consulta com cabeçalhos, linhas e colunas adequados.',intervention:'Solicitar ao estudante que identifique a etapa exata que causou determinada transformação.'},
{steps:[['00–15','Recuperar wireframe e identificar o menor valor demonstrável.'],['15–35','Priorizar em essencial, importante, futuro e fora de escopo.'],['35–50','Definir critérios de aceite observáveis.'],['50–60','Escrever roteiro de demonstração.']],q:'Se tivéssemos apenas uma página e poucas horas, o que precisa funcionar para responder à pergunta?',answer:'Uma página com modelo válido, quatro KPIs, série temporal, ranking, composição, filtro e testes. Alguns elementos podem ser reduzidos conforme a questão escolhida.',intervention:'Não confundir um protótipo desenhado com um MVP funcional e testado.'},
{steps:[['00–30','Mapear Base Vendas e três dimensões, chaves, tipos e granularidade.'],['30–65','Desenhar esquema estrela, cardinalidade e direção de filtro.'],['65–95','Planejar limpeza de nomes, gênero, preços e append das vendas.'],['95–135','Criar backlog com responsáveis, ordem e dependências.'],['135–165','Discutir falhas em matriz por cidade sem relacionamentos.'],['165–180','Revisar diagrama e concluir ficha.']],q:'Por que a cidade do Cadastro Lojas não consegue filtrar quantidade da Base Vendas sem uma ligação?',answer:'O vínculo de ID Loja entre dimensão e fato habilita o contexto de filtro. Espera-se muitos-para-um com chave única no lado dimensão.',intervention:'Conferir unicidade do lado um, tipos de IDs e tabelas com linhas não correspondentes.'},
{steps:[['Bloco A: 120 min','ETL clientes/produtos/vendas, acrescentar consultas, desabilitar carga intermediária, criar relações.'],['Bloco B: 120 min','Criar medidas DAX e comparar com matrizes.'],['Bloco C: 120 min','Montar cartões, área/linha, barras, rosca e região; configurar filtros.'],['Bloco D: 120 min','Testar valores, atualização, interações, legibilidade e documentar correções.']],q:'Se todas as cidades mostram o mesmo total, que etapa técnica devemos inspecionar primeiro?',answer:'Verificar relacionamentos e sentido do filtro. Referências aproximadas da apostila original, apenas quando suas bases forem usadas sem alteração: 2,11 mi unidades; 0,36% devoluções; US$ 548 mi de faturamento; 216 mil vendas online em unidades; 18,5 mil clientes. Validar na fonte; não tratar como dados observados da turma.',intervention:'Exigir comparação de totais e testes esperados/observados; atenção ao preço decimal e à definição de ticket.'},
{steps:[['00–10','Apresentar roteiro de pitch, critérios e ordem das equipes.'],['10–60','Apresentações de 3 a 5 min por equipe quando viável, com demonstração ao vivo.'],['60–90','Feedback argumentado sobre correção, comunicação e limites.'],['90–110','Retrospectiva: parar, continuar, começar; definir backlog.'],['110–120','Consolidar avaliação e arquivos.']],q:'Qual decisão ficou mais bem fundamentada pelo dashboard e o que ainda não podemos concluir?',answer:'Pitch deve mostrar problema, evidências, dois KPIs, filtro, uma decisão técnica, um teste, uma limitação e melhoria futura.',intervention:'Evitar afirmação causal baseada exclusivamente em gráfico descritivo.'}
];
function node(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e}
function insertGuide(page,g,i){
 const holder=node('section','sheet');holder.setAttribute('aria-label','Plano docente aplicado');holder.style.background='#f6fbff';
 holder.append(node('h3','', 'Plano docente pronto para a etapa '+(i+1)));
 holder.append(node('p','help','Roteiro de condução previamente preparado. Estes são exemplos e expectativas, não resultados já coletados.'));
 const table=node('table');const head=node('tr');['Tempo','Ação do professor e dos estudantes'].forEach(x=>head.append(node('th','',x)));table.append(head);
 g.steps.forEach(step=>{const tr=node('tr');step.forEach(x=>tr.append(node('td','',x)));table.append(tr)});const scroll=node('div','tablewrap');scroll.append(table);holder.append(scroll);
 [['Pergunta disparadora',g.q],['Resposta-modelo / referência docente',g.answer],['Intervenção pedagógica',g.intervention]].forEach(pair=>{holder.append(node('h3','',pair[0]));holder.append(node('p','',pair[1]))});
 const form=page.querySelector('.sheet');if(form)page.insertBefore(holder,form);else page.append(holder);
}
function applyDefaults(){
 let n=0;
 Object.entries(defaults).forEach(([id,value])=>{const input=document.getElementById(id);if(!input)return;
 if(input.value.trim()===''){input.value=value;input.dispatchEvent(new Event('input',{bubbles:true}));n++}
 });
 return n;
}
guides.forEach((g,i)=>{const page=document.getElementById('page-s'+(i+1));if(page)insertGuide(page,g,i)});
const added=applyDefaults();
const intro=document.querySelector('#page-inicio');
if(intro){const notice=node('div','notice');notice.append(node('strong','', 'Pronto para aplicar: '));notice.append(document.createTextNode('o planejamento, as perguntas, as propostas de atividades, as respostas-modelo e os roteiros por etapa já estão preenchidos. Personalize escola, professor e turma; registre resultados de fato observados durante o curso.'));const anchor=intro.querySelector('.metrics');if(anchor)anchor.after(notice)}
const badge=document.getElementById('status');if(badge)badge.textContent='Planejamento pré-configurado · '+added+' campos iniciais preenchidos';
})();