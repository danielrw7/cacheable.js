function cacheable(fn, callbackArgN) {
  function toArr(args) {
    return Array.prototype.slice.call(args);
  }
  var _this = function cacheable() {
    var args = toArr(arguments);
    var callback = args[callbackArgN];
    var key = args.map(JSON.stringify).join(',');
    function resultCallback() {
      return callback.apply(this, _this._cache[key]);
    }
    if (_this._cache[key] !== undefined) {
      return resultCallback();
    } else {
      args[callbackArgN] = function(result) {
        _this._cache[key] = toArr(arguments);
        return resultCallback();
      };
      return fn.apply(this, args);
    }
  }
  _this._cache = {};
  return _this;
}
