import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, author }) => {
  const router = useRouter();

  const getDefaultTitle = () => {
    switch (router.pathname) {
      case "/":
        return "Home - Rick and Morty";
      case "/character":
        return "Character Detail - Rick and Morty";
      case "/locations":
        return "Locations - Rick and Morty";
      case "/episodes":
        return "Episodes - Rick and Morty";
      default:
        if (router.pathname.startsWith("/character/")) {
          return "Character Details - Rick and Morty";
        }
        return "Rick and Morty";
    }
  };

  const getDefaultDescription = () => {
    switch (router.pathname) {
      case "/":
        return "Welcome to Rick and Morty. Explore our content.";
      case "/character":
        return "Detailed information about the character.";
      case "/locations":
        return "Discover various locations in our database.";
      case "/episodes":
        return "Browse through our episodes.";
      default:
        if (router.pathname.startsWith("/character/")) {
          return "Detailed information about the character.";
        }
        return "Rick and Morty";
    }
  };

  return (
    <Head>
      <title>{title || getDefaultTitle()}</title>
      <meta
        name="description"
        content={description || getDefaultDescription()}
      />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
    </Head>
  );
};

export default SEO;
