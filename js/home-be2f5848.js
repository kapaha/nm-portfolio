import"./shared-29bf5444.js";function y(e,r,{removeIntervalMs:s=150,removeStartDelayMs:a=1500,wordList:t=["Hello","World"]}={}){if(!e){console.error("Please supply typed element argument.");return}if(!r){console.error("Please supply cursor element argument.");return}let n=null,c=null,i=0,l=t[i];function f(){let u=1;c=setInterval(()=>{if(e.textContent===l){clearInterval(c),d();return}e.textContent=l.slice(0,u),u+=1},s)}async function d(){await new Promise(u=>{r.classList.add("animate-pulse"),setTimeout(u,a)}),r.classList.remove("animate-pulse"),n=setInterval(()=>{if(!e.textContent.length){clearInterval(n),i=i===t.length-1?0:i+1,l=t[i],f();return}e.textContent=e.textContent.slice(0,-1)},s)}return Object.freeze({start:d})}function h(e,r){function s(){e.addEventListener("submit",a=>{a.preventDefault();const t=document.querySelector(".success"),n=document.querySelector(".form-error");if(n.classList.add("hidden"),t.classList.add("hidden"),!r.areValid())return;const i=new FormData(e),l=Object.fromEntries(i),f=JSON.stringify(l);let d=!1;fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:f}).then(u=>{if(u.status===200)d=!0;else throw new Error}).catch(()=>{}).then(function(){if(!d){n.classList.remove("hidden"),setTimeout(()=>{n.classList.add("hidden")},3e3);return}e.reset(),t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("hidden")},3e3)})})}return Object.freeze({init:s})}function p(e,r,s){function a(){return e.value.trim()}function t(){return r.style.display="none",s.every(n=>{const c=n(a());return c?r.style.display="none":r.style.display="block",c})}return Object.freeze({isValid:t,focus:()=>e.focus()})}function g(e){function r(){let s=!0,a=!1;for(const t of e){const n=t.isValid();n||(s=!1),!n&&!a&&(t.focus(),a=!0)}return s}return Object.freeze({areValid:r})}const I=new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),m={required(e){return e!==""},email(e){return I.test(e)}},o={typeEffect:document.querySelector("#type-effect"),typeCursor:document.querySelector("#type-cursor"),contactForm:document.querySelector("#contact-form"),nameInput:document.querySelector("#name"),emailInput:document.querySelector("#email"),messageInput:document.querySelector("#message"),nameError:document.querySelector("#name-error"),emailError:document.querySelector("#email-error"),messageError:document.querySelector("#message-error")};y(o.typeEffect,o.typeCursor,{wordList:["Web Developer","Father","Gamer"]}).start();const S=g([p(o.nameInput,o.nameError,[m.required]),p(o.emailInput,o.emailError,[m.required,m.email]),p(o.messageInput,o.messageError,[m.required])]);h(o.contactForm,S).init();
