# CompeteUp

A Next.js 14 platform for college events and competitions.

## Tech Stack

- Next.js 14
- MongoDB
- TypeScript
- Tailwind CSS
- Clerk Authentication
- Stripe Payments
- Uploadthing for file uploads

## Features

- Event creation and management
- User authentication
- Payment processing
- File uploads
- Responsive design
- Server-side rendering
- Edge-compatible database operations

## Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- MongoDB database
- Clerk account
- Stripe account
- UploadThing account

## Environment Variables

Create a `.env` file in the root directory with:

```env
# MongoDB
MONGODB_URI=your_mongodb_uri

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# UploadThing
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/competeup.git
```

2. Install dependencies:
```bash
cd competeup
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

## Test Update
This line was added to verify Vercel auto-deployment functionality.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
