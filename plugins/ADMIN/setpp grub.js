const _0x40f9ba=_0x2961;(function(_0x117ae3,_0x2fc9ae){const _0x70009f=_0x2961,_0x24c19f=_0x117ae3();while(!![]){try{const _0xab4020=-parseInt(_0x70009f(0x126))/0x1*(-parseInt(_0x70009f(0x132))/0x2)+parseInt(_0x70009f(0x123))/0x3*(-parseInt(_0x70009f(0x120))/0x4)+parseInt(_0x70009f(0x12a))/0x5+-parseInt(_0x70009f(0x135))/0x6*(parseInt(_0x70009f(0x136))/0x7)+parseInt(_0x70009f(0x133))/0x8+-parseInt(_0x70009f(0x122))/0x9+-parseInt(_0x70009f(0x119))/0xa*(-parseInt(_0x70009f(0x13d))/0xb);if(_0xab4020===_0x2fc9ae)break;else _0x24c19f['push'](_0x24c19f['shift']());}catch(_0x1fe515){_0x24c19f['push'](_0x24c19f['shift']());}}}(_0x1d86,0xbee3c));function _0x2961(_0x28957c,_0xfb466a){const _0x1d86db=_0x1d86();return _0x2961=function(_0x2961a8,_0x43f9c0){_0x2961a8=_0x2961a8-0x118;let _0x27b8b2=_0x1d86db[_0x2961a8];return _0x27b8b2;},_0x2961(_0x28957c,_0xfb466a);}const {downloadQuotedMedia,downloadMedia}=require('@lib/utils'),{getGroupMetadata}=require('@lib/cache'),path=require(_0x40f9ba(0x124)),mess=require(_0x40f9ba(0x11c)),mainDir=path[_0x40f9ba(0x137)](require[_0x40f9ba(0x134)][_0x40f9ba(0x121)]);function _0x1d86(){const _0x46fd12=['48HaYkQP','filename','13995324pTuqbl','299451EmbzqC','path','setppgc','416582suwnYV','ZzDEu','setppgrup','admin','2422280zpHNhJ','sendMessage','participants','error','updateProfilePicture','setppgrub','GJXvb','key','2jdDaOJ','6331688fabjEy','main','48IDNKZN','901271ZMITSG','dirname','efYqf','_Berhasil,\x20Foto\x20Profil\x20Grub\x20Telah\x20Di\x20Ganti_','general','setppgroub','./tmp/','1662881AkWTvb','join','⚠️\x20_Kirim/Balas\x20gambar\x20dengan\x20caption\x20*','190JckiIt','Error\x20processing\x20message:','Terjadi\x20kesalahan\x20saat\x20Mengganti\x20Foto\x20Profil\x20Grub.\x20Pastikan\x20bot\x20adalah\x20admin','@mess','some','setppgroup','imageMessage'];_0x1d86=function(){return _0x46fd12;};return _0x1d86();}async function handle(_0x327690,_0x2f61fe){const _0x29bcc1=_0x40f9ba,_0x1bc582={'ZzDEu':function(_0x562b94,_0x2f20ad){return _0x562b94===_0x2f20ad;},'efYqf':_0x29bcc1(0x13c),'GJXvb':function(_0x35ea4e,_0x10624c){return _0x35ea4e+_0x10624c;},'hKWIc':_0x29bcc1(0x11a)},{remoteJid:_0x402648,isGroup:_0x68e380,message:_0x343d1a,type:_0x9c7c50,isQuoted:_0x5651e7,prefix:_0x94fe62,command:_0x25e108,sender:_0x40f380}=_0x2f61fe;if(!_0x68e380)return;try{const _0x86f099=await getGroupMetadata(_0x327690,_0x402648),_0x24f0eb=_0x86f099[_0x29bcc1(0x12c)],_0x5eb312=_0x24f0eb[_0x29bcc1(0x11d)](_0x459f78=>_0x459f78['id']===_0x40f380&&_0x459f78[_0x29bcc1(0x129)]);if(!_0x5eb312){await _0x327690[_0x29bcc1(0x12b)](_0x402648,{'text':mess[_0x29bcc1(0x13a)]['isAdmin']},{'quoted':_0x343d1a});return;}await _0x327690[_0x29bcc1(0x12b)](_0x402648,{'react':{'text':'⏰','key':_0x343d1a[_0x29bcc1(0x131)]}});const _0x2d218c=_0x5651e7?await downloadQuotedMedia(_0x343d1a):await downloadMedia(_0x343d1a),_0xd4b6bf=_0x5651e7?_0x5651e7['type']+'Message':_0x9c7c50+'Message';if(_0x2d218c&&_0x1bc582[_0x29bcc1(0x127)](_0xd4b6bf,_0x29bcc1(0x11f))){const _0x494600=_0x86f099['id'],_0xc15a0=path[_0x29bcc1(0x13e)](mainDir,_0x1bc582[_0x29bcc1(0x138)],_0x2d218c);return await _0x327690[_0x29bcc1(0x12e)](_0x494600,{'url':_0xc15a0}),await _0x327690[_0x29bcc1(0x12b)](_0x402648,{'text':_0x29bcc1(0x139)},{'quoted':_0x343d1a});}return await _0x327690[_0x29bcc1(0x12b)](_0x402648,{'text':_0x29bcc1(0x118)+_0x1bc582[_0x29bcc1(0x130)](_0x94fe62,_0x25e108)+'*_'},{'quoted':_0x343d1a});}catch(_0x1c2fdb){console[_0x29bcc1(0x12d)](_0x1bc582['hKWIc'],_0x1c2fdb),await _0x327690[_0x29bcc1(0x12b)](_0x402648,{'text':_0x29bcc1(0x11b)});}}module['exports']={'handle':handle,'Commands':[_0x40f9ba(0x125),_0x40f9ba(0x13b),_0x40f9ba(0x12f),_0x40f9ba(0x11e),_0x40f9ba(0x128)],'OnlyPremium':![],'OnlyOwner':![]};