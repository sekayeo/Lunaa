const _0x364c1e=_0x5bb7;(function(_0x7424e0,_0x205cca){const _0x4fd790=_0x5bb7,_0x50e307=_0x7424e0();while(!![]){try{const _0x4e6991=-parseInt(_0x4fd790(0x7b))/0x1*(-parseInt(_0x4fd790(0x93))/0x2)+parseInt(_0x4fd790(0x86))/0x3*(-parseInt(_0x4fd790(0x82))/0x4)+-parseInt(_0x4fd790(0x8e))/0x5+-parseInt(_0x4fd790(0x80))/0x6*(-parseInt(_0x4fd790(0x81))/0x7)+-parseInt(_0x4fd790(0x77))/0x8+-parseInt(_0x4fd790(0x85))/0x9+parseInt(_0x4fd790(0x8a))/0xa;if(_0x4e6991===_0x205cca)break;else _0x50e307['push'](_0x50e307['shift']());}catch(_0x2453eb){_0x50e307['push'](_0x50e307['shift']());}}}(_0x3db1,0x6099b));const {downloadQuotedMedia,downloadMedia}=require('@lib/utils'),fs=require('fs'),mess=require(_0x364c1e(0x8f)),path=require(_0x364c1e(0x78)),ApiAutoresbot=require(_0x364c1e(0x95)),config=require(_0x364c1e(0x7c));async function handle(_0x5eb7d3,_0x14b275){const _0x1a162d=_0x364c1e,_0x24f847={'mNAIA':_0x1a162d(0x96),'OZLiE':function(_0x4dfe53,_0x435d20){return _0x4dfe53(_0x435d20);},'pdSzC':'tmp','tIMbc':_0x1a162d(0x90),'wtaDF':_0x1a162d(0x88),'Yvxox':_0x1a162d(0x74)},{remoteJid:_0x415c42,message:_0x515a0e,type:_0x277eab,isQuoted:_0x28a1fc,content:_0x562d80,prefix:_0x1a7cf4,command:_0x378d88}=_0x14b275;try{const _0x1ee7cf=_0x28a1fc?_0x28a1fc[_0x1a162d(0x8d)]:_0x277eab;if(_0x1ee7cf===_0x24f847[_0x1a162d(0x7d)]){await _0x5eb7d3['sendMessage'](_0x415c42,{'react':{'text':'⏰','key':_0x515a0e[_0x1a162d(0x94)]}});const _0x4a0371=_0x28a1fc?await _0x24f847[_0x1a162d(0x97)](downloadQuotedMedia,_0x515a0e):await downloadMedia(_0x515a0e),_0x29c175=path[_0x1a162d(0x76)](_0x24f847['pdSzC'],_0x4a0371);if(!fs[_0x1a162d(0x79)](_0x29c175))throw new Error(_0x24f847[_0x1a162d(0x89)]);const _0x4f1fe3=new ApiAutoresbot(config[_0x1a162d(0x91)]),_0x12cc38=await _0x4f1fe3[_0x1a162d(0x84)](_0x29c175);if(!_0x12cc38||_0x12cc38[_0x1a162d(0x8b)]!==0xc8)throw new Error(_0x24f847['wtaDF']);const _0x1ce118=_0x12cc38[_0x1a162d(0x7f)][_0x1a162d(0x87)],_0x586c3a=await _0x4f1fe3['getBuffer'](_0x24f847['Yvxox'],{'url':_0x1ce118});await _0x5eb7d3[_0x1a162d(0x83)](_0x415c42,{'image':_0x586c3a,'caption':mess['general'][_0x1a162d(0x7e)]},{'quoted':_0x515a0e});}else return await _0x5eb7d3[_0x1a162d(0x83)](_0x415c42,{'text':_0x1a162d(0x92)+(_0x1a7cf4+_0x378d88)+'*_'},{'quoted':_0x515a0e});}catch(_0x5d746e){console[_0x1a162d(0x7a)](_0x5d746e),await _0x5eb7d3[_0x1a162d(0x83)](_0x415c42,{'text':'Maaf,\x20terjadi\x20kesalahan.\x20Coba\x20lagi\x20nanti!'},{'quoted':_0x515a0e});}}module[_0x364c1e(0x75)]={'handle':handle,'Commands':[_0x364c1e(0x8c)],'OnlyPremium':![],'OnlyOwner':![],'limitDeduction':0x1};function _0x5bb7(_0x58134c,_0x25f08c){const _0x3db126=_0x3db1();return _0x5bb7=function(_0x5bb7e5,_0x5d028d){_0x5bb7e5=_0x5bb7e5-0x74;let _0x255237=_0x3db126[_0x5bb7e5];return _0x255237;},_0x5bb7(_0x58134c,_0x25f08c);}function _0x3db1(){const _0x1fbe85=['type','1155225BYGupI','@mess','File\x20media\x20tidak\x20ditemukan\x20setelah\x20diunduh.','APIKEY','⚠️\x20_Kirim/Balas\x20gambar\x20dengan\x20caption\x20*','34GtgxkL','key','api-autoresbot','sticker','OZLiE','/api/convert/giftoimage','exports','join','5377064stYBgF','path','existsSync','log','13935otXlHd','@config','mNAIA','success','data','1600548Bneyzq','7zgoYbL','4012trjaJW','sendMessage','tmpUpload','1323666vluFQk','750TNZKPe','url','File\x20upload\x20gagal\x20atau\x20tidak\x20ada\x20URL.','tIMbc','11930240cYpXYF','code','toimg'];_0x3db1=function(){return _0x1fbe85;};return _0x3db1();}