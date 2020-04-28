
import { withApollo } from 'react-apollo'
import { withRouter } from 'next/router'
import react from 'react'

class LoginBox extends  react.Component {

    elms = {}
    state = {
        errors: {}
    }

    render = () => {

        const elms = this.elms;
        const errors = this.state.errors;
        const { t, router: { query: { next, asNext } } } = this.props;
        let addNext = next ? `?next=${next}`: ``;
        addNext += asNext ? `&asNext=${asNext}`: ``;

        return (
            <div className={`sign-form`}>
                <h2 className={`text-center text-md-left`}>{`Register`}</h2>

                <form onSubmit={this.onSubmit}>
                    <div className={`mb-3 mt-4`}>
                        <input name="displayName" type="text" className={`form-control `} placeholder={`Display Name`} maxLength="200" required ref={node => {elms.displayName = node}} />

                    </div>
                    <div className={`mb-3`}>
                        <input type="email" className={`form-control `} placeholder={`Email Address`} maxLength="200" required ref={node => {elms.email = node}} />

                    </div>
                    <div className={`mb-3`}>
                        <input type="password" className={`form-control `} placeholder={`Password`} maxLength="50" required minLength="6" ref={node => {elms.password = node}} autoComplete="off" />

                    </div>
                    <input name="next" type="hidden" value={next} ref={node => {elms.next = node}} />
                    <div>
                        <button className={`btn btn-primary btn--full`}>{'register'}</button>
                    </div>
                </form>

                {/* <div className={`d-block d-md-none mt-3`}>
          <p className={`text-center font-weight-bold`}>
            {t(`Hey! I have an account.`)}
          </p>
          <div className={`text-center`}>
            <Link prefetch href={`/sign-in${addNext}`}>
              <a className={`btn btn-light`}>{t(`Login`)}</a>
            </Link>
          </div>
        </div> */}

                <style jsx>{`
          .sign-form {
            background: var(--white);
            flex: 0 0 100%;
            padding: 2rem 1rem 1rem;
            border-top-right-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
            border-top-left-radius: var(--border-radius);
          }
            
          @media (min-width: 768px) {  
            .sign-form {
              flex: 0 0 45%;
              padding: 2rem
            }
          }
        `}</style>

            </div>
        )
    }

    onSubmit() {
        e.preventDefault()

        let {displayName, email, password} = this.elms
    }
}


export default withRouter(withApollo(LoginBox))