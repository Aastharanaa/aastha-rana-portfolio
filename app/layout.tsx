import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";


const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Aastha Rana",

  alternateName: "AasthaRana",

  url: "https://yourdomain.vercel.app",

  image: "https://yourdomain.vercel.app/profile.png",

  jobTitle:
    "Data Analyst | Data Scientist | AI/ML Engineer",

  description:
    "Aastha Rana is a Data Analyst and AI/ML enthusiast specializing in Python, SQL, Power BI, Machine Learning, Data Visualization, and intelligent analytics solutions.",

  email: "mailto:your-email@gmail.com",

  sameAs: [
    "https://github.com/YOUR_GITHUB_USERNAME",
    "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    "https://yourdomain.vercel.app"
  ],

  knowsAbout: [
    "Python",
    "SQL",
    "Power BI",
    "Excel",
    "Tableau",
    "Data Analytics",
    "Machine Learning",
    "Deep Learning",
    "Data Visualization",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Computer Vision",
    "ETL",
    "Data Engineering",
    "FastAPI",
    "Flask",
    "MySQL",
    "BigQuery"
  ]
};


export const metadata: Metadata = {

  metadataBase: new URL(
    "https://yourdomain.vercel.app"
  ),

  title: {
    default: "Aastha Rana | Data Analyst & AI/ML Portfolio",
    template: "%s | Aastha Rana",
  },


  description:
    "Portfolio of Aastha Rana showcasing Data Analytics, Machine Learning, AI projects, Python development, Power BI dashboards, SQL solutions, and data-driven applications.",


  keywords: [
    "Aastha Rana",
    "Data Analyst",
    "Data Scientist",
    "AI ML Engineer",
    "Python Developer",
    "SQL",
    "Python",
    "Power BI",
    "Machine Learning",
    "Deep Learning",
    "Data Visualization",
    "Business Intelligence",
    "Computer Vision",
    "ETL",
    "Portfolio",
    "GitHub",
  ],


  authors: [
    {
      name: "Aastha Rana",
      url: "https://yourdomain.vercel.app",
    },
  ],


  creator: "Aastha Rana",

  publisher: "Aastha Rana",


  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },


  alternates: {
    canonical: "https://yourdomain.vercel.app",
  },


  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },


  openGraph: {

    title:
      "Aastha Rana | Data Analyst & AI/ML Portfolio",

    description:
      "Explore Aastha Rana's portfolio featuring Machine Learning projects, analytics dashboards, Python applications, Power BI reports, and AI solutions.",


    url: "https://yourdomain.vercel.app",

    siteName:
      "Aastha Rana Portfolio",

    locale: "en_US",

    type: "website",


    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt:
          "Aastha Rana Data Analytics Portfolio",
      },
    ],
  },


  twitter: {

    card: "summary_large_image",

    title:
      "Aastha Rana | Data Analyst & AI/ML Engineer",

    description:
      "Python • SQL • Power BI • Machine Learning • Data Analytics • AI Projects",

    images: [
      "/og-image.png"
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (

    <html lang="en" className="scroll-smooth">

      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />

      </head>


      <body className="bg-white text-gray-900 antialiased">

        <CustomCursor />

        {children}

      </body>

    </html>

  );
}