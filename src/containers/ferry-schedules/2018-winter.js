import React from 'react'
import { getSiteProps, Head } from 'react-static'
import { wrap, reset, tachyons } from 'glamor-tachyons'
import { css, insertRule } from 'glamor'
import g from 'glamorous'
//
reset({ insertRule })

const styles = wrap(
  {
    section: 'bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto',
    h1: 'f1 lh-title',
    link: 'link dim',
    table: 'collapse black ba br2 b--black-10 pv2 ph3 tc',
    th: 'f5 lh-copy fw6 pv2 ph3',
    td: 'pv2 ph3 nowrap',
  },
  css,
)

const BlueRoute = g.div(tachyons('bg-blue white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'))
const BlueRouteButton = g.a(tachyons('bg-blue f5 f4-ns lh-copy link dim ph3 pv2 mb2 mr1-l dib white tc w-100 w-auto-l flex-l items-center-l'))
const PinkRoute = g.div(tachyons('bg-pink white pv3 pv4-ns ph3 ph6-l flex flex-column items-center'))
const PinkRouteButton = g.a(tachyons('bg-pink f5 f4-ns lh-copy link dim ph3 pv2 mb2 mr1-l dib white tc w-100 w-auto-l flex-l items-center-l'))
const PinkRouteTable = g.table(tachyons('collapse bg-light-pink black ba br2 b--black-10 pv2 ph3 tc'))
const GreenRoute = g.div(tachyons('bg-green white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'))
const GreenRouteButton = g.a(tachyons('bg-green f5 f4-ns lh-copy link dim ph3 pv2 mb2 mr1-l dib white tc w-100 w-auto-l flex-l items-center-l'))
const OrangeRouteDisabled = g.div(tachyons('bg-orange f5 f4-ns lh-copy ph3 pv2 mb2 mr1-l dib white tc w-100 w-auto-l'))
const Fares = g.div(tachyons('bg-light-gray pv3 pv4-ns ph3 ph6-l flex flex-column flex-auto'))

const TableWidth45 = g.div({
  width: '100%',
  '@media screen and (min-width: 60em)': {
    width: '45%',
  },
})

export default getSiteProps(({ title }) => (
  <div>
    <Head>
      <title>{`Winter Ferry Schedule | ${title}`}</title>
      <meta name="description" content="Bermuda winter ferry schedule" />
    </Head>
    <section className={styles.section}>
      <div className={css(tachyons('tc'))}>
        <h1 className={styles.h1}>
          <svg
            fill="#000"
            height="47"
            viewBox="0 0 24 24"
            width="47"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z" />
          </svg>
          {' '}Winter Ferry Schedule
        </h1>
        <p>Effective 30 October 2017</p>
        <p>Service is subject to change</p>
        <p>
          Ferry scheduling information and alert notifications<br />
          <a className={styles.link} href="http://www.marineandports.bm/ferries_about.aspx">
            www.marineandports.bm/ferries_about.aspx
          </a>
        </p>
      </div>
      <div
        className={css(tachyons('w-100 overflow-scroll flex-ns flex-column-ns items-center-ns'))}
      >
        <table className={styles.table}>
          <caption className={css(tachyons('f4 pv2 b lh-copy'))}>
            Hamilton Ferry Terminal Hours
          </caption>
          <thead>
            <tr>
              <th className={styles.th}>Mon-Fri</th>
              <th className={styles.th}>Saturday</th>
              <th className={styles.th}>Sun &amp; Holidays</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={styles.td}>6:30am-8pm</td>
              <td className={styles.td}>7:30am-6pm</td>
              <td className={styles.td}>8:30am-6pm</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className={css(tachyons('pv3'))}>
                For information call{' '}
                <a className={styles.link} href="tel:+14412954506">
                  (441) 295-4506
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p>Marine and Ports shall not be liable for loss or damage to property.</p>
      <div className={css(tachyons('flex flex-column flex-row-l pt3-l'))}>
        <BlueRouteButton href="#blueroute">
          Blue Route<br />Hamilton &bull; Dockyard
        </BlueRouteButton>
        <PinkRouteButton className={styles.pink} href="#pinkroute">
          Pink Route<br />Hamilton &bull; Paget &bull; Warwick
        </PinkRouteButton>
        <GreenRouteButton className={styles.green} href="#greenroute">
          Green Route<br />Hamilton &bull; Southampton &bull; Sandys
        </GreenRouteButton>
        <OrangeRouteDisabled href="#orangeroute">
          Orange Route<br />Dockyard &bull; St.&nbsp;George&rsquo;s
          <br />Services resumes April 2018
        </OrangeRouteDisabled>
      </div>
    </section>
    <Fares id="fares">
      <h1 className={css(tachyons('f2 lh-title'))}>Fare Information</h1>
      <div className={css(tachyons('lh-copy'))}>
        <p>Please ensure you have the correct fare before boarding.</p>
        <p>
          Passes, Tokens, and Tickets are available from the Hamilton Ferry &amp; Bus Terminals,
          Visitors Information Centres, sub-post offices, hotels, and guest houses.
        </p>
        <p>
          Passes, Tokens, and Tickets are valid on all routes for both&nbsp;
          <svg
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z" />
          </svg>
          &nbsp;ferries and
          <svg
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
          </svg>
          &nbsp;buses. Tickets and Tokens for the Pink route are considered 3 zone for buses.
          Tickets and Tokens for Blue / Green / Orange routes are considered 14 zone for buses.
        </p>
      </div>
      <h1 className={css(tachyons('f3 lh-copy'))}>Free</h1>
      <ul>
        <li>Holders of Special Persons Pass (including Seniors)</li>
        <li>Children under age 5</li>
      </ul>
      <div className={css(tachyons('flex flex-column flex-row-l justify-between'))}>
        <TableWidth45>
          <h1 className={css(tachyons('f3 lh-copy'))}>Passes</h1>
          <table
            className={css(tachyons('collapse w-100 bg-white black ba br2 b--black-10 pv2 ph3 tc'))}
          >
            <thead>
              <tr>
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))} />
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Adult (16+)</th>
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Child (5-15)</th>
              </tr>
            </thead>
            <tbody>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>1-Day</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$19.00</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$9.50</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>2-Day</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$31.50</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$16.00</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>3-Day</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$44.00</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$22.00</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>4-Day</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$48.50</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$24.50</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>7-Day</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$62.00</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$31.00</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>Monthly Pass</td>
                <td colSpan="2" className={css(tachyons('pv2 ph3 nowrap'))}>
                  $69.00
                </td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>3-Month Pass</td>
                <td colSpan="2" className={css(tachyons('pv2 ph3 nowrap'))}>
                  $169.00
                </td>
              </tr>
            </tbody>
          </table>
          <div className={css(tachyons('lh-copy'))}>
            <strong>Student Passes</strong> (Residents Only) &bull; All Students must present a
            Student Pass for free transportation. If Student Pass not presented, child (Age 5 - 15)
            or Adult (Age 16+) fares apply.
          </div>
        </TableWidth45>
        <TableWidth45>
          <h1 className={css(tachyons('f3 lh-copy'))}>Tickets/Tokens</h1>
          <h1 className={css(tachyons('f4 lh-title'))}>BLUE / GREEN / ORANGE ROUTE</h1>
          <div className={css(tachyons('w-100 overflow-scroll'))}>
            <table
              className={css(
                tachyons('collapse w-100 bg-white black ba br2 b--black-10 pv2 ph3 tc'),
              )}
            >
              <thead>
                <tr>
                  <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))} />
                  <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3 nowrap'))}>
                    Adult&nbsp;(16+)
                  </th>
                  <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3 nowrap'))}>
                    Child&nbsp;(5-15)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={css(tachyons('striped--near-white'))}>
                  <td className={css(tachyons('pv2 ph3 nowrap'))}>Cash</td>
                  <td className={css(tachyons('pv2 ph3 nowrap'))}>$5.00</td>
                  <td className={css(tachyons('pv2 ph3 nowrap'))}>$2.75</td>
                </tr>
                <tr className={css(tachyons('striped--near-white'))}>
                  <td className={css(tachyons('pv2 ph3 nowrap'))}>Tokens</td>
                  <td className={css(tachyons('pv2 ph3 nowrap'))}>$4.50</td>
                  <td className={css(tachyons('pv2 ph3 nowrap'))}>$2.75</td>
                </tr>
                <tr className={css(tachyons('striped--near-white'))}>
                  <td className={css(tachyons('pv2 ph3 nowrap'))}>Booklet of 15 Tickets</td>
                  <td colSpan="2" className={css(tachyons('pv2 ph3 nowrap'))}>
                    $37.50
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1 className={css(tachyons('f4 lh-copy'))}>
            <svg
              fill="#000000"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path d="M0 0h24v24H0z" id="a" />
              </defs>
              <clipPath id="b">
                <use overflow="visible" xlinkHref="#a" />
              </clipPath>
              <path
                clipPath="url(#b)"
                d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
              />
            </svg>
            &nbsp;Motor Cycles
          </h1>
          <table
            className={css(tachyons('collapse w-100 bg-white black ba br2 b--black-10 pv2 ph3 tc'))}
          >
            <thead>
              <tr>
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>
                  If paid by Cash or Token
                </th>
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>If paid by Pass</th>
              </tr>
            </thead>
            <tbody>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$4.50</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>Free</td>
              </tr>
            </tbody>
          </table>
          <h1 className={css(tachyons('f4 lh-title'))}>PINK ROUTE</h1>
          <table
            className={css(tachyons('collapse w-100 bg-white black ba br2 b--black-10 pv2 ph3 tc'))}
          >
            <thead>
              <tr>
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))} />
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Adult (Age 16+)</th>
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Child (Age 5-15)</th>
              </tr>
            </thead>
            <tbody>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>Cash</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$3.50</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$2.75</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>Tokens</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$2.75</td>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>$2.75</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3 nowrap'))}>Booklet of 15 Tickets</td>
                <td colSpan="2" className={css(tachyons('pv2 ph3 nowrap'))}>
                  $25.00
                </td>
              </tr>
            </tbody>
          </table>
        </TableWidth45>
      </div>
    </Fares>
    <BlueRoute id="blueroute">
      <h1 className={css(tachyons('f3 lh-title tc mb0'))}>
        Blue Route<br />
        <hr />Hamilton &bull; Royal Naval Dockyard<hr />
      </h1>
      <div className={css(tachyons('measure flex flex-column'))}>
        <div className={css(tachyons('lh-copy'))}>
          The trip to the West End is one of the finest sightseeing cruises available anywhere! See
          a completely different aspect of the island on your way to the Royal Naval Dockyard, which
          is full of interesting things to do and places to eat and shop!
        </div>
        <div className={css(tachyons('flex flex-row'))}>
          <svg
            className={css(tachyons('w-10'))}
            fill="#fff"
            height="32"
            viewBox="0 0 24 24"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path d="M0 0h24v24H0z" id="a" />
            </defs>
            <clipPath id="b">
              <use overflow="visible" xlinkHref="#a" />
            </clipPath>
            <path
              clipPath="url(#b)"
              d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
            />
          </svg>
          <p className={css(tachyons('pl2 w-90 lh-copy'))}>
            Motor cycles may embark at Hamilton &amp; Dockyard.
          </p>
        </div>
        <div className={css(tachyons('pv2 flex flex-row'))}>
          <svg
            className={css(tachyons('w-10'))}
            fill="#fff"
            height="32"
            viewBox="0 0 24 24"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="4" r="2" />
            <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z" />
          </svg>
          <p className={css(tachyons('w-90 pl2 lh-copy'))}>
            Accessible to persons with disability
          </p>
        </div>
      </div>
      <table
        className={css(tachyons('collapse bg-light-blue black ba br2 b--black-10 pv2 ph3 tc'))}
      >
        <caption className={css(tachyons('white f3 f4-ns pv2'))}>Monday to Friday</caption>
        <thead>
          <tr>
            <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
            <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Dockyard</th>
            <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Arrive Hamilton</th>
          </tr>
        </thead>
        <tbody>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>7:10 AM</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>7:30 AM</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>8:15 AM</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>9:00</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>9:45</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>10:15</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>10:30</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>11:15</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>11:45</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>12:00</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>12:45</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>1:15</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>1:30</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>2:15</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>2:45</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>3:00</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>3:45</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>4:15</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>4:30 PM</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>5:15 PM</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>5:45 PM</td>
          </tr>
        </tbody>
      </table>

      <table
        className={css(tachyons('collapse bg-light-blue black ba br2 b--black-10 pv2 ph3 tc'))}
      >
        <caption className={css(tachyons('white f3 f4-ns pv2'))}>
          Saturdays / Sundays / Holidays
        </caption>
        <thead>
          <tr>
            <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
            <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Dockyard</th>
            <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Arrive Hamilton</th>
          </tr>
        </thead>
        <tbody>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>9:00 AM</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>9:45 AM</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>10:15 AM</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>10:30</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>11:15</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>11:45</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>12:00</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>12:45</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>1:15</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>1:45</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>2:30</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>3:00</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>3:15</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>4:00</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>4:30</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>4:45 PM</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>5:30 PM</td>
            <td className={css(tachyons('pv2 ph3 nowrap'))}>6:00 PM</td>
          </tr>
        </tbody>
      </table>
    </BlueRoute>
    <PinkRoute id="pinkroute">
      <h1 className={css(tachyons('f3 lh-title tc mb0'))}>
        Pink Route<br />
        <hr />Hamilton &bull; Paget &bull; Warwick<hr />
      </h1>
      <div className={css(tachyons('measure flex flex-column'))}>
        <p className={css(tachyons('lh-copy'))}>
          The most scenic transportation for visitors and residents who are staying along or near
          Harbour Road. A delightful cruise through the inner harbour islands past charming Bermuda
          cottages and stately homes. A year-round service.
        </p>
      </div>
      <div
        className={css(tachyons('w-100 overflow-scroll flex-ns flex-column-ns items-center-ns'))}
      >
        <PinkRouteTable>
          <caption className={css(tachyons('white f3 f4-ns pv2'))}>Monday - Friday</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Lower Ferry</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Hodsdon&rsquo;s Ferry</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Salt Kettle</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Darrell&rsquo;s Wharf</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Belmont Ferry</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Arrive Hamilton</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:00 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:24 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:20 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:15 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:30 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:35</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:59</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:55</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:50</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:10</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:34</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:35</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:35</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:05</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:10</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>12:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>12:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>12:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>12:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>12:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:21</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:04</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:08</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:12</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:16</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:21</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:36</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:40</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:46</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:50</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:55</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:21</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:50</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:56</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:05</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:24</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:28</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:32</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:36</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:41</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:56</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:35 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>7:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:00 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:05 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:10 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:15 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:20 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:35 PM</td>
            </tr>
          </tbody>
        </PinkRouteTable>
        <PinkRouteTable>
          <caption className={css(tachyons('white f3 f4-ns pv2'))}>Saturdays</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Lower Ferry</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Hodsdon&rsquo;s Ferry</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Salt Kettle</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Darrell&rsquo;s Wharf</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Belmont Ferry</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Arrive Hamilton</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:00 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:35 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:30 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:25 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:20 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:15 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>8:40 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:35</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>9:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:35</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:35</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:05</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:10</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:35</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:05</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:10</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:00 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:35 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:30 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:25 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:20 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:15 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:40 PM</td>
            </tr>
          </tbody>
        </PinkRouteTable>
        <PinkRouteTable>
          <caption className={css(tachyons('white f3 f4-ns pv2'))}>
            Sundays and Public Holidays
          </caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Lower Ferry</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Hodsdon&rsquo;s Ferry</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Salt Kettle</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Darrell&rsquo;s Wharf</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Belmont Ferry</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3-ns'))}>Arrive Hamilton</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:00 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:35 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:30 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:25 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:20 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:15 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>10:40 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:35</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>11:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>12:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>12:35</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>12:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>12:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>12:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>12:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>12:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:05</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:10</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>3:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:35</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>4:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:05</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:10</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:15</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:25</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>5:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:00 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:35 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:30 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:25 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:20 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:15 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap-ns nowrap'))}>6:40 PM</td>
            </tr>
          </tbody>
        </PinkRouteTable>
      </div>
    </PinkRoute>
    <GreenRoute id="greenroute">
      <h1 className={css(tachyons('f3 lh-title tc mb0'))}>
        Green Route<br />
        <hr />Hamilton &bull; Watford Bridge &bull; Cavello Bay &bull; Rockaway<hr />
      </h1>
      <div className={css(tachyons('measure flex flex-column'))}>
        <p className={css(tachyons('lh-copy'))}>
          Commuting, Bermuda Style! This new service offers an express trip to Hamilton from
          Rockaway in Southampton. This is the way to start the day, with a pleasant cruise instead
          of driving into Town. It&rsquo;s also great for visitors who want to get to the shops
          quickly!
        </p>
        <div className={css(tachyons('flex flex-row'))}>
          <svg
            className={css(tachyons('w-10'))}
            fill="#fff"
            height="32"
            viewBox="0 0 24 24"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="4" r="2" />
            <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z" />
          </svg>
          <p className={css(tachyons('w-90 pl2 lh-copy'))}>
            Accessible to persons with disability
          </p>
        </div>
      </div>
      <div
        className={css(tachyons('w-100 overflow-scroll flex-ns flex-column-ns items-center-ns'))}
      >
        <table
          className={css(tachyons('collapse bg-light-green black ba br2 b--black-10 pv2 ph3 tc'))}
        >
          <caption className={css(tachyons('white f3 f4-ns pv2'))}>Monday - Friday</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Watford Bridge</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Cavello Bay</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Rockaway</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Arrive Hamilton</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>6:40 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>7:00 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>7:10 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>7:20 AM</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>7:45 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>7:10</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>-</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>7:55</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>8:15</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>7:45</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>8:00</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>8:10</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>8:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>8:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>4:10</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>4:50</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>4:40</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>4:30</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>5:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>5:20</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>5:55</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>5:50</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>5:40</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>6:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>6:20 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>6:55 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>6:50 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>6:40 PM</td>
              <td className={css(tachyons('pv2 ph3 nowrap'))}>7:20 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </GreenRoute>
  </div>
))
