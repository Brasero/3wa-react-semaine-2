# Challenge dénomination

Vous allez créer une petite application qui permet de saisir un montant donné et qui fournit la monnaie en token(s) que l'on peut rendre par rapport à ce montant.

Vous vous aiderez de la documentation officielle pour réaliser ce TP : [React Native](https://facebook.github.io/react-native/docs/getting-started)

Voici les dénominations, c'est-à-dire les tokens que l'on pourra rendre en fonction d'un montant donné :

```js

const denominations = [1, 5, 10, 20, 50, 100]

```

Vous devrez développer une petite interface permettant de saisir le montant et de rendre les dénominations. Vous utiliserez Redux pour la gestion de l'algorithmique et du store.

## Partie 1

Le squelette d'application fait à l'aide de la CRA. Respectez l'organisation déjà vu en cours pour la mise en place de Redux dans React.

Utilisez styled-components et créez les composants suivants : Button et Input, que vous utiliserez dans le le composant Denomination. Voyez ci-dessous la structure de l'application que l'on souhaite mettre en place.

```text
components/
    Denomination.js
Styles/
    Button.js
    Input.js

// ... Les dossiers classiques pour mettre en place Redux.

```

### Wireframe 1 saisir le montant

```txt

[ 253 ]

[ Dénomination ]

[ Reset ]

Dénomination 100 unité(s) : 2

Dénomination 50 unité(s) : 1

Dénomination 1 unité(s) : 3

```

## Partie 2 (facultative)

Pour cette partie vous devez vous aider du support de cours qui correspond au router : Support_router.

Faites également un composant Navigate. Essayez de le stylisé avec styled-components

Donnez la possiblité de changer de dénomination. Utilisez le support Router dans le cours pour mettre en place un menu dans React, puis créez une page principale avec une dénomination par défaut et une page permettant de la re-définir en fonction d'une liste pré-définie de dénominations.

Page principale

```txt

[ Home ] [ Denomination ]

[ 253 ]

[ Dénomination ]

[ Reset ]

Dénomination 100 unité(s) : 2

Dénomination 50 unité(s) : 1

Dénomination 1 unité(s) : 3

```


Page pour changer de dénomination

```txt

[ Home ] [ Denomination ]

Choisissez une dénomination

[X] Dénomination  1, 5, 10, 20, 50, 100
[ ] Dénomination  1, 2, 5, 10, 20, 30, 50
[ ] Dénomination  1, 10, 20, 30, 40, 50, 100

```