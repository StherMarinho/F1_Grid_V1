# F1 Grid 2026 🏎️

Um projeto web que exibe a **grade de pilotos da Fórmula 1 2026** de forma interativa, com filtros, ordenação e cards animados. Ideal para praticar **JavaScript, HTML, CSS e manipulação de DOM**, além de integrar uma **API local (JSON Server)**.

## Funcionalidades

- **Visualização de pilotos:** Cada piloto possui um card com foto, número, equipe, títulos, vitórias, idade e nacionalidade.  
- **Efeito flip:** Clique no card para ver as informações do piloto no verso.  
- **Filtros e ordenação:**  
  - Filtrar por equipe  
  - Ordenar por títulos, vitórias ou idade  
- **Áudio de fundo:** Tema F1 tocando ao carregar a página, com botão para ativar/desativar som.  
- **Design responsivo:** Layout adaptável para dispositivos móveis, tablets e desktops.

## Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript ES6  
- **Framework CSS:** Bootstrap 5  
- **Gerenciamento de estado simples:** Objeto `estado` em JS  
- **API local:** JSON Server simulando dados de pilotos  
- **Controle de áudio:** JavaScript nativo com `Audio()`  

##  Como Usar

- 1. Clone o repositório
  - git clone https://github.com/StherMarinho/F1_Grid_V1.git
  - Instale o JSON Server (se ainda não tiver):
  - npm install -g json-server
  - Inicie a API local:
    - json-server --watch server/db.json --port 3000
- Abra o index.html no navegador.
- Clique nos cards para virar e explore os filtros e ordenação.
- Use o botão de som para ativar/desativar o tema de fundo.



