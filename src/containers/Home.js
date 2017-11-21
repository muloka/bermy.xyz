import React from 'react'
import { getSiteProps, Head, Link } from 'react-static'
import { wrap, reset, tachyons } from 'glamor-tachyons'
import { css, insertRule } from 'glamor'
//
reset({ insertRule })

const styles = wrap(
  {
    h1: 'f3 flex flex-column',
    flex_center: 'flex flex-column flex-row-ns items-center justify-around',
    section: 'bg-white pv3 pv4-ns ph3 ph6-l flex flex-column flex-auto',
    article: 'bg-near-white mw5 br3 pa3 pa4-ns mv3 ba b--black-10',
    link_black: 'link dim black',
    link_white_large: 'link dim white dn di-l',
  },
  css,
)

export default getSiteProps(({ title }) => (
  <section className={styles.section}>
    <Head>
      <title>{title} | Bermuda bus and ferry schedules</title>
      <meta name="description" content="Bermuda bus and ferry schedules" />
    </Head>
    <div className={styles.flex_center}>
      <article className={styles.article}>
        <div className={css(tachyons('tc'))}>
          <h1 className={styles.h1}>
            <Link to="/buses" className={styles.link_black}>
              <svg
                fill="#000000"
                height="128"
                viewBox="0 0 24 24"
                width="128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
              </svg>
              <div>Bus Schedules</div>
            </Link>
          </h1>
        </div>
      </article>
      <article className={styles.article}>
        <div className={css(tachyons('tc'))}>
          <h1 className={styles.h1}>
            <Link to="/ferries" className={styles.link_black}>
              <svg
                fill="#000"
                height="128"
                viewBox="0 0 24 24"
                width="128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z" />
              </svg>
              <div>Ferry Schedules</div>
            </Link>
          </h1>
        </div>
      </article>
    </div>
  </section>
))
