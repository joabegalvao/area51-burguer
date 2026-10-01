# Area 51 Burger | Landing page

Página única, estática, em HTML, CSS e JavaScript puro. Não há etapa de build
nem dependências de execução: basta servir a pasta.

## Como visualizar

```bash
# na raiz do projeto
python3 -m http.server 4192
# abra http://localhost:4192
```

Qualquer servidor estático funciona (Nginx, Apache, Netlify, Vercel, Hostinger).
Publique `index.html` e a pasta `assets/`. A pasta `tools/` não precisa ir para
o servidor.

### Materiais de origem

Os arquivos enviados pelo cliente ficam reunidos na pasta
`materiais-de-origem/`, que não faz parte do repositório: ela existe só na
pasta local do projeto e é ignorada pelo git. As imagens que o site usa já
estão prontas em `assets/img`.

```
materiais-de-origem/
  logo/    area51 logo.jpg (150 x 150 px, letreiro vermelho sobre creme quadriculado)
  fotos/   fachada.png (1652 x 952, a esquina à noite) e seis capturas do Instagram
```

Não foram recebidas fotos de perfil das avaliações; a página mostra só os
nomes.

## Dados do cliente

Recebidos em 01/10/2026.

| Dado | Valor |
| --- | --- |
| Nome | Area 51 Burger (no Google: Area 51 Burguer) |
| Segmento | Hamburgueria |
| Pedidos | Pelos aplicativos de entrega oficiais; o link informado leva ao cardápio em `pratodigital.com.br/area51/` |
| WhatsApp | (44) 99883-6610 |
| Telefone fixo | não informado |
| Instagram | https://www.instagram.com/area51burger_/ |
| Endereço | Av. Paraná, 1591, Zona 07, Maringá |
| Nota | 4,4 no Google |

O briefing trazia "Produto ou serviço principal: peças para carros, caminhões,
camionetas" e "Público-alvo: pessoas que possuem automóveis", textos que
sobraram do projeto anterior desta série (Geral Peças). Não foram
considerados; o conteúdo segue o segmento, as fotos, o letreiro da fachada e
as avaliações.

O link de pedidos veio embrulhado pelo redirecionador do Instagram
(`l.instagram.com/?u=...`), com parâmetros de rastreamento. A página usa o
destino limpo: `https://pratodigital.com.br/area51/`.

### Conferido no Google

Em 01/10/2026, o Google Maps mostrava o perfil "Area 51 Burguer" na Av.
Paraná, 1591, Zona 07, Maringá, CEP 87020-085, com **nota 4,4 e 579
avaliações**. A nota confere com o briefing, e a página a cita com o número de
avaliações. O mapa incorporado é carregado pelo nome da casa. O CEP vem do
Google e aparece no rodapé e no JSON-LD.

### Avaliações como foram recebidas

- **Hugo Antônio:** Comida maravilhosa, fiquei super satisfeito com a
  quantidade/ qualidade, atendimento muito bom, super prestativos.
- **Juliety Alves:** SIMPLESMENTE MARAVILHOSO! Gente só vão e tenham a
  experiência de comer um baita hamburger sem miséria e a batata nem tenho
  palavras pra descrever o que é
- **Vitória Tavares:** o melhor hambúrguer de maringá, sou completamente
  viciadaaaaa!! Eu e meu noivo temos que pedir pelo menos 2x na semana
  kkkkkkk

Na página: vírgulas e pontos finais acrescentados, "quantidade/ qualidade"
virou "quantidade e a qualidade", "hamburger" virou "hambúrguer",
"viciadaaaaa!!" virou "viciada!" e o "kkkkkkk" saiu. O sentido não mudou.
"Sem miséria", da avaliação de Juliety, virou a frase do hero.

## Estratégia

| Definição | Decisão |
| --- | --- |
| Proposta de valor | Hambúrguer artesanal feito na chapa, em porção generosa ("sem miséria"), na esquina da Av. Paraná ou em casa pelo app |
| Principal objeção | "Hamburgueria artesanal é bonita e pequena": a página responde com as avaliações sobre quantidade e com as fotos |
| Conversão prioritária | Pedir pelo app oficial (cardápio, combos, entrega e retirada) |
| Ação secundária | WhatsApp, para dúvidas e pedidos combinados |
| Ação de apoio | Ir até a esquina; seguir o Instagram |

## Direção visual

Bar americano com letreiro de neon, como a fachada: fundo escuro quente
(marrom quase preto), o vermelho do logo em neon, creme quadriculado do fundo
do logo nas seções claras, madeira do bar na galeria e um toque de amarelo
mostarda nas estrelas e nos destaques sobre o escuro. Tipografia Alfa Slab
One (títulos, com peso de letreiro de lanchonete) e Rubik (textos).

É um layout diferente dos outros projetos desta série, de propósito:

- **Hero com a fachada à noite.** No desktop, dois painéis: o texto num
  painel escuro à esquerda e a foto inteira à direita, sem nada por cima do
  letreiro de neon (uma primeira versão punha o texto sobre a foto e cobria o
  letreiro; o cliente pediu para reorganizar). No celular, a foto fica atrás
  do texto, escurecida. O letreiro de neon da foto é o logo do hero; o título
  é a frase "Hambúrguer artesanal, sem miséria."
- **Letreiro corrido** abaixo do hero, com as palavras do friso da fachada
  (Burgers, Shakes, Good vibes, Hambúrgueres artesanais), em movimento
  contínuo.
- **Grade do logo** como fundo das seções claras.
- **Cardápio com pontilhado**, como em um menu de balcão, com as observações
  tiradas das avaliações.
- **Galeria em trilho horizontal** de polaroids inclinadas sobre a madeira,
  com rolagem por arrasto e encaixe.
- **Avaliações em cupons de caixa**, com a borda serrilhada, sobre vermelho
  escuro; a nota 4,4 sobe de 0 quando aparece na tela.
- **Letreiro vetorizado em neon** no cabeçalho, na chamada final e no rodapé,
  sempre com o **disco voador** do neon da fachada ao lado, desenhado por
  código (`tools/logo/nave.svg`: cúpula, disco com três luzes, feixe e a
  silhueta sendo abduzida); no fecho os dois "acendem" piscando quando entram
  na tela. O disco também é o favicon.
- Foto da chapa inclina com o mouse; os cupons entram um depois do outro;
  cabeçalho fica sólido ao rolar.

Tudo isso para quando o sistema **não** pede movimento reduzido: com a
preferência ligada, nada se move, o letreiro corrido fica parado e a nota já
aparece pronta. A madeira e a grade são desenhadas em CSS, sem imagem. Sem
efeitos de vidro, sem emojis como ícones. Os únicos degradês são funcionais:
o escurecimento da foto do hero para o texto ler e as listras que desenham as
tábuas.

## Seções da página

| Ordem | Seção | Âncora | Conteúdo |
| --- | --- | --- | --- |
| 1 | Cabeçalho | | Disco voador e letreiro em neon, navegação e "Pedir agora". Fixo, translúcido sobre o hero e sólido ao rolar |
| 2 | Hero | `#inicio` | Painel de texto e fachada à noite lado a lado (no celular, foto atrás do texto): "Hambúrguer artesanal, sem miséria.", pedir e ver o que tem, nota 4,4 em 579 avaliações |
| 3 | Letreiro corrido | | Burgers, Shakes, Good vibes, Hambúrgueres artesanais, Av. Paraná, 1591 |
| 4 | Na chapa | `#na-chapa` | Foto da chapa com adesivo, cardápio em quatro linhas e link para o cardápio completo |
| 5 | Fotos | `#fotos` | Seis polaroids em trilho horizontal sobre madeira, link para o Instagram |
| 6 | Avaliações | `#avaliacoes` | Nota 4,4 com contador, estrelas e três cupons |
| 7 | Como pedir | `#como-pedir` | App oficial (destaque), WhatsApp e endereço |
| 8 | Onde fica | `#onde-fica` | Endereço, WhatsApp, Instagram, app e mapa |
| 9 | Chamada final | | Letreiro neon piscando, "Bateu a fome? O letreiro está aceso.", pedir e WhatsApp |
| 10 | Rodapé | | Endereço com CEP, contato, pedidos |

Componente de apoio: botão flutuante de WhatsApp, no canto inferior direito,
em todas as telas.

## Estrutura de arquivos

```
index.html                       conteúdo e SEO
assets/css/styles.css            estilos (tokens de cor e tipografia no topo)
assets/js/main.js                menu, revelação na rolagem, cabeçalho ao rolar, inclinação da foto, contador da nota
assets/img/                      imagens otimizadas (geradas pelos scripts)
assets/fonts/                    Alfa Slab One e Rubik (arquivos locais)
tools/optimize-images.py         gera as fotos de assets/img a partir dos originais
tools/logo/letreiro.svg          letreiro "Area 51" vetorizado a partir do logo
tools/logo/nave.svg              disco voador do neon da fachada, desenhado por código
tools/render-compartilhamento.js gera os ícones e a imagem de compartilhamento pelo Chromium
materiais-de-origem/             arquivos do cliente (só na pasta local, fora do git)
```

## Imagens recebidas e como foram usadas

| Arquivo | Conteúdo | Tamanho | Onde aparece |
| --- | --- | --- | --- |
| `fachada.png` | A esquina à noite, com o neon do disco voador e o letreiro | 1652 x 952 | hero (reduzida a 1600 px) |
| `Screenshot ... 155855.png` | Hambúrguer alto com bacon, no prato de borda vermelha | 659 x 884 | galeria e imagem de compartilhamento |
| `Screenshot ... 160119.png` | Batata com carne desfiada | 664 x 886 | galeria |
| `Screenshot ... 155905.png` | Mesa com três hambúrgueres e celular | 664 x 887 | galeria |
| `Screenshot ... 155935.png` | Frango empanado com molho | 662 x 884 | galeria |
| `Screenshot ... 155830.png` | Pessoa com duas caixas de pedido | 659 x 885 | galeria |
| `Screenshot ... 155843.png` | Cozinheiro na chapa | 662 x 884 | "Na chapa" e galeria |

**Nenhuma foto é ampliada**, e um teste automático confere isso. As capturas
do Instagram tinham borda irregular de 2 a 3 px, deixada de fora.

### Logo

O logo veio em JPG de 150 x 150 px: letreiro "Area 51" vermelho sobre creme
quadriculado. É pequeno demais para o cabeçalho e para os ícones, então o
letreiro foi **vetorizado** a partir do arquivo (ampliado 8 vezes, suavizado
e traçado com potrace) e está em `tools/logo/letreiro.svg`. O desenho das
letras é o do logo, e é o mesmo do letreiro de neon da fachada. Por ser vetor
com `fill="currentColor"`, ele toma a cor de onde está e recebe o brilho de
neon por filtro CSS. O creme quadriculado do fundo do logo virou a grade das
seções claras.

O disco voador (`tools/logo/nave.svg`, símbolo `#nave` no `index.html`) foi
desenhado por código a partir do neon da fachada, em traço, para combinar com
o letreiro. Os ícones do site usam só ele, porque o letreiro inteiro fica
ilegível em 32 px.

Se o cliente enviar o logo em vetor, basta trocar o `<path>` do símbolo
`#letreiro` no `index.html` e o `tools/logo/letreiro.svg`, e rodar
`node tools/render-compartilhamento.js`.

## Como atualizar o conteúdo

| O que mudar | Onde |
| --- | --- |
| Textos e endereço | `index.html` (seções comentadas) |
| Link de pedidos | `index.html`: procure por `pratodigital.com.br` (7 ocorrências) e o bloco JSON-LD |
| Número e mensagem do WhatsApp | `index.html`: procure por `wa.me/` (5 ocorrências). O texto vem depois de `?text=`, codificado |
| Mapa | `index.html`: procure por `google.com/maps` (5 ocorrências, uma delas no `<iframe>`) |
| Nota e número de avaliações | `index.html`: hero (`rating`), seção "AVALIAÇÕES" (`data-count` e título) e JSON-LD |
| Cores e fontes | `assets/css/styles.css`, bloco `:root` |
| Linhas do cardápio | `index.html`, lista `menu-lines` |
| Palavras do letreiro corrido | `index.html`, bloco `ticker` (a lista aparece duas vezes, para o movimento ser contínuo) |
| Fotos da galeria | `index.html`, lista `rail__track`; cada polaroid tem a inclinação em `--tilt` |
| Fotos | substitua o original, ajuste a lista `PHOTOS` de `tools/optimize-images.py` e rode o script |
| Avaliações | `index.html`, lista `receipts` |

Mensagem de WhatsApp (todos os pontos): "Olá! Vi o site da Area 51 Burger e
quero falar com vocês."

Para gerar as imagens (requer Pillow e a pasta `materiais-de-origem/`):

```bash
python3 tools/optimize-images.py        # fotos
node tools/render-compartilhamento.js   # ícones e imagem de compartilhamento (requer Node e Playwright)
```

Se o Playwright não estiver instalado no projeto, informe os caminhos pelas
variáveis `PLAYWRIGHT_MODULE` e `CHROMIUM_PATH`.

### Cache do navegador

Os arquivos de estilo e script são chamados com versão: `styles.css?v=1` e
`main.js?v=1`. Ao alterar um deles, aumente o número no `index.html`.

## Identidade visual

| Token | Cor | Origem |
| --- | --- | --- |
| `--red` | `#E62129` | vermelho do logo: letreiro, estrelas de rótulo, ícones |
| `--neon` | `#F63831` | vermelho do neon da fachada: brilho do letreiro |
| `--red-btn` | `#CC1219` | vermelho um pouco mais fechado, para botões, adesivos e o letreiro corrido: o texto creme sobre o vermelho do logo dá 4,2:1, abaixo do AA |
| `--red-700`, `--red-900` | `#A30F16`, `#7A0C12` | vermelho escurecido: destaques sobre o claro e a seção de avaliações |
| `--cream`, `--grid` | `#FDF3E9`, `#F3C9BF` | fundo e grade do logo: seções claras |
| `--wood`, `--wood-dark`, `--wood-light` | `#4A2A18`, `#35190D`, `#5E3A22` | madeira do bar: galeria |
| `--char`, `--char-800`, `--char-line` | `#1A0F0A`, `#241610`, `#3D2A20` | quase preto quente: cabeçalho, onde fica, chamada final, rodapé |
| `--mustard` | `#F2B134` | amarelo mostarda: estrelas, destaques sobre o escuro, friso do letreiro corrido |
| `--paper`, `--line` | `#FFFAF4`, `#E8D6C6` | papel dos cupons e das polaroids, linhas |
| `--ink`, `--ink-soft`, `--soft` | `#1F1511`, `#5E4A3E`, `#C9B3A4` | textos |
| `--whatsapp` | `#25D366` | verde oficial do WhatsApp, só no botão flutuante |

Tipografia: Alfa Slab One (títulos, legendas e rótulos de cupom) e Rubik
(textos, com itálico nas observações do cardápio).

## Decisões de conteúdo

- Só foram usados dados fornecidos: nome, endereço, WhatsApp, Instagram, link
  de pedidos, nota, fotos, avaliações e o que está escrito na fachada
  ("Hambúrgueres artesanais", "Burgers, Shakes, Good vibes"). Não há preços,
  horário, prazo de entrega, lista de combos nem "o melhor de Maringá" como
  afirmação da casa (a frase aparece só dentro da avaliação de Vitória).
- As quatro linhas do cardápio (hambúrgueres, batata, frango, shakes) vêm das
  fotos e da fachada; as observações, das avaliações. Preços e o cardápio
  completo ficam no app, e a página diz isso.
- "Montado na chapa na hora do pedido" descreve a foto da chapa.
- "Pedidos para entrega são feitos pelos aplicativos oficiais" vem do
  briefing. A página não nomeia os aplicativos, porque eles não foram
  informados; o link que o cliente passou leva ao cardápio no Prato Digital.
- "Confirme o horário de funcionamento" está na página porque o horário não
  foi informado.
- O mapa é um mapa do Google incorporado, carregado pelo nome da casa. Ele só
  carrega quando o visitante chega perto da seção.
- Não há formulário, porque não existe destino de envio definido.
- O ícone do botão flutuante é escuro sobre o verde, para manter contraste.

## Testes realizados

Executados em 01/10/2026, em Chromium automatizado (Playwright).

- Revisão visual das capturas de tela: página inteira em 390 e 1440 px e
  primeira tela em 320, 768, 1024 e 1440 px.
- Sem rolagem horizontal nos tamanhos 320, 360, 390, 480, 600, 768, 900,
  1024, 1200, 1440 e 1920 px (o trilho de fotos rola só dentro dele).
- Sem erros de console e sem imagens quebradas.
- 41 verificações automáticas aprovadas: menu no celular (toque, Esc, toque
  fora, foco), âncoras, botão flutuante de WhatsApp (posição, nome acessível,
  sem cobrir o texto do rodapé), fotos sem ampliação acima do tamanho real,
  mapa com título e carregamento adiado, revelação na rolagem, link de pular
  para o conteúdo, foco visível, destino e atributos de todos os links (7 de
  pedido, 5 de WhatsApp, 3 de Instagram, 4 de mapa, nenhum destino fora de
  wa.me, instagram, google e pratodigital), hierarquia de títulos e atributos
  das imagens, sem travessões, emojis ou textos de exemplo.
- O mapa foi aberto no teste e mostrou o marcador "Area 51 Burguer" na Av.
  Paraná, 1591.
- Página utilizável sem JavaScript (o cabeçalho fica sólido, os efeitos não
  existem, tudo continua legível e clicável).
- Animações desligadas quando o sistema pede movimento reduzido.
- Contraste AA em todos os textos. O cabeçalho translúcido foi medido
  composto sobre o fundo do hero.
- Carga inicial no celular abaixo de 700 KB, medida em tela de densidade 3x,
  sem saltos de layout (CLS 0). Página inteira: 590 KB, sem contar o mapa.

Não testado: Safari, Firefox e aparelhos físicos. Dos links externos, foi
conferido apenas o endereço, não o conteúdo de destino. Também não foi
verificado se o número responde no WhatsApp nem se o cardápio no Prato
Digital está atualizado.

## Histórico de ajustes

| Ajuste | Arquivos |
| --- | --- |
| Versão inicial da página | todos |
| Hero reorganizado em dois painéis no desktop, para o texto não cobrir o letreiro da fachada | `styles.css` |
| Disco voador em neon, desenhado por código, antes do letreiro no cabeçalho, no fecho e no rodapé; vira o favicon | `index.html`, `styles.css`, `tools/logo/nave.svg`, `tools/render-compartilhamento.js`, `assets/img` |
| No cabeçalho, só a nave brilha; o letreiro fica no vermelho chapado, a pedido do cliente | `index.html`, `styles.css` |

## Créditos e licenças

- Logo, fotos e avaliações: fornecidos pelo cliente. Letreiro vetorizado para
  este projeto a partir do logo recebido.
- Disco voador e demais ícones: criados para este projeto. Ícone do WhatsApp:
  Simple Icons (CC0).
- Alfa Slab One e Rubik: SIL Open Font License 1.1, obtidas do Google Fonts e
  hospedadas localmente.
- Mapa: Google Maps, incorporado.

## Pendências que dependem do cliente

- **Logo em vetor**, para substituir a vetorização feita a partir do JPG de
  150 px.
- **Nomes dos aplicativos de entrega** (iFood, etc.), se quiserem citá-los,
  e o link de cada um.
- Horário de funcionamento e formas de pagamento.
- Cardápio com nomes dos lanches e preços, se quiserem na página; hoje ela
  manda para o app.
- Fotos de shakes e do salão por dentro.
- Telefone fixo, se existir.
- Fotos de perfil das avaliações, se quiserem.
- Domínio de publicação, para completar `og:image` com URL absoluta e adicionar
  `link rel="canonical"`.
