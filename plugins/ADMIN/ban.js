const _0xf3a78c=_0x318b;function _0x33eb(){const _0x62466d=['16lKYnzT','60RfUamO','isAdmin','30504XFVBmg','log','admin','❌\x20_Tidak\x20dapat\x20ban\x20nomor_\x20@','_⚠️\x20Format\x20Penggunaan:_\x20\x0a\x0a_💬\x20Contoh:_\x20_*','split','exports','general','12xrKfHP','454PIyhWx','EVNjW','some','✅\x20@','173367SanMHN','189130IcdMEd','1909215FSMDzY','@lib/group','sendMessage','QsWkN','422601TrwJCL','2134ucnfEN','5020PDFoto','participants','xmNir','481MkHKuM','\x20_Berhasil\x20di\x20ban\x20untuk\x20grub\x20ini_','@lib/cache','RtcRr'];_0x33eb=function(){return _0x62466d;};return _0x33eb();}(function(_0x1d0b77,_0x401792){const _0x316bf1=_0x318b,_0x361049=_0x1d0b77();while(!![]){try{const _0x5c8fd0=-parseInt(_0x316bf1(0xaa))/0x1*(-parseInt(_0x316bf1(0x9b))/0x2)+parseInt(_0x316bf1(0xa5))/0x3*(parseInt(_0x316bf1(0x9a))/0x4)+parseInt(_0x316bf1(0xa0))/0x5*(-parseInt(_0x316bf1(0x90))/0x6)+parseInt(_0x316bf1(0xa1))/0x7+-parseInt(_0x316bf1(0x8f))/0x8*(-parseInt(_0x316bf1(0x9f))/0x9)+-parseInt(_0x316bf1(0xa7))/0xa*(parseInt(_0x316bf1(0xa6))/0xb)+parseInt(_0x316bf1(0x92))/0xc;if(_0x5c8fd0===_0x401792)break;else _0x361049['push'](_0x361049['shift']());}catch(_0x4e1e0c){_0x361049['push'](_0x361049['shift']());}}}(_0x33eb,0x5a521));function _0x318b(_0x1e64ef,_0xcde803){const _0x33eb3a=_0x33eb();return _0x318b=function(_0x318be2,_0xf55f11){_0x318be2=_0x318be2-0x8e;let _0x2f2ae1=_0x33eb3a[_0x318be2];return _0x2f2ae1;},_0x318b(_0x1e64ef,_0xcde803);}const mess=require('@mess'),{addUserBlock}=require(_0xf3a78c(0xa2)),{getGroupMetadata}=require(_0xf3a78c(0xac)),{sendMessageWithMention,determineUser}=require('@lib/utils');async function handle(_0x1a1417,_0x5803d3){const _0x219d6a=_0xf3a78c,_0x2a9485={'RtcRr':function(_0x224d1f,_0x33caa6,_0x24166b){return _0x224d1f(_0x33caa6,_0x24166b);},'EVNjW':function(_0x1d7a4b,_0x3c16e8,_0x31eb0a,_0x254184){return _0x1d7a4b(_0x3c16e8,_0x31eb0a,_0x254184);},'xmNir':function(_0x556474,_0x1a81ff){return _0x556474+_0x1a81ff;},'QsWkN':function(_0x1ca299,_0xae1c75,_0x25b16f){return _0x1ca299(_0xae1c75,_0x25b16f);},'zxRMr':function(_0x35c224,_0x303dfd,_0x6ab336,_0x12a465,_0x50e801){return _0x35c224(_0x303dfd,_0x6ab336,_0x12a465,_0x50e801);}},{remoteJid:_0x34c171,isGroup:_0x3df1a5,message:_0x36c433,sender:_0x424f37,isQuoted:_0x261638,content:_0x34e543,prefix:_0xb33d4e,command:_0x5e9b3a,mentionedJid:_0x443f30}=_0x5803d3;if(!_0x3df1a5)return;const _0x2d31cd=await _0x2a9485[_0x219d6a(0x8e)](getGroupMetadata,_0x1a1417,_0x34c171),_0x316388=_0x2d31cd[_0x219d6a(0xa8)],_0x567755=_0x316388[_0x219d6a(0x9d)](_0x49ff78=>_0x49ff78['id']===_0x424f37&&_0x49ff78[_0x219d6a(0x94)]);if(!_0x567755){await _0x1a1417[_0x219d6a(0xa3)](_0x34c171,{'text':mess[_0x219d6a(0x99)][_0x219d6a(0x91)]},{'quoted':_0x36c433});return;}const _0x2bf8b9=_0x2a9485[_0x219d6a(0x9c)](determineUser,_0x443f30,_0x261638,_0x34e543);if(!_0x2bf8b9)return await _0x1a1417[_0x219d6a(0xa3)](_0x34c171,{'text':_0x219d6a(0x96)+_0x2a9485[_0x219d6a(0xa9)](_0xb33d4e,_0x5e9b3a)+'\x206285246154386*_'},{'quoted':_0x36c433});const _0x27092c=_0x2bf8b9;try{await _0x2a9485[_0x219d6a(0xa4)](addUserBlock,_0x34c171,_0x27092c),await sendMessageWithMention(_0x1a1417,_0x34c171,_0x219d6a(0x9e)+_0x27092c['split']('@')[0x0]+_0x219d6a(0xab),_0x36c433);}catch(_0x35061f){console[_0x219d6a(0x93)](_0x35061f),await _0x2a9485['zxRMr'](sendMessageWithMention,_0x1a1417,_0x34c171,_0x219d6a(0x95)+_0x27092c[_0x219d6a(0x97)]('@')[0x0],_0x36c433);}}module[_0xf3a78c(0x98)]={'handle':handle,'Commands':['ban'],'OnlyPremium':![],'OnlyOwner':![]};