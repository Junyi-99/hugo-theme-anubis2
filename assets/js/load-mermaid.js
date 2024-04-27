
/*!
  * Simple-Jekyll-Search
  * Copyright 2015-2020, Christian Fei
  * Licensed under the MIT License.
  */

(function(window){
    'use strict'

      const elementCode = '.mermaid'
      const loadMermaid = function(theme) {
        window.mermaid.initialize({theme})
        window.mermaid.init({theme}, document.querySelectorAll(elementCode))
      }
      const saveOriginalData = function(){
        return new Promise((resolve, reject) => {
          try {
            var els = document.querySelectorAll(elementCode),
                count = els.length;
            els.forEach(element => {
              element.setAttribute('data-original-code', element.innerHTML)
              count--
              if(count == 0){
                resolve()
              }
            });
          } catch (error) {
           reject(error)
          }
        })
      }
      const resetProcessed = function(){
        return new Promise((resolve, reject) => {
          try {
            var els = document.querySelectorAll(elementCode),
                count = els.length;
            els.forEach(element => {
              if(element.getAttribute('data-original-code') != null){
                element.removeAttribute('data-processed')
                element.innerHTML = element.getAttribute('data-original-code')
              }
              count--
              if(count == 0){
                resolve()
              }
            });
          } catch (error) {
           reject(error)
          }
        })
      }

      const init = ()=>{
        saveOriginalData()
        .catch( console.error )
        document.body.addEventListener('dark-theme-set', ()=>{
          resetProcessed()
          .then(loadMermaid('dark'))
          .catch(console.error)
        })
        document.body.addEventListener('light-theme-set', ()=>{
          resetProcessed()
          .then(loadMermaid('default'))
          .catch(console.error)
        })
      }
      window.initMermaid = init
    })(window);
