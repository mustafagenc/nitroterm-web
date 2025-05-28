import { Metadata } from "next";

function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === "production" &&
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

async function generateSiteMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();

  const imageData = {
    images: [{ url: baseUrl + "/api/og" }],
  };

  return {
    metadataBase: new URL(baseUrl),
    generator: "Nitrokit",
    applicationName: "Nitroterm",
    referrer: "origin-when-cross-origin",
    authors: [
      {
        name: "Ekipisi",
        url: "https://ekipisi.com",
      },
    ],
    creator: "Mustafa Genç",
    publisher: "Mustafa Genç",
    appleWebApp: {
      statusBarStyle: "black-translucent",
      title: "Nitroterm",
      capable: true,
      startupImage: [
        {
          url: `${baseUrl}/images/apple-touch-startup-image.png`,
          media:
            "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
        },
      ],
    },
    title: {
      default: "Nitroterm",
      template: `%s - Nitroterm`,
    },
    description: "Powerful terminal application written in Rust",
    icons: {
      icon: `${baseUrl}/favicon.ico`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Nitroterm",
      description: "Powerful terminal application written in Rust",
      creator: "@mustafagenc",
      ...imageData,
    },
    openGraph: {
      title: "Nitroterm",
      description: "Powerful terminal application written in Rust",
      url: baseUrl,
      siteName: "Nitroterm",
      ...imageData,
    },
    verification: {
      google: "",
      yandex: "",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export { getBaseUrl, generateSiteMetadata };
