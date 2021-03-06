/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import { renderStaticOptimized } from 'glamor/server'
import ManifestPlugin from 'webpack-manifest-plugin'
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin'

export default {
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      path: '/buses',
      component: 'src/containers/Buses',
    },
    {
      path: '/buses/1-grotto-bay',
      component: 'src/containers/bus-schedules/1-grotto-bay',
    },
    {
      path: '/buses/1-st-georges',
      component: 'src/containers/bus-schedules/1-st-georges',
    },
    {
      path: '/buses/2-ord-road',
      component: 'src/containers/bus-schedules/2-ord-road',
    },
    {
      path: '/buses/3-grotto-bay',
      component: 'src/containers/bus-schedules/3-grotto-bay',
    },
    {
      path: '/buses/3-st-georges',
      component: 'src/containers/bus-schedules/3-st-georges',
    },
    {
      path: '/buses/4-spanish-point',
      component: 'src/containers/bus-schedules/4-spanish-point',
    },
    {
      path: '/buses/5-pond-hill',
      component: 'src/containers/bus-schedules/5-pond-hill',
    },
    {
      path: '/buses/6-st-georges',
      component: 'src/containers/bus-schedules/6-st-georges',
    },
    {
      path: '/buses/7-barnes-corner',
      component: 'src/containers/bus-schedules/7-barnes-corner',
    },
    {
      path: '/buses/7-dockyard',
      component: 'src/containers/bus-schedules/7-dockyard',
    },
    {
      path: '/buses/8-cedar-hill',
      component: 'src/containers/bus-schedules/8-cedar-hill',
    },
    {
      path: '/buses/8-dockyard',
      component: 'src/containers/bus-schedules/8-dockyard',
    },
    {
      path: '/buses/8-somerset',
      component: 'src/containers/bus-schedules/8-somerset',
    },
    {
      path: '/buses/9-prospect',
      component: 'src/containers/bus-schedules/9-prospect',
    },
    {
      path: '/buses/10-st-georges',
      component: 'src/containers/bus-schedules/10-st-georges',
    },
    {
      path: '/buses/11-st-georges',
      component: 'src/containers/bus-schedules/11-st-georges',
    },
    {
      path: '/ferries',
      component: 'src/containers/ferry-schedules/2018-winter.js',
    },
    {
      path: '/favorites',
      component: 'src/containers/Favorites.js',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  getSiteProps: () => ({
    title: 'Bermy.xyz',
  }),
  renderToHtml: async (render, Comp, meta) => {
    const html = render(<Comp />)
    const { css } = renderStaticOptimized(() => html)
    meta.glamStyles = css
    return html
  },
  siteRoot: 'https://bermy.xyz',
  Document: class CustomDocument extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#ffffff" />

            <meta property="og:image" content="/img/bermy.xyz.preview.png" />
            <meta property="og:description" content="Bermuda bus and ferry schedules 🇧🇲 🚌 ⛴ 🕑" />
            <meta property="og:site_name" content="Bermy.xyz" />
            <meta property="og:title" content="Bermy.xyz" />
            <meta property="og:image:height" content="255" />
            <meta property="og:image:width" content="486" />
            <meta property="og:url" content="https://bermy.xyz/" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@muloka" />
            <meta name="twitter:title" content="Bermy.xyz" />
            <meta name="twitter:description" content="Bermuda bus and ferry schedules 🇧🇲 🚌 ⛴ 🕑" />
            <meta name="twitter:image:src" content="/img/bermy.xyz.preview.png" />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5f3a96" />

            <style dangerouslySetInnerHTML={{ __html: renderMeta.glamStyles }} />
            <style type="text/css">{`
              body {
                font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
                helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui,
                arial, sans-serif;
                padding: 0;
                margin: 0;
              }
            `}</style>
          </Head>
          <Body>{children}</Body>
          <noscript>Your browser does not support JavaScript!</noscript>
        </Html>
      )
    }
  },
  webpack: config => {
    config.plugins.push(new ManifestPlugin({ fileName: 'asset-manifest.json' }))
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        // By default, a cache-busting query parameter is appended to requests
        // used to populate the caches, to ensure the responses are fresh.
        // If a URL is already hashed by Webpack, then there is no concern
        // about it being stale, and the cache-busting can be skipped.
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        logger (message) {
          if (message.indexOf('Total precache size is') === 0) {
            // This message occurs for every build and is a bit too noisy.
            return
          }
          if (message.indexOf('Skipping static resource') === 0) {
            // This message obscures real errors so we ignore it.
            return
          }
          console.log(message)
        },
        minify: true, // minify and uglify the script
        // navigateFallback: '/index.html',
        // navigateFallbackWhitelist: [/^(?!\/__).*/],
        // Don't precache sourcemaps (they're large) and build asset manifest:
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      }),
    )

    return config
  },
}
