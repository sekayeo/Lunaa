const _0x5a8b8c=_0x17fe;function _0x3d2d(){const _0x53c4fc=['88iKBYmK','eYwwL','settemplatewelcome','participants','⚠️\x20_Input\x20tidak\x20valid!_\x0a\x0a_Hanya\x20diperbolehkan\x20angka\x20dari\x20*1*\x20sampai\x20*5*._','18QRtZiF','templatewelcome','GFrJA','1026xPgYks','✅\x20_Template\x20Welcome\x20Berhasil\x20Diatur_','isAdmin','2090424HTyhHW','⚠️\x20*Format\x20Penggunaan:*\x0a\x0a💬\x20*Contoh:*\x20\x0a_','989105XeaHAw','983575gjHAWA','\x202_\x0a\x0a_Hanya\x20tersedia\x20*1\x20sampai\x205*_\x0a_atau\x20*text*_\x0a\x0a_Untuk\x20melihat\x20gambar\x20welcome\x20silakan\x20ketik\x20*.teswelcome*_','@lib/cache','@lib/participants','190BhgAge','311048ibyUkd','sendMessage','test','65256eXGojw','admin','gcQbP','88341RIWCqa','19167UVJIzP','trim'];_0x3d2d=function(){return _0x53c4fc;};return _0x3d2d();}(function(_0x4d9c6f,_0x5bcb7b){const _0x49b67d=_0x17fe,_0x46106b=_0x4d9c6f();while(!![]){try{const _0x2522e8=parseInt(_0x49b67d(0x1f4))/0x1+parseInt(_0x49b67d(0x1e6))/0x2*(-parseInt(_0x49b67d(0x1e4))/0x3)+parseInt(_0x49b67d(0x1dd))/0x4+-parseInt(_0x49b67d(0x1f3))/0x5*(parseInt(_0x49b67d(0x1eb))/0x6)+-parseInt(_0x49b67d(0x1f1))/0x7+-parseInt(_0x49b67d(0x1e0))/0x8*(-parseInt(_0x49b67d(0x1ee))/0x9)+parseInt(_0x49b67d(0x1dc))/0xa*(-parseInt(_0x49b67d(0x1e3))/0xb);if(_0x2522e8===_0x5bcb7b)break;else _0x46106b['push'](_0x46106b['shift']());}catch(_0x247a4e){_0x46106b['push'](_0x46106b['shift']());}}}(_0x3d2d,0xa275b));const {setTemplateWelcome}=require(_0x5a8b8c(0x1db)),{getGroupMetadata}=require(_0x5a8b8c(0x1da)),mess=require('@mess');async function handle(_0x24393c,_0x5a4d83){const _0x378ebb=_0x5a8b8c,_0x25e7e1={'gcQbP':function(_0x3416c3,_0x42d7d0){return _0x3416c3==_0x42d7d0;},'GFrJA':'text','eYwwL':function(_0x452473,_0x5e4161,_0x33f5e6){return _0x452473(_0x5e4161,_0x33f5e6);}},{remoteJid:_0x552941,isGroup:_0x5b1a23,message:_0xf2961c,content:_0x42cc7e,sender:_0x279e82,command:_0x1e86ad,prefix:_0x42cad9}=_0x5a4d83;if(!_0x5b1a23)return;const _0x5896ad=await getGroupMetadata(_0x24393c,_0x552941),_0x69dd3c=_0x5896ad[_0x378ebb(0x1e9)],_0x42411c=_0x69dd3c['some'](_0x118994=>_0x118994['id']===_0x279e82&&_0x118994[_0x378ebb(0x1e1)]);if(!_0x42411c){await _0x24393c[_0x378ebb(0x1de)](_0x552941,{'text':mess['general'][_0x378ebb(0x1f0)]},{'quoted':_0xf2961c});return;}if(!_0x42cc7e||!_0x42cc7e[_0x378ebb(0x1e5)]()){const _0x33b4c6=_0x378ebb(0x1f2)+_0x42cad9+_0x1e86ad+_0x378ebb(0x1d9);await _0x24393c['sendMessage'](_0x552941,{'text':_0x33b4c6},{'quoted':_0xf2961c});return;}if(_0x25e7e1[_0x378ebb(0x1e2)](_0x42cc7e,_0x25e7e1[_0x378ebb(0x1ed)])){await setTemplateWelcome(_0x552941,_0x42cc7e);const _0x2653b1=_0x378ebb(0x1ef);await _0x24393c['sendMessage'](_0x552941,{'text':_0x2653b1},{'quoted':_0xf2961c});return;}const _0xe35a9e=/^[1-5]$/;if(!_0xe35a9e[_0x378ebb(0x1df)](_0x42cc7e[_0x378ebb(0x1e5)]())){const _0x373512=_0x378ebb(0x1ea);await _0x24393c[_0x378ebb(0x1de)](_0x552941,{'text':_0x373512},{'quoted':_0xf2961c});return;}await _0x25e7e1[_0x378ebb(0x1e7)](setTemplateWelcome,_0x552941,_0x42cc7e);const _0x467f58=_0x378ebb(0x1ef);await _0x24393c[_0x378ebb(0x1de)](_0x552941,{'text':_0x467f58},{'quoted':_0xf2961c});}function _0x17fe(_0x5b006d,_0x38a46b){const _0x3d2d25=_0x3d2d();return _0x17fe=function(_0x17fe71,_0x2b8ecd){_0x17fe71=_0x17fe71-0x1d9;let _0x1db97=_0x3d2d25[_0x17fe71];return _0x1db97;},_0x17fe(_0x5b006d,_0x38a46b);}module['exports']={'handle':handle,'Commands':[_0x5a8b8c(0x1e8),_0x5a8b8c(0x1ec)],'OnlyPremium':![],'OnlyOwner':![]};