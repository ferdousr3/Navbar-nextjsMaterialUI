import { ServerStyleSheets } from '@material-ui/styles';
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document , { Head, Html, Main, NextScript} from 'next/document';
import React from 'react';



export default class MyDocument extends Document{
  render(){
    return(
      <Html lang="en" >
        <Head ></Head>
        <body>
          <Main />
          <NextScript />
        </body>

      </Html>
    )
  }
}




MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>{
    return originalRenderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    });
  };
  const initailProps = await Document.getInitialProps(ctx);
  return {
    ...initailProps,
    styles:[
      ...React.Children.toArray(initailProps.styles),
      sheets.getStyleElement(),
    ],
  };
};