/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/config/local/local.js
 *  
 *  Include changes and configuration local to your installation
 *  in this file.  For example, common macros can be defined here
 *  (see below).  To use this file, add "local/local.js" to the
 *  config array in MathJax.js or your MathJax.Hub.Config() call.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2015 The MathJax Consortium
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  var TEX = MathJax.InputJax.TeX;
  
  //ENCLOSURES
  TEX.Macro("abs","\\left\\lvert #1\\right\\rvert",1);
  TEX.Macro("ben","\\left[ #1\\right]",1);
  TEX.Macro("cen","\\left\\{ #1\\right\\}",1);
  TEX.Macro("pen","\\left( #1\\right)",1);
  
  //TRIGONOMETRY
  TEX.Macro("sech","{\\mathop{\\rm sech}\\nolimits}");
  TEX.Macro("csch","{\\mathop{\\rm csch}\\nolimits}");
  
  //VECTORS
  TEX.Macro("bvec","\\mathbf{#1}",1);
});

MathJax.Ajax.loadComplete("[MathJax]/config/local/local.js");
