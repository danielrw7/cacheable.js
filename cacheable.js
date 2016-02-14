function cacheable(fn, callbackArgN) {
  var _this = function cacheable() {
    var args = Array.prototype.slice.call(arguments);
    var callback = args[callbackArgN];
    var argsStr = args.map(JSON.stringify).join(',');
    function resultCallback() {
      return callback.apply(this, _this._cache[argsStr]);
    }
    if (_this._cache[argsStr] !== undefined) {
      return resultCallback();
    } else {
      args[callbackArgN] = function(result) {
        _this._cache[argsStr] = Array.prototype.slice.call(arguments);
        return resultCallback();
      };
      return fn.apply(this, args);
    }
  }
  _this._cache = {};
  return _this;
}
