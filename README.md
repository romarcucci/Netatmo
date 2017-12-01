La machine à question
=============

Le sujet
------

Le but de cet exercice est de faire une "intelligence artificielle" à qui on va pouvoir poser des questions et qui vas nous répondre par _oui_ ou _non_.
Cette "IA" sera en réalitée très limitée car elle répondra aléatoirement. Pour rajouter un peu de fun, on ne va pas utiliser Math.rand, mais une API tierce fournie par https://yesno.wtf/#api.
La doc de cette api très simpliste se suffit à elle même, mais juste pour résumer, cette api permet de récupérer une réponse aléatoire yes/no et une url d'un fichier .gif qui image cette réponse.


Le wireframe
-----

Concernant la maquette que je te donne en copie, voici quelques explications :
 * en bas se trouve un input pour que l'utilisateur pose sa question,
 * au dessus de l'input se trouve la liste des questions deja posées par l'utilisateur avec l'image correspondant à la réponse de l'IA,
 * en haut à droite, une barre de recherche qui va filtrer les questions en fonction du texte de la question,
 * en haut à gauche se trouve un slider qui lui va filtrer les questions en fonction de la réponse,
 * pas besoin d'avoir de mémoire persistante des questions. Un rafraichissement de la page vide la liste des questions.


Les contraintes
------

Pour cet exercice, on attend de toi que tu utilises :
 * Un framework JS récent (Vue, Angular, Ember, React etc).
 * Un préprocesseur CSS.
 * Le slider en haut à gauche doit être fait à la main, pas le droit d'utiliser de framework de composant déjà tout fait.


Ce que je vais regarder dans le résultat
-----------
 * L'organisation du code
 * La propreté du code, qui comprend entre autre :
    - le nommage des fonctions et des variables,
    - la présence (ou l'absence) de commentaires,
    - la consistance des indentations et du formatage du code (je t'invite à choisir une coding style et à t'y tenir sur tout le projet),
    - le découpage du code et l'absence de code dupliqué
 * Le niveau d'utilisation des technologies proposées
 * La simplicité d'utilisation de l'application
 * La cohérence du design

N'hésites pas à rajouter des fonctionnalités de ton cru dans l'application si tu as du temps en plus.

Ce que je ne vais pas trop regarder dans le résultat
--------
 * La beauté du design
 * La compatibilité multi-browser
