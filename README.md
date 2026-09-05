# Storycast — nouveau site

Site refait de A à Z avec Next.js, pensé pour être hébergé gratuitement sur
Vercel et connecté à ton compte GitHub. Tout ce qui suit se fait **depuis un
navigateur, sans ligne de commande**.

## 1. Mettre le code sur GitHub

1. Va sur [github.com/new](https://github.com/new) et crée un dépôt (par
   exemple `storycast-site`). Laisse-le **vide** (ne coche aucune case
   "Add README").
2. Sur la page du dépôt fraîchement créé, clique sur **"uploading an
   existing file"**.
3. Dans ton dossier `storycast` (celui que tu as téléchargé et dézippé),
   sélectionne **tout le contenu** du dossier (fichiers et sous-dossiers,
   mais pas le dossier `storycast` lui-même) et glisse-le dans la zone
   d'upload de GitHub. Les navigateurs modernes conservent l'arborescence
   des dossiers.
4. Clique sur **"Commit changes"** en bas de page.

## 2. Déployer sur Vercel

1. Va sur [vercel.com/new](https://vercel.com/new) et connecte-toi avec ton
   compte GitHub.
2. Clique sur **"Import"** à côté du dépôt `storycast-site`.
3. Vercel détecte automatiquement Next.js — ne change aucun réglage,
   clique sur **"Deploy"**.
4. Après 1 à 2 minutes, ton site est en ligne sur une adresse du type
   `storycast-site.vercel.app`.
5. Pour brancher ton vrai domaine `thestorycast.fr` : dans le projet
   Vercel, onglet **Settings → Domains**, ajoute `www.thestorycast.fr` et
   suis les instructions (Vercel indique les enregistrements DNS à modifier
   chez ton registrar). Aucune ligne de commande nécessaire.

Une fois ces deux étapes faites, **chaque futur envoi de fichiers modifiés
sur GitHub redéploiera automatiquement le site sur Vercel**.

## 3. Pour les prochaines évolutions du site

Reviens simplement dans notre conversation et décris ce que tu veux changer
(un texte, une émission à ajouter, une couleur...). Je régénère les
fichiers concernés ; tu n'as plus qu'à les re-glisser dans GitHub (même
procédure qu'à l'étape 1 — GitHub propose de remplacer les fichiers
existants) pour que Vercel republie automatiquement.

## 4. Deux réglages à finaliser avant la mise en ligne officielle

- **Formulaire de contact** : le formulaire utilise le service gratuit
  [Formspree](https://formspree.io). Crée un compte, crée un formulaire, et
  remplace la ligne `FORM_ENDPOINT` dans
  `src/components/ContactForm.tsx` par l'URL qu'il te donne (ex.
  `https://formspree.io/f/abcd1234`). Sans cette étape, le formulaire
  affiche un message d'erreur invitant à écrire directement par email.
- **Mentions légales** : la page `src/app/mentions-legales/page.tsx`
  contient un modèle à compléter avec la raison sociale exacte, le SIRET,
  l'adresse du siège et l'email de contact de Storycast.

## Ajouter vos photos

Le dossier `public/images/` est prêt à recevoir vos photos (portrait de
Richard, vues du studio). Un fichier `public/images/README.md` explique
exactement quoi déposer et où le déclarer dans `src/lib/content.ts`. Tant
qu'aucune photo n'est fournie, le site affiche un motif graphique de
repli — jamais de cadre vide ni d'image cassée.

## Contenu du site

Tout le texte "métier" (émissions, chiffres clés, offres) est centralisé
dans un seul fichier : `src/lib/content.ts`. C'est le premier endroit à
modifier pour ajouter une émission ou mettre à jour un chiffre.

## Stack technique

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (animation de la forme d'onde du hero)
- Déploiement : Vercel · Code source : GitHub
