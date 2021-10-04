<div align="center">
   <img src="public/logo.jpeg" width="200"/>
  
  ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
  ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Prisma](https://img.shields.io/badge/prisma-1B222D?style=for-the-badge&logo=prisma&logoColor=white)
  ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
  
  <img src="public/demo.gif"/>
  
  <a href="https://architecture-store.vercel.app" target="_blank">Acessar demo</a>
</div>

## Sobre o projeto

Architecture Store é uma aplicação web, que consiste em uma loja de projetos arquitetônicos, destinado a Projetista ou Arquitetos que desejam vender seus projetos.

## Etapas do projeto
- [x] Página de busca de produtos
- [x] Página de produto
- [x] API para produtos
- [ ] Testes automatizados das páginas e API
- [ ] Criação da Homepage

## Instalação
```
// Clone o projeto
git clone https://github.com/alexandrekarreiro/architecture-store.git

// Acesse o diretório do projeto
cd architecture-store

// Instale os pacotes
yarn install
```
Após clonar o projeto você deve configurar o banco de dados que será utilizado pelo prisma, basta copiar o arquivo `.env.example` e nomeie como `.env` e edite a URL para o seu banco de dados Postgres:
```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
```
Depois rode a migrate e execute a aplicação:
```
npx prisma migrate dev --preview-feature

yarn dev
```

## Autor
<img src="https://avatars.githubusercontent.com/u/43453292?s=96&amp" width="64"/>
Alexandre Carreiro

Email: alexandrecarreiro80@gmail.com
