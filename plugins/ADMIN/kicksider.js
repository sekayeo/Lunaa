const _0xb158df=_0x2b99;(function(_0x5babab,_0x5ffef6){const _0x163b22=_0x2b99,_0x4100be=_0x5babab();while(!![]){try{const _0xe1b3e7=-parseInt(_0x163b22(0x1ab))/0x1+-parseInt(_0x163b22(0x1a7))/0x2*(-parseInt(_0x163b22(0x198))/0x3)+-parseInt(_0x163b22(0x1a8))/0x4+parseInt(_0x163b22(0x19a))/0x5+parseInt(_0x163b22(0x19b))/0x6+parseInt(_0x163b22(0x1ba))/0x7*(-parseInt(_0x163b22(0x1a5))/0x8)+parseInt(_0x163b22(0x1a3))/0x9*(parseInt(_0x163b22(0x1b2))/0xa);if(_0xe1b3e7===_0x5ffef6)break;else _0x4100be['push'](_0x4100be['shift']());}catch(_0x23f22f){_0x4100be['push'](_0x4100be['shift']());}}}(_0x86a0,0xb6113));const mess=require(_0xb158df(0x1bc)),config=require('@config'),{getActiveUsers}=require(_0xb158df(0x19c)),{sendMessageWithMention}=require(_0xb158df(0x1b7)),{getGroupMetadata}=require(_0xb158df(0x196));let inProccess=![];function _0x86a0(){const _0xcac9db=['25170JZdYpB','5741900VHwaxa','toLowerCase','ptGLM','265097erCbAQ','\x20dari\x20','general','some','_\x20\x0a\x0a_Untuk\x20melanjutkan\x20kick\x20member\x20sider,\x20ketik\x20*.kicksider\x20-y*_','Error\x20handling\x20kick\x20sider\x20command:','entries','10GNtrmN','_Proses\x20pembersihan\x20member\x20sider\x20sedang\x20berlangsung\x20silakan\x20tunggu\x20hingga\x20selesai_','📋\x20_Tidak\x20ada\x20member\x20sider\x20di\x20grup\x20ini._','filter','groupParticipantsUpdate','@lib/utils','_Total\x20Sider\x20*','kGVkd','172613OZQUfA','isAdmin','@mess','uazgQ','length','kicksider','RTqhT','@lib/cache','error','57XTdrFo','sendMessage','589675gMWuxQ','5246202tfPpJL','@lib/users','admin','IXErM','CqfyX','@s.whatsapp.net','phone_number_bot','exports','22696461UQhKiy','_Berhasil\x20mengeluarkan\x20','424eJuiDM','oGust'];_0x86a0=function(){return _0xcac9db;};return _0x86a0();}async function handle(_0x4872a1,_0x2c6f22){const _0xe517ac=_0xb158df,_0x1db4b1={'OgyBR':function(_0x1181c5,_0x4fa95a,_0x1922a7){return _0x1181c5(_0x4fa95a,_0x1922a7);},'ptGLM':function(_0x229758,_0xfa53ca,_0x5c88ea,_0x3056db,_0x2df59e){return _0x229758(_0xfa53ca,_0x5c88ea,_0x3056db,_0x2df59e);},'CqfyX':function(_0x524fed){return _0x524fed();},'oGust':_0xe517ac(0x1b4),'RDmaY':function(_0x34e99b,_0x3baa48){return _0x34e99b===_0x3baa48;},'IXErM':'remove','uazgQ':function(_0x3d6692,_0x5996e5){return _0x3d6692==_0x5996e5;},'RTqhT':_0xe517ac(0x1b0),'kGVkd':'Terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.'},{remoteJid:_0x5edb5f,isGroup:_0x1ae833,message:_0x23de03,sender:_0xefc110,content:_0x3936df}=_0x2c6f22;if(!_0x1ae833)return;try{const _0x198188=await _0x1db4b1['OgyBR'](getGroupMetadata,_0x4872a1,_0x5edb5f),_0x7dbd0d=_0x198188['participants'],_0x1392a7=_0x7dbd0d[_0xe517ac(0x1ae)](_0x47a72a=>_0x47a72a['id']===_0xefc110&&_0x47a72a[_0xe517ac(0x19d)]);if(!_0x1392a7){await _0x4872a1[_0xe517ac(0x199)](_0x5edb5f,{'text':mess[_0xe517ac(0x1ad)][_0xe517ac(0x1bb)]},{'quoted':_0x23de03});return;}if(inProccess){await _0x1db4b1[_0xe517ac(0x1aa)](sendMessageWithMention,_0x4872a1,_0x5edb5f,_0xe517ac(0x1b3),_0x23de03);return;}const _0xa44bf=await _0x1db4b1[_0xe517ac(0x19f)](getActiveUsers);if(_0xa44bf[_0xe517ac(0x1be)]===0x0)return await _0x4872a1[_0xe517ac(0x199)](_0x5edb5f,{'text':_0x1db4b1[_0xe517ac(0x1a6)]},{'quoted':_0x23de03});const _0xee843=_0x7dbd0d[_0xe517ac(0x1b5)](_0x22396b=>!_0xa44bf[_0xe517ac(0x1ae)](_0x1c7405=>_0x1c7405['id']===_0x22396b['id']))['map'](_0x742ba9=>_0x742ba9['id']),_0x13d0e8=_0x7dbd0d[_0xe517ac(0x1b5)](_0x2afeec=>!_0xa44bf[_0xe517ac(0x1ae)](_0x56e016=>_0x56e016['id']===_0x2afeec['id']))[_0xe517ac(0x1be)],_0x1b6cad=_0x13d0e8,_0x2a8e75=_0x7dbd0d[_0xe517ac(0x1be)];if(_0x3936df[_0xe517ac(0x1a9)]()=='-y'){await _0x4872a1['sendMessage'](_0x5edb5f,{'react':{'text':'⏰','key':_0x23de03['key']}}),inProccess=!![];let _0x428c36=0x0,_0x5c0ac7=0x0;for(const [_0x4edfb1,_0x105a09]of _0xee843[_0xe517ac(0x1b1)]()){await new Promise(_0x11b949=>setTimeout(_0x11b949,_0x4edfb1*0xbb8));if(_0x1db4b1['RDmaY'](_0x105a09,config[_0xe517ac(0x1a1)]+_0xe517ac(0x1a0)))continue;try{await _0x4872a1[_0xe517ac(0x1b6)](_0x5edb5f,[_0x105a09],_0x1db4b1[_0xe517ac(0x19e)]),_0x428c36++;}catch(_0x5d2b91){_0x5c0ac7++;}}inProccess=![];_0x1db4b1[_0xe517ac(0x1bd)](_0x428c36,_0x1b6cad)?await sendMessageWithMention(_0x4872a1,_0x5edb5f,'_Berhasil\x20mengeluarkan\x20semua\x20member\x20sider_',_0x23de03):await sendMessageWithMention(_0x4872a1,_0x5edb5f,_0xe517ac(0x1a4)+_0x428c36+_0xe517ac(0x1ac)+_0x2a8e75+'\x20member\x20sider_',_0x23de03);return;}await _0x1db4b1['ptGLM'](sendMessageWithMention,_0x4872a1,_0x5edb5f,_0xe517ac(0x1b8)+_0x1b6cad+'*\x20dari\x20'+_0x2a8e75+_0xe517ac(0x1af),_0x23de03);}catch(_0xf4e8af){return console[_0xe517ac(0x197)](_0x1db4b1[_0xe517ac(0x195)],_0xf4e8af),await _0x4872a1[_0xe517ac(0x199)](_0x5edb5f,{'text':_0x1db4b1[_0xe517ac(0x1b9)]},{'quoted':_0x23de03});}}function _0x2b99(_0x33aa05,_0x2c703f){const _0x86a040=_0x86a0();return _0x2b99=function(_0x2b9954,_0x5bf30c){_0x2b9954=_0x2b9954-0x195;let _0x19be5b=_0x86a040[_0x2b9954];return _0x19be5b;},_0x2b99(_0x33aa05,_0x2c703f);}module[_0xb158df(0x1a2)]={'handle':handle,'Commands':[_0xb158df(0x1bf)],'OnlyPremium':![],'OnlyOwner':![]};