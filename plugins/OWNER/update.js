const _0x42d3e2=_0x5ca0;function _0x5ca0(_0x35c124,_0x32d707){const _0x424d12=_0x424d();return _0x5ca0=function(_0x5ca0e0,_0x1bfc41){_0x5ca0e0=_0x5ca0e0-0x92;let _0x24ca58=_0x424d12[_0x5ca0e0];return _0x24ca58;},_0x5ca0(_0x35c124,_0x32d707);}(function(_0x3bfef3,_0x55800c){const _0xa89385=_0x5ca0,_0xf5fd18=_0x3bfef3();while(!![]){try{const _0x4b14ef=-parseInt(_0xa89385(0xc7))/0x1+parseInt(_0xa89385(0xdd))/0x2*(parseInt(_0xa89385(0x94))/0x3)+parseInt(_0xa89385(0xa6))/0x4+-parseInt(_0xa89385(0xde))/0x5*(-parseInt(_0xa89385(0x92))/0x6)+-parseInt(_0xa89385(0xb8))/0x7+parseInt(_0xa89385(0xd5))/0x8*(parseInt(_0xa89385(0xd1))/0x9)+-parseInt(_0xa89385(0x9f))/0xa;if(_0x4b14ef===_0x55800c)break;else _0xf5fd18['push'](_0xf5fd18['shift']());}catch(_0x1ce019){_0xf5fd18['push'](_0xf5fd18['shift']());}}}(_0x424d,0x5c8df));const fs=require('fs'),fsp=require('fs')['promises'],path=require('path'),axios=require(_0x42d3e2(0xad)),unzipper=require(_0x42d3e2(0xd8)),fse=require(_0x42d3e2(0xac)),config=require(_0x42d3e2(0xc3));async function handle(_0x224191,_0x440fe9){const _0x2d044a=_0x42d3e2,_0x1fb186={'eSONy':_0x2d044a(0xc2),'MembH':_0x2d044a(0xb5),'jnPdN':_0x2d044a(0xd0),'XpsJD':function(_0x31f0cc,_0x181641){return _0x31f0cc===_0x181641;},'oZYxx':_0x2d044a(0xb9),'hvZyu':_0x2d044a(0xcf),'ahShJ':function(_0x28b750,_0x36c216){return _0x28b750==_0x36c216;},'yucel':_0x2d044a(0xa2),'NhTAn':function(_0x5ca212,_0x469571){return _0x5ca212-_0x469571;},'JSBhM':_0x2d044a(0xb0),'Jlhhi':_0x2d044a(0x9d),'baiUv':_0x2d044a(0xb6),'zjsbp':_0x2d044a(0x9a),'LwXre':_0x2d044a(0xd9)},{remoteJid:_0x31f5d7,message:_0x17c88c,content:_0x299c7b}=_0x440fe9;async function _0x5075f8(){const _0x1efff8=_0x2d044a;try{const _0x8b5874=await fsp['readFile'](process[_0x1efff8(0xa7)]()+_0x1efff8(0xcb),_0x1fb186[_0x1efff8(0xc4)]);return _0x8b5874[_0x1efff8(0x9b)](0x0,0xc8)[_0x1efff8(0xdf)](_0x1fb186['MembH']);}catch(_0x1506dd){return console['error'](_0x1fb186[_0x1efff8(0xaf)],_0x1506dd),!0x1;}}const _0x155067=await _0x5075f8(),_0x4f7ff6=_0x155067?_0x1fb186[_0x2d044a(0xa8)]:'';await _0x224191[_0x2d044a(0xce)](_0x31f5d7,{'react':{'text':'⏰','key':_0x17c88c[_0x2d044a(0xc1)]}});try{const _0x42bf04=global['version'],_0x2b37af='https://api.autoresbot.com/api/updates/resbot?apikey='+config[_0x2d044a(0xa0)]+_0x2d044a(0x9c)+_0x42bf04+_0x2d044a(0xc5)+_0x4f7ff6;let _0x1510ad;try{const _0x271a96=await axios[_0x2d044a(0xc8)](_0x2b37af);_0x1510ad=_0x271a96[_0x2d044a(0xb1)];}catch(_0x58d9a1){let _0x16dc17=_0x2d044a(0xc9);_0x58d9a1[_0x2d044a(0xaa)]&&(_0x58d9a1['response'][_0x2d044a(0xb1)]['message']&&(_0x16dc17=_0x58d9a1[_0x2d044a(0xaa)][_0x2d044a(0xb1)]['message']));await _0x224191[_0x2d044a(0xce)](_0x31f5d7,{'text':_0x16dc17},{'quoted':_0x17c88c});return;}if(_0x1510ad['status']&&_0x1510ad['updates'][_0x2d044a(0xa4)]===0x0){const _0x2be1ca='⚠️\x20_Script\x20sudah\x20menggunakan\x20versi\x20terbaru._\x0a\x0a_Version\x20:\x20'+global[_0x2d044a(0xbd)]+'_';await _0x224191['sendMessage'](_0x31f5d7,{'text':_0x2be1ca},{'quoted':_0x17c88c});return;}let _0x3245f2;try{if(_0x1fb186['ahShJ'](_0x299c7b[_0x2d044a(0xbb)](),'-y')){const _0x286c01=_0x2d044a(0xca)+config['APIKEY']+'&version='+_0x42bf04+_0x2d044a(0xc6);_0x3245f2=await axios[_0x2d044a(0xc8)](_0x286c01,{'responseType':_0x1fb186[_0x2d044a(0xb7)]});}else{const _0x212a7a=_0x1510ad[_0x2d044a(0x9d)][_0x1510ad['updates'][_0x2d044a(0xa4)]-0x1]['version'],_0x492665=_0x1510ad[_0x2d044a(0x9d)][_0x1fb186[_0x2d044a(0xdc)](_0x1510ad[_0x2d044a(0x9d)]['length'],0x1)][_0x2d044a(0x97)];let _0x378320='✅\x20_Update\x20Tersedia_\x0a\x0a_Versi\x20Saat\x20Ini_\x20:\x20'+global[_0x2d044a(0xbd)]+_0x2d044a(0xcc)+_0x212a7a+_0x2d044a(0xda);_0x1510ad['updates'][0x0][_0x2d044a(0xb9)][_0x2d044a(0xbc)]((_0x28ad4e,_0x1b61af)=>{const _0x5c3bc7=_0x2d044a;_0x378320+='-\x20'+_0x28ad4e[_0x5c3bc7(0xa9)]+'\x0a';}),_0x378320+=_0x2d044a(0xa1)+_0x492665+_0x2d044a(0xb2),await _0x224191[_0x2d044a(0xce)](_0x31f5d7,{'text':_0x378320},{'quoted':_0x17c88c});return;}}catch(_0x4ea4b6){const _0x203e6c='⚠️\x20_Gagal\x20mengunduh\x20file\x20pembaruan.\x20Silakan\x20coba\x20lagi\x20nanti._';await _0x224191[_0x2d044a(0xce)](_0x31f5d7,{'text':_0x203e6c},{'quoted':_0x17c88c}),console[_0x2d044a(0xd7)]('Error\x20downloading\x20update\x20ZIP:',_0x4ea4b6[_0x2d044a(0xd3)]);return;}if(!_0x3245f2)return;const _0x5929fa=path[_0x2d044a(0xa3)](process[_0x2d044a(0xa7)](),_0x1fb186[_0x2d044a(0x95)]);fs[_0x2d044a(0xdb)](_0x5929fa,_0x3245f2['data']);const _0x78c780=path[_0x2d044a(0xa3)](process[_0x2d044a(0xa7)](),_0x1fb186[_0x2d044a(0x99)]);fs[_0x2d044a(0x98)](_0x78c780,{'recursive':!![]});try{await fs['createReadStream'](_0x5929fa)[_0x2d044a(0xbe)](unzipper[_0x2d044a(0x93)]({'path':_0x78c780}))[_0x2d044a(0x96)]();}catch(_0x3c6cb5){const _0x496da8=_0x2d044a(0xcd);await _0x224191[_0x2d044a(0xce)](_0x31f5d7,{'text':_0x496da8},{'quoted':_0x17c88c}),console[_0x2d044a(0xd7)](_0x1fb186[_0x2d044a(0xb3)],_0x3c6cb5[_0x2d044a(0xd3)]);return;}fs[_0x2d044a(0xbf)](_0x5929fa);const _0x347291=path['join'](process[_0x2d044a(0xa7)](),_0x2d044a(0x9d));let _0x5418c8;try{_0x5418c8=fs['readdirSync'](_0x347291);}catch(_0x13881c){const _0x31d4c4='⚠️\x20_Gagal\x20membaca\x20file\x20pembaruan.\x20Silakan\x20coba\x20lagi\x20nanti._';await _0x224191[_0x2d044a(0xce)](_0x31f5d7,{'text':_0x31d4c4},{'quoted':_0x17c88c}),console[_0x2d044a(0xd7)](_0x1fb186[_0x2d044a(0xa5)],_0x13881c[_0x2d044a(0xd3)]);return;}_0x5418c8[_0x2d044a(0xbc)](_0x830ee1=>{const _0x5a6779=_0x2d044a,_0x550348=path['join'](_0x347291,_0x830ee1);if(fs[_0x5a6779(0xd2)](_0x550348)['isDirectory']()){if(_0x1fb186['XpsJD'](_0x830ee1,_0x1fb186[_0x5a6779(0xba)])){const _0xbdd90c=fs[_0x5a6779(0xc0)](_0x550348);_0xbdd90c[_0x5a6779(0xbc)](_0x41032b=>{const _0x33ef68=_0x5a6779,_0x530462=path[_0x33ef68(0xa3)](_0x550348,_0x41032b);if(fs[_0x33ef68(0xd2)](_0x530462)['isDirectory']()){const _0x433eab=fs[_0x33ef68(0xc0)](_0x530462);_0x433eab[_0x33ef68(0xbc)](_0x1e3777=>{const _0x3358ec=_0x33ef68,_0x3e203d=path[_0x3358ec(0xa3)](_0x530462,_0x1e3777),_0x5abdc6=path[_0x3358ec(0xa3)](process['cwd'](),_0x41032b,_0x1e3777);fs[_0x3358ec(0x98)](path[_0x3358ec(0xae)](_0x5abdc6),{'recursive':!![]}),fse['copySync'](_0x3e203d,_0x5abdc6,{'overwrite':!![]});});}else{const _0x353e94=path['join'](process['cwd'](),_0x41032b);fs['mkdirSync'](path[_0x33ef68(0xae)](_0x353e94),{'recursive':!![]}),fse['copySync'](_0x530462,_0x353e94,{'overwrite':!![]});}});}return;}const _0x101f72=path[_0x5a6779(0xa3)](process[_0x5a6779(0xa7)](),_0x830ee1);fs['mkdirSync'](path[_0x5a6779(0xae)](_0x101f72),{'recursive':!![]}),fse['copySync'](_0x550348,_0x101f72,{'overwrite':!![]});});try{fse['removeSync'](_0x78c780);}catch(_0x496f9b){console[_0x2d044a(0xd7)](_0x1fb186[_0x2d044a(0xd6)],_0x496f9b['message']);}const _0x262e80=_0x2d044a(0x9e);await _0x224191[_0x2d044a(0xce)](_0x31f5d7,{'text':_0x262e80},{'quoted':_0x17c88c});}catch(_0xd8fbd6){const _0x3e52a5=_0x2d044a(0xab);await _0x224191['sendMessage'](_0x31f5d7,{'text':_0x3e52a5},{'quoted':_0x17c88c}),console[_0x2d044a(0xd7)](_0x2d044a(0xb4),_0xd8fbd6[_0x2d044a(0xd3)]);}}module['exports']={'handle':handle,'Commands':[_0x42d3e2(0xd4)],'OnlyPremium':![],'OnlyOwner':!![]};function _0x424d(){const _0x2812fc=['JSBhM','promise','noted','mkdirSync','Jlhhi','Error\x20reading\x20update\x20files:','slice','&version=','updates','✅\x20_Pembaruan\x20berhasil\x20dilakukan!_\x20\x0a\x0a_Silakan\x20restart\x20server\x20anda\x20atau\x20bisa\x20mengetik\x20*.restart*_','7967180dKpnAR','APIKEY','\x0a_Catatan\x20Update_\x20:\x20','arraybuffer','join','length','zjsbp','2638712MCjvSm','cwd','hvZyu','name','response','❌\x20_Gagal\x20memperbarui\x20script.\x20Silakan\x20coba\x20lagi\x20nanti._','fs-extra','axios','dirname','jnPdN','updates.zip','data','\x0a\x0a_Untuk\x20memperbarui\x20script\x20ketik\x20*.update\x20-y*_','baiUv','Unexpected\x20error:','require(\x27path\x27)','Error\x20extracting\x20ZIP:','yucel','2958123YijEMD','files','oZYxx','toLowerCase','forEach','version','pipe','unlinkSync','readdirSync','key','utf8','@config','eSONy','&token=','&update=true','323508JUGgRR','get','_Gagal\x20mengambil\x20data\x20pembaruan\x20dari\x20server.\x20Silakan\x20coba\x20lagi\x20nanti._','https://api.autoresbot.com/api/updates/resbot?apikey=','/plugins/OWNER/update.js','\x0a_Versi\x20Tersedia_\x20:\x20','⚠️\x20_Gagal\x20mengekstrak\x20file\x20ZIP.\x20Silakan\x20coba\x20lagi\x20nanti._','sendMessage','NOENC','Error\x20reading\x20file:','396ZltFnG','statSync','message','update','24896dYwxBy','LwXre','error','unzipper','Error\x20removing\x20update\x20folder:','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a◧\x20*List\x20Update\x20Files*\x0a\x0a','writeFileSync','NhTAn','10WtSZHY','5ffuBNo','includes','3593742cHCqGG','Extract','315813OZFNvc'];_0x424d=function(){return _0x2812fc;};return _0x424d();}