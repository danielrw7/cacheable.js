function cacheable(fn, callbackArgN) {
  var _this = function cacheable() {
    var args = Array.prototype.slice.call(arguments);
    var callback = args[callbackArgN||0];
    args.splice(callbackArgN||0, 1);
    var argsStr = args.map(JSON.stringify).join(',');
    function resultCallback() {
      return callback.apply(this, _this._cache[argsStr]);
    }
    if (_this._cache[argsStr] !== undefined) {
      return resultCallback();
    } else {
      return fn.apply(this, [function(result) {
        _this._cache[argsStr] = Array.prototype.slice.call(arguments);
        return resultCallback();
      }].concat(args));
    }
  }
  _this._cache = {};
  return _this;
}
