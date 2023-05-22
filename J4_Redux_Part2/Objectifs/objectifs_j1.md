# Objectif J1 

## Part1 chap1_redux.md

Faites des révisions de la première semaine sur cette partie si nécessaire 

## Part2 chap2_combine_reducer_middleware

Un reducer seul n'est pas suffisant pour gérer la logique des données dans une application, il faut donc faire du Single Responsability Principal, un reducer par logique métier. On les combinera dans ce cas pour créer un store que l'on peut lire dans l'application de manière globale.

On introduira également la notion de middleware qui permet de décorer l'application d'une logique métier spécifique.

Les actions qui retourne des callback pour leurs actions ne fonctionnent pas par défaut dans Redux, qui a une logique synchrone pour "mettre à jour son store", on introduira donc le middleware thunk pour résoudre cette problématique. Bien présenter sa logique middleware qui permet de gérer ce point.

On a un exercice Dragon à faire.