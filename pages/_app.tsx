import React, { Fragment } from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';
import MainLayout from 'components/MainLayout';
import { DefaultSeo } from 'next-seo';
import whyDidYouRender from '@welldone-software/why-did-you-render';
import useSeoConfig from 'seo.config';
import 'scss/main.scss';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  whyDidYouRender(React);
}

class CustomApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const seoConfig = useSeoConfig();

    return (
      <AnimatePresence exitBeforeEnter>
        <Fragment key={router.route}>
          <DefaultSeo {...seoConfig} />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </Fragment>
      </AnimatePresence>
    );
  }
}

export default CustomApp;
