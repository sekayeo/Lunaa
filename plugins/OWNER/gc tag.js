const _0x53fc7a=_0x49e6;(function(_0x2bc3dd,_0x20418b){const _0x125229=_0x49e6,_0xddc594=_0x2bc3dd();while(!![]){try{const _0x217cff=parseInt(_0x125229(0xdc))/0x1+parseInt(_0x125229(0xdd))/0x2+-parseInt(_0x125229(0xe2))/0x3*(-parseInt(_0x125229(0xe7))/0x4)+-parseInt(_0x125229(0xee))/0x5+-parseInt(_0x125229(0xe3))/0x6+parseInt(_0x125229(0xed))/0x7+parseInt(_0x125229(0xfb))/0x8*(-parseInt(_0x125229(0xea))/0x9);if(_0x217cff===_0x20418b)break;else _0xddc594['push'](_0xddc594['shift']());}catch(_0x5328f9){_0xddc594['push'](_0xddc594['shift']());}}}(_0x128b,0xdb63e));function _0x49e6(_0x7a251e,_0x567051){const _0x128bb2=_0x128b();return _0x49e6=function(_0x49e65c,_0x3bcfcc){_0x49e65c=_0x49e65c-0xd6;let _0x45882c=_0x128bb2[_0x49e65c];return _0x45882c;},_0x49e6(_0x7a251e,_0x567051);}function _0x128b(){const _0x5ecc55=['Message','JzxsS','@lib/cache','⚠️\x20Terjadi\x20kesalahan\x20saat\x20memproses\x20perintah.','\x201234567889@g.us\x20|\x20Pesan\x20yang\x20ingin\x20dikirim','split','1017243DsaHKe','3177114mgIqrp','sendMessage','IAnCa','participants','imageMessage','9YuqlAX','4951062BdstYt','join','Masukkan\x20ID\x20Group\x20dengan\x20format\x20yang\x20benar.\x0a\x0aContoh:\x0a','type','418952ShOpfk','key','⚠️\x20ID\x20Group\x20tidak\x20valid\x20atau\x20grup\x20tidak\x20ditemukan.','9SjAsqu','map','cdZhW','6816663dUeBCN','250955owbkaw','catch','OatMT','@lib/utils','tmp','RmcyQ','trim','Terjadi\x20kesalahan:','path','readFileSync','UMrjh','UoqxR','LYsCk','16958664Cmupwa'];_0x128b=function(){return _0x5ecc55;};return _0x128b();}const {getGroupMetadata}=require(_0x53fc7a(0xd8)),{downloadQuotedMedia,downloadMedia}=require(_0x53fc7a(0xf1)),fs=require('fs'),path=require(_0x53fc7a(0xf6));async function handle(_0x3ca803,_0x184195){const _0x1da0c6=_0x53fc7a,_0x1f7676={'JzxsS':function(_0x3e02de,_0x51b7d9){return _0x3e02de===_0x51b7d9;},'UoqxR':function(_0x3f8734,_0xa411b2,_0x48453a,_0x12bdf4,_0x379987,_0x1c6c5a){return _0x3f8734(_0xa411b2,_0x48453a,_0x12bdf4,_0x379987,_0x1c6c5a);},'UMrjh':function(_0x27c468,_0x28df2c,_0x32faf5){return _0x27c468(_0x28df2c,_0x32faf5);},'LYsCk':function(_0x2175c1,_0x5361aa){return _0x2175c1==_0x5361aa;},'lRHDT':function(_0xcb2af7,_0x2cf8a3){return _0xcb2af7(_0x2cf8a3);},'gCENY':function(_0xe1bbf,_0x598699){return _0xe1bbf(_0x598699);},'OatMT':_0x1da0c6(0xf2),'cdZhW':'File\x20media\x20tidak\x20ditemukan\x20setelah\x20diunduh.','RmcyQ':_0x1da0c6(0xf5)},{remoteJid:_0x1f04f3,message:_0x384764,content:_0x550904,sender:_0x482880,prefix:_0x5b2523,command:_0x4d191d,isQuoted:_0x5ba9aa,type:_0xcf087}=_0x184195;try{if(!_0x550904||_0x1f7676[_0x1da0c6(0xd7)](_0x550904[_0x1da0c6(0xf4)](),''))return _0x1f7676[_0x1da0c6(0xf9)](sendErrorMessage,_0x3ca803,_0x1f04f3,_0x384764,_0x5b2523,_0x4d191d);const [_0x2df357,_0x33a9ea]=_0x550904['trim']()[_0x1da0c6(0xdb)]('|')[_0x1da0c6(0xeb)](_0x33b91e=>_0x33b91e[_0x1da0c6(0xf4)]());if(!_0x2df357||!_0x33a9ea)return _0x1f7676[_0x1da0c6(0xf9)](sendErrorMessage,_0x3ca803,_0x1f04f3,_0x384764,_0x5b2523,_0x4d191d);await _0x3ca803[_0x1da0c6(0xde)](_0x1f04f3,{'react':{'text':'⏰','key':_0x384764[_0x1da0c6(0xe8)]}});const _0x4d0608=await _0x1f7676[_0x1da0c6(0xf8)](getGroupMetadata,_0x3ca803,_0x2df357)[_0x1da0c6(0xef)](()=>null);if(!_0x4d0608)return await _0x3ca803[_0x1da0c6(0xde)](_0x1f04f3,{'text':_0x1da0c6(0xe9)},{'quoted':_0x384764});const _0x129cd0=_0x4d0608[_0x1da0c6(0xe0)],_0x1765a6=_0x5ba9aa?_0x5ba9aa[_0x1da0c6(0xe6)]+_0x1da0c6(0xd6):_0xcf087+_0x1da0c6(0xd6);if(_0x1f7676[_0x1da0c6(0xfa)](_0x1765a6,_0x1da0c6(0xe1))){const _0x4dadc8=_0x5ba9aa?await _0x1f7676['lRHDT'](downloadQuotedMedia,_0x384764):await _0x1f7676['gCENY'](downloadMedia,_0x384764),_0x8bcf67=path[_0x1da0c6(0xe4)](_0x1f7676[_0x1da0c6(0xf0)],_0x4dadc8);if(!fs['existsSync'](_0x8bcf67))throw new Error(_0x1f7676[_0x1da0c6(0xec)]);const _0x4f9dba=fs[_0x1da0c6(0xf7)](_0x8bcf67);await _0x3ca803[_0x1da0c6(0xde)](_0x1f04f3,{'image':_0x4f9dba,'caption':_0x33a9ea,'mentions':_0x129cd0[_0x1da0c6(0xeb)](_0x14cf65=>_0x14cf65['id'])});return;}else await _0x3ca803['sendMessage'](_0x2df357,{'text':_0x33a9ea,'mentions':_0x129cd0[_0x1da0c6(0xeb)](_0x43f60d=>_0x43f60d['id'])});}catch(_0x188bc3){console['error'](_0x1f7676[_0x1da0c6(0xf3)],_0x188bc3),await _0x3ca803[_0x1da0c6(0xde)](_0x1f04f3,{'text':_0x1da0c6(0xd9)},{'quoted':_0x384764});}}function sendErrorMessage(_0x4148c1,_0x13d74e,_0x367195,_0x3b5a62,_0x15b60f){const _0x457fd6=_0x53fc7a,_0x581709={'IAnCa':function(_0x5481f1,_0x458065){return _0x5481f1+_0x458065;}};return _0x4148c1[_0x457fd6(0xde)](_0x13d74e,{'text':_0x457fd6(0xe5)+_0x581709[_0x457fd6(0xdf)](_0x3b5a62,_0x15b60f)+_0x457fd6(0xda)},{'quoted':_0x367195});}module['exports']={'handle':handle,'Commands':['gctag'],'OnlyPremium':![],'OnlyOwner':!![]};