function _0x4d46(){const _0x6d1eb4=['sloqe','enc','getObfuscatedCode','KtGdY','8fRMPuM','✅\x20_Semua\x20file\x20.js\x20di\x20folder\x20plugins\x20telah\x20dienkripsi.\x20Backup\x20tersimpan\x20di\x20plugins_backup._','NvGKR','File\x20asli\x20telah\x20dikembalikan\x20dari\x20backup.','✅\x20_Semua\x20file\x20.js\x20di\x20folder\x20plugins\x20telah\x20dikembalikan\x20dari\x20backup._','log','plugins','jyxLw','227416lSezGc','1078759zwqzsM','javascript-obfuscator','sync','utf8','❌\x20_Gagal\x20mengembalikan\x20file,\x20backup\x20tidak\x20ditemukan._','1365504AyVrZh','path','existsSync','ccyRE','sendMessage','118945ZPrkVD','copy','fs-extra','240821AEUZEa','114YiXJFv','dec','join','24LPAgAq','glob','1059849QfGlMS','729376lzYSMf','Backup\x20dibuat\x20sebelum\x20enkripsi.','30lkBTJu','readFile','cwd','exports','/**/*.js','Failed\x20to\x20encrypt:\x20','Encrypted:\x20','writeFile'];_0x4d46=function(){return _0x6d1eb4;};return _0x4d46();}const _0xaed1fe=_0x4ea9;function _0x4ea9(_0x47376a,_0x524ba8){const _0x4d4682=_0x4d46();return _0x4ea9=function(_0x4ea9f9,_0x4a8610){_0x4ea9f9=_0x4ea9f9-0x1ae;let _0x3fcce3=_0x4d4682[_0x4ea9f9];return _0x3fcce3;},_0x4ea9(_0x47376a,_0x524ba8);}(function(_0x9ae8e7,_0x2d638b){const _0x40fd17=_0x4ea9,_0x816bd=_0x9ae8e7();while(!![]){try{const _0x38f52c=-parseInt(_0x40fd17(0x1bb))/0x1+-parseInt(_0x40fd17(0x1d1))/0x2+parseInt(_0x40fd17(0x1d7))/0x3+parseInt(_0x40fd17(0x1c9))/0x4*(parseInt(_0x40fd17(0x1b1))/0x5)+parseInt(_0x40fd17(0x1b5))/0x6*(parseInt(_0x40fd17(0x1b4))/0x7)+-parseInt(_0x40fd17(0x1b8))/0x8*(-parseInt(_0x40fd17(0x1ba))/0x9)+parseInt(_0x40fd17(0x1bd))/0xa*(-parseInt(_0x40fd17(0x1d2))/0xb);if(_0x38f52c===_0x2d638b)break;else _0x816bd['push'](_0x816bd['shift']());}catch(_0x103038){_0x816bd['push'](_0x816bd['shift']());}}}(_0x4d46,0x5aeab));const fs=require(_0xaed1fe(0x1b3)),path=require(_0xaed1fe(0x1d8)),glob=require(_0xaed1fe(0x1b9)),JavaScriptObfuscator=require(_0xaed1fe(0x1d3)),pluginsDir=path[_0xaed1fe(0x1b7)](process[_0xaed1fe(0x1bf)](),_0xaed1fe(0x1cf)),backupDir=path['join'](process['cwd'](),'plugins_backup');async function encryptFilesInPlugins(){const _0x37c32d=_0xaed1fe,_0xbad0bd={'sFJLt':_0x37c32d(0x1bc),'LcOMw':_0x37c32d(0x1d5)};!fs[_0x37c32d(0x1ae)](backupDir)&&(await fs[_0x37c32d(0x1b2)](pluginsDir,backupDir),console[_0x37c32d(0x1ce)](_0xbad0bd['sFJLt']));const _0x411160=glob[_0x37c32d(0x1d4)](pluginsDir+_0x37c32d(0x1c1));for(const _0x5f3d4a of _0x411160){try{const _0x5be381=await fs[_0x37c32d(0x1be)](_0x5f3d4a,_0xbad0bd['LcOMw']),_0x451aaf=JavaScriptObfuscator['obfuscate'](_0x5be381,{'compact':!![],'controlFlowFlattening':!![]})[_0x37c32d(0x1c7)]();await fs[_0x37c32d(0x1c4)](_0x5f3d4a,_0x451aaf,_0x37c32d(0x1d5)),console[_0x37c32d(0x1ce)](_0x37c32d(0x1c3)+_0x5f3d4a);}catch(_0x459dda){console['error'](_0x37c32d(0x1c2)+_0x5f3d4a,_0x459dda);}}}async function decryptFilesInPlugins(){const _0xc21208=_0xaed1fe,_0x192210={'NvGKR':'Backup\x20tidak\x20ditemukan,\x20tidak\x20bisa\x20mengembalikan\x20file.'};if(!fs['existsSync'](backupDir))return console[_0xc21208(0x1ce)](_0x192210[_0xc21208(0x1cb)]),_0xc21208(0x1d6);return await fs['copy'](backupDir,pluginsDir,{'overwrite':!![]}),console[_0xc21208(0x1ce)](_0xc21208(0x1cc)),_0xc21208(0x1cd);}async function handle(_0x4c1b0b,_0x190bec){const _0x2d35c2=_0xaed1fe,_0x1b674e={'sCsRy':function(_0x254bf7,_0x4dd4ee){return _0x254bf7===_0x4dd4ee;},'ccyRE':'enc','sloqe':function(_0xe2c587){return _0xe2c587();},'jyxLw':_0x2d35c2(0x1ca),'KtGdY':function(_0x230d87,_0x51d779){return _0x230d87===_0x51d779;}},{remoteJid:_0x121d5a,message:_0x5a26e6,command:_0x46f003}=_0x190bec;if(_0x1b674e['sCsRy'](_0x46f003,_0x1b674e[_0x2d35c2(0x1af)]))await _0x1b674e[_0x2d35c2(0x1c5)](encryptFilesInPlugins),await _0x4c1b0b['sendMessage'](_0x121d5a,{'text':_0x1b674e[_0x2d35c2(0x1d0)]},{'quoted':_0x5a26e6});else{if(_0x1b674e[_0x2d35c2(0x1c8)](_0x46f003,_0x2d35c2(0x1b6))){const _0x2f153e=await _0x1b674e[_0x2d35c2(0x1c5)](decryptFilesInPlugins);await _0x4c1b0b[_0x2d35c2(0x1b0)](_0x121d5a,{'text':_0x2f153e},{'quoted':_0x5a26e6});}}}module[_0xaed1fe(0x1c0)]={'handle':handle,'Commands':[_0xaed1fe(0x1c6),_0xaed1fe(0x1b6)],'OnlyPremium':![],'OnlyOwner':!![]};