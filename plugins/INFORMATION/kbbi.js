const _0x514456=_0x4a18;(function(_0x4ab4a6,_0x3cd608){const _0x38720b=_0x4a18,_0x50b702=_0x4ab4a6();while(!![]){try{const _0x5a3d96=parseInt(_0x38720b(0x19b))/0x1+-parseInt(_0x38720b(0x1b4))/0x2*(parseInt(_0x38720b(0x197))/0x3)+-parseInt(_0x38720b(0x1ac))/0x4*(parseInt(_0x38720b(0x198))/0x5)+parseInt(_0x38720b(0x1aa))/0x6*(parseInt(_0x38720b(0x196))/0x7)+-parseInt(_0x38720b(0x1a8))/0x8*(parseInt(_0x38720b(0x1a0))/0x9)+-parseInt(_0x38720b(0x19c))/0xa*(-parseInt(_0x38720b(0x194))/0xb)+parseInt(_0x38720b(0x1b3))/0xc;if(_0x5a3d96===_0x3cd608)break;else _0x50b702['push'](_0x50b702['shift']());}catch(_0x226950){_0x50b702['push'](_0x50b702['shift']());}}}(_0x23b0,0x61630));function _0x4a18(_0x3639f3,_0x709fba){const _0x23b035=_0x23b0();return _0x4a18=function(_0x4a18fd,_0x43370a){_0x4a18fd=_0x4a18fd-0x193;let _0x36fe45=_0x23b035[_0x4a18fd];return _0x36fe45;},_0x4a18(_0x3639f3,_0x709fba);}const ApiAutoresbot=require(_0x514456(0x1a9)),config=require(_0x514456(0x1a7)),cleanHtml=_0x598ed9=>_0x598ed9['replace'](/<\/?[^>]+(>|$)/g,'');async function sendMessageWithQuote(_0xb3df2,_0x1da9e5,_0x17664d,_0x394d9e,_0x241997={}){await _0xb3df2['sendMessage'](_0x1da9e5,{'text':_0x394d9e},{'quoted':_0x17664d,..._0x241997});}async function handle(_0xa29c7a,_0x291b67){const _0x56e250=_0x514456,_0x1b9420={'QZHyS':function(_0x52c804,_0xc21979){return _0x52c804==_0xc21979;},'GexwF':function(_0x30fe8e,_0x453f6d,_0x43a64d,_0x218bf0,_0x2c2c56){return _0x30fe8e(_0x453f6d,_0x43a64d,_0x218bf0,_0x2c2c56);},'kdCXR':function(_0x2427d0,_0x4ae2c8){return _0x2427d0+_0x4ae2c8;},'yJAAV':function(_0x4c7f32,_0x56b627){return _0x4c7f32(_0x56b627);},'Ljybn':function(_0x4c36c1,_0x45120d,_0x2fc253,_0x9d77e5,_0x5d13e7){return _0x4c36c1(_0x45120d,_0x2fc253,_0x9d77e5,_0x5d13e7);},'dzdNr':_0x56e250(0x19f),'WhtII':function(_0x2695f7,_0x34693e,_0x202466,_0x5f2c8d,_0x5536b4){return _0x2695f7(_0x34693e,_0x202466,_0x5f2c8d,_0x5536b4);},'tRxhG':'Kesalahan\x20saat\x20memanggil\x20API\x20Autoresbot:'},{remoteJid:_0x5ccbba,message:_0x5a68fe,content:_0x4aca90,prefix:_0x1853e1,command:_0x5b3bb9}=_0x291b67;try{if(!_0x4aca90[_0x56e250(0x1b0)]()||_0x1b9420[_0x56e250(0x193)](_0x4aca90[_0x56e250(0x1b0)](),''))return _0x1b9420[_0x56e250(0x195)](sendMessageWithQuote,_0xa29c7a,_0x5ccbba,_0x5a68fe,_0x56e250(0x1b1)+_0x1b9420[_0x56e250(0x1b6)](_0x1853e1,_0x5b3bb9)+_0x56e250(0x1a1));await _0xa29c7a[_0x56e250(0x19d)](_0x5ccbba,{'react':{'text':'⏰','key':_0x5a68fe[_0x56e250(0x1ab)]}});const _0xc3a17=new ApiAutoresbot(config['APIKEY']),_0x4cb24f=await _0xc3a17[_0x56e250(0x199)]('/api/information/kbbi',{'q':_0x4aca90});if(_0x4cb24f[_0x56e250(0x19a)]===0xc8&&_0x4cb24f[_0x56e250(0x1ad)]){const {kata:_0x5b6cac,keterangan:_0x25ad72}=_0x4cb24f[_0x56e250(0x1ad)],_0x32b90a=_0x1b9420[_0x56e250(0x1b5)](cleanHtml,_0x25ad72),_0x333fe6=_0x56e250(0x1a2)+_0x5b6cac+_0x56e250(0x1b2)+_0x32b90a;await _0x1b9420['Ljybn'](sendMessageWithQuote,_0xa29c7a,_0x5ccbba,_0x5a68fe,_0x333fe6);}else{const _0x29d8f4=_0x4cb24f?.['message']||_0x1b9420[_0x56e250(0x1a6)];await _0x1b9420[_0x56e250(0x1a3)](sendMessageWithQuote,_0xa29c7a,_0x5ccbba,_0x5a68fe,_0x29d8f4);}}catch(_0x3ad62d){console['error'](_0x1b9420['tRxhG'],_0x3ad62d);const _0x25c5fe=_0x56e250(0x1af)+(_0x3ad62d[_0x56e250(0x1ae)]||_0x3ad62d);await _0x1b9420[_0x56e250(0x1a4)](sendMessageWithQuote,_0xa29c7a,_0x5ccbba,_0x5a68fe,_0x25c5fe);}}function _0x23b0(){const _0x271fd5=['get','code','73209iIAgQT','80DgxYWz','sendMessage','exports','Maaf,\x20tidak\x20ada\x20respons\x20dari\x20server.\x20Silakan\x20coba\x20lagi\x20nanti.','81ZXqjsh','\x20pohon*_','_*Kata:*_\x20','WhtII','Ljybn','kbbi','dzdNr','@config','154120dTCvGu','api-autoresbot','2515224ypGBnf','key','50852Drprzw','data','message','Maaf,\x20terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.\x20Mohon\x20coba\x20lagi\x20nanti.\x0a\x0aDetail\x20Error:\x20','trim','_⚠️\x20Format\x20Penggunaan:_\x20\x0a\x0a_💬\x20Contoh:_\x20_*','\x0a\x0a_*Arti:*_\x20','5045148onLXdH','211592GlQoOj','yJAAV','kdCXR','QZHyS','539363RDHfjz','GexwF','7DHKvgi','6FynnXD','205vFVUhW'];_0x23b0=function(){return _0x271fd5;};return _0x23b0();}module[_0x514456(0x19e)]={'handle':handle,'Commands':[_0x514456(0x1a5)],'OnlyPremium':![],'OnlyOwner':![],'limitDeduction':0x1};