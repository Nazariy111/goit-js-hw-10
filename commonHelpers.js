import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as a,f}from"./assets/vendor-651d7991.js";a.settings({timeout:3e3,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topCenter",color:"red"});const n=document.querySelector("button"),i=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let r;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),r=t[0];const o=Date.now();r<=o?(a.error({title:"Error",message:"Please choose a date in the future"}),n.classList.remove("isActive"),n.removeEventListener("click",c)):(n.classList.add("isActive"),n.addEventListener("click",c))}};f("#datetime-picker",v);function c(){n.classList.remove("isActive"),setInterval(()=>{const t=Date.now(),o=r-t;if(o>=0){const e=S(o);e.days<10?i.textContent=s(e.days):i.textContent=e.days,h.textContent=s(e.hours),y.textContent=s(e.minutes),p.textContent=s(e.seconds)}},1e3)}function S(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:m}}function s(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map