function _0x4bda(){const _0xce4949=['2NkZANf','exports','20ADSOAz','3964725WfTdcL','join','eaZta','sticker','path','1056298PDRurF','LBAZI','sendMessage','unlinkSync','sticker_author','error','File\x20media\x20tidak\x20ditemukan\x20setelah\x20diunduh.','video','UlLvW','Terjadi\x20kesalahan\x20saat\x20memproses\x20stiker:','7265336yipZeo','⚠️\x20_Kirim/Balas\x20gambar\x20dengan\x20caption\x20*','1870866zselAA','mFyGd','sMtSn','sticker_packname','3239992WYhocy','2833640ddxSQO','stiker','sMmNE','5904630UfwPVU'];_0x4bda=function(){return _0xce4949;};return _0x4bda();}const _0x4be447=_0x26c9;function _0x26c9(_0x29a8da,_0x2ccb05){const _0x4bda00=_0x4bda();return _0x26c9=function(_0x26c979,_0x35f078){_0x26c979=_0x26c979-0x103;let _0x563a24=_0x4bda00[_0x26c979];return _0x563a24;},_0x26c9(_0x29a8da,_0x2ccb05);}(function(_0xac6f89,_0x4889bd){const _0x3c46f1=_0x26c9,_0x244c9d=_0xac6f89();while(!![]){try{const _0x18f422=-parseInt(_0x3c46f1(0x11e))/0x1*(parseInt(_0x3c46f1(0x116))/0x2)+-parseInt(_0x3c46f1(0x119))/0x3+parseInt(_0x3c46f1(0x112))/0x4+-parseInt(_0x3c46f1(0x118))/0x5*(-parseInt(_0x3c46f1(0x10d))/0x6)+-parseInt(_0x3c46f1(0x111))/0x7+parseInt(_0x3c46f1(0x10b))/0x8+parseInt(_0x3c46f1(0x115))/0x9;if(_0x18f422===_0x4889bd)break;else _0x244c9d['push'](_0x244c9d['shift']());}catch(_0x4c45c2){_0x244c9d['push'](_0x244c9d['shift']());}}}(_0x4bda,0xa5cfa));const {downloadQuotedMedia,downloadMedia}=require('@lib/utils'),{sendImageAsSticker}=require('@lib/exif'),config=require('@config'),fs=require('fs'),path=require(_0x4be447(0x11d));async function handle(_0x193314,_0x5ec0ac){const _0x3ffd33=_0x4be447,_0x26fbab={'sMmNE':function(_0x41d300,_0x2124ff){return _0x41d300===_0x2124ff;},'mFyGd':'image','eaZta':function(_0x3d350b,_0x7fea27){return _0x3d350b(_0x7fea27);},'LBAZI':_0x3ffd33(0x107),'sMtSn':function(_0x1a6391,_0x3fbcf0,_0x2c5004,_0x56e8ad,_0x3900e5,_0x376519){return _0x1a6391(_0x3fbcf0,_0x2c5004,_0x56e8ad,_0x3900e5,_0x376519);},'kCxgG':_0x3ffd33(0x10a),'UlLvW':'Maaf,\x20terjadi\x20kesalahan.\x20Coba\x20lagi\x20nanti!'},{remoteJid:_0x1b35f5,message:_0x38d242,type:_0x1fc9bc,isQuoted:_0x167f4a,prefix:_0x488bfa,command:_0x4057e4}=_0x5ec0ac;try{const _0x6fae6=_0x167f4a?_0x167f4a['type']:_0x1fc9bc;if(_0x26fbab[_0x3ffd33(0x114)](_0x6fae6,_0x26fbab[_0x3ffd33(0x10e)])||_0x26fbab[_0x3ffd33(0x114)](_0x6fae6,_0x3ffd33(0x108))){const _0x349f21=_0x167f4a?await downloadQuotedMedia(_0x38d242):await _0x26fbab[_0x3ffd33(0x11b)](downloadMedia,_0x38d242),_0xd71e91=path[_0x3ffd33(0x11a)]('tmp',_0x349f21);if(!fs['existsSync'](_0xd71e91))throw new Error(_0x26fbab[_0x3ffd33(0x11f)]);const _0x101a66=fs['readFileSync'](_0xd71e91),_0x4f4820={'packname':config[_0x3ffd33(0x110)],'author':config[_0x3ffd33(0x105)]};await _0x26fbab[_0x3ffd33(0x10f)](sendImageAsSticker,_0x193314,_0x1b35f5,_0x101a66,_0x4f4820,_0x38d242),fs[_0x3ffd33(0x104)](_0xd71e91);}else await _0x193314[_0x3ffd33(0x103)](_0x1b35f5,{'text':_0x3ffd33(0x10c)+(_0x488bfa+_0x4057e4)+'*_'},{'quoted':_0x38d242});}catch(_0x55b885){console[_0x3ffd33(0x106)](_0x26fbab['kCxgG'],_0x55b885),await _0x193314[_0x3ffd33(0x103)](_0x1b35f5,{'text':_0x26fbab[_0x3ffd33(0x109)]},{'quoted':_0x38d242});}}module[_0x4be447(0x117)]={'handle':handle,'Commands':[_0x4be447(0x11c),_0x4be447(0x113),'s'],'OnlyPremium':![],'OnlyOwner':![]};