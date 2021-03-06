// Generated by IcedCoffeeScript 108.0.11
(function() {
  var Encryption, K, P3SKB, Signature;

  K = require('../../const').kb;

  P3SKB = require('./p3skb').P3SKB;

  Signature = require('./signature').Signature;

  Encryption = require('./encryption').Encryption;

  exports.alloc = function(_arg) {
    var body, err, ret, tag;
    tag = _arg.tag, body = _arg.body;
    ret = err = null;
    ret = (function() {
      switch (tag) {
        case K.packet_tags.p3skb:
          return P3SKB.alloc({
            tag: tag,
            body: body
          });
        case K.packet_tags.signature:
          return Signature.alloc({
            tag: tag,
            body: body
          });
        case K.packet_tags.encryption:
          return Encryption.alloc({
            tag: tag,
            body: body
          });
        default:
          err = new Error("unknown packet tag: " + tag);
          return null;
      }
    })();
    return [err, ret];
  };

}).call(this);
