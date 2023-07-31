import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.grid}>
      <div>
        <div className="textsection">
          <h3 className="font-title">SIGN IN</h3>
        </div>
        <form className={styles.form}>
          <label for="login-email">
            <strong>Email Address</strong>
          </label>
          <input id="login-email" type="text" />
          <label for="login-password">Password</label>
          <input id="login-password" type="text" />
          <br />
          <div>
            <input id="login-permanent" type="checkbox" />
            <label for="login-permanent" className={styles.loginpermanent}>
              Stay Signed In
            </label>
          </div>
        </form>
        <button className={`button ${styles.loginbutton}`}>
          <strong>Sign in</strong>
        </button>
      </div>
      <div>
        <div className="textsection">
          <h3 className="font-title">CREATE ACCOUNT</h3>
        </div>
        <form className={styles.form}>
          <label for="login-name-first">First Name*</label>
          <input id="login-name-first" type="text" />
          <label for="login-name-last">Last Name*</label>
          <input id="login-name-last" type="text" />
          <label for="login-email">Email Address*</label>
          <input id="login-email" type="text" />
          <label for="login-password">Create Password</label>
          <input id="login-password" type="text" />
          <label for="login-password">Confirm Password</label>
          <input id="login-password" type="text" />
          <br />
          <div>
            <input id="login-permanent" type="checkbox" />
            <label for="login-permanent" className={styles.loginpermanent}>
              Sign Up for updates on PHYSICAL, such as newly available items and
              store features. You can unsubscribe at any time.
            </label>
          </div>
        </form>
        <p>
          By creating an account, you are agreeing to our Terms & Conditions and
          our Privacy Policy
        </p>
        <button className={`button ${styles.loginbutton}`}>
          <strong>Create Account</strong>
        </button>
      </div>
    </div>
  );
}
