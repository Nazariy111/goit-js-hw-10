import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as a,f as F}from"./assets/vendor-651d7991.js";a.settings({timeout:3e3,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topCenter",color:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",iconColor:"#FFFFFF"});const n=document.querySelector("button"),i=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");let r;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),r=t[0];const o=Date.now();r<=o?(a.error({title:"Error",message:"Please choose a date in the future"}),n.classList.remove("isActive"),n.removeEventListener("click",c)):(n.classList.add("isActive"),n.addEventListener("click",c))}};F("#datetime-picker",p);function c(){n.classList.remove("isActive"),setInterval(()=>{const t=Date.now(),o=r-t;if(o>=0){const e=v(o);e.days<10?i.textContent=s(e.days):i.textContent=e.days,f.textContent=s(e.hours),h.textContent=s(e.minutes),y.textContent=s(e.seconds)}},1e3)}function v(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:m}}function s(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map