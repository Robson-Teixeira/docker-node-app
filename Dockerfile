# Informa imagem que será utilizada como base
FROM node:14
# Define diretório de trabalho onde os comandos serão executados
WORKDIR /app-node
# Copia artefatos do diretório atual da aplicação para o workdir
COPY . .
# Instala dependências
RUN npm install
# Define comando utilizado ao exectuar container
ENTRYPOINT npm start
