(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{D93H:function(t,e,n){"use strict";n.r(e);var c=n("gkAf");n("UeAh");Object(c.a)({namespace:"off-canvas-menu-toggle",closeOnScroll:!0})},UeAh:function(t,e,n){},gkAf:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var c=n("npdl"),a=n("szxC"),o="undefined"!=typeof window?window:void 0,i=o.document;function r(){var t,e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})||{},n=e.namespace||"toggle",r={};function u(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e||!r[e])return!1;var u=r[e],l=u.control,s=u.target,d=u.keyup,b=u.activate,f=u.deactivate,v=u.evtOptions;delete r[e],Object(a.b)(s,"mouseenter",b,v),Object(a.b)(s,"mouseleave",f,v),Object(a.b)(s,"touchstart",b,v),Object(a.b)(s,"touchend",f,v),Object(a.b)(i,"keyup",d,v),t===e&&(t=null),s.setAttribute("aria-hidden","true"),s.removeAttribute("tabindex"),s.blur(),Object(c.b)('[aria-controls="'.concat(e,'"]')).forEach(function(t){return t.setAttribute("aria-expanded","false")}),o&&function(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}(l)&&l.focus(),Object(a.a)(s,"".concat(n,":close"),{bubbles:!0,cancelable:!0,detail:{control:l}})}function l(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];for(var n in r)n!==t&&u(n,e)}var s="data-".concat(n),d=Object(a.c)(i,"click",function(o){for(var d=o.target;!d.hasAttribute(s)&&d.parentElement&&d!==i.body;)d=d.parentElement;if(d.hasAttribute(s)){var b=d.getAttribute("aria-controls");if(b){var f=i.getElementById(b);f&&(o.preventDefault(),"false"===f.getAttribute("aria-hidden")?u(b):(e.allowMultiple||l(b,!1),function(e,o,l){Object(c.b)('[aria-controls="'.concat(o,'"]')).forEach(function(t){return t.setAttribute("aria-expanded","true")}),l.classList.add("".concat(n,"--ready")),l.setAttribute("aria-hidden","false"),l.setAttribute("tabindex","-1"),setTimeout(function(){l.focus()},0),l.scrollTop=0;var s=r[o]={control:e,target:l,keyup:function(t){27===t.keyCode&&u(o)},activate:function(){t=o},deactivate:function(){t=null},evtOptions:{passive:!0}};Object(a.c)(i,"keyup",s.keyup,s.evtOptions),Object(a.c)(l,"mouseenter",s.activate,s.evtOptions),Object(a.c)(l,"mouseleave",s.deactivate,s.evtOptions),Object(a.c)(l,"touchstart",s.activate,s.evtOptions),Object(a.c)(l,"touchend",s.deactivate,s.evtOptions),Object(a.a)(l,"".concat(n,":open"),{bubbles:!0,cancelable:!0,detail:{control:e}})}(d,b,f)))}else for(;d;){if(!1!==u(d.getAttribute("id"))){o.preventDefault();break}d=d.parentElement}}else t||l()}),b=Object(a.c)(o,"scroll",function(){!t&&e.closeOnScroll&&l()});return{destroy:function(){d(),b(),l()}}}}}]);