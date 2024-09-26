## Dépendences

`pnpm install`

## Génération du swagger

`pnpm generate`

## Compilation TypeScript

`pnpm build`

## Lancement dev

Permet d'être lancé sans compilation et de relancer dynamiquement l'application à chaque update
`pnpm dev`

## Architecture

- Config : Contient l'initialisation de la connexion à la base de données
- Controllers : Contient les classes contenant la gestion des routes de l'API
- DTO : Contient les interfaces de communication de l'API
- Model: Contient les entités représentant les différentes tables SQL
- Routes : Fichier généré par tsoa pour la déclaration des routes
- Services : Contient le code métier
- app.ts : Fichier principal de l'application
- library.sqlite : Fichier de base de données
- package.json : Contient les dépendances nécessaires pour l'application
- tsconfig.json : Configuration de la compilation typescript
- tsoa.json: Configuration de la génération du Swagger

## Exercice

1) Identifier et corriger l'erreur de la route POST authors X
2) Renvoyer une erreur personnalisée avec un code 404 si l'auteur n'est pas trouvée lors des routes PATCH et GET/{id} X
3) 
    1) Développer la route GET /books  X
    2) Développer la route GET /books/{id} X 
    3) Développer la route POST /books  X
    4) Développer la route PATCH /books/{id}  
4) 
    1) Développer le modèle BookCollection X
    2) Développer le DTO BookCollection X
    3) Développer la route GET /books-collection x
    4) Développer la route GET /books-collection/{id} x
    5) Développer la route POST /books-collection x
    6) Développer la route PATCH /books-collection/{id} 
5)  
    1) Mettre à jour la route DELETE /authors/{id} afin d'empêcher la suppression si un exemplaire d'un de ses livres est présent dans la bibliothèques X
    2) Développer la route DELETE /books/{id} en empêchant la suppression du livre si un exemplaire est présent dans la bibliothèque X
    3) Développer la route DELETE /books-collections/{id} X
6) Renvoyer la liste des livres de l'auteur sur la route GET /authors/{id}/books 
7) Renvoyer la liste des exemplaires du livre sur la route GET /books/{id}/books-collections