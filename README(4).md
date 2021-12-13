# Projeto-01-Mod-04-Blue

Criação de uma API com NestJs usando o Prisma e o banco de dados relacional PostgreSQL

A API tem 3 rotas pré determinadas:

Filme

Participantes

Genero

Todas as rotas possuem um CRUD completo descrito abaixo:

GET = retorna todos os itens inseridos pelo usuario, mostgra todos os dados cadastrados e o ID respectivo de cada

As três rotas GET ( Get/Filme, Get/Participantes, Get/Genero) estão configuradas para informar os dados de cada item pelo ID que ele pertence. 

PATCH é uma rota para alteração de dados respectivo ao seu ID ou de um grupo. 

POST é uma rota de cadastro exclusiva do seu grupo.

Em FILME devem ser preenchidas as informações de:

Nome, imagem(opcional), data de lançamento, tempo, genero e participantes.

Em PARTICIPANTES, deve ser preenchido:

Nome, imagem(opcional), data de nascimento

E por ultimo o GENERO onde deve ser preenchido:

Id e Nome.

Por ultimo a rota DELETE que exclui os dados inseridos de acordo com o ID informado.

Se alguma rota não estiver com os dados preenchidos ela retornara uma lista vazia. 

