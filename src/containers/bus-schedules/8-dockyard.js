import React from 'react'
import { getSiteProps, Head } from 'react-static'
import { reset, tachyons } from 'glamor-tachyons'
import { css, insertRule } from 'glamor'
//
reset({ insertRule })

export default getSiteProps(({ title }) => (
  <div>
    <Head>
      <title>8 • Hamilton • Dockyard | {title}</title>
      <meta name="description" content="Bermuda bus schedule: 8 • Hamilton • Dockyard" />
    </Head>
    <busschedule
      className={css(
        tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
      )}
    >
      <h1 className={css(tachyons('f3 f1-ns lh-copy tc'))}>
        8 &bull; Hamilton &bull; Dockyard
        <p className={css(tachyons('f5 f4-ns'))}>via Middle Road, and Maritime Museum</p>
      </h1>
      <div className={css(tachyons('flex flex-column flex-row-l justify-around w-100'))}>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Monday to Friday</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Dockyard</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>6:35 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:45 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>7:50xp</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:15sh</td>
              <td className={css(tachyons('pv2 ph3'))}>8:05sv</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:45sh</td>
              <td className={css(tachyons('pv2 ph3'))}>8:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:15</td>
              <td className={css(tachyons('pv2 ph3'))}>9:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
              <td className={css(tachyons('pv2 ph3'))}>9:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:15</td>
              <td className={css(tachyons('pv2 ph3'))}>10:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
              <td className={css(tachyons('pv2 ph3'))}>10:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:15</td>
              <td className={css(tachyons('pv2 ph3'))}>11:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45</td>
              <td className={css(tachyons('pv2 ph3'))}>11:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:15</td>
              <td className={css(tachyons('pv2 ph3'))}>12:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:45</td>
              <td className={css(tachyons('pv2 ph3'))}>12:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:15</td>
              <td className={css(tachyons('pv2 ph3'))}>1:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:45</td>
              <td className={css(tachyons('pv2 ph3'))}>1:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:15</td>
              <td className={css(tachyons('pv2 ph3'))}>2:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:45</td>
              <td className={css(tachyons('pv2 ph3'))}>2:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:15</td>
              <td className={css(tachyons('pv2 ph3'))}>3:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:45sh</td>
              <td className={css(tachyons('pv2 ph3'))}>3:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:15</td>
              <td className={css(tachyons('pv2 ph3'))}>4:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:45</td>
              <td className={css(tachyons('pv2 ph3'))}>4:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:15</td>
              <td className={css(tachyons('pv2 ph3'))}>5:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:45</td>
              <td className={css(tachyons('pv2 ph3'))}>5:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:10xp</td>
              <td className={css(tachyons('pv2 ph3'))}>6:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:45</td>
              <td className={css(tachyons('pv2 ph3'))}>6:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:15</td>
              <td className={css(tachyons('pv2 ph3'))}>7:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>11:50 PM</td>
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
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Dockyard</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:35 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>8:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:15 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>8:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:45</td>
              <td className={css(tachyons('pv2 ph3'))}>9:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:15</td>
              <td className={css(tachyons('pv2 ph3'))}>9:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
              <td className={css(tachyons('pv2 ph3'))}>10:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:15</td>
              <td className={css(tachyons('pv2 ph3'))}>10:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
              <td className={css(tachyons('pv2 ph3'))}>11:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:15</td>
              <td className={css(tachyons('pv2 ph3'))}>11:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45</td>
              <td className={css(tachyons('pv2 ph3'))}>12:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:15</td>
              <td className={css(tachyons('pv2 ph3'))}>12:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:45</td>
              <td className={css(tachyons('pv2 ph3'))}>1:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:15</td>
              <td className={css(tachyons('pv2 ph3'))}>1:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:45</td>
              <td className={css(tachyons('pv2 ph3'))}>2:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:15</td>
              <td className={css(tachyons('pv2 ph3'))}>2:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:45</td>
              <td className={css(tachyons('pv2 ph3'))}>3:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:15</td>
              <td className={css(tachyons('pv2 ph3'))}>3:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:45</td>
              <td className={css(tachyons('pv2 ph3'))}>4:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:15</td>
              <td className={css(tachyons('pv2 ph3'))}>4:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:45</td>
              <td className={css(tachyons('pv2 ph3'))}>5:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:15</td>
              <td className={css(tachyons('pv2 ph3'))}>5:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:45</td>
              <td className={css(tachyons('pv2 ph3'))}>6:35 PM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:15</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:45</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:15</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>11:50 PM</td>
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
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Dockyard</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>9:35 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>10:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:45 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>11:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:15</td>
              <td className={css(tachyons('pv2 ph3'))}>11:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45</td>
              <td className={css(tachyons('pv2 ph3'))}>12:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:15</td>
              <td className={css(tachyons('pv2 ph3'))}>12:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:45</td>
              <td className={css(tachyons('pv2 ph3'))}>1:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:15</td>
              <td className={css(tachyons('pv2 ph3'))}>1:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:45</td>
              <td className={css(tachyons('pv2 ph3'))}>2:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:15</td>
              <td className={css(tachyons('pv2 ph3'))}>2:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:45</td>
              <td className={css(tachyons('pv2 ph3'))}>3:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:15</td>
              <td className={css(tachyons('pv2 ph3'))}>3:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:45</td>
              <td className={css(tachyons('pv2 ph3'))}>4:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:15</td>
              <td className={css(tachyons('pv2 ph3'))}>4:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:45</td>
              <td className={css(tachyons('pv2 ph3'))}>5:05</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:15</td>
              <td className={css(tachyons('pv2 ph3'))}>5:35</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:15</td>
              <td className={css(tachyons('pv2 ph3'))}>6:35 PM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={css(tachyons('pa3 pa4-ns'))}>
        <h4 className={css(tachyons('f4 fw6'))}>Notes</h4>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>sv</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>
            Trip operates via Sound View Road. 8.15 AM trip does not serve Somerset Terminal.
          </dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>xp</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>
            Trip operates express between Barnes Corner and Crow Lane.
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
              <td className={css(tachyons('pv2 ph3'))}>Cobbs Hill</td>
              <td className={css(tachyons('pv2 ph3'))}>15 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Cedar Hill</td>
              <td className={css(tachyons('pv2 ph3'))}>23 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Barnes Corner</td>
              <td className={css(tachyons('pv2 ph3'))}>34 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Somerset</td>
              <td className={css(tachyons('pv2 ph3'))}>53 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Dockyard</td>
              <td className={css(tachyons('pv2 ph3'))}>62 minutes</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-40-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>From Dockyard to</caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Somerset</td>
              <td className={css(tachyons('pv2 ph3'))}>9 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Barnes Corner</td>
              <td className={css(tachyons('pv2 ph3'))}>28 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Cedar Hill</td>
              <td className={css(tachyons('pv2 ph3'))}>39 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Cobbs Hill</td>
              <td className={css(tachyons('pv2 ph3'))}>47 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Hamilton</td>
              <td className={css(tachyons('pv2 ph3'))}>62 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </averagetimes>
  </div>
))
