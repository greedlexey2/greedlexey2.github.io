import{r as e}from"./rolldown-runtime-C60lm6uB.js";import{i as t,n,r}from"./framework-BgSIrAUN.js";import{r as i}from"./index-b233Dpia.js";var a=e(r(),1),o=new Set([`title`,`meta`,`link`,`style`,`script`,`base`,`noscript`]);Array.from(o).join(`, `);var s={script:/<\/(script)/gi,style:/<\/(style)/gi};function c(e,t){let n=s[t];return n?e.replace(n,`<\\/$1`):e}var l=typeof a.createContext==`function`?a.createContext(void 0):null;function u(e){return!e||typeof a.useContext!=`function`?function(){}:function(){return a.useContext(e)}}var d=u(l);function f(){return d()}var p=a.createContext(null);function m(){return a.useContext(p)}var h=e(n(),1),g=new Set,_=new Map;function v(){if(typeof document>`u`)return;let e=document.querySelector(`[nonce]`);if(e)return typeof HTMLElement<`u`&&e instanceof HTMLElement?e.nonce||e.getAttribute(`nonce`)||void 0:e.getAttribute(`nonce`)||void 0}function y(e,t){return typeof e==`string`&&e.length>0?e:typeof t==`string`&&t.length>0?t:v()}function b(e){if(!e||e.length===0||typeof document>`u`)return;if(typeof h.preinit==`function`){for(let t of e)h.preinit(t,{as:`style`});return}let t=document.head;if(t)for(let n of e){let e=document.createElement(`link`);e.rel=`stylesheet`,e.type=`text/css`,e.href=n,t.appendChild(e)}}function x(e){let t={...e.rest};return e.src&&(t.src=e.src),e.id&&(t.id=e.id),e.resolvedNonce&&(t.nonce=e.resolvedNonce),e.dangerouslySetInnerHTML&&(t.dangerouslySetInnerHTML={__html:c(S(e.dangerouslySetInnerHTML.__html),`script`)}),t}function S(e){return String(e)}function C(e,t){if(t&&S(t.__html).length>0)return S(t.__html);if(typeof e==`string`&&e.length>0)return e;if(Array.isArray(e)&&e.every(e=>typeof e==`string`)){let t=e.join(``);return t.length>0?t:null}return null}function w(e,t,n){let r=n!==!1&&n!==`false`&&!!n;switch(t){case`async`:e.async=r;break;case`defer`:e.defer=r;break;case`noModule`:case`nomodule`:e.noModule=r;break;default:return!1}return r||(e.setAttribute(t,``),e.removeAttribute(t)),!0}function T(e,t){for(let[n,r]of Object.entries(t))n!==`dangerouslySetInnerHTML`&&r!==void 0&&(w(e,n,r)||(n===`className`&&typeof r==`string`?e.setAttribute(`class`,r):typeof r==`string`?e.setAttribute(n,r):typeof r==`boolean`&&r&&e.setAttribute(n,``)))}function E(e,t){let{src:n,id:r,onLoad:i,onReady:a,onError:o,strategy:s=`afterInteractive`,children:c,dangerouslySetInnerHTML:l,stylesheets:u,...d}=e;b(u);let f=r??n??``;if(f&&g.has(f)){t.fireReadyWhenAlreadyLoaded&&a?.();return}if(n){let e=_.get(n);if(e){e.then(e=>{f&&g.add(f),i?.(e),a?.()},e=>o?.(e));return}}let p=document.createElement(`script`);n&&(p.src=n),r&&(p.id=r),T(p,d),t.resolvedNonce&&!p.getAttribute(`nonce`)&&p.setAttribute(`nonce`,t.resolvedNonce),s===`worker`&&p.setAttribute(`type`,`text/partytown`);let m=()=>{f&&g.add(f),a?.()};if(l?.__html)p.innerHTML=S(l.__html),m();else if(c&&typeof c==`string`)p.textContent=c,m();else if(n){let e=new Promise((e,t)=>{p.addEventListener(`load`,t=>{e(t),f&&g.add(f),i?.(t),a?.()}),p.addEventListener(`error`,e=>{t(e),o?.(e)})});e.catch(()=>void 0).finally(()=>_.delete(n)),_.set(n,e)}document.body.appendChild(p)}function D(e){let{src:t,id:n,strategy:r=`afterInteractive`,onLoad:o,onReady:s,onError:c,children:l,dangerouslySetInnerHTML:u,stylesheets:d,...p}=e,h=(0,a.useRef)(!1),_=n??t??``,v=f(),S=y(p.nonce,v);if(m(),(0,a.useEffect)(()=>{if(h.current)return;if(h.current=!0,r===`beforeInteractive`){b(d);return}if(_&&g.has(_)){b(d),s?.();return}let e=()=>{if(_&&g.has(_)){s?.();return}E({src:t,id:n,strategy:r,onLoad:o,onReady:s,onError:c,children:l,dangerouslySetInnerHTML:u,stylesheets:d,...p},{resolvedNonce:S,fireReadyWhenAlreadyLoaded:!0})};r===`lazyOnload`?document.readyState===`complete`?typeof requestIdleCallback==`function`?requestIdleCallback(e):setTimeout(e,1):window.addEventListener(`load`,()=>{typeof requestIdleCallback==`function`?requestIdleCallback(e):setTimeout(e,1)}):e()},[t,n,r,o,s,c,l,u,d,_,S,p]),r===`beforeInteractive`){let e=t?null:C(l,u);return(t||e!==null)&&i()?null:a.createElement(`script`,x({src:t,id:n,rest:p,resolvedNonce:S,dangerouslySetInnerHTML:u}),l)}return null}var O=t(),k=111447587;function A(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(D,{id:`yandex-metrika`,strategy:`afterInteractive`,children:`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${k}','ym');

          ym(${k}, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: 'dataLayer',
            referrer: document.referrer,
            url: location.href,
            accurateTrackBounce: true,
            trackLinks: true
          });
        `}),(0,O.jsx)(D,{id:`messenger-click-goal`,strategy:`afterInteractive`,children:`
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
              window.ym(${k}, 'reachGoal', 'messenger_click', { messenger: messenger });
            }
          });
        `}),(0,O.jsx)(`noscript`,{children:(0,O.jsx)(`div`,{children:(0,O.jsx)(`img`,{src:`https://mc.yandex.ru/watch/${k}`,style:{position:`absolute`,left:`-9999px`},alt:``})})})]})}export{A as default};