import Head from 'next/head'
// import { withTranslation } from 'react-i18next'

// import Header from './Header'
// import Footer from './Footer'
// import Navigation from './Navigation'

import { connect } from '../store'
import { headTitle } from '../lib/utils'
import config from '../config'

class Layout extends React.Component {

  componentDidMount = () => {

  }

  render = () => {

    const { children, t, modals } = this.props

    return (
      <div className={`wrapper `}>
        <Head>
          <title>{headTitle()}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="shortcut icon" href="/static/frontend/img/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/frontend/img/favicon.ico" type="image/x-icon" />

          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content={config.socialAuthFacebookKey}/>

        </Head>
        
        <div className={`row no-gutters`}>
          <div className={`col-12 col-lg-2 order-2 order-lg-1 shadow-sm bg-white col-bottom`}>
            {/* <Navigation /> */}
          </div>
          <div className={`col-12 col-lg-10 order-1 order-lg-2`}>
            <div className="section-container px-2 py-4">
              <div className="container-fluid">
              {/* <Header /> */}
              {children}
              </div>
            </div>    
          </div>
        </div>
        {/* <Footer /> */}

        {/* <div className={`modals`}> */}
          {/* {modals.map((modal, i) => <div key={i} className={`modal-wrapper`}>{modal}</div>)} */}
        {/* </div> */}


        <style jsx>{`
        .col-bottom {
          min-height: 100vh;
        }
          /* Menu for Mobile */
          .col-bottom {
            min-height: 100vh;
          }
          @media (max-width: 991px) {  
            .col-bottom {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              box-shadow: 0 .125rem .75rem rgba(0,0,0,.5) !important;
              z-index: 1100;
              min-height: auto;
            }
          }
        `}
        </style>
        
      </div>
    )
  }
}



export default connect(({ modals }) => ({ modals }))(Layout)