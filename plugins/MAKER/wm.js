const _0x44f57e=_0x3f51;(function(_0x2b975e,_0x103898){const _0x16ef7a=_0x3f51,_0x108e98=_0x2b975e();while(!![]){try{const _0x3b221e=parseInt(_0x16ef7a(0x7d))/0x1+-parseInt(_0x16ef7a(0xa5))/0x2*(-parseInt(_0x16ef7a(0x97))/0x3)+-parseInt(_0x16ef7a(0x92))/0x4*(parseInt(_0x16ef7a(0x82))/0x5)+-parseInt(_0x16ef7a(0x94))/0x6*(-parseInt(_0x16ef7a(0x8c))/0x7)+parseInt(_0x16ef7a(0x7b))/0x8*(-parseInt(_0x16ef7a(0xa3))/0x9)+parseInt(_0x16ef7a(0x8d))/0xa*(parseInt(_0x16ef7a(0x99))/0xb)+-parseInt(_0x16ef7a(0x95))/0xc*(parseInt(_0x16ef7a(0x88))/0xd);if(_0x3b221e===_0x103898)break;else _0x108e98['push'](_0x108e98['shift']());}catch(_0x4e7fbb){_0x108e98['push'](_0x108e98['shift']());}}}(_0x5e88,0xcc395));const ApiAutoresbot=require(_0x44f57e(0x9f)),config=require(_0x44f57e(0x9a)),{writeExifImg,sendImageAsSticker}=require(_0x44f57e(0x8e)),{downloadQuotedMedia,downloadMedia}=require(_0x44f57e(0x8b)),path=require(_0x44f57e(0xa1)),fs=require('fs'),sharp=require('sharp');function _0x3f51(_0x3f4d9d,_0x1f2094){const _0x5e88b3=_0x5e88();return _0x3f51=function(_0x3f51f7,_0x12217a){_0x3f51f7=_0x3f51f7-0x76;let _0x510243=_0x5e88b3[_0x3f51f7];return _0x510243;},_0x3f51(_0x3f4d9d,_0x1f2094);}async function sendError(_0x545e0a,_0x273e6d,_0x19556a,_0x3a6f2a){const _0x2024a9=_0x44f57e;await _0x545e0a[_0x2024a9(0x9c)](_0x273e6d,{'text':_0x3a6f2a},{'quoted':_0x19556a});}async function handle(_0x4b4c83,_0x597169){const _0x69076=_0x44f57e,_0x3bb375={'tZYxk':_0x69076(0x86),'UZfCv':_0x69076(0x83),'ublFC':function(_0x33af50,_0x5a5c96,_0x1bb9cc,_0x22fcc6,_0xa445e4){return _0x33af50(_0x5a5c96,_0x1bb9cc,_0x22fcc6,_0xa445e4);},'fywNr':function(_0x16289b,_0x1705b2){return _0x16289b+_0x1705b2;},'ubnmL':function(_0x487848,_0x2ddae1,_0x3de03d,_0x1bf172,_0x3334f4){return _0x487848(_0x2ddae1,_0x3de03d,_0x1bf172,_0x3334f4);},'OWTHd':function(_0xeed8c1,_0x46ad85){return _0xeed8c1(_0x46ad85);},'PJKYl':function(_0x56b235,_0x1c06ef){return _0x56b235(_0x1c06ef);},'ivSQh':function(_0xed59cc,_0x37c430,_0x4fc2a1,_0x2964c2,_0x2f8b88){return _0xed59cc(_0x37c430,_0x4fc2a1,_0x2964c2,_0x2f8b88);},'JamWR':function(_0x69574a,_0x53ba4b,_0x396670,_0x539928,_0x1564d3,_0x37e214,_0x41a9d1){return _0x69574a(_0x53ba4b,_0x396670,_0x539928,_0x1564d3,_0x37e214,_0x41a9d1);}},{remoteJid:_0x5d3415,message:_0x13c598,content:_0x380c12,prefix:_0x3b8048,command:_0x212542,isQuoted:_0x5cace1,type:_0x1b4578}=_0x597169,_0x3e3f78=_0x5cace1?_0x5cace1[_0x69076(0x96)]:_0x1b4578;try{const [_0x1b6868='',_0xf34c4f='']=_0x380c12['split']('|')[_0x69076(0x93)](_0x35d2f0=>_0x35d2f0[_0x69076(0x91)]());if(![_0x3bb375[_0x69076(0x8a)],_0x3bb375[_0x69076(0x7e)]]['includes'](_0x3e3f78))return _0x3bb375[_0x69076(0x98)](sendError,_0x4b4c83,_0x5d3415,_0x13c598,_0x69076(0x76)+_0x3bb375[_0x69076(0xa6)](_0x3b8048,_0x212542)+'*_');if(!_0x380c12[_0x69076(0x91)]())return _0x3bb375[_0x69076(0x7c)](sendError,_0x4b4c83,_0x5d3415,_0x13c598,'_Contoh:\x20*wm\x20az\x20creative*_\x0a\x0a_Contoh\x201:\x20wm\x20nama_\x0a_Contoh\x202:\x20wm\x20youtube\x20|\x20creative_');const _0x475d18=_0x69076(0xa0)+(_0x5cace1?await _0x3bb375[_0x69076(0x8f)](downloadQuotedMedia,_0x13c598):await _0x3bb375[_0x69076(0x85)](downloadMedia,_0x13c598));if(!fs[_0x69076(0x90)](_0x475d18))throw new Error(_0x69076(0x7f));const _0x1190ad=fs[_0x69076(0x9d)](_0x475d18),_0x12cce1=await _0x3bb375['ivSQh'](processMedia,_0x1190ad,_0x3e3f78,_0x1b6868,_0xf34c4f);await _0x3bb375[_0x69076(0x78)](sendSticker,_0x4b4c83,_0x5d3415,_0x12cce1,_0x1b6868,_0xf34c4f,_0x13c598);}catch(_0x401b82){await _0x3bb375[_0x69076(0xa4)](sendError,_0x4b4c83,_0x5d3415,_0x13c598,_0x69076(0xa2)+_0x401b82[_0x69076(0x87)]);}}async function processMedia(_0x599743,_0x48d57f,_0x483f0a,_0x95233){const _0x40e44a=_0x44f57e,_0x5765f1={'IYdsM':function(_0x80a6c5,_0x354752){return _0x80a6c5===_0x354752;},'jPbbq':'sticker','ddJXM':_0x40e44a(0x9e)};if(_0x5765f1[_0x40e44a(0x9b)](_0x48d57f,_0x5765f1[_0x40e44a(0x7a)]))return _0x599743;else{if(_0x5765f1[_0x40e44a(0x9b)](_0x48d57f,'image')){const _0x22bcdf=await writeExifImg(_0x599743,{'packname':_0x483f0a,'author':_0x95233});return fs[_0x40e44a(0x9d)](_0x22bcdf);}}throw new Error(_0x5765f1['ddJXM']);}async function sendSticker(_0x1c538f,_0xd2ab51,_0x445ae0,_0x46618c,_0x26a2c1,_0x3a80c0){const _0xfa954=_0x44f57e,_0x44aa4c={'OYftg':function(_0x1e9857,_0x539661,_0x69fc93,_0x393e5e,_0x1f36dc,_0x1d8957){return _0x1e9857(_0x539661,_0x69fc93,_0x393e5e,_0x1f36dc,_0x1d8957);}};try{await _0x44aa4c[_0xfa954(0x77)](sendImageAsSticker,_0x1c538f,_0xd2ab51,_0x445ae0,{'packname':_0x46618c,'author':_0x26a2c1},_0x3a80c0);}catch{const _0xbd10a3=await sharp(_0x445ae0)[_0xfa954(0x79)]()[_0xfa954(0x84)]();await _0x44aa4c[_0xfa954(0x77)](sendImageAsSticker,_0x1c538f,_0xd2ab51,_0xbd10a3,{'packname':config[_0xfa954(0x81)],'author':config[_0xfa954(0x89)]},_0x3a80c0);}}function _0x5e88(){const _0x477fb7=['33QPTFSH','@config','IYdsM','sendMessage','readFileSync','Gagal\x20memproses\x20media\x20menjadi\x20sticker.','api-autoresbot','./tmp/','path','Maaf,\x20terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.\x20Coba\x20lagi\x20nanti.\x0a\x0aError:\x20','63xzMtIk','ivSQh','15548QPYtby','fywNr','⚠️\x20_Kirim/Balas\x20gambar/stiker\x20dengan\x20caption\x20*','OYftg','JamWR','webp','jPbbq','274936XrGMvL','ubnmL','1108471RFFSEy','UZfCv','File\x20media\x20tidak\x20ditemukan\x20setelah\x20diunduh.','exports','sticker_packname','200xZOdQT','sticker','toBuffer','PJKYl','image','message','13DaRBLD','sticker_author','tZYxk','@lib/utils','7qbZeSk','1729450YTrvvq','@lib/exif','OWTHd','existsSync','trim','73772gfeQAB','map','3959880bVJCpP','11173944rtXoSE','type','177KkIKvf','ublFC'];_0x5e88=function(){return _0x477fb7;};return _0x5e88();}module[_0x44f57e(0x80)]={'handle':handle,'Commands':['wm'],'OnlyPremium':![],'OnlyOwner':![]};