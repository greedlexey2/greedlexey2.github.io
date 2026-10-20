import{i as e}from"./framework-BgSIrAUN.js";import{t}from"./script-BtUA7sFh.js";var n=e(),r=111447587;function i(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{id:`yandex-metrika`,strategy:`afterInteractive`,children:`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${r}','ym');

          ym(${r}, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: 'dataLayer',
            referrer: document.referrer,
            url: location.href,
            accurateTrackBounce: true,
            trackLinks: true
          });
        `}),(0,n.jsx)(t,{id:`messenger-click-goal`,strategy:`afterInteractive`,children:`
          document.addEventListener('click', function(event) {
            var link = event.target.closest('a');
            if (!link) return;

            var href = link.getAttribute('href') || '';
            var messenger = href.indexOf('t.me/') !== -1
              ? 'telegram'
              : href.indexOf('wa.me/') !== -1
                ? 'whatsapp'
                : null;

            if (messenger && typeof window.ym === 'function') {
              window.ym(${r}, 'reachGoal', 'messenger_click', { messenger: messenger });
            }
          });
        `}),(0,n.jsx)(`noscript`,{children:(0,n.jsx)(`div`,{children:(0,n.jsx)(`img`,{src:`https://mc.yandex.ru/watch/${r}`,style:{position:`absolute`,left:`-9999px`},alt:``})})})]})}export{i as default};