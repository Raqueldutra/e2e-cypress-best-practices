# e2e-cypress-best-practices

## Este projeto tem como objetivo servir como um template de boas práticas em testes e2e com o uso da ferramenta Cypress. Algumas das melhores práticas a serem consideradas são:

- Utilizar seletores que possuem interação com o usuário, como role, label, placeholder, text e display value.Para mais informações acesse o video da conf cypress no link: https://www.youtube.com/watch?v=QR72OPX6YGQ
- Utilizar plugins como step e log para deixar os testes mais explicativos.
- Utilizar a funcionalidade cy.session para realizar o login na apliação.
- Utilizar TAGs para organizar e categorizar os testes.
- Realizar processo de testes em burn para identificar testes flakes.
- Utilizar TypeScript com o uso de types para garantir a integridade e consistência dos testes.
- Utilizar a lib test libriry para facilitar a escrita e execução dos testes. Para mais informações acesse o link: https://testing-library.com/docs/cypress-testing-library/intro/
- Não versionar dados sensíveis no projeto utilizando variáveis de ambiente com cypress.env.
- Manter a independência entre os testes, garantindo que cada teste possa ser executado de forma isolada.
- Configurar reports com mocha
- Considerar o uso do serviço Cypress Cloud para executar os testes de forma distribuída e em diferentes ambientes.Para mais informações acesse o link:
- Considerar o uso do serviço Cypress debug. Para mais onfirmações acesse o link: https://docs.cypress.io/guides/guides/debugging#__docusaurus_skipToContent_fallback
- Criar comandos customizados para automatizar tarefas comuns, como util, API e sequenses actions.

## Como executar o projeto

```bash
- nvm use
- npm i
- npm run open
```

## Como usar o Cypress Grep para adicionar tags

Estamos adicionando uma tag de smoke como exemplo, para adicionar uma tag
você pode colocar a tag num bloco it ou em um describe, ao ser inserido no it
apenas o teste com a tag irá ser executado com a tag, ao colocar no describe todos
os testes dentro do bloco de describe irão herdar a tag

Para inserir basta fazer algo como o exemplo abaixo:

```
it("passes", { tags: "@smoke" }, () => { ... }
```

ou

```
describe("passes", { tags: "@smoke" }, () => { ... }
```

E para rodar de forma headless apenas os testes com a tag de smoke utilize:

```
npx cypress run --env grep=@smoke
```

Ou com o script que criamos:

```
npm run cy:run:smoke
```
