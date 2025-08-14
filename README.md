# Lord of the Rings App

This is a [Next.js](https://nextjs.org) project that is a part of the Advanced Web Development course offered by Neue Fische GmbH.
The project is themed around the "Lord of the Rings" series, showcasing how to create a web application with multiple pages, dynamic routing, and data fetching.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Exercise 1

### Setup

1. Create a new Next.js application using `npx create-next-app@latest lord-of-the-rings`.

2. Navigate into the project directory: `cd lord-of-the-rings`.

3. Install the necessary dependencies:
```bash
npm install
```

### Pages

Create the following pages in the `src/pages` directory:
 - `/`  Display link to the volume overview /volumes
 - `/volumes` list with links to all volumes
 - `/volumes/the-fellowship-of-the-ring` Display data for volume 1 (The Fellowship of the Ring)
 - `/volumes/the-two-towers` Display data for volume 2 (The Two Towers)
 - `/volumes/the-return-of-the-king` Display data for volume 3 (The Return of the King)

### The overview page should contain the following:

 - A heading with the title “Lord of the Rings” (h1)
 - The introduction text imported from lib/data.ts (p)
 - import { introduction } from "../lib/data";
 - A heading with the title “All Volumes” (h2)
 - An unordered list with links to all volumes (ul, li and Link)
 - The link text should be the volume title
 - The link should point to the volume page
 - You can hard code the volumes for now. If you want to make it dynamic, you can use the volumes array from lib/data.ts. Use the Link component from Next.js to link to the volume pages.

### Detail Page Contents

Import the volumes array from lib/data.ts and find the data for each volume. You can identify each volume by the slug property, which acts like an ID. (Use `volumes.find(({slug}) => slug === "the-fellowship-of-the-ring")` to find the book with the slug `the-fellowship-of-the-ring`.)

Each detail page should have the following content:

 - A link “← All Volumes” that links back to the overview page (Link)
 - The title of the book (h1)
 - The description of the book (p)
 - An unordered list of the books contained in the volume (ul and li)
 - Each book should show its ordinal number and title

## Exercise 2

### Previous and Next Volume Links

Add links to the previous and next volume to the bottom of the detail pages. If there is no previous or next volume, do not render the link.

### Add volume covers
The volume covers are located in the public folder. The volumes data contains the file names of the covers. You can use the Image component from Next.js to display the images.

Add the cover image to the detail pages of each volume, below the list of books.

Use a width of 140px and a height of 230px for the cover image.

## Exercise 3

### Rewrite the pages using app router

1. Create a new directory `src/app` and move the existing pages into it, converting them to the app router format.
2. Create a new file `src/app/page.tsx` for the home page.
3. Create a new directory `src/app/volumes` and move the volume pages into it.
4. Create a new file `src/app/volumes/page.tsx` for the volumes overview page.
5. Create individual files for each volume in `src/app/volumes/[slug]/page.tsx`.
6. Run the application `npm run dev` to ensure everything works correctly.

### Create a Layout Component

Create a layout component in `src/app/layout.tsx` that wraps all pages. This component should include a header with the title "Lord of the Rings" and a footer with your name.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

