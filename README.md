# Breweries App
by Juho Simojoki
This product is an assignment at Integrify Finland Full-Stack Academy (Microsoft stack).
You can find the deployment [here](https://sunny-centaur-ebee99.netlify.app)

## Technologies
- TypeScript
- React
- Axios
- Material UI


## Description

This app is a simple app for searching breweries from [here](https://www.openbrewerydb.org/documentation). Every brewery has a simple details page with embedded Google Maps frame.
The seach input can be used to search the breweries by their name case non-sensitively.

## Project tree

```
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── planning
│   ├── robots.txt
│   └── static
│       ├── css
│       │   ├── main.270723d3.css
│       │   └── main.270723d3.css.map
│       ├── js
│       │   ├── main.fa61fd28.js
│       │   ├── main.fa61fd28.js.LICENSE.txt
│       │   └── main.fa61fd28.js.map
│       └── media
│           ├── beer-at-brewery.ec0720bc31a27c548736.jpg
│           └── Brewery-Wallpaper-Download-Free.1413a113ee66d3b67663.jpg
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── planning
│   └── robots.txt
├── README.md
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── BreweryOnList.tsx
│   │   ├── onLoading.tsx
│   │   └── styledComponents
│   │       ├── StyledCard.tsx
│   │       ├── StyledGridContainer.tsx
│   │       ├── StyledHeader.tsx
│   │       └── StyledPageContainer.tsx
│   ├── hooks
│   │   └── useFilter.tsx
│   ├── images
│   │   ├── beer-at-brewery.jpg
│   │   └── Brewery-Wallpaper-Download-Free.jpg
│   ├── index.tsx
│   ├── pages
│   │   ├── Breweries.tsx
│   │   ├── ErrorPage.tsx
│   │   ├── Home.tsx
│   │   ├── Landing.tsx
│   │   └── SingleBreweryPage.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── services.ts
│   ├── styles
│   │   └── style.scss
│   ├── themes
│   │   └── globalTheme.ts
│   └── Types
│       └── Brewery.ts
└── tsconfig.json
```
