# Dashboard Basico Alfa 0.2

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/rubodie-1011s-projects/v0-dashboard-basico-alfa-0-1)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/jVB9P0Gprsy)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/rubodie-1011s-projects/v0-dashboard-basico-alfa-0-1](https://vercel.com/rubodie-1011s-projects/v0-dashboard-basico-alfa-0-1)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/jVB9P0Gprsy](https://v0.app/chat/projects/jVB9P0Gprsy)**

## Environment Variables

This project requires the following environment variables to be configured:

### Google Maps API Key

The application uses Google Maps to display property locations. You need to configure the Google Maps API key:

\`\`\`bash
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_google_maps_api_key_here
\`\`\`

**How to get a Google Maps API Key:**

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Maps Embed API"
4. Go to "Credentials" and create an API key
5. Add the API key to your environment variables in Vercel or your `.env.local` file

**Security Best Practices:**

⚠️ **Important:** The `NEXT_PUBLIC_` prefix makes this variable accessible in the browser, which is required for Google Maps Embed API to work. To protect your API key from abuse:

1. **Restrict by HTTP referrer (website)** in Google Cloud Console:
   - Go to your API key settings
   - Under "Application restrictions", select "HTTP referrers (web sites)"
   - Add your domains:
     - `https://your-production-domain.com/*`
     - `https://*.vercel.app/*` (for Vercel deployments)
     - `http://localhost:3000/*` (for local development)

2. **Restrict API access**:
   - Under "API restrictions", select "Restrict key"
   - Only enable "Maps Embed API" (disable all other APIs)

3. **Set up usage quotas and billing alerts**:
   - Configure daily quotas to prevent unexpected charges
   - Set up billing alerts in Google Cloud Console

4. **Monitor usage**:
   - Regularly check your API usage in Google Cloud Console
   - Review the API key usage logs for suspicious activity

**Note:** Client-side exposure of the Maps Embed API key is standard practice and unavoidable for browser-based map displays. The security measures above are specifically designed for this use case.

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
