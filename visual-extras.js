/* Ampliação visual e didática — Power BI + IPIT.
 * Não usa dados pessoais, não envia respostas a servidores e não interfere no armazenamento.
 */
(()=>{
'use strict';
const icons={"inicio":"🏠","config":"🧑‍🏫","agenda":"🗓️","s1":"🔎","s2":"💡","s3":"✏️","s4":"💻","s5":"🚀","s6":"🧩","s7":"📈","s8":"🎤","acordo":"🤝","diario":"📒","ia":"🤖","avaliacao":"✅","retrospectiva":"🔄"};
const altText={
hero:"Ilustração de um dashboard de vendas com indicadores de receita, unidades, clientes e gráficos, ao lado do título Power BI + IPIT.",
stages:"Sequência das oito etapas IPIT: Descoberta, Ideação, Solução, Tecnologia, MVP, Arquitetura, Desenvolvimento e Pitch.",
flow:"Fluxo técnico de cinco fases: importar, tratar, relacionar, calcular em DAX e visualizar no Power BI.",
schema:"Modelo estrela: fato Vendas relacionado às dimensões Clientes, Lojas e Produtos, com cardinalidade muitos para um."};
const $=s=>document.querySelector(s);
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n}
function illustration(path,alt,caption){const figure=el('figure','course-illustration');const img=el('img');img.src=path;img.alt=alt;img.loading='lazy';img.decoding='async';figure.append(img);if(caption)figure.append(el('figcaption','',caption));return figure}
function richSection(title,description,path,alt,caption){const wrap=el('section','course-visual-section');wrap.append(el('h3','',title));wrap.append(el('p','',description));wrap.append(illustration(path,alt,caption));return wrap}
const nav=document.querySelectorAll('.sidebar .nav');
nav.forEach(btn=>{const icon=icons[btn.dataset.section];if(icon)btn.textContent=icon+'  '+btn.textContent;});
const home=$('#page-inicio');
if(home){
const pageTitle=home.querySelector('h2');
const banner=illustration('assets/hero-curso.svg',altText.hero,'🧭 Curso de 20 horas • Aprendizagem baseada em problemas e em evidências.');
banner.classList.add('course-hero-illustration');if(pageTitle)pageTitle.after(banner);
const navCard=el('section','visual-navigation');navCard.append(el('h3','','✨ Explore os conceitos com imagens'));
const links=el('div','visual-links');
[['🧭 8 etapas IPIT','etapas-ipit'],['📥 Fluxo técnico','fluxo-powerbi'],['🧩 Modelo estrela','modelo-estrela']].forEach(([name,target])=>{const a=el('a','visual-link',name);a.href='#'+target;a.addEventListener('click',e=>{e.preventDefault();document.getElementById(target)?.scrollIntoView({behavior:'smooth',block:'start'})});links.append(a)});navCard.append(links);
const firstNotice=home.querySelector('.notice');if(firstNotice)firstNotice.after(navCard);else home.append(navCard);
const pathway=richSection('🔎 Como funciona o percurso IPIT','Cada etapa termina com um entregável verificável, desde o problema investigado até a apresentação da solução.','assets/etapas-ipit.svg',altText.stages,'As oito etapas são o eixo metodológico; as horas somam 20.');
pathway.id='etapas-ipit';home.querySelector('.actions')?.before(pathway);
const flow=richSection('📥 O trabalho técnico no Power BI','O percurso IPIT orienta as decisões pedagógicas; no Power BI, o aluno importa, trata, relaciona, calcula e visualiza.','assets/fluxo-powerbi.svg',altText.flow,'Fluxo conceitual utilizado em todas as práticas do curso.');
flow.id='fluxo-powerbi';home.querySelector('.actions')?.before(flow);
const schema=richSection('🧩 Por que o modelo estrela importa?','As dimensões descrevem as vendas. Relacionamentos corretos permitem que os filtros cruzem as tabelas.','assets/modelo-estrela.svg',altText.schema,'Esquema didático simplificado: não representa uma captura de tela do Power BI.');
schema.id='modelo-estrela';home.querySelector('.actions')?.before(schema);
const quick=el('div','visual-cta');quick.append(el('strong','','🚀 Pronto para começar?'));quick.append(el('p','','O planejamento e as fichas já têm sugestões do professor. Comece pela Descoberta; os dados reais da turma serão preenchidos durante os encontros.'));
const next=el('button','button primary','🔎 Abrir a etapa 1');next.type='button';next.addEventListener('click',()=>document.querySelector('.nav[data-section="s1"]')?.click());quick.append(next);home.querySelector('.actions')?.before(quick);
}
const topics={
s1:['🔎','Problema e usuário','assets/etapas-ipit.svg','A investigação antecede os indicadores.'],
s2:['💡','Alternativas e proposta de valor','assets/etapas-ipit.svg','Uma boa ideia nasce de uma pergunta testável.'],
s3:['✏️','Esboço antes do dashboard','assets/fluxo-powerbi.svg','Os visuais devem responder a necessidades, não preencher espaços.'],
s4:['💻','Importação e Power Query','assets/fluxo-powerbi.svg','Cada transformação deve ser reproduzível.'],
s5:['🚀','Escopo do dashboard mínimo viável','assets/etapas-ipit.svg','Primeiro entregar uma solução pequena, funcional e testada.'],
s6:['🧩','Tabelas fato e dimensões','assets/modelo-estrela.svg','A dimensão filtra a fato quando existe relacionamento adequado.'],
s7:['📊','Medição, gráficos e testes','assets/fluxo-powerbi.svg','Indicadores devem ser validados por evidências, não apenas exibidos.'],
s8:['🎤','Demonstrar e refletir','assets/etapas-ipit.svg','O pitch mostra produto, processo, testes e limites.']
};
Object.entries(topics).forEach(([id,data])=>{
const panel=$('#page-'+id);if(!panel)return;
const heading=panel.querySelector('h2');if(heading)heading.textContent=data[0]+' '+heading.textContent;
const figure=illustration(data[2],data[1]+'. '+data[3],'💡 '+data[3]);figure.classList.add('stage-image');
const fields=panel.querySelector('.sheet');
if(fields)fields.before(figure);else panel.append(figure);
const h=panel.querySelector('h3');if(h)h.textContent='📚 '+h.textContent;
});
const agenda=$('#page-agenda');if(agenda){const h=agenda.querySelector('h2');if(h)h.textContent='🗓️ '+h.textContent;}
document.querySelectorAll('.sheet').forEach(s=>{const h=s.querySelector('h3');if(h&&!/^[🎯📒📝☑✅📌📚📋🧠🧩💡🎤📊]/u.test(h.textContent))h.textContent='📋 '+h.textContent});
const sty=el('div','visual-a11y-tip','💾 Seus formulários continuam salvos neste navegador. Faça backup em JSON ao concluir cada encontro.');
const side=$('.sidebar');if(side)side.append(sty);
})();