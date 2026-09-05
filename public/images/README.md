# Dossier des photos

Déposez ici vos vraies photos (portrait de Richard, vues du studio,
séances d'enregistrement) puis indiquez leur nom de fichier dans
`src/lib/content.ts` :

- `founder.photo` → portrait de Richard Fremder (idéalement carré, 800×800px minimum)
- `studioPhotos[].src` → 3 photos du studio (format paysage, 1200×900px minimum)

Exemple : si vous déposez `richard-fremder.jpg` dans ce dossier, réglez
dans `content.ts` :

```ts
photo: "/images/richard-fremder.jpg",
```

Tant qu'aucun fichier n'est renseigné, le site affiche un motif
graphique de repli à la place — jamais d'image cassée ou de cadre vide.
