# Boldo Web

### Preview Link - [About | Boldo](https://boldo-web-zeta.vercel.app)

This project is a responsive landing page conversion of the Boldo template, built using **Next.js**, **TypeScript**, and **Tailwind CSS**. The goal was to create a high-performance, accessible, and SEO-optimized website, achieving impressive Lighthouse scores of 99% performance, 100% SEO, and 100% accessibility.

## Project Overview

This project showcases my ability to convert a design into a fully functional, responsive webpage while maintaining best practices for performance, SEO, and accessibility.

## Lighthouse Scores:

- ![Performance](https://img.shields.io/badge/Performance-100%25-brightgreen)
- ![SEO](https://img.shields.io/badge/SEO-100%25-brightgreen)
- ![Accessibility](https://img.shields.io/badge/Accessibility-94%25-brightgreen)
- ![Best Practices](https://img.shields.io/badge/Best%20Practices-100%25-brightgreen)

## Tech Stack

- **Next.js**: A React framework used for building the static and dynamic web application, offering features like server-side rendering (SSR) and static site generation (SSG).
- **TypeScript**: A statically-typed version of JavaScript that helps in catching errors early and improving code maintainability.
- **Tailwind CSS**: A utility-first CSS framework that helps to design responsive and maintainable interfaces quickly and efficiently.

## Features

- **Responsive Design**: Mobile-first approach to ensure optimal user experience across various devices.
- **SEO Optimized**: Following best practices for SEO, including proper meta tags, structured data, and improved accessibility.
- **Accessible**: Ensuring that the page meets accessibility guidelines, making the site usable for as many people as possible.
- **Performance**: Focused on optimization techniques to ensure quick load times, including image optimization, code splitting, and lazy loading.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kaempy/boldo-web.git
   cd boldo-web
   ```
2. **Install dependencies:** Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```

- The site will be available at `http://localhost:3000`

4. **Build for production:** To create an optimized production build, run:
   ```bash
   npm run build
   ```
5. **Run production build:** After building, you can start the server with:
   ```bash
   npm start
   ```
   Project Structure

## Key Performance Optimizations

- **Code Splitting:** Leveraging Next.js's built-in code-splitting feature to reduce the initial load size.
- **Lazy Loading:** Implementing lazy loading for images and components to enhance performance.
- **Image Optimization:** Using Next.js's next/image component to serve optimized images for faster loading times.

## **Folder Structure**

<details>
  <summary>📂 Folder Structure</summary>

```bash
├── src/                # Source code for all files and components
│   ├── app/            # Main application entry and configuration
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom React hook files
│   ├── layout/         # Application layout components
│   ├── icons/          # Icon components and SVG files
├── public/             # Public static assets like images
├── .eslintrc.json      # ESLint configuration for enforcing coding standards
├── tailwind.config.js  # Tailwind CSS configuration file
├── tsconfig.json       # TypeScript configuration file
├── next.config.js      # Next.js configuration for customizing the framework
├── README.md           # Project documentation
└── package.json        # Project dependencies
```
