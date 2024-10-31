# Podcast Manager 

### Descrição 
Um app ao estilo Netflix, aonde possa centralizar diferentes episódios podcasts separados por cartegoria 

### Domínio
Podcastes feito em vídeo

### Features
- Listar os episódios podcasts em sessões de categorias
    - [Saude, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como 

#### Feature
  Listar os episódios podcasts em sessões de categorias

### Como vou implementar:
 GET: Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link 


response: 
  ```js
  [
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId:"pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: [saúde, bodybuilder],
    }
    {
        podcastName: "flow",
        episode: "RUBENS BARRICHELLO - Flow #339",
        videoId:"4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        categories: [saúde, bodybuilder],
    }
  ]
  ```

GET: retorna lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast.