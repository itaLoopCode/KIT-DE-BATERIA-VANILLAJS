**Nome do Projeto:**Kit de Bateria

**Descrição:**

Este código JavaScript cria uma bateria interativa simples usando HTML.

**Funcionalidades:**

- Mapeia letras para sons de bateria (`A` a `L`).
- Reproduz o efeito sonoro correspondente quando um div é clicado ou a tecla designada é pressionada.
- Adiciona uma classe "active" visual ao div clicado/pressionado por um breve período, criando um efeito de feedback visual.

**Uso:**

- Abra o arquivo HTML em um navegador da web.
- Clique nos divs com letras ou pressione as teclas correspondentes (`A` a `L`) para tocar os sons da bateria e experimentar o feedback visual.

**Estrutura do Código:**

1. **Objeto `sons`:**
   - Define um objeto constante `sons` que mapeia letras para nomes de arquivos de som de bateria.

2. **Função `criarDiv`:**
   - Recebe uma string `texto` (letra) como entrada.
   - Cria um novo elemento `div`, adiciona a classe `key`, define o conteúdo do texto como `texto`, define o ID como `texto` e anexa o div ao div container com o ID `container`.

3. **Função `exibir`:**
   - Recebe o objeto `sons` como entrada.
   - Usa `Object.keys(sons)` para obter um array de chaves de letras do objeto `sons`.
   - Itera sobre as chaves usando `forEach` e chama a função `criarDiv` para cada letra, criando os divs de bateria correspondentes.

4. **Função `tocarSom`:**
   - Recebe uma string `letra` (letra) como entrada.
   - Cria um novo elemento de áudio usando `new Audio()`.
   - Constrói o caminho da fonte de áudio dinamicamente usando literais de modelo: `./sounds/${sons[letra]}`.
   - Reproduz o áudio usando `audio.play()`.

5. **Função `adicionarEfeito`:**
   - Recebe uma string `letra` (letra) como entrada.
   - Retorna um array contendo uma única função que adiciona a classe `active` ao elemento div com o ID `letra`.

6. **Função `removerEfeito`:**
   - Recebe uma string `letra` (letra) como entrada.
   - Obtém o elemento div usando `document.getElementById(letra)`.
   - Define uma função anônima `removeActive` que remove a classe `active`.
   - Adiciona um ouvinte de evento `transitionend` ao div. A função `removeActive` é chamada quando a transição termina, garantindo que o efeito visual não persista.

7. **Função `ativarDiv`:**
   - Recebe um objeto de evento como entrada.
   - Determina a letra com base no tipo de evento:
     - Para eventos de clique, a letra é o ID do alvo clicado (`event.target.id`).
     - Para eventos keydown, a letra é a versão maiúscula da tecla pressionada (`event.key.toUpperCase()`).
   - Verifica se a letra é uma chave válida no objeto `sons` usando `hasOwnProperty`.
   - Se a letra for válida:
     - Chama `adicionarEfeito(letra)` para adicionar o efeito visual.
     - Chama `tocarSom(letra)` para tocar o efeito sonoro.
     - Chama `removerEfeito(letra)` para remover o efeito visual após uma breve transição.

8. **Ouvintes de Evento:**
   - Anexa um ouvinte de evento de clique ao div container (`document.getElementById('container')`) que chama a função
