import {Centrifuge} from './centrifuge.js';

export default Centrifuge;

import {
  ProtobufEncoder,
  ProtobufDecoder,
  methodType,
  messageType
} from './protobuf';

import {
  JsonEncoder,
  JsonDecoder
} from './json';

class CentrifugeProtobuf extends Centrifuge {

  _setFormat(format) {
    if (format === 'protobuf') {
      this._binary = true;
      this._methodType = methodType;
      this._messageType = messageType;
      this._encoder = new ProtobufEncoder();
      this._decoder = new ProtobufDecoder();
    } else {
      this._encoder = new JsonEncoder();
      this._decoder = new JsonDecoder();
    }
  }
}

export CentrifugeProtobuf;


import Centrifuge from 'centrifuge';
import {CentrifugeProtobuf} from 'centrifuge';
