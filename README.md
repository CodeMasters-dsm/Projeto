<h1 align="center"> Projeto ABP </h1>

## <p> Equipe: CodeMasters </p>

| NOME               | FUNÇÃO        | GITHUB                               |
|--------------------|---------------|--------------------------------------|
| Manuela Castro     | Scrum Master  | [manuelalemes](https://github.com/manuelalemes) |
| Gabrielly Neu      | Product Owner | [Gabrielly209](https://github.com/Gabrielly209) |
| Eric França        | Developer     | [Ericfranca90](https://github.com/Ericfranca90) |
| Pedro Claudino     | Developer     | [PehSeasmoke](https://github.com/PehSeasmoke) |
| Marcelo Vinicius   | Developer     | [marcelovmr](https://github.com/marcelovmr) |

<br>
  
# <p> Descrição do Projeto: </p>

Para estimular o aprendizado prático e a aplicação de conceitos teóricos, a FATEC de Jacareí desafiou os alunos do 1º semestre do curso de Desenvolvimento de Software Multiplataforma a desenvolverem uma aplicação web utilizando práticas modernas de gerenciamento de projetos. A proposta busca proporcionar uma experiência dinâmica, permitindo que os estudantes criem soluções inovadoras enquanto aprimoram suas habilidades no desenvolvimento de software.

## SPRINTS

| Sprint | Link        | Início      | Entrega     | Status |
|--------|-------------|-------------|-------------|--------|
| 01     | [Sprint 01](#sprint-1) | 24/03/2025  | 15/04/2025  |  ✔    |
| 02     | [Sprint 02](#sprint-2) | 16/04/2025  | 15/05/2025  |  ✔    |
| 03     | [Sprint 03](#sprint-3) | 16/05/2025  | 11/06/2025  |   ✔   |

<br>

Clique [aqui](https://trello.com/invite/b/67e1e9ab2a6046abcba03900/ATTI50b8625e86239662e0d7e83dc56f144eBC72E6FE/projeto-abp) para acessar o quadro do Trello.

<br> 

<span id="backlog">

<br>

# :page_with_curl: Product Backlog

### REQUISITOS FUNCIONAIS

| REQUISITO FUNCIONAL_ID | REQUISITOS                                                                                                 | SPRINTS |
|------------------------|------------------------------------------------------------------------------------------------------------|---------|
| RF01                 | Fazer a ingestão de dados no sistema a partir de uma fonte tal como um arquivo CSV                         | #3   |
| RF02                 | (opcional) Fazer o gerenciamento dos dados do sistema (CRUD) através da interface da aplicação, permitindo que a secretaria acadêmica/coordenação altere os dados por meio de uma tela da aplicação |  #3  |
| RF03                 | Garantir que o cadastro ou a ingestão de dados satisfaça as regras básicas de alocação da faculdade (ex.: duas turmas diferentes não podem ser alocadas na mesma sala, e um professor não pode ter duas turmas no mesmo horário) | #2   |
| RF04                 | Permitir que o sistema exporte relatórios/mapas de ambientes e horários em formato PDF                     |  #3  |
| RF05                 | Permitir consultas no sistema (ex.: por turma, turno, professor, data) para apoiar a gestão da faculdade.  |  #2  |


### REQUISITOS NÃO FUNCIONAIS

| REQUISITO NÃO_FUNCIONAL_ID | REQUISITOS                                                                                          | SPRINTS     |
|----------------------------|-----------------------------------------------------------------------------------------------------|-------------|
| RNF01                    | Requisito de interface: exibir um mapa de salas com a opção interativa de clicar e visualizar a situação do ambiente (ex. aulas alocadas ao longo dos turnos do dia) |  #1 #2  |
| RNF02                    | Garantir que o sistema seja responsivo, mantendo um layout consistente em dispositivos móveis e preservando a arquitetura de informação da interface | #1 #2   |

<br>

## :file_folder: USER STORIES

<br>

| ID REFERENCIA | Remetente | Instrução | Finalidade | 
|---------------|-----------|-----------|------------|
| RF01        | Cliente   | Eu quero fazer a ingestão de dados acadêmicos de um arquivo CSV | Para que eu possa adicionar várias turmas, professores e horários ao sistema de forma eficiente e sem precisar cadastrar manualmente cada entrada |
| RF02        | Cliente   | Eu quero poder adicionar, editar, excluir e visualizar turmas, professores, horários e salas através da interface da aplicação | Para que eu possa facilmente manter e atualizar os dados acadêmicos do sistema |
| RF03        | Cliente   | Eu quero que o sistema valide a alocação de salas e horários de acordo com as regras de conflito | Para que eu possa evitar sobrecarga de salas e horários para os professores |
| RF04        | Cliente   | Eu quero gerar relatórios de alocação de salas e horários em formato PDF | Para que eu possa facilmente compartilhar e imprimir essas informações para análise e tomada de decisões | 
| RF05/RNF01  | Usuário   | Eu quero fazer consultas e visualizar um mapa interativo das salas de aula | Para que eu possa clicar em cada sala e ver rapidamente a alocação de aulas para cada turno do dia |
| RNF02       | Usuário   | Eu quero que a interface seja responsiva e se ajuste corretamente em dispositivos móveis | Para que eu possa usar a aplicação com a mesma facilidade em qualquer dispositivo |

<br>

## :file_folder: Diagrama de Casos de Usos
<img width="576" alt="DIAGRAMA_DE_CASOS_DE_USO_TEAM_CODEMASTERS" src="https://github.com/user-attachments/assets/31d915f4-93df-4378-a09e-e5c63ad4abba" />

<br>

## :file_folder: Diagrama de Classes 
<img width="576" alt="DIAGRAMA_CLASSE_TEAM_CODEMASTERS" src="https://github.com/user-attachments/assets/5623261c-eaa6-443e-a1cb-6d4a3f05f3c5" />

<br>

## :file_folder: Modelo Relacional
<img width="576" alt="MODELO_RELACIONAL_TEAM_CODEMASTERS" src="https://github.com/user-attachments/assets/f38279dc-78db-436f-ba29-cd16486feec8" />

<br>


<span id="sprint-1">

<br>

 
# :page_with_curl: SPRINT 1
<p>No primeiro momento da Primeira Sprint, o Product Owner definiu junto ao cliente os requisitos de que deseja para a conclusão do projeto e para que os Requisitos Funcionais (RF) e Requisitos Não Funcionais (RNF) sejam elaborados de uma melhor maneira.
Criamos o Backlog List do produto através do Scrum Master junto aos outros membros da equipe, e através disso criamos a Backlog da Sprint 1, definindo assim as tarefas de cada membro da equipe nesta etapa.
Foi decidido construir os principais elementos do protótipo das páginas através do Figma e fazer o levantamento das informações das quais será exposta no site e elaboração do nosso projeto.
</p>

<br>

## • Sprint Backlog
<br>

| ID REFERENCIA | STORY POINTS | REQUISITO DA SPRINT| Responsável |TAREFA INICIADA | TAREFA CONCLUIDA | 
|---------------|------------|----------------------|--------------------|-------------|----------------|
|  RF01        | 1 | Estabelecer os elementos essenciais das páginas para o desenvolvimento dos protótipos iniciais | Gabrielly | ✔  | ✔  |
|  RNF02       | 2 | Criar os componentes fundamentais com base no Diagrama de Casos de Uso e Diagrama de Classes criado por meio do Astah UML | Eric e Marcelo | ✔  | ✔  |
|  RF01        | 2 | Realizar uma reunião para fomentar a inspiração e a criatividade em torno do projeto | Eric  | ✔  | ✔  |
|  RNF02       | 5 | Projetar as interfaces no Figma, abrangendo as versões para desktop e mobile | Pedro e Marcelo|  ✔  | ✔  |
|  RF05        | 3 | Levantar as informações essenciais que serão apresentadas no site | Pedro   | ✔  |✔  |
|  RNF02       | 2 | Definir a harmonia visual do protótipo (como a paleta de cores), garantindo uma experiência suave e intuitiva | Manuela |  ✔  | ✔  |
|  RNF01       | 3 | Delimitar as interações e funcionalidades do site por meio do Figma | Manuela  | ✔  | ✔  |
|  RNF01      | 2 | Verificar a fluidez da navegação, assegurando uma experiência de usuário primorosa | Gabrielly |  ✔  | ✔  |
|  -          | 2 | Organizar a documentação no GitHub | Eric e Gabrielly |  ✔  | ✔  |

<br>
<br>

### • Burndown Sprint 1
<br>

![image](https://github.com/user-attachments/assets/88a8b7e4-4923-45f7-8c7d-af0b240956d5)

<br>

### • Sprint Retrospective 
<br>

**1. O que funcionou bem durante o sprint?**
<p>Durante a primeira Sprint, diversos aspectos funcionaram muito bem. Um destaque foi a colaboração da equipe — todos demonstraram comprometimento e trabalharam de maneira alinhada, o que nos permitiu atingir as metas dentro do prazo. A comunicação teve uma melhora notável, assim como a distribuição das tarefas: cada integrante ficou responsável por uma parte específica, mas todas as entregas passaram pela aprovação coletiva. Isso evitou desencontros e garantiu que todos estivessem cientes do andamento do projeto.</p>
<br>


**2. O que não funcionou tão bem durante o sprint?**
<p>Ao longo da primeira Sprint, surgiram desafios e imprevistos, como a saída repentina de um integrante da equipe. Essa situação exigiu uma reestruturação ágil e eficiente para assegurar a continuidade do projeto e o cumprimento dos prazos estabelecidos. Além disso, como no grupo não havia membro com antecedência na área, o início foi conturbado até o momento que conseguimos realinhar melhor as ideias e objetivos.</p>
<br>


**3. Quais ações podemos tomar para melhorar no próximo sprint?**
  <p>É possível revisar e otimizar nossas práticas de desenvolvimento, identificando pontos críticos para melhorias e implementando ajustes quando necessário. Podemos, além disso, aumentar o número de reuniões para evitar possíveis desencontros. Ademais, estudar ainda mais os dispositivos que utilizamos no projeto, para termos um resultado final mais impecável.</p>
<br>

<span id="sprint-2">
  
<br>

# :page_with_curl: SPRINT 2
<p>Na Segunda Sprint, o Product Owner e o Scrum Master se reuniram para alinhar as melhores estratégias e definir o que será apresentado nesta fase. Essa conversa foi fundamental para garantir que nossos esforços estejam bem direcionados e que possamos entregar o máximo de valor. Foi definido, junto com a equipe, construir as páginas iniciais e de login usando HTML e CSS, iniciar a inserção de informações no banco de dados e garantir a conexão entre banco de dados e backend do nosso projeto.
</p>

<br>

## • Sprint Backlog
<br>

| ID REFERENCIA |STORY POINTS | REQUISITO DA SPRINT| Responsável |TAREFA INICIADA | TAREFA CONCLUIDA | 
|---------------|------------|----------------------|--------------------|-------------|----------------|
| RNF01/RNF02  | 5 | Criar a versão em desktop da página inicial utilizando HTML, aplicando o estilo com CSS e implementando funcionalidades em JavaScript | Pedro | ✔  | ✔  |
| RNF01/RNF02  | 5 | Criar a versão em mobile da página inicial utilizando HTML, aplicando o estilo com CSS e implementando funcionalidades em JavaScript | Pedro | ✔  | ✔  |
| RNF01/RNF02  | 5 | Criar a versão em desktop da página de login utilizando HTML, aplicando o estilo com CSS e implementando funcionalidades em JavaScript | Eric  | ✔  | ✔  |
| RNF01/RNF02  | 5 | Criar a versão em mobile da página de login utilizando HTML, aplicando o estilo com CSS e implementando funcionalidades em JavaScript | Eric |  ✔  | ✔  |
|  RF01      | 5 | Criar Modelo Relacional do Banco de Dados no DB Designer | Marcelo   | ✔  |✔  |
|  RF01      | 3 | Inserção de informações no banco de dados com o uso de tabelas no PgAdmin | Gabrielly |  ✔  | ✔  |
|  -   | 1 | Definição de linguagens e ferramentas usadas no backend | Manuela  | ✔  | ✔  |
|  RF03    | 3 | Estabelecer conexão entre o banco de dados e o backend usando Node.js | Gabrielly e Marcelo |  ✔  | ❌  |
|  RF02     | 5 | Implementar um recurso completo com CRUD | Manuela  | ✔  | ❌  |
| RF02/RF03  | 3 | Testar rotas manualmente usando Postman | Gabrielly |  ✔  | ❌  |
|  -   | 2 | Organizar a documentação no GitHub | Manuela e Gabrielly |  ✔  | ✔  |

<br>


<br>

### • Burndown Sprint 2
<br>

![image](https://github.com/user-attachments/assets/00695a26-f478-4b6e-87ca-d0793db8beb3)

<br>

<br>

### • Sprint Retrospective 

<br>

**1. O que funcionou bem durante o sprint?**
<p>A substituição do Scrum Master trouxe benefícios significativos à equipe. A mudança permitiu que um membro se dedicasse às suas atividades no DevTeam, resultando em maior engajamento e identificação com o projeto. Além disso, observou-se um fortalecimento da confiança entre os integrantes, resultando em uma colaboração mais fluida e eficiente.</p>
<br>


**2. O que não funcionou tão bem durante o sprint?**
<p>Durante este sprint, a equipe enfrentou dificuldades relacionadas à comunicação e à constância dos encontros semanais. As daily scrum foram realizadas com pouca frequência, o que gerou desalinhamentos, atrasos em determinadas entregas e algumas discordâncias sobre prioridades e responsabilidades.</p>
<br>


**3. Quais ações podemos tomar para melhorar no próximo sprint?**
<p>Para o próximo sprint, é fundamental reforçar a realização das daily scrum, assegurando que todos os membros estejam atualizados sobre o andamento das atividades. Essa mudança pode ser feita com a definição de canais de comunicação mais diretos e documentação com checkpoints, para reduzir os riscos e garantir maior transparência no processo de desenvolvimento.</p>
<br>


<span id="sprint-3">
  
<br>


# :page_with_curl: SPRINT 3
<p>A Sprint 3 marca a fase final do nosso projeto de Sistema de Horário. Por ser a última sprint, reforçamos em reunião com a equipe CodeMasters a importância de conduzi-la com foco e comprometimento. Nesta sprint, as tarefas prioritárias são aquelas fundamentais para a conclusão do sistema para que possa ser entregue com excelência e de forma estruturada.</p>

<br>

## • Sprint Backlog
<br>

| ID REFERENCIA | Prioridade   | REQUISITO DA SPRINT | Responsável | TAREFA INICIADA | TAREFA CONCLUIDA | 
|---------------|------------|----------------------|--------------------|-------------|----------------|
| RNF01/RNF02 | 5 | Criação da página "Sistema de Horários"  | Eric | ✔  |  ✔ |
| RNF01/RNF02  | 5 | Criação das demais páginas da aquisição (HTML e CSS) | Gabrielly e Eric | ✔  | ✔  |
| RF01  | 2 | Complementação dos dados no Banco de Dados | Pedro  | ✔  | ✔  |
| RP02  | 5 | Elaboração da estrutura do backend (JavaScript e Node.js) | Manuela  |  ✔  | ✔  |
|  RF02      | 8 | Implementação dos recursos de CRUD |  Pedro   | ✔  | ✔  |
|  RF01      | 2 | Fazer a ingestão de dados no sistema a partir de um arquivo CSV |  Gabrielly   | ✔  | ✔  |
|  RF03      | 3 | Estabelecimento da conexão entre o Banco de Dados e o Backend |  Marcelo |  ✔  |✔  |
| RF02/RF03  | 3 | Testagem das rotas de aplicação | Gabrielly e Marcelo  | ✔  | ✔  |
|  -     | 2 | Revisão geral, testes finais e ajustes | Gabrielly e Manuela |✔    |✔  |
|  -      | 2 | Documentação no GitHub | Gabrielly e Manuela  | ✔  |  ✔ |

<br>


<br>

### • Burndown Sprint 3
<br>

<br>

### • Sprint Retrospective 

<br>

**1. O que funcionou bem durante o sprint?**
<p>Na Terceira Sprint, observamos um avanço significativo no projeto. A principal melhoria foi a elaboração de um backlog mais detalhado e descritivo, o que proporcionou maior clareza para a equipe de desenvolvimento. Com tarefas mais bem definidas e objetivos claros, a sprint se tornou muito mais produtiva, permitindo que os desenvolvedores focassem em suas entregas com menos bloqueios e maior autonomia.</p>
<br>


**2. O que não funcionou tão bem durante o sprint?**
<p>Durante a última sprint, a equipe enfrentou dificuldades técnicas significativas ao desenvolver a parte mais crítica do projeto, o que impactou diretamente no progresso planejado. Essas dificuldades, aliadas à limitação de tempo disponível, exigiram a reavaliação de prioridades. Como consequência, alguns itens considerados opcionais foram deixados de lado, a fim de concentrar esforços na entrega do núcleo funcional do produto.</p>
<br>








# 🤖 Linguagens e Ferramentas:
<img 
    align="left" 
    alt="HTML"
    title="HTML" 
    width="30px" 
    style="padding-right: 10px;" 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
/>
<img 
    align="left" 
    alt="CSS" 
    title="CSS"
    width="30px" 
    style="padding-right: 10px;" 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
/>
<img 
    align="left" 
    alt="JavaScript" 
    title="JavaScript"
    width="30px" 
    style="padding-right: 10px;" 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
/>
<img 
    align="left" 
    alt="Node.js" 
    title="Node.js"
    width="30px" 
    style="padding-right: 10px;" 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
/>
<img 
    align="left" 
    alt="Visual Studio Code" 
    title="Visual Studio Code"
    width="30px" 
    style="padding-right: 10px;" 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
/>

<img 
    align="left" 
    alt="PostgreSQL" 
    title="PostgreSQL"
    width="30px" 
    style="padding-right: 10px;" 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
/>
<img 
    align="left" 
    alt="Trello" 
    title="Trello"
    width="30px" 
    style="padding-right: 10px;" 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg"          
/>
<img 
    align="left" 
    alt="Figma" 
    title="Figma"
    width="30px" 
    style="padding-right: 10px;" 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"         
/>
