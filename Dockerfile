# Informa imagem que será utilizada como base
FROM node:14
# Define diretório de trabalho onde os comandos serão executados
WORKDIR /app-node
# Argumento/variável de ambiente para uso em tempo de criação/build da imagem
ARG PORT_BUILD=6000
# Argumento/variável de ambiente para uso em tempo de execução do container
ENV PORT=$PORT_BUILD
# Expõe porta utilizada pela aplicação
EXPOSE $PORT_BUILD
# Copia artefatos do diretório atual da aplicação para o workdir
COPY . .
# Instala dependências
RUN npm install
# Define comando utilizado ao executar container
ENTRYPOINT npm start
