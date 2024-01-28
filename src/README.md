## Instalando o Docker

### Windows

- [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/)
- [WSL](https://learn.microsoft.com/pt-br/windows/wsl/install)

> [Install Docker Desktop on Windows](https://docs.docker.com/desktop/install/windows-install/)

#### Executando o Docker

```
docker run hello-world
```

### Linux

#### Atualizando os repositórios

```
sudo apt-get update
```

Ao executar esse comando, será solicitada a sua senha de sudo. Após inserir a senha, ele vai atualizar rapidamente, e podemos seguir copiando e colando os comandos abaixo.

```
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

Cada comando instala os pacotes e tudo o que for necessário para conseguirmos utilizar. Na sequência, adicionaremos o seguinte comando:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

No nosso caso, o terminal retorna a pergunta se queremos sobrescrever, porque já fizemos isso. Porém, vamos escolher a opção "sim" (y). No seu caso, se for a primeira vez, isso não vai aparecer, o terminal só irá executar sem nenhum problema.

#### Definindo a versão

Agora, vamos definir que queremos utilizar o Docker na versão estável. Ele tem a versão `nightly` (ou `test`), que ainda é o próprio Docker, mas são diferentes versões a nível de teste, de estabilidade da ferramenta. Queremos estabilidade, então vamos utilizar a versão estável (`stable`).

```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

#### Atualizando os pacotes e executando o comando de instalação

Por fim, vamos efetuar o `update` dos pacotes mais uma vez:

```
sudo apt-get update
```

Assim que terminar a atualização dos pacotes do sistema, vamos executar o comando de instalação do Docker Community Edition (`docker-ce`), do CLI do Docker (`docker-ce-cli`), e do `containerd.io`, que será responsável pela parte do funcionamento dos containers no nosso sistema.

```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

> [Install Docker Desktop on Linux](https://docs.docker.com/desktop/install/linux-install/)

#### Executando o Docker

```
docker run hello-world
```

Ao executá-lo, temos como retorno uma permissão negada. O que isso quer dizer? Por que isso aconteceu?

Quando temos essa questão de permissão no Linux, geralmente, se executarmos o mesmo comando com um sudo na frente, irá funcionar. Vamos testar para conferir se isso acontece?

```
sudo docker run hello-world
```

Após executar, temos como retorno a mensagem "Hello from Docker!", assim como no Windows. Portanto, a princípio, a instalação toda funcionou sem nenhum problema.

#### Criando um grupo

Como fazemos agora para não precisar executar o Docker com o comando `sudo` na frente? Existe uma maneira recomendada, inclusive pela própria documentação, de como contornar esse problema: criar um grupo chamado `docker` no sistema e colocar nosso usuário dentro desse grupo.

Com o comando `usermod`, utilizando o `sudo` na frente, podemos passar o parâmetro `-aG` seguido de `docker`, que é o nome do grupo ao qual queremos adicionar o usuário, e por fim, `$USER`, que será o nosso próprio usuário.

```
sudo usermod -aG docker $USER
```

> [Pós instalação no Linux](https://docs.docker.com/engine/install/linux-postinstall/)

## Links

- [Docker Hub](https://hub.docker.com/)

## Comandos

- `docker XXXXX --help` ajuda para o comando especificado
- `docker run XXXXX` executa a imagem especificada em um _container_
> Procura a imagem localmente -> Baixa a imagem caso não encontre localmente -> Valida o hash da imagem -> Executa o container.
- `docker run XXXXX sleep 1d` executa a imagem especificada em um _container_ com parâmetro `sleep` e valor `1d`
- `docker pull XXXXX` baixa a imagem especificada
- `docker ps` ou `docker container ls` lista _containers_ em execução
- `docker ps -a` ou `docker container ls -a` lista _containers_ em/fora execução