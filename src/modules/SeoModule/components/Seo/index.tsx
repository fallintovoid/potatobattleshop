import Head from 'next/head';
import React from 'react';

type Props = {
  title: string;
  description: string;
};

const SEO = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
    </Head>
  );
};

export default SEO;
