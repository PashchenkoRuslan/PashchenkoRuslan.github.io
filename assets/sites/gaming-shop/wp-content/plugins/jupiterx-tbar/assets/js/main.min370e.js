!function a(n,u,c){function s(t,e){if(!u[t]){if(!n[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(d)return d(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var i=u[t]={exports:{}};n[t][0].call(i.exports,function(e){return s(n[t][1][e]||e)},i,i.exports,a,n,u,c)}return u[t].exports}for(var d="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,t,r){"use strict";jQuery(document).ready(function(n){function r(e,t){for(var r={},o=0;o<e.length;o++){var i="cookie"===t?a(e[o]):u(e[o]);i&&(r[e[o]]=i)}return r}function a(e){for(var t=e+"=",r=document.cookie.split(";"),o=0;o<r.length;o++){for(var i=r[o];" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return null}function u(e){e=e.replace(/[\\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}function o(e,t,r){var o="";if(r){var i=new Date;i.setTime(i.getTime()+24*r*60*60*1e3),o="; expires="+i.toUTCString()}document.cookie=e+"="+(t||"")+o+"; path=/"}!function(){var e=n(".jupiterx-tbar"),t=n(".jupiterx-tbar-parent"),r=e.data("blog-id"),o=window.localStorage.getItem("jupiterx_tbar_hide"),i=window.localStorage.getItem("jupiterx_tbar_hide_blogs")||"[]";try{i=JSON.parse(i)}catch(e){i=[]}{if(0<=i.indexOf(r)&&o)return t.remove();n("body").addClass("active_top_bar"),n("html, body").animate({scrollTop:0},"slow")}}(),function(){var e=["utm_source","utm_campaign","utm_medium","utm_term","utm_content"],a=r(e);if(n.isEmptyObject(a))a=r(e,"cookie");else for(var t in e.forEach(function(e){return function(e){document.cookie=e+"=; Max-Age=-99999999;"}(e)}),a)o(t,a[t]);jQuery(".jupiterx-tbar a[href*='themeforest']").each(function(e,t){var r=n(t),o=r.attr("href");for(var i in a)o+="&"+i+"="+a[i];r.attr("href",o)})}(),0<n(".jupiterx-site-body-border").length&&(n(".jupiterx-tbar").addClass("jupiterx-tbar-border"),n("body").hasClass("active_top_bar")&&n(".jupiterx-site-body-border").addClass("jupiterx-tbar-body-border")),n(".jupiterx-tbar__cta img").click(function(){var e=n(this).closest(".jupiterx-tbar"),t=n(this).closest(".jupiterx-tbar-parent"),r=e.data("blog-id"),o=window.localStorage.getItem("jupiterx_tbar_hide_blogs")||"[]";try{o=JSON.parse(o)}catch(e){o=[]}o.push(r),window.localStorage.setItem("jupiterx_tbar_hide",1),window.localStorage.setItem("jupiterx_tbar_hide_blogs",JSON.stringify(o)),n("body").removeClass("active_top_bar");var i=n(".jupiterx-site").css("padding-top");n("body").hasClass("jupiterx-header-fixed")&&"56px"!==i?n(".jupiterx-site").css("padding-top",n("header").height()):n(".jupiterx-site").css("padding-top","0"),t.remove()})})},{}]},{},[1]);