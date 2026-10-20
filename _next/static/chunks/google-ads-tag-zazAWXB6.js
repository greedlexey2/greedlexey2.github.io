import{i as e}from"./framework-BgSIrAUN.js";import{t}from"./script-BtUA7sFh.js";var n=e(),r=`AW-18524455256`;function i(){return(0,n.jsx)(t,{id:`google-ads-tag`,strategy:`afterInteractive`,children:`
        (function () {
          if (window.googleAdsTagInitialized) return;
          window.googleAdsTagInitialized = true;

          window.dataLayer = window.dataLayer || [];
          window.gtag = function () { window.dataLayer.push(arguments); };
          window.gtag('js', new Date());
          window.gtag('config', '${r}');

          var script = document.createElement('script');
          script.async = true;
          script.src = 'https://www.googletagmanager.com/gtag/js?id=${r}';
          document.head.appendChild(script);
        })();
      `})}export{i as default};