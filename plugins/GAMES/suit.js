function _0x211e(_0x53e25b,_0x4e0f74){const _0x517488=_0x5174();return _0x211e=function(_0x211e6d,_0x324cb9){_0x211e6d=_0x211e6d-0x199;let _0x525c55=_0x517488[_0x211e6d];return _0x525c55;},_0x211e(_0x53e25b,_0x4e0f74);}function _0x5174(){const _0x588b5a=['ftznb','sendMessage','1550479xySepo','exports','5038623GLURot','game','808572SIIqwS','Kamu\x20tidak\x20bisa\x20menantang\x20diri\x20sendiri!','split','8fwbRoh','@tmpDB/suit','1sOGzmy','_Siapa\x20yang\x20ingin\x20kamu\x20tantang?_\x0aTag\x20orangnya.\x0a\x0aContoh:\x20suit\x20@','sYptW','8QbEdlU','15303980nQfOOw','270335riVmPP','zioXM','isPlaying','\x20menantang\x20@','1761640zSluzx','AGUik','\x20ketik\x20*terima*\x20atau\x20*tolak*\x20dalam\x20','4425840vPJXAi','KdXEZ','length','Waktu\x20habis!\x20Suit\x20dibatalkan.','FGEtQ'];_0x5174=function(){return _0x588b5a;};return _0x5174();}const _0x2aa02c=_0x211e;(function(_0x226e2c,_0x53ffa2){const _0x213270=_0x211e,_0x140bfa=_0x226e2c();while(!![]){try{const _0x58a155=parseInt(_0x213270(0x1a7))/0x1*(parseInt(_0x213270(0x1b0))/0x2)+-parseInt(_0x213270(0x1a2))/0x3+-parseInt(_0x213270(0x1a5))/0x4*(parseInt(_0x213270(0x1ac))/0x5)+parseInt(_0x213270(0x1b3))/0x6+parseInt(_0x213270(0x19e))/0x7+parseInt(_0x213270(0x1aa))/0x8*(parseInt(_0x213270(0x1a0))/0x9)+-parseInt(_0x213270(0x1ab))/0xa;if(_0x58a155===_0x53ffa2)break;else _0x140bfa['push'](_0x140bfa['shift']());}catch(_0x3ce2e){_0x140bfa['push'](_0x140bfa['shift']());}}}(_0x5174,0x780e4));const mess=require('@mess'),{addUser,removeUser,getUser,isUserPlaying}=require(_0x2aa02c(0x1a6)),{sendMessageWithMention}=require('@lib/utils'),WAKTU_GAMES=0x3c;async function startGame(_0x1137df,_0x151e2d,_0x232c2b,_0x4914f5,_0x4134ec){const _0x9382aa=_0x2aa02c,_0x51e17d={'ldYDa':function(_0x44491b,_0x1f5df6){return _0x44491b(_0x1f5df6);},'FGEtQ':function(_0x42a177,_0x4c121b,_0x10192b,_0xf58e64,_0x1a0080){return _0x42a177(_0x4c121b,_0x10192b,_0xf58e64,_0x1a0080);},'KdXEZ':function(_0x1c4948,_0x5c8f6f,_0x43aa21){return _0x1c4948(_0x5c8f6f,_0x43aa21);}};addUser(_0x151e2d,{'status':![],'player1':_0x232c2b,'player2':_0x4914f5,'answer_player1':null,'answer_player2':null,'hadiah':0xa,'groupId':_0x151e2d});const _0x3a5812='_*SUIT\x20PvP*_\x0a\x0a@'+_0x232c2b[_0x9382aa(0x1a4)]`@`[0x0]+_0x9382aa(0x1af)+_0x4914f5['split']`@`[0x0]+'\x20untuk\x20bermain\x20suit.\x0a\x0aSilakan\x20@'+_0x4914f5[_0x9382aa(0x1a4)]`@`[0x0]+_0x9382aa(0x1b2)+WAKTU_GAMES+'s';await _0x51e17d[_0x9382aa(0x19b)](sendMessageWithMention,_0x1137df,_0x151e2d,_0x3a5812,_0x4134ec),_0x51e17d[_0x9382aa(0x1b4)](setTimeout,async()=>{const _0x4b28c3=_0x9382aa;_0x51e17d['ldYDa'](isUserPlaying,_0x151e2d)&&(removeUser(_0x151e2d),await _0x1137df[_0x4b28c3(0x19d)](_0x151e2d,{'text':_0x4b28c3(0x19a)},{'quoted':_0x4134ec}));},WAKTU_GAMES*0x3e8);}async function handle(_0x5c344e,_0x31fe5c){const _0x40eaae=_0x2aa02c,_0x3bd41a={'sYptW':function(_0x1e5ea8,_0x39fa9a){return _0x1e5ea8===_0x39fa9a;},'AGUik':function(_0x1633cf,_0x536669,_0x22aba5,_0x46b976,_0x23d60e){return _0x1633cf(_0x536669,_0x22aba5,_0x46b976,_0x23d60e);},'ftznb':_0x40eaae(0x1a3),'zioXM':function(_0x20d336,_0x43a587,_0x4e32bc,_0x19fec3,_0x21217b,_0x4f47e1){return _0x20d336(_0x43a587,_0x4e32bc,_0x19fec3,_0x21217b,_0x4f47e1);}},{remoteJid:_0x1219e5,message:_0x1d2175,sender:_0x487026,mentionedJid:_0x226185}=_0x31fe5c;if(isUserPlaying(_0x1219e5))return await _0x5c344e[_0x40eaae(0x19d)](_0x1219e5,{'text':mess[_0x40eaae(0x1a1)][_0x40eaae(0x1ae)]},{'quoted':_0x1d2175});if(!_0x226185||_0x3bd41a[_0x40eaae(0x1a9)](_0x226185[_0x40eaae(0x199)],0x0))return await _0x3bd41a[_0x40eaae(0x1b1)](sendMessageWithMention,_0x5c344e,_0x1219e5,_0x40eaae(0x1a8)+_0x487026[_0x40eaae(0x1a4)]`@`[0x0],_0x1d2175);const _0x5c6b02=_0x487026,_0x25e5af=_0x226185[0x0];if(_0x3bd41a[_0x40eaae(0x1a9)](_0x5c6b02,_0x25e5af))return await _0x5c344e[_0x40eaae(0x19d)](_0x1219e5,{'text':_0x3bd41a[_0x40eaae(0x19c)]},{'quoted':_0x1d2175});await _0x3bd41a[_0x40eaae(0x1ad)](startGame,_0x5c344e,_0x1219e5,_0x5c6b02,_0x25e5af,_0x1d2175);}module[_0x2aa02c(0x19f)]={'handle':handle,'Commands':['suit'],'OnlyPremium':![],'OnlyOwner':![]};