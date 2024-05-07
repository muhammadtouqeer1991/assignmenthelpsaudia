import React from 'react';

const SchemaScript = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Your Page Name",
    "description": "Description of your webpage",
    "url": "https://www.yourwebsite.com",
    "publisher": {
      "@type": "Organization",
      "name": "Your Organization Name",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.yourwebsite.com/logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaScript;