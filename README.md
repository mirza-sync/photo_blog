# Photo Blog

> Having quite a burnout at work. Wanna grind some codes but I dont think I'm making those tic-tac-toe right now. Lets make something beautiful that doesn't require a lot of brainpower.

A beautiful website to showcase photos. Practicing Next.js and brushing up my css skills.

- Reference: [Build A Responsive Next JS Website Using Tailwind CSS - Beginner Guide](https://www.youtube.com/watch?v=HVyct9EUNP8)
- Image credits: [Unsplash](https://unsplash.com/)
- Created with Next.js 13, Typescript & Tailwind
- Status: Finished

### My Review

---

This tutorial is awesome.

### Some diary/notes

---

<details>
<summary>Click to expand</summary>

> I'll update this if I'm feeling the need to... so that I can tell my grandchildren that I wrote this and learn, rather than just blindly follow a tutorial.

1. In the tutorial, we need to import font using `<link href="your-google-font-url" />` and put it in `<head>` tag, just like the way that we all familiar. But in Next.js, I remembered there's an optimized way using [next/font](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts), and it is recommended to use variable fonts. I have no idea what it is. But as soon as I tried the optimized variable font thing, I realized that I can change the font weight using tailwind classes even though I didn't import all those different font weights from Google Font. Pretty cool.

2. Theo is my idol, and he talked about [tailwind tips](https://www.youtube.com/watch?v=QBajvZaWLXs). One of the thing that interest me is [automatic class sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier). Wish I never forget this tips everytime I uses tailwind in my projects.

3. To create a new page in v13, you need to make sure the file named `page.tsx`? That's kinda lame. I prefer `index.tsx`.

4. When working on the `Work` page, I realized that my images size doesn't look the same as in the tutorial. Looks like v12 and v13 have different props for the `<Image />` component. Hence, I watched [this video](https://www.youtube.com/watch?v=gpJKj45AikY) to understand more about v13's image component. The vidoe talks about image optimization stuff such as aspect ratio, generated srcset for different viewports and file size. Today I learnt that the `width` and `height` props is not the actual image's width and height that will be rendered, but it is to infer aspect ratio of the image to prevent **layout shift**. I don't even know layout shift was a thing and it was cool that Nextjs able to optimize this issue. But in the end I think this will lead to premature optimization since it doesn't really matters. I'll just stick to `w-full`, `h-auto` and `object-cover`.
</details>
