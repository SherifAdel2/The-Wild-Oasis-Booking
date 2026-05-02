<div align="center">

  <img src="./public/logo.png" alt="logo" width="90" height="auto">

  <h1>The Wild Oasis - Booking</h1>

  <h3>
    <a href="https://the-wild-oasis-booking-sherif.vercel.app/">
      <strong>Live Site</strong>
    </a>
  </h3>

  <hr>

</div>

<!-- Badges -->
<div align="center">

![Status](https://img.shields.io/badge/Status-Completed-success?style=flat)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](www.linkedin.com/in/sherif-adel-2b5517280)

</div>

<!-- Brief -->
<p align="center">
Welcome to <b>The Wild Oasis - Booking</b>! This is the customer-facing side of The Wild Oasis hotel, where guests can browse available cabins, make reservations, manage their bookings, and update their profiles. Built with <b>Next.js App Router</b> and backed by Supabase, it implements modern Next.js features including Server Components, Server Actions, and advanced caching strategies.
</p>

<!-- Screenshot -->
<!-- <a align="center" href="#">

![Screenshot](./public/thumbnail-preview.jpg) -->

</a>

## Live Site

Check out the live booking app here: [The Wild Oasis - Booking](#)

## Admin Version

I also built an **admin version** of this app, used by hotel employees to manage cabins, bookings, and guests. The repository is [here](https://github.com/SherifAdel2/world-wide-oasis), and the live site is [here](https://world-wide-oasis-sherif.vercel.app/).

## Key Features

- Guests can browse all available cabins and filter them by maximum guest capacity.
- Detailed cabin pages display descriptions, pricing, and availability.
- Authenticated users can reserve cabins for selected date ranges with conflict-free booking logic.
- Guests can view, edit, and delete their own reservations from a personal dashboard.
- Profile management allows guests to update personal information before check-in.
- Authentication via Google OAuth using NextAuth.js, protecting all booking routes.
- Optimistic UI updates for a smooth and responsive user experience.
- Fully server-rendered pages with smart caching and revalidation strategies.

## Technologies Used

- **Next.js 14 (App Router)** for routing, rendering, and the overall framework.
- **React Server Components** for efficient, zero-bundle server-side rendering.
- **Server Actions** for handling form submissions and data mutations without a separate API.
- **Supabase** for the database, shared with the admin app.
- **NextAuth.js** for authentication (Google OAuth provider).
- **next/image** for optimized image loading and delivery.
- **Tailwind CSS** for styling the UI.
- **date-fns** for date manipulation and booking range logic.
- **react-day-picker** for the interactive cabin availability calendar.

## What I Learned

This project was a deep dive into the modern Next.js App Router paradigm, including:

- **Server vs. Client Components:** Understanding the boundary between server and client rendering, and composing them efficiently to minimize client-side JavaScript.
- **Server Actions:** Handling mutations (create, update, delete) directly from Server Components using Next.js Server Actions, eliminating the need for a dedicated REST or GraphQL API layer.
- **Authentication with NextAuth.js:** Setting up Google OAuth, protecting routes with middleware, and managing session data across server and client contexts.
- **Caching & Revalidation:** Leveraging Next.js caching strategies (`revalidatePath`, `revalidateTag`) to keep data fresh without unnecessary re-fetches.
- **Streaming & Suspense:** Using React Suspense with loading skeletons to progressively stream UI to the browser for a faster perceived load time.
- **Dynamic & Static Rendering:** Choosing between static generation and dynamic rendering on a per-route basis for optimal performance.
- **URL-based State Management:** Using URL search params to manage filter state (e.g., cabin capacity filter) in a shareable and bookmarkable way.

## Setup Instructions

To run this project locally:

1. Clone the repo:
   ```bash
   git clone https://github.com/SherifAdel2/your-nextjs-repo.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Configure Supabase and NextAuth, then add the necessary variables in a `.env.local` file. Check `.env.example` for reference:
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   AUTH_GOOGLE_ID=your_google_client_id
   AUTH_GOOGLE_SECRET=your_google_client_secret
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to see the app.

## Author

<b>👤 Sherif</b>

- LinkedIn - [@Sherif Adel](www.linkedin.com/in/sherif-adel-2b5517280)
- GitHub - [@SherifAdel2](https://github.com/SherifAdel2)

Feel free to contact me with any questions or feedback!

## Acknowledgments

This app was developed as part of the [Udemy course](https://www.udemy.com/course/the-ultimate-react-course) by **Jonas Schmedtmann**. Special thanks to Jonas for his excellent teaching and guidance throughout the course.
