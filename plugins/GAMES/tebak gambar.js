function _0x2f1c(){const _0x48ac44=['Kesalahan\x20tidak\x20diketahui','TDqfd','@mess','sendMessage','exports','\x0aWaktu\x20:\x20','game','Silahkan\x20Jawab\x20Soal\x20Di\x20Atas\x20Ini\x0a\x0aDeskripsi\x20:\x20','28kzPhuf','WSxSN','1112yLVncT','2272bRUIcL','14075435PvVTIn','6160pqgkVH','tebak','smncP','Maaf,\x20terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.\x20Mohon\x20coba\x20lagi\x20nanti.\x0a\x0a','9AqdPOa','dmsKq','@config','42GkXBYV','Jawaban\x20:\x20','8992952HitNsJ','jawaban','data','178986syHtGA','toLowerCase','@tmpDB/tebak\x20gambar','tGTsT','tebakgambar','isPlaying','2787123CYDcod','8266000QsffcL','gambar'];_0x2f1c=function(){return _0x48ac44;};return _0x2f1c();}const _0x3d6d75=_0x32e3;(function(_0x5724f4,_0x3e004d){const _0x3bd957=_0x32e3,_0xce466b=_0x5724f4();while(!![]){try{const _0xf9ff4b=-parseInt(_0x3bd957(0x19c))/0x1*(parseInt(_0x3bd957(0x19e))/0x2)+parseInt(_0x3bd957(0x191))/0x3+parseInt(_0x3bd957(0x19f))/0x4*(-parseInt(_0x3bd957(0x1a1))/0x5)+parseInt(_0x3bd957(0x18b))/0x6*(-parseInt(_0x3bd957(0x186))/0x7)+parseInt(_0x3bd957(0x188))/0x8*(parseInt(_0x3bd957(0x183))/0x9)+parseInt(_0x3bd957(0x192))/0xa+-parseInt(_0x3bd957(0x1a0))/0xb;if(_0xf9ff4b===_0x3e004d)break;else _0xce466b['push'](_0xce466b['shift']());}catch(_0x531790){_0xce466b['push'](_0xce466b['shift']());}}}(_0x2f1c,0xac535));function _0x32e3(_0x2a633c,_0xe9d66){const _0x2f1c7d=_0x2f1c();return _0x32e3=function(_0x32e378,_0x500405){_0x32e378=_0x32e378-0x183;let _0x5aa2f0=_0x2f1c7d[_0x32e378];return _0x5aa2f0;},_0x32e3(_0x2a633c,_0xe9d66);}const ApiAutoresbot=require('api-autoresbot'),config=require(_0x3d6d75(0x185)),api=new ApiAutoresbot(config['APIKEY']),mess=require(_0x3d6d75(0x196)),{logWithTime}=require('@lib/utils'),WAKTU_GAMES=0x3c,{addUser,removeUser,isUserPlaying}=require(_0x3d6d75(0x18d));async function handle(_0x1100ba,_0x32bc32){const _0x1ef9b9=_0x3d6d75,_0x2c474f={'jnVKm':function(_0x3c9938,_0x384aa1){return _0x3c9938(_0x384aa1);},'tGTsT':_0x1ef9b9(0x193),'dmsKq':'Tebak\x20Gambar','TDqfd':function(_0x5db277,_0x5c6d54,_0x28221a){return _0x5db277(_0x5c6d54,_0x28221a);},'WSxSN':function(_0xcb6c49,_0x428c53){return _0xcb6c49*_0x428c53;},'smncP':_0x1ef9b9(0x194)},{remoteJid:_0x70e813,message:_0x4bba35,fullText:_0x3db019}=_0x32bc32;if(!_0x3db019['includes'](_0x2c474f[_0x1ef9b9(0x18e)]))return!![];try{const _0x35ab72=await api['get']('/api/game/tebakgambar'),_0x5e9f84=_0x35ab72[_0x1ef9b9(0x18a)]['img'],_0x237bf6=_0x35ab72['data'][_0x1ef9b9(0x189)],_0x40268d=_0x35ab72[_0x1ef9b9(0x18a)]['deskripsi'];if(isUserPlaying(_0x70e813))return await _0x1100ba['sendMessage'](_0x70e813,{'text':mess[_0x1ef9b9(0x19a)][_0x1ef9b9(0x190)]},{'quoted':_0x4bba35});addUser(_0x70e813,{'answer':_0x237bf6[_0x1ef9b9(0x18c)](),'hadiah':0xa}),await _0x1100ba[_0x1ef9b9(0x197)](_0x70e813,{'image':{'url':_0x5e9f84},'caption':_0x1ef9b9(0x19b)+_0x40268d+_0x1ef9b9(0x199)+WAKTU_GAMES+'s'},{'quoted':_0x4bba35}),logWithTime(_0x2c474f[_0x1ef9b9(0x184)],_0x1ef9b9(0x187)+_0x237bf6),_0x2c474f[_0x1ef9b9(0x195)](setTimeout,async()=>{const _0x3eaba5=_0x1ef9b9;_0x2c474f['jnVKm'](isUserPlaying,_0x70e813)&&(removeUser(_0x70e813),await _0x1100ba[_0x3eaba5(0x197)](_0x70e813,{'text':'⏳\x20Waktu\x20habis!\x20Jawabannya\x20:\x20'+_0x237bf6},{'quoted':_0x4bba35}));},_0x2c474f[_0x1ef9b9(0x19d)](WAKTU_GAMES,0x3e8));}catch(_0xf171c8){const _0x22882b=_0x1ef9b9(0x1a4)+(_0xf171c8||_0x2c474f[_0x1ef9b9(0x1a3)]);await _0x1100ba[_0x1ef9b9(0x197)](_0x70e813,{'text':_0x22882b},{'quoted':_0x4bba35});}}module[_0x3d6d75(0x198)]={'handle':handle,'Commands':[_0x3d6d75(0x1a2),_0x3d6d75(0x18f)],'OnlyPremium':![],'OnlyOwner':![]};