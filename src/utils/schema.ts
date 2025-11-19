export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://serviceplus-entruempelung.de/#organization",
  "name": "ServicePlus Entrümpelung GbR",
  "alternateName": "ServicePlus",
  "description": "Professionelle Entrümpelung, Haushaltsauflösungen und Messie-Wohnungen in Stuttgart und Umgebung. 24-Stunden Express-Service verfügbar.",
  "url": "https://serviceplus-entruempelung.de",
  "telephone": "+4915560850344",
  "email": "info@serviceplus-entruempelung.de",
  "priceRange": "€€",
  "image": "https://serviceplus-entruempelung.de/ChatGPT Image 5. Nov. 2025, 21_16_33 copy.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Stuttgart",
    "addressRegion": "Baden-Württemberg",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "48.7758",
      "longitude": "9.1829"
    },
    "geoRadius": "30000"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Stuttgart",
      "containedInPlace": {
        "@type": "State",
        "name": "Baden-Württemberg"
      }
    },
    {
      "@type": "City",
      "name": "Esslingen"
    },
    {
      "@type": "City",
      "name": "Ludwigsburg"
    },
    {
      "@type": "City",
      "name": "Böblingen"
    },
    {
      "@type": "City",
      "name": "Sindelfingen"
    },
    {
      "@type": "City",
      "name": "Waiblingen"
    },
    {
      "@type": "City",
      "name": "Fellbach"
    },
    {
      "@type": "City",
      "name": "Kornwestheim"
    },
    {
      "@type": "City",
      "name": "Leonberg"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "00:00",
      "closes": "23:59",
      "description": "Notfall-Hotline"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+4915560850344",
      "contactType": "customer service",
      "availableLanguage": ["de"],
      "areaServed": "DE",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "description": "24h Express-Hotline verfügbar"
      }
    },
    {
      "@type": "ContactPoint",
      "email": "info@serviceplus-entruempelung.de",
      "contactType": "customer service",
      "availableLanguage": ["de"]
    }
  ],
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
  "currenciesAccepted": "EUR",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "100"
  }
});

export const generateServicesSchema = () => [
  {
    "@type": "Service",
    "@id": "https://serviceplus-entruempelung.de/#haushaltsaufloesungen",
    "name": "Haushaltsauflösungen",
    "description": "Komplette Wohnungsauflösungen nach Todesfall, Umzug oder bei Pflegebedürftigkeit. Wir übernehmen die gesamte Abwicklung inklusive Verwertung, Entsorgung und besenreiner Übergabe.",
    "serviceType": "Haushaltsauflösung",
    "provider": {
      "@id": "https://serviceplus-entruempelung.de/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Stuttgart"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  },
  {
    "@type": "Service",
    "@id": "https://serviceplus-entruempelung.de/#entrümpelungen",
    "name": "Entrümpelungen",
    "description": "Professionelle Entrümpelung von Kellern, Dachböden, Garagen und Scheunen. Auch bei stark vermüllten Objekten sind wir der richtige Partner.",
    "serviceType": "Entrümpelung",
    "provider": {
      "@id": "https://serviceplus-entruempelung.de/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Stuttgart"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  },
  {
    "@type": "Service",
    "@id": "https://serviceplus-entruempelung.de/#messie-wohnungen",
    "name": "Messie-Wohnungen",
    "description": "Einfühlsame und diskrete Reinigung von Messie-Wohnungen. Unser geschultes Team arbeitet respektvoll und verständnisvoll.",
    "serviceType": "Messie-Wohnung Reinigung",
    "provider": {
      "@id": "https://serviceplus-entruempelung.de/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Stuttgart"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  },
  {
    "@type": "Service",
    "@id": "https://serviceplus-entruempelung.de/#sperrmüll-abholung",
    "name": "Sperrmüll-Abholung",
    "description": "Schnelle und unkomplizierte Abholung von Sperrmüll, Altmöbeln und Elektrogeräten. Wir holen direkt bei Ihnen ab - ohne Wartezeit.",
    "serviceType": "Sperrmüll-Abholung",
    "provider": {
      "@id": "https://serviceplus-entruempelung.de/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Stuttgart"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  },
  {
    "@type": "Service",
    "@id": "https://serviceplus-entruempelung.de/#gewerbe-entrümpelung",
    "name": "Gewerbe-Entrümpelung",
    "description": "Effiziente Räumung von Büros, Praxen, Geschäftsräumen und Lagerhallen. Auch außerhalb der Geschäftszeiten möglich.",
    "serviceType": "Gewerbe-Entrümpelung",
    "provider": {
      "@id": "https://serviceplus-entruempelung.de/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Stuttgart"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  },
  {
    "@type": "Service",
    "@id": "https://serviceplus-entruempelung.de/#immobilienräumung",
    "name": "Immobilienräumung",
    "description": "Spezialservice für Hausverwaltungen und Immobilienmakler. Schnelle Objektfreimachung für Neuvermietung oder Verkauf.",
    "serviceType": "Immobilienräumung",
    "provider": {
      "@id": "https://serviceplus-entruempelung.de/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Stuttgart"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  },
  {
    "@type": "Service",
    "@id": "https://serviceplus-entruempelung.de/#keller-dachboden",
    "name": "Keller & Dachboden Entrümpelung",
    "description": "Professionelle Entrümpelung von vollgestellten Kellern und Dachböden. Inklusive Entsorgung von Sondermüll und Schadstoffen.",
    "serviceType": "Keller- und Dachboden-Entrümpelung",
    "provider": {
      "@id": "https://serviceplus-entruempelung.de/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Stuttgart"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  },
  {
    "@type": "Service",
    "@id": "https://serviceplus-entruempelung.de/#möbel-entsorgung",
    "name": "Möbel-Entsorgung",
    "description": "Fachgerechte Entsorgung von Altmöbeln, Küchen, Sofas und kompletten Einrichtungen. Mit Wertanrechnung für gut erhaltene Stücke.",
    "serviceType": "Möbel-Entsorgung",
    "provider": {
      "@id": "https://serviceplus-entruempelung.de/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Stuttgart"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  },
  {
    "@type": "Service",
    "@id": "https://serviceplus-entruempelung.de/#wertanrechnung",
    "name": "Wertanrechnung",
    "description": "Verwertbare Möbel, Antiquitäten und Gegenstände werden von unseren Experten fair bewertet und vom Gesamtpreis abgezogen.",
    "serviceType": "Wertanrechnung",
    "provider": {
      "@id": "https://serviceplus-entruempelung.de/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Stuttgart"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  }
];

export const generateOffersSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Offer",
      "name": "Basis Paket",
      "description": "Perfekt für kleinere Entrümpelungen",
      "price": "399",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "399",
        "priceCurrency": "EUR",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "value": "10",
          "unitCode": "MTQ"
        }
      },
      "itemOffered": {
        "@type": "Service",
        "name": "Basis Entrümpelung",
        "description": "Bis zu 10 m³ Volumen, Professionelle Entsorgung, Besenreine Übergabe"
      },
      "seller": {
        "@id": "https://serviceplus-entruempelung.de/#organization"
      }
    },
    {
      "@type": "Offer",
      "name": "Komfort Paket",
      "description": "Ideal für Wohnungsauflösungen",
      "price": "699",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "699",
        "priceCurrency": "EUR",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "value": "30",
          "unitCode": "MTQ"
        }
      },
      "itemOffered": {
        "@type": "Service",
        "name": "Komfort Entrümpelung",
        "description": "Bis zu 30 m³ Volumen, Komplette Wohnungsauflösung, Express-Service verfügbar"
      },
      "seller": {
        "@id": "https://serviceplus-entruempelung.de/#organization"
      }
    },
    {
      "@type": "Offer",
      "name": "Premium Paket",
      "description": "Für große Objekte & Gewerbe",
      "price": "1299",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "1299",
        "priceCurrency": "EUR"
      },
      "itemOffered": {
        "@type": "Service",
        "name": "Premium Entrümpelung",
        "description": "Unbegrenztes Volumen, 24h Express-Service, Persönlicher Ansprechpartner"
      },
      "seller": {
        "@id": "https://serviceplus-entruempelung.de/#organization"
      }
    }
  ]
});

export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie schnell können Sie eine Entrümpelung durchführen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In der Regel können wir innerhalb von 2-3 Werktagen einen Termin anbieten. Für dringende Fälle bieten wir auch einen 24-Stunden Express-Service an. Nach Terminvereinbarung erfolgt die Entrümpelung meist am selben oder nächsten Tag."
      }
    },
    {
      "@type": "Question",
      "name": "Wie werden die Kosten berechnet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Kosten richten sich nach dem Volumen der zu entsorgenden Gegenstände, der Komplexität der Arbeit und dem Standort. Nach einer kostenlosen Vor-Ort-Besichtigung erhalten Sie ein transparentes Festpreis-Angebot. Verwertbare Gegenstände werden fair bewertet und vom Preis abgezogen."
      }
    },
    {
      "@type": "Question",
      "name": "Was passiert mit den entrümpelten Gegenständen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir trennen sorgfältig nach wiederverwertbaren und zu entsorgenden Materialien. Brauchbare Möbel und Gegenstände werden an gemeinnützige Organisationen gespendet oder verkauft. Nicht verwertbare Materialien werden fachgerecht entsorgt und recycelt. Sie erhalten alle erforderlichen Entsorgungsnachweise."
      }
    },
    {
      "@type": "Question",
      "name": "Benötige ich eine Halteverbotszone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In den meisten Fällen nicht. Unser erfahrenes Team findet in der Regel geeignete Parkmöglichkeiten. Bei sehr engen Straßen oder besonderen Situationen können wir die Beantragung einer Halteverbotszone für Sie übernehmen. Die Kosten dafür werden transparent im Angebot aufgeführt."
      }
    },
    {
      "@type": "Question",
      "name": "Muss ich bei der Entrümpelung anwesend sein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für die Besichtigung und Angebotserstellung sollten Sie anwesend sein. Bei der eigentlichen Entrümpelung ist Ihre Anwesenheit nicht zwingend erforderlich, sofern Sie uns Zugang gewähren und uns mitteilen, was entsorgt werden soll. Viele Kunden bevorzugen es jedoch, während der Entrümpelung vor Ort zu sein."
      }
    },
    {
      "@type": "Question",
      "name": "Sind Sie versichert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, wir verfügen über eine umfassende Haftpflicht- und Unfallversicherung. Sollte während der Entrümpelung ein Schaden entstehen, sind Sie vollständig abgesichert. Unsere Mitarbeiter sind geschult und arbeiten äußerst sorgfältig, um Schäden zu vermeiden."
      }
    },
    {
      "@type": "Question",
      "name": "Können Sie auch Gefahrstoffe entsorgen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kleinere Mengen an Schadstoffen wie alte Farben, Lacke oder Chemikalien können wir fachgerecht entsorgen. Bei größeren Mengen oder speziellen Gefahrstoffen arbeiten wir mit zertifizierten Entsorgungsfachbetrieben zusammen und organisieren die Entsorgung für Sie."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Zahlungsmöglichkeiten bieten Sie an?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sie können bequem per Überweisung, EC-Karte oder bar bezahlen. Die Zahlung erfolgt nach Abschluss der Arbeiten und Ihrer Abnahme. Sie erhalten eine ordnungsgemäße Rechnung mit ausgewiesener Mehrwertsteuer."
      }
    }
  ]
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://serviceplus-entruempelung.de/#website",
  "url": "https://serviceplus-entruempelung.de",
  "name": "Serviceplus Entrümpelung",
  "description": "Professionelle Entrümpelung und Haushaltsauflösungen in Stuttgart und Umgebung",
  "publisher": {
    "@id": "https://serviceplus-entruempelung.de/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://serviceplus-entruempelung.de/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});
