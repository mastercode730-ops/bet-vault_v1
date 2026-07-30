import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bet-vault.com'),
  title: "BetVault | Online Cricket Betting, Sports Betting & Casino",
  description: "Join BetVault for secure online cricket betting, live sports betting, casino games, instant betting IDs, competitive odds, ",
  keywords: "online cricket betting ID, cricket ID, betting ID India, sports betting, IPL betting ID",
  verification: {
    google: "hKyXrV_KszpG4iVcHpyASn9c05tZR55mPelqb7VhCKM",
  },
  openGraph: {
    title: "BetVault | Online Cricket Betting, Sports Betting & Casino",
    description: "Join BetVault for secure online cricket betting, live sports betting, casino games, instant betting IDs, competitive odds, ",
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
      "description": "BetVault provides secure online cricket betting IDs, sports betting access, live betting and casino betting services for users in India.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "telephone": "+91-8764465110",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
        "url": "https://wa.me/918764465110?text=Hi%20Bet%20Vault!%20Can%20I%20get%20more%20info%20on%20this%3F"
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
      "name": "BetVault | Online Cricket Betting, Sports Betting & Casino",
      "description": "Join BetVault for secure online cricket betting, live sports betting, casino games, instant betting IDs, competitive odds, and fast withdrawals in India.",
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
      "name": "Online Cricket Betting & Sports Betting Services",
      "provider": { "@id": "https://bet-vault.com/#organization" },
      "serviceType": [
        "Cricket Betting ID",
        "Online Cricket Betting",
        "Sports Betting",
        "Live Betting",
        "Online Casino",
        "Fast Withdrawals"
      ],
      "description": "BetVault helps users get secure betting IDs for cricket betting, sports betting and casino betting with fast deposits and withdrawals.",
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
      "name": ["Home", "Blog", "Cricket Betting", "Sports Betting", "Casino Betting"],
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
      "name": "Register for a BetVault Betting ID",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wa.me/918764465110?text=Hi%20Bet%20Vault!%20Can%20I%20get%20more%20info%20on%20this%3F",
        "actionPlatform": [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform"
        ]
      },
      "agent": { "@id": "https://bet-vault.com/#organization" },
      "result": { "@type": "Thing", "name": "BetVault Betting ID" }
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
      "name": "Is it legal for Indian users to get an online cricket betting ID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Betting laws in India vary by state and can differ depending on local regulations. Many betting platforms operate under international licences, and millions of Indian users participate in online cricket betting. Users should always check the laws applicable in their state and bet responsibly."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly will I receive my betting ID after signing up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most betting IDs are created within minutes. Simply contact BetVault on WhatsApp, share the required details, and the support team will activate your account as quickly as possible."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use my BetVault ID across multiple betting platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depending on the account setup, a BetVault ID may provide access to multiple partner betting platforms, allowing users to explore more sports markets, betting options, and competitive odds."
      }
    },
    {
      "@type": "Question",
      "name": "Are my deposits and withdrawals safe with BetVault?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. BetVault works with secure betting platforms that use encrypted payment systems and trusted banking methods. Deposits are processed quickly, while withdrawals are handled without unnecessary delays."
      }
    },
    {
      "@type": "Question",
      "name": "Which cricket tournaments can I bet on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Users can place bets on major cricket tournaments including the IPL, ICC T20 World Cup, ODI series, Test matches, The Ashes, county cricket, domestic leagues, and many other international competitions."
      }
    },
    {
      "@type": "Question",
      "name": "What exactly is BetVault and what does it do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BetVault helps users obtain secure online cricket betting IDs. The platform assists with account creation, betting ID activation, and access to cricket betting, sports betting, and online casino platforms."
      }
    },
    {
      "@type": "Question",
      "name": "How do I create my BetVault account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Creating a BetVault account is simple. Contact the support team through WhatsApp, provide your basic details, and your betting ID and login credentials will be shared after the account is activated."
      }
    },
    {
      "@type": "Question",
      "name": "Why do I need a BetVault ID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A BetVault ID provides secure access to betting platforms where users can place bets, manage their account, view betting history, claim promotions, and withdraw winnings."
      }
    },
    {
      "@type": "Question",
      "name": "How do I add money to my account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After logging into your betting account, choose the deposit option, select your preferred payment method such as UPI, Net Banking or supported wallets, enter the amount, and complete the transaction. Funds are generally credited instantly."
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
        "text": "BetVault provides customer support through WhatsApp 24 hours a day, 7 days a week. Users can contact the support team for account assistance, betting ID activation, deposits, withdrawals, and general enquiries."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any rules I should know before I start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Users must be at least 18 years old to register. Only one account per person is permitted. All bets placed are considered final, and users should always gamble responsibly and only wager what they can afford to lose."
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
      </body>
    </html>
  );
}
