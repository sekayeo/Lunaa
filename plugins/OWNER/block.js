const _0x240dff=_0x120f;(function(_0x18a117,_0x1ea15a){const _0x2e7095=_0x120f,_0x4add1d=_0x18a117();while(!![]){try{const _0x159c74=-parseInt(_0x2e7095(0x1a7))/0x1+-parseInt(_0x2e7095(0x189))/0x2*(-parseInt(_0x2e7095(0x193))/0x3)+-parseInt(_0x2e7095(0x18a))/0x4*(parseInt(_0x2e7095(0x19a))/0x5)+-parseInt(_0x2e7095(0x199))/0x6*(-parseInt(_0x2e7095(0x1a3))/0x7)+parseInt(_0x2e7095(0x195))/0x8+parseInt(_0x2e7095(0x1ab))/0x9+parseInt(_0x2e7095(0x196))/0xa*(parseInt(_0x2e7095(0x1ad))/0xb);if(_0x159c74===_0x1ea15a)break;else _0x4add1d['push'](_0x4add1d['shift']());}catch(_0x1201eb){_0x4add1d['push'](_0x4add1d['shift']());}}}(_0x184c,0x1b360));function _0x184c(){const _0x1fa1b4=['\x20628xxx*_\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a_Fitur\x20*block*\x20akan\x20membuat\x20user\x20tidak\x20dapat\x20menggunakan\x20bot\x20di\x20semua\x20grub\x20dan\x20chat\x20pribadi_\x0a\x0a_gunakan\x20fitur\x20*ban*\x20untuk\x20memblokir\x20user\x20di\x20grub\x20ini\x20saja_','CHhtM','@lib/utils','block','endsWith','_⚠️\x20Nomor\x20','error','1239QgZNJl','_⚠️\x20Info:\x20Nomor\x20yang\x20telah\x20diblokir\x20tidak\x20dapat\x20menggunakan\x20semua\x20fitur\x20bot\x20hingga\x20proses\x20pembukaan\x20blokir\x20dilakukan\x20melalui\x20perintah\x20*','_✅\x20Nomor\x20','IetkN','140911CVzTOz','_Pastikan\x20nomor\x20yang\x20dimasukkan\x20benar\x20dan\x20terdaftar\x20dalam\x20database._','@s.whatsapp.net','HhIeH','1221723CJGCTh','test','11nFXNDG','Lkrss','trim','\x20tidak\x20ditemukan\x20di\x20database._\x0a\x0a','224bhrIrG','44xqxdps','Error\x20handling\x20command:','replace','exports','zlCUf','_⚠️\x20Format\x20Penggunaan:_\x20\x0a\x0a_💬\x20Contoh:_\x20_*','unblock*._','\x20628xxx*_','XqWSm','816GVaJKZ','vnDeC','13640CQBobA','2295050dvgkgV','updateBlockStatus','_Terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan.\x20Silakan\x20coba\x20lagi\x20nanti._','18WZsrXW','66175QjRsSq','@lib/users'];_0x184c=function(){return _0x1fa1b4;};return _0x184c();}function _0x120f(_0x47046e,_0x5daf76){const _0x184cfd=_0x184c();return _0x120f=function(_0x120fcc,_0x2b0569){_0x120fcc=_0x120fcc-0x187;let _0x287cb3=_0x184cfd[_0x120fcc];return _0x287cb3;},_0x120f(_0x47046e,_0x5daf76);}const {reply}=require(_0x240dff(0x19e)),{findUser,updateUser}=require(_0x240dff(0x19b));async function handle(_0x535b32,_0x2852e5){const _0x552486=_0x240dff,_0x105de1={'vnDeC':function(_0x1fc4b7,_0x5e29bf,_0x5c568f){return _0x1fc4b7(_0x5e29bf,_0x5c568f);},'IetkN':function(_0x59f0fa,_0x1b8271){return _0x59f0fa+_0x1b8271;},'CHhtM':'@s.whatsapp.net','XqWSm':function(_0x1517f6,_0x32e2d3){return _0x1517f6(_0x32e2d3);},'HhIeH':function(_0x4f0793,_0x5032b8,_0x533bb5){return _0x4f0793(_0x5032b8,_0x533bb5);},'zlCUf':_0x552486(0x19f),'Lkrss':function(_0x587827,_0x5c32ba){return _0x587827+_0x5c32ba;},'MCwQg':_0x552486(0x18b)},{m:_0x12ed09,prefix:_0x1eb173,command:_0x42754f,content:_0x3e1362,mentionedJid:_0x185614}=_0x2852e5;try{if(!_0x3e1362||!_0x3e1362[_0x552486(0x187)]())return await _0x105de1[_0x552486(0x194)](reply,_0x12ed09,_0x552486(0x18f)+_0x105de1[_0x552486(0x1a6)](_0x1eb173,_0x42754f)+_0x552486(0x19c));let _0x1b0bed=(_0x185614?.[0x0]||_0x3e1362)[_0x552486(0x18c)](/\D/g,'');const _0x54ff55=_0x1b0bed;if(!/^\d{10,15}$/[_0x552486(0x1ac)](_0x1b0bed))return await _0x105de1['vnDeC'](reply,_0x12ed09,'_Nomor\x20tidak\x20valid.\x20Pastikan\x20formatnya\x20benar_\x0a\x0a_Contoh:\x20*'+_0x105de1[_0x552486(0x1a6)](_0x1eb173,_0x42754f)+_0x552486(0x191));!_0x1b0bed[_0x552486(0x1a0)](_0x552486(0x1a9))&&(_0x1b0bed+=_0x105de1[_0x552486(0x19d)]);const _0x494d8b=await _0x105de1[_0x552486(0x192)](findUser,_0x1b0bed);if(!_0x494d8b)return await _0x105de1['HhIeH'](reply,_0x12ed09,_0x105de1[_0x552486(0x1a6)](_0x552486(0x1a1)+_0x54ff55+_0x552486(0x188),_0x552486(0x1a8)));return await _0x105de1[_0x552486(0x1aa)](updateUser,_0x1b0bed,{'status':_0x105de1[_0x552486(0x18e)]}),await _0x535b32[_0x552486(0x197)](_0x1b0bed,_0x105de1['zlCUf']),await _0x105de1[_0x552486(0x194)](reply,_0x12ed09,_0x105de1[_0x552486(0x1ae)](_0x552486(0x1a5)+_0x54ff55+'\x20berhasil\x20diblokir!_\x0a\x0a',_0x552486(0x1a4)+_0x1eb173+_0x552486(0x190)));}catch(_0x72c6fe){return console[_0x552486(0x1a2)](_0x105de1['MCwQg'],_0x72c6fe),await reply(_0x12ed09,_0x552486(0x198));}}module[_0x240dff(0x18d)]={'handle':handle,'Commands':[_0x240dff(0x19f)],'OnlyPremium':![],'OnlyOwner':!![]};