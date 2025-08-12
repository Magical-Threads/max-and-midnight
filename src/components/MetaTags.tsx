interface MetaTagsProps {
  title: string;
  description: string;
  url: string;
  ogImage?: string;       // For Facebook / Open Graph
  twitterImage?: string;  // For Twitter card
  twitterHandle?: string | null;
}

export default function MetaTags({
  title,
  description,
  url,
  ogImage,
  twitterImage,
  twitterHandle,
}: MetaTagsProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {twitterHandle && twitterHandle.trim() !== '' && (
        <meta name="twitter:site" content={twitterHandle} />
      )}

      {/* SEO Robots */}
      <meta name="robots" content="index, follow" />
    </>
  );
}
