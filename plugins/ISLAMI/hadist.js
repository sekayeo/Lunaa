function _0xc34e(){const _0x2ae45c=['📖\x20*','exports','indo','Maaf,\x20terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.\x20Coba\x20lagi\x20nanti.\x0a\x0aDetail\x20Kesalahan:\x20','hadis','sendMessage','802CigSjV','key','APIKEY','60AsEQdX','2609UpQglI','832846mApyPB','data','api-autoresbot','89226nCPHIh','hadist','hxIwZ','Error\x20saat\x20memanggil\x20API\x20hadits:','get','🔸\x20*Terjemahan:*\x0a','auKjg','2002761gtTvbD','5001469vPGNMO','judul','8CzCHpH','message','*\x0a\x0a','warn','1915832QrMjsd','error','🔹\x20*Arab:*\x0a','arab','40TwyAbV','3202344RuBZCC'];_0xc34e=function(){return _0x2ae45c;};return _0xc34e();}function _0x2cee(_0x173b26,_0x3a7695){const _0xc34ef0=_0xc34e();return _0x2cee=function(_0x2cee5e,_0x194cae){_0x2cee5e=_0x2cee5e-0x15f;let _0x3663d2=_0xc34ef0[_0x2cee5e];return _0x3663d2;},_0x2cee(_0x173b26,_0x3a7695);}const _0xf68f69=_0x2cee;(function(_0x54d70f,_0x31378a){const _0x39d887=_0x2cee,_0x24c278=_0x54d70f();while(!![]){try{const _0x3b8e04=parseInt(_0x39d887(0x163))/0x1*(-parseInt(_0x39d887(0x15f))/0x2)+parseInt(_0x39d887(0x16e))/0x3+-parseInt(_0x39d887(0x175))/0x4+-parseInt(_0x39d887(0x162))/0x5*(parseInt(_0x39d887(0x167))/0x6)+parseInt(_0x39d887(0x164))/0x7+-parseInt(_0x39d887(0x171))/0x8*(parseInt(_0x39d887(0x17a))/0x9)+-parseInt(_0x39d887(0x179))/0xa*(-parseInt(_0x39d887(0x16f))/0xb);if(_0x3b8e04===_0x31378a)break;else _0x24c278['push'](_0x24c278['shift']());}catch(_0x1c600a){_0x24c278['push'](_0x24c278['shift']());}}}(_0xc34e,0x85436));const ApiAutoresbot=require(_0xf68f69(0x166)),config=require('@config');async function handle(_0x327398,_0x11940c){const _0x5f3308=_0xf68f69,_0x4ffd6c={'hxIwZ':function(_0x36c346,_0x79688){return _0x36c346+_0x79688;},'auKjg':'Respons\x20API\x20tidak\x20sesuai:','ZpbOp':'Maaf,\x20tidak\x20ada\x20data\x20hadits\x20yang\x20tersedia\x20saat\x20ini.\x20Coba\x20lagi\x20nanti.'},{remoteJid:_0x28db22,message:_0x1ead87}=_0x11940c;try{await _0x327398[_0x5f3308(0x180)](_0x28db22,{'react':{'text':'⏰','key':_0x1ead87[_0x5f3308(0x160)]}});const _0x3688a4=new ApiAutoresbot(config[_0x5f3308(0x161)]),_0x51e4f4=await _0x3688a4[_0x5f3308(0x16b)]('/api/hadits');if(_0x51e4f4?.[_0x5f3308(0x165)]&&_0x51e4f4[_0x5f3308(0x165)][_0x5f3308(0x170)]&&_0x51e4f4[_0x5f3308(0x165)][_0x5f3308(0x178)]&&_0x51e4f4['data'][_0x5f3308(0x17d)]){const _0x49f130=_0x4ffd6c['hxIwZ'](_0x4ffd6c[_0x5f3308(0x169)](_0x5f3308(0x17b)+_0x51e4f4['data'][_0x5f3308(0x170)]+_0x5f3308(0x173),_0x5f3308(0x177)+_0x51e4f4[_0x5f3308(0x165)][_0x5f3308(0x178)]+'\x0a\x0a'),_0x5f3308(0x16c)+_0x51e4f4['data']['indo']);await _0x327398[_0x5f3308(0x180)](_0x28db22,{'text':_0x49f130},{'quoted':_0x1ead87});}else{console[_0x5f3308(0x174)](_0x4ffd6c[_0x5f3308(0x16d)],_0x51e4f4?.[_0x5f3308(0x165)]);const _0x1894d1=_0x4ffd6c['ZpbOp'];await _0x327398[_0x5f3308(0x180)](_0x28db22,{'text':_0x1894d1},{'quoted':_0x1ead87});}}catch(_0x419f93){console[_0x5f3308(0x176)](_0x5f3308(0x16a),_0x419f93);const _0x3cd945=_0x5f3308(0x17e)+_0x419f93[_0x5f3308(0x172)];await _0x327398[_0x5f3308(0x180)](_0x28db22,{'text':_0x3cd945},{'quoted':_0x1ead87});}}module[_0xf68f69(0x17c)]={'handle':handle,'Commands':[_0xf68f69(0x17f),_0xf68f69(0x168),'hadits'],'OnlyPremium':![],'OnlyOwner':![]};