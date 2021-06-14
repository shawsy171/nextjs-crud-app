import { ThemeProvider } from "theme-ui";
import theme from "/theme.js"
// this is an override component just incase we need to do something before the main App component is loaded.
// there are a number of other components which can be overriden.
// https://nextjs.org/docs/advanced-features/custom-app
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;