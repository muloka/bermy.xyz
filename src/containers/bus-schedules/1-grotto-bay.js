import React from 'react'
import { getSiteProps, Head } from 'react-static'
import { reset, tachyons } from 'glamor-tachyons'
import { css, insertRule } from 'glamor'
//
reset({ insertRule })

export default getSiteProps(({ title }) => (
  <div>
    <Head>
      <title>1 • Hamilton • Grotto Bay | {title}</title>
      <meta name="description" content="Bermuda bus schedule: 1 • Hamilton • Grotto Bay" />
    </Head>
    <busschedule
      className={css(
        tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
      )}
    >
      <h1 className={css(tachyons('f3 f1-ns lh-copy tc'))}>
        1 &bull; Hamilton &bull; Grotto Bay
        <p className={css(tachyons('f5 f4-ns'))}>via Marriott Castle Harbour and The Caves</p>
      </h1>
      <div className={css(tachyons('flex flex-column flex-row-l justify-around w-100'))}>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Monday to Friday</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Grotto Bay</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:10 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:45 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>7:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:15</td>
              <td className={css(tachyons('pv2 ph3'))}>8:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:45</td>
              <td className={css(tachyons('pv2 ph3'))}>8:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:15</td>
              <td className={css(tachyons('pv2 ph3'))}>9:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
              <td className={css(tachyons('pv2 ph3'))}>9:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:15</td>
              <td className={css(tachyons('pv2 ph3'))}>10:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td colSpan="2" className={css(tachyons('pv2 ph3'))}>
                Then every 30 mins. until
              </td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:15</td>
              <td className={css(tachyons('pv2 ph3'))}>2:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:45</td>
              <td className={css(tachyons('pv2 ph3'))}>2:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:15</td>
              <td className={css(tachyons('pv2 ph3'))}>3:10 hs</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:45</td>
              <td className={css(tachyons('pv2 ph3'))}>3:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:15 dh</td>
              <td className={css(tachyons('pv2 ph3'))}>4:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:45</td>
              <td className={css(tachyons('pv2 ph3'))}>4:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:15</td>
              <td className={css(tachyons('pv2 ph3'))}>5:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:45</td>
              <td className={css(tachyons('pv2 ph3'))}>5:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:15</td>
              <td className={css(tachyons('pv2 ph3'))}>6:40 PM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:45</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:15 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Saturday</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Grotto Bay</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>8:10 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:45 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>8:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:15</td>
              <td className={css(tachyons('pv2 ph3'))}>9:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
              <td className={css(tachyons('pv2 ph3'))}>9:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:15</td>
              <td className={css(tachyons('pv2 ph3'))}>10:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td colSpan="2" className={css(tachyons('pv2 ph3'))}>
                Then every 30 mins. until
              </td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:15</td>
              <td className={css(tachyons('pv2 ph3'))}>2:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:45</td>
              <td className={css(tachyons('pv2 ph3'))}>2:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:15</td>
              <td className={css(tachyons('pv2 ph3'))}>3:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:45</td>
              <td className={css(tachyons('pv2 ph3'))}>3:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:15</td>
              <td className={css(tachyons('pv2 ph3'))}>4:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:45</td>
              <td className={css(tachyons('pv2 ph3'))}>4:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:15</td>
              <td className={css(tachyons('pv2 ph3'))}>5:10</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:45</td>
              <td className={css(tachyons('pv2 ph3'))}>5:40 PM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:15</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:45 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Sunday &amp; Holidays</caption>
          <thead>
            <tr className={css(tachyons(''))}>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Grotto Bay</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:00 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>11:18 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:00</td>
              <td className={css(tachyons('pv2 ph3'))}>12:18</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:00</td>
              <td className={css(tachyons('pv2 ph3'))}>1:18</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:00</td>
              <td className={css(tachyons('pv2 ph3'))}>2:18</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:00</td>
              <td className={css(tachyons('pv2 ph3'))}>3:18</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:00</td>
              <td className={css(tachyons('pv2 ph3'))}>4:18</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:00 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>5:18 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={css(tachyons('pa3 pa4-ns'))}>
        <h4 className={css(tachyons('f4 fw6'))}>Notes</h4>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>dh</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>
            Trip operates to Devil&rsquo;s Hole; does not serve Castle Harbour or Grotto Bay.
          </dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>hs</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>
            Trip operates via Harrington Sound School route; does not serve South Road between
            Devil&rsquo;s Hole and Collectors Hill.
          </dd>
        </dl>
      </div>
    </busschedule>
    <averagetimes
      className={css(
        tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
      )}
    >
      <h1 className={css(tachyons('f3 f2-ns lh-copy tc'))}>Average Running Times</h1>
      <div className={css(tachyons('flex flex-column flex-row-l justify-around w-100'))}>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-40-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>From Hamilton to</caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Hospital</td>
              <td className={css(tachyons('pv2 ph3'))}>7 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Collectors Hill</td>
              <td className={css(tachyons('pv2 ph3'))}>16 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>John Smith&rsquo;s Bay</td>
              <td className={css(tachyons('pv2 ph3'))}>25 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Mid-Ocean Club</td>
              <td className={css(tachyons('pv2 ph3'))}>32 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Castle Harbour</td>
              <td className={css(tachyons('pv2 ph3'))}>37 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Grotto Bay</td>
              <td className={css(tachyons('pv2 ph3'))}>47 minutes</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-40-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>From Grotto Bay to</caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Castle Harbour</td>
              <td className={css(tachyons('pv2 ph3'))}>10 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>John Smith&rsquo;s Bay</td>
              <td className={css(tachyons('pv2 ph3'))}>17 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Collectors Hill</td>
              <td className={css(tachyons('pv2 ph3'))}>26 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Hospital</td>
              <td className={css(tachyons('pv2 ph3'))}>35 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Hamilton</td>
              <td className={css(tachyons('pv2 ph3'))}>42 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </averagetimes>
  </div>
))
