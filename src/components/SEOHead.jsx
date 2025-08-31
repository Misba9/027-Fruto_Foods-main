import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Fruto Foods - Nature's Goodness in Every Spoon", 
  description = "Premium supplier of natural food powders & ingredients. Moringa, Turmeric, Ginger, Ashwagandha, Grains, Pulses & more. FSSAI certified, APEDA approved.",
  keywords = "natural food powders, moringa powder, turmeric powder, ginger powder, ashwagandha, organic spices, FSSAI certified, healthy ingredients",
  image = "/hero1.jpg",
  url = "https://frutofoods.in"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Fruto Foods" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Fruto Foods" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Fruto Foods",
          "description": description,
          "url": url,
          "logo": "/logo_large.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-98765-43210",
            "contactType": "customer service",
            "email": "info@frutofoods.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "#12-13-418/4, Street.no.1, Tarnaka",
            "addressLocality": "Hyderabad",
            "postalCode": "500017",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://facebook.com/frutofoods",
            "https://linkedin.com/company/frutofoods",
            "https://instagram.com/frutofoods"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;