const _0x5d7e63=_0x99b0;(function(_0x62f475,_0x402cde){const _0x4d2686=_0x99b0,_0x41d720=_0x62f475();while(!![]){try{const _0x7dfc20=parseInt(_0x4d2686(0x1ce))/0x1*(-parseInt(_0x4d2686(0x1e9))/0x2)+-parseInt(_0x4d2686(0x1d7))/0x3+parseInt(_0x4d2686(0x1cb))/0x4+parseInt(_0x4d2686(0x1ca))/0x5+parseInt(_0x4d2686(0x1bd))/0x6*(-parseInt(_0x4d2686(0x1e4))/0x7)+parseInt(_0x4d2686(0x1e0))/0x8*(parseInt(_0x4d2686(0x1ec))/0x9)+-parseInt(_0x4d2686(0x1de))/0xa*(-parseInt(_0x4d2686(0x1e1))/0xb);if(_0x7dfc20===_0x402cde)break;else _0x41d720['push'](_0x41d720['shift']());}catch(_0x533a2b){_0x41d720['push'](_0x41d720['shift']());}}}(_0x139f,0xe2ffe));const config=require(_0x5d7e63(0x1c4)),{sendImageAsSticker}=require(_0x5d7e63(0x1c3)),axios=require(_0x5d7e63(0x1d5)),colorMap={'merah':_0x5d7e63(0x1c0),'hijau':_0x5d7e63(0x1d6),'biru':_0x5d7e63(0x1e2),'kuning':_0x5d7e63(0x1c6),'hitam':_0x5d7e63(0x1c7),'putih':_0x5d7e63(0x1d8),'abu':_0x5d7e63(0x1c8),'jingga':_0x5d7e63(0x1d1),'ungu':_0x5d7e63(0x1d0),'pink':'#FFC0CB','coklat':_0x5d7e63(0x1cc)};function _0x99b0(_0x280e51,_0x18a1c4){const _0x139f28=_0x139f();return _0x99b0=function(_0x99b05f,_0x5f5870){_0x99b05f=_0x99b05f-0x1bc;let _0x442c0e=_0x139f28[_0x99b05f];return _0x442c0e;},_0x99b0(_0x280e51,_0x18a1c4);}async function handle(_0x8e0bc7,_0xa8bef5){const _0x58a1a6=_0x5d7e63,_0xbdbe1f={'vXuLt':function(_0x77979c,_0x449ad8){return _0x77979c+_0x449ad8;},'YhSWd':_0x58a1a6(0x1d8),'tefXC':_0x58a1a6(0x1e5),'mCVSn':_0x58a1a6(0x1cd),'JSHLR':_0x58a1a6(0x1cf),'LLRGZ':'https://bot.lyo.su/quote/generate','mBHsP':'application/json','prfZJ':function(_0x3e9948,_0x44714b,_0x27ea11,_0x524d4b,_0x2d750a,_0x495aa7){return _0x3e9948(_0x44714b,_0x27ea11,_0x524d4b,_0x2d750a,_0x495aa7);}},{remoteJid:_0x3ed714,sender:_0x48fcd3,message:_0x369b14,content:_0x2c0499,isQuoted:_0x23beea,prefix:_0x2a23ec,command:_0x30185a,pushName:_0x28748a}=_0xa8bef5;try{const _0x51c4e4=_0x23beea?.[_0x58a1a6(0x1df)]||_0x2c0499;if(!_0x51c4e4){await _0x8e0bc7[_0x58a1a6(0x1d3)](_0x3ed714,{'text':_0x58a1a6(0x1bc)+_0xbdbe1f[_0x58a1a6(0x1e6)](_0x2a23ec,_0x30185a)+'\x20resbot\x20|\x20warna*_'},{'quoted':_0x369b14});return;}const [_0x23a5a0,_0x53763a]=_0x51c4e4['split']('|')[_0x58a1a6(0x1c2)](_0x259e93=>_0x259e93[_0x58a1a6(0x1c1)]()),_0x134f13=colorMap[_0x53763a?.[_0x58a1a6(0x1ed)]()]||_0x53763a||_0xbdbe1f[_0x58a1a6(0x1eb)];await _0x8e0bc7[_0x58a1a6(0x1d3)](_0x3ed714,{'react':{'text':'⏰','key':_0x369b14['key']}});const _0x45d868=await _0x8e0bc7['profilePictureUrl'](_0x48fcd3,_0xbdbe1f[_0x58a1a6(0x1be)])[_0x58a1a6(0x1da)](()=>_0x58a1a6(0x1e8)),_0xd3c941={'type':_0xbdbe1f[_0x58a1a6(0x1d4)],'format':_0xbdbe1f[_0x58a1a6(0x1c5)],'backgroundColor':_0x134f13,'width':0x2bc,'height':0x244,'scale':0x2,'messages':[{'entities':[],'avatar':!![],'from':{'id':0x1,'name':_0x28748a,'photo':{'url':_0x45d868}},'text':_0x23a5a0,'replyMessage':{}}]},_0x1f4dcd=await axios[_0x58a1a6(0x1e7)](_0xbdbe1f[_0x58a1a6(0x1d2)],_0xd3c941,{'headers':{'Content-Type':_0xbdbe1f['mBHsP']}}),_0x532512=Buffer[_0x58a1a6(0x1bf)](_0x1f4dcd[_0x58a1a6(0x1dd)]['result']['image'],_0x58a1a6(0x1d9)),_0x4c3772={'packname':config[_0x58a1a6(0x1ea)],'author':config[_0x58a1a6(0x1db)]};await _0xbdbe1f[_0x58a1a6(0x1e3)](sendImageAsSticker,_0x8e0bc7,_0x3ed714,_0x532512,_0x4c3772,_0x369b14);}catch(_0x4aaacb){const _0x2871ae=_0x58a1a6(0x1c9)+_0x4aaacb[_0x58a1a6(0x1dc)];await _0x8e0bc7[_0x58a1a6(0x1d3)](_0x3ed714,{'text':_0x2871ae},{'quoted':_0x369b14});}}module['exports']={'handle':handle,'Commands':['qcstick'],'OnlyPremium':![],'OnlyOwner':![],'limitDeduction':0x1};function _0x139f(){const _0x3f87ff=['post','https://telegra.ph/file/6880771a42bad09dd6087.jpg','8jHWIXz','sticker_packname','YhSWd','171qBDhOe','toLowerCase','_⚠️\x20Format\x20Penggunaan:_\x20\x0a\x0a_💬\x20Contoh:_\x20_*','2035998JFNYsp','tefXC','from','#FF0000','trim','map','@lib/exif','@config','JSHLR','#FFFF00','#000000','#808080','Maaf,\x20terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.\x20Coba\x20lagi\x20nanti.\x0a\x0aError:\x20','2732540DQqzRn','1602960lhBRzo','#A52A2A','quote','340541cGPMWK','png','#800080','#FFA500','LLRGZ','sendMessage','mCVSn','axios','#00FF00','4728111kFRSRU','#FFFFFF','base64','catch','sticker_author','message','data','2410MWZXDE','text','1048VnBFoH','179663ViWDdD','#0000FF','prfZJ','21cPOAyl','image','vXuLt'];_0x139f=function(){return _0x3f87ff;};return _0x139f();}