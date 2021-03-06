import React from 'react';
import Head from 'next/head';

import { About } from 'app/about/About';
import { baseURL, metaImage } from 'api/types';

const AboutPage = () => {

  return (
    <>
      <Head>
        <title>About | Hue and Cry</title>
        <link rel="canonical" href={`${baseURL}/about`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="About Hue and Cry" />
        <meta property="og:description" content="Hue and Cry is a true crime blog focusing on crimes against women and girls who have yet to see justice. We focus on crimes that are committed against women of color." />
        <meta property="og:url" content={`${baseURL}/about`} />
        <meta property="og:site_name" content="Hue and Cry" />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@thehueandcry" />
        <meta name="twitter:site" content="@thehueandcry" />
      </Head>
      <About />
    </>
  )
}

export default AboutPage;
