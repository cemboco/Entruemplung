import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  jsonLd?: object;
}

export default function PageMeta({
  title,
  description,
  canonical,
  ogImage = 'https://serviceplus-entruempelung.de/ChatGPT Image 5. Nov. 2025, 21_16_33 copy.png',
  ogType = 'website',
  keywords,
  jsonLd
}: PageMetaProps) {
  const fullTitle = title.includes('ServicePlus') ? title : `${title} | ServicePlus Stuttgart`;
  const url = canonical || 'https://serviceplus-entruempelung.de';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="de_DE" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
