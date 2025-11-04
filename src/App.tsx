import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const App = () => {
  return (
    <HelmetProvider>
      <>
        {/* ✅ SEO & Metadata Configuration */}
        <Helmet>
          <title>Demo Marketing Studio | Data-Driven Growth & Creative Strategy</title>
          <meta
            name="description"
            content="Demo Marketing Studio helps brands grow with data-driven strategies, creative campaigns, and measurable results. Partner with us to elevate your digital presence."
          />
          <meta
            name="keywords"
            content="marketing, digital agency, brand strategy, creative studio, advertising, SEO, content marketing"
          />
          <meta name="author" content="Demo Marketing Studio" />

          {/* Open Graph (Facebook, LinkedIn) */}
          <meta property="og:title" content="Demo Marketing Studio | Data-Driven Growth & Creative Strategy" />
          <meta
            property="og:description"
            content="We craft digital experiences that elevate visibility, engage audiences, and drive measurable growth."
          />
          <meta property="og:image" content="/social-preview.png" />
          <meta property="og:url" content="https://abduljaleel89.github.io/demo-marketing-studio" />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Demo Marketing Studio" />
          <meta
            name="twitter:description"
            content="Data-driven marketing strategies that deliver real results."
          />
          <meta name="twitter:image" content="/social-preview.png" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://abduljaleel89.github.io/demo-marketing-studio" />
        </Helmet>

        {/* ✅ Page Content */}
        <main className="min-h-screen">
          <Hero />
          <Features />
          <Expertise />
          <Portfolio />
          <Footer />
        </main>
      </>
    </HelmetProvider>
  );
};

export default App;
