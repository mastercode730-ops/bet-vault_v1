import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bet-vault.com'),
  title: "BetVault | Online Cricket Gaming, Sports & Casino",
  description: "Join BetVault for secure online cricket gaming, live sports action, casino games, instant IDs, and competitive odds.",
  keywords: "online cricket ID, cricket ID India, sports gaming, IPL cricket ID",
  verification: {
    google: "hKyXrV_KszpG4iVcHpyASn9c05tZR55mPelqb7VhCKM",
  },
  openGraph: {
    title: "BetVault | Online Cricket Gaming, Sports & Casino",
    description: "Join BetVault for secure online cricket gaming, live sports action, casino games, instant IDs, and competitive odds.",
    type: "website",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bet-vault.com/#organization",
      "name": "BetVault",
      "alternateName": "Bet Vault",
      "url": "https://bet-vault.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bet-vault.com/_next/image?url=%2Flogo.jpeg&w=128&q=75"
      },
      "description": "BetVault provides secure online cricket IDs, sports access, live matches and casino services for users in India.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "telephone": "+91-8764465110",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
        "url": "https://wa.me/918360750829?text=Hi%20Bet%20Vault!%20Can%20I%20get%20more%20info%20on%20this%3F"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://bet-vault.com/#website",
      "url": "https://bet-vault.com/",
      "name": "BetVault",
      "publisher": { "@id": "https://bet-vault.com/#organization" },
      "inLanguage": "en-IN",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://bet-vault.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://bet-vault.com/#webpage",
      "url": "https://bet-vault.com/",
      "name": "BetVault | Online Cricket Gaming, Sports & Casino",
      "description": "Join BetVault for secure online cricket gaming, live sports action, casino games, instant IDs, and fast withdrawals in India.",
      "isPartOf": { "@id": "https://bet-vault.com/#website" },
      "about": { "@id": "https://bet-vault.com/#organization" },
      "primaryImageOfPage": { "@id": "https://bet-vault.com/#primaryimage" },
      "breadcrumb": { "@id": "https://bet-vault.com/#breadcrumb" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "ImageObject",
      "@id": "https://bet-vault.com/#primaryimage",
      "url": "https://bet-vault.com/_next/image?url=%2Flogo.jpeg&w=128&q=75",
      "contentUrl": "https://bet-vault.com/_next/image?url=%2Flogo.jpeg&w=128&q=75",
      "caption": "BetVault"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bet-vault.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bet-vault.com/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://bet-vault.com/#service",
      "name": "Online Cricket & Sports Services",
      "provider": { "@id": "https://bet-vault.com/#organization" },
      "serviceType": [
        "Cricket ID",
        "Online Cricket Gaming",
        "Sports Entertainment",
        "Live Matches",
        "Online Casino",
        "Fast Withdrawals"
      ],
      "description": "BetVault helps users get secure IDs for cricket, sports and casino with fast deposits and withdrawals.",
      "areaServed": { "@type": "Country", "name": "India" },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://bet-vault.com/",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://bet-vault.com/#navigation",
      "name": ["Home", "Blog", "Cricket", "Sports", "Casino"],
      "url": [
        "https://bet-vault.com/",
        "https://bet-vault.com/blog/",
        "https://bet-vault.com/",
        "https://bet-vault.com/",
        "https://bet-vault.com/"
      ]
    },
    {
      "@type": "RegisterAction",
      "@id": "https://bet-vault.com/#register",
      "name": "Register for a BetVault ID",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wa.me/918360750829?text=Hi%20Bet%20Vault!%20Can%20I%20get%20more%20info%20on%20this%3F",
        "actionPlatform": [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform"
        ]
      },
      "agent": { "@id": "https://bet-vault.com/#organization" },
      "result": { "@type": "Thing", "name": "BetVault ID" }
    }
  ]
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://bet-vault.com/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it legal for Indian users to get an online cricket ID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gaming laws in India vary by state and can differ depending on local regulations. Many platforms operate under international licences, and millions of Indian users participate in online sports and cricket entertainment. Users should always check the laws applicable in their state and play responsibly."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly will I receive my ID after signing up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most IDs are created within minutes. Simply contact BetVault on WhatsApp, share the required details, and the support team will activate your account as quickly as possible."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use my BetVault ID across multiple gaming platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depending on the account setup, a BetVault ID may provide access to multiple partner gaming platforms, allowing users to explore more sports markets, options, and competitive odds."
      }
    },
    {
      "@type": "Question",
      "name": "Are my deposits and withdrawals safe with BetVault?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. BetVault works with secure platforms that use encrypted payment systems and trusted banking methods. Deposits are processed quickly, while withdrawals are handled without unnecessary delays."
      }
    },
    {
      "@type": "Question",
      "name": "Which cricket tournaments can I follow and play?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Users can participate across major cricket tournaments including the IPL, ICC T20 World Cup, ODI series, Test matches, The Ashes, county cricket, domestic leagues, and many other international competitions."
      }
    },
    {
      "@type": "Question",
      "name": "What exactly is BetVault and what does it do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BetVault helps users obtain secure online cricket gaming IDs. The platform assists with account creation, ID activation, and access to cricket, sports, and online casino platforms."
      }
    },
    {
      "@type": "Question",
      "name": "How do I create my BetVault account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Creating a BetVault account is simple. Contact the support team through WhatsApp, provide your basic details, and your ID and login credentials will be shared after the account is activated."
      }
    },
    {
      "@type": "Question",
      "name": "Why do I need a BetVault ID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A BetVault ID provides secure access to platforms where users can participate, manage their account, view transaction history, claim promotions, and withdraw winnings."
      }
    },
    {
      "@type": "Question",
      "name": "How do I add money to my account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After logging into your account, choose the deposit option, select your preferred payment method such as UPI, Net Banking or supported wallets, enter the amount, and complete the transaction. Funds are generally credited instantly."
      }
    },
    {
      "@type": "Question",
      "name": "How do withdrawals work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Withdrawals are processed through the registered payment method, including UPI, Net Banking, or supported wallets. Once the account is verified, payouts are processed quickly."
      }
    },
    {
      "@type": "Question",
      "name": "What if I forget my password?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you forget your password, simply contact BetVault through WhatsApp. After verifying your identity, the support team will help you reset your password and regain account access."
      }
    },
    {
      "@type": "Question",
      "name": "Is BetVault safe to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. BetVault uses secure connections and works with trusted payment systems to help protect user information and account security."
      }
    },
    {
      "@type": "Question",
      "name": "How do I reach the BetVault support team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BetVault provides customer support through WhatsApp 24 hours a day, 7 days a week. Users can contact the support team for account assistance, ID activation, deposits, withdrawals, and general enquiries."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any rules I should know before I start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Users must be at least 18 years old to register. Only one account per person is permitted. All actions taken are considered final, and users should always play responsibly and within their means."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YKR2VSBGCW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YKR2VSBGCW');
          `}
        </Script>
      </body>
    </html>
  );
}
