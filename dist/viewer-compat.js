/*!
* Photo Sphere Viewer 4.4.3
* @copyright 2014-2015 Jérémy Heleine
* @copyright 2015-2022 Damien "Mistic" Sorel
* @licence MIT (https://opensource.org/licenses/MIT)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.PhotoSphereViewer = global.PhotoSphereViewer || {}, global.PhotoSphereViewer.ViewerCompat = factory()));
})(this, (function () { 'use strict';

  var ViewerCompat = function ViewerCompat() {
    throw new Error('PhotoSphereViewer#ViewerCompat has been removed, please migrate to v4 Viewer.');
  };

  return ViewerCompat;

}));
//# sourceMappingURL=viewer-compat.js.map
