const help = (prefix, pushname, getLevelingLevel, getLevelingXp, sender, time, patt, uangku) => { 
return `
 ╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ 「 INFORMAÇÕES DONO 」
│ Nick : ${NamaOwner} 
│ YouTube :「 ${ytb} 」
│ Bateria : ${battre}% 
│ Prefixo:「 ${prefix} 」
╰┬────────────┈ ⳹
││ Usuário : ${pushname}
││ Data/Hora : ${time}
││ Level : ${getLevelingLevel(sender)}
││ Patente : ${patt}
│╰────────────┈ ⳹
│ 「 MENU DE COMANDOS 」
│
│♢➛${prefix}menuadms
│♢➛${prefix}menudono
│♢➛${prefix}menumusic
│♢➛${prefix}menuprem
│
└──────────────
│ 「 COMANDOS BÁSICOS 」
│ 
│♢➛${prefix}bateria
│♢➛${prefix}listonline
│♢➛${prefix}bot
│♢➛${prefix}sticker 
│♢➛${prefix}fsticker
│♢➛${prefix}toimg 
│♢➛${prefix}togif 
│♢➛${prefix}gtts pt (txt)
│♢➛${prefix}tomp3 
│♢➛${prefix}ping 
│♢➛${prefix}play  (oq qr)
│♢➛${prefix}gimage 
│♢➛${prefix}rename 
│♢➛${prefix}wallpaper (nome)
│♢➛${prefix}meme 
│♢➛${prefix}frases
│♢➛${prefix}semoji exemplo: 😉
│
└──────────────
│「 EFEITOS IMG (MARCAR) 」
│ 
│♧➛${prefix}triggered (mrc-img)
│♧➛${prefix}paisagem (mrc-img)
│♧➛${prefix}qbcabeça (mrc-img) 
│♧➛${prefix}vidroqb (mrc-img)
│♧➛${prefix}deletef (mrc-img)
│♧➛${prefix}petmak (mrc-img)
│♧➛${prefix}zombie (mrc-img)
│♧➛${prefix}arteft (mrc-img) 
│♧➛${prefix}wanted (mrc-img)
│♧➛${prefix}hitler (mrc-img)
│♧➛${prefix}firef (mrc-img)
│♧➛${prefix}preso (mrc-img)
│♧➛${prefix}trash (mrc-img)
│♧➛${prefix}cubof (mrc-img)
│♧➛${prefix}arma (mrc-img)
│♧➛${prefix}gtav (mrc-img)
│♧➛${prefix}rip (mrc-img)
│ 
└──────────────
│「 EFEITOS GIF (TXT) 」
│ 
│✅➛${prefix}colorfull (txt)
│✅➛${prefix}glowing (txt)
│✅➛${prefix}retro (txt)
│✅➛${prefix}poly (txt)
│✅➛${prefix}bold (txt)
│✅➛${prefix}army (txt)
│ 
└──────────────
│ 「 CRIAR QR/ETC. 」
│
│♧➛${prefix}qrcode
│♧➛${prefix}wame 
│
└──────────────
│ 「 BRINCADEIRAS 」
│
│♡➛${prefix}gostoso
│♡➛${prefix}gostosa
│♡➛${prefix}gay
│♡➛${prefix}casal
│♡➛${prefix}corno
│♡➛${prefix}gado
│♡➛${prefix}nazista
│♡➛${prefix}amgolpe
│♡➛${prefix}tapa 
│♡➛${prefix}chute
│♡➛${prefix}rankgay
│♡➛${prefix}rankpau
│♡➛${prefix}rankotakus
│♡➛${prefix}rankgays
│♡➛${prefix}rankgostosas
│♡➛${prefix}rankcornos
│♡➛${prefix}ranknazista
│ 
└──────────────
│ 「 ALTERADOR DE AUDIO 」
│
│❖➛${prefix}grave 
│❖➛${prefix}grave2 
│❖➛${prefix}fast 
│❖➛${prefix}adolesc 
│❖➛${prefix}esquilo 
│❖➛${prefix}estourar 
│❖➛${prefix}bass 
│❖➛${prefix}bass2 
│❖➛${prefix}bass 
│
└──────────────
│「 RANDOM/GIF/FOTO 」
│
│☑➛${prefix}patrick
│☑➛${prefix}dogzin
│☑➛${prefix}dadu
│
└──────────────
│ 「 FOTO DE ANIMAIS 」
│ 
│♡➛${prefix}pandared
│♡➛${prefix}cachorro
│♡➛${prefix}passaro
│♡➛${prefix}lagarto
│♡➛${prefix}raposa
│♡➛${prefix}koala
│♡➛${prefix}ganso
│ 
└──────────────
│ 「 ANIMES FOTOS/GIF 」
│ 
│♡➛${prefix}wallpaperanime
│♡➛${prefix}nekonime
│♡➛${prefix}beijo
│♡➛${prefix}shinobu
│♡➛${prefix}waifu
│♡➛${prefix}megumin
│♡➛${prefix}uwu
│♡➛${prefix}beijo
│♡➛${prefix}loli
│ 
└──────────────
│ 「 INFORMAÇÕES/PESQUISA 」
│
│❖➛${prefix}mercadolivre (oq qr)
│❖➛${prefix}happymod (apk nome)
│❖➛${prefix}playstore (nome)
│❖➛${prefix}covidglobal
│❖➛${prefix}covid19
│❖➛${prefix}wikipedia 
│❖➛${prefix}print (url)
│❖➛${prefix}wallsearch (nm da img)
│
└──────────────
│「 ATTPS/TTPS/TTMS 」
│
│❖➛${prefix}attp 
│❖➛${prefix}ttm 
│❖➛${prefix}ttm2 
│❖➛${prefix}ttm3 
│❖➛${prefix}ttm4 
│❖➛${prefix}ttm5
│
└──────────────
│「 PESQUISAS/BAIXAR 」
│
│❖➛${prefix}mediafire (link)
│❖➛${prefix}spotifysrc (nome msc)
│❖➛${prefix}spotify (url do spotifysrc)
│❖➛${prefix}facemp4 (url do video)
│❖➛${prefix}ytsearch (nome da msc)
│❖➛${prefix}ytsearch2 (nome da msc)
│❖➛${prefix}ytmp4 (url do search) 
│❖➛${prefix}ytmp3 (url do search) 
│❖➛${prefix}jooxplay (nome da msc)
│❖➛${prefix}play (Música q c qr)
│❖➛${prefix}play2 (Música q c qr)
│❖➛${prefix}play3 (Música q c qr)
└──────────────
│「 LOGOS/CRIAR (TXT) 」
│ 
│❖➛${prefix}narutobanner (txt)
│❖➛${prefix}bannergold (txt)
│❖➛${prefix}lobometal (txt)
│❖➛${prefix}metalgold (txt)
│❖➛${prefix}shadow (txt)
│❖➛${prefix}folha (txt)
│❖➛${prefix}folha2 (txt)
│❖➛${prefix}folha3 (txt)
│❖➛${prefix}folha4 (txt)
│❖➛${prefix}folha5,(txt)
│❖➛${prefix}neondevil (txt)
│❖➛${prefix}show (txt)
│❖➛${prefix}bracelet (txt)
│❖➛${prefix}amongus (txt)
│❖➛${prefix}placa (txt)
│❖➛${prefix}copo (txt)
│❖➛${prefix}papel (txt)
│❖➛${prefix}madeira (txt)
│❖➛${prefix}grafity (txt) 
│❖➛${prefix}thunder (txt)
│❖➛${prefix}toxic (txt)
│❖➛${prefix}harryp (txt)
│❖➛${prefix}glitch (txt)
│❖➛${prefix}wooden (txt)
│❖➛${prefix}romantic (txt)
│❖➛${prefix}Gold (txt)
│❖➛${prefix}neon2 (txt)
│❖➛${prefix}neon (txt)
│❖➛${prefix}comporn (txt|txt)
│❖➛${prefix}comentarioL (txt|txt)
│❖➛${prefix}cslogo (txt)
│❖➛${prefix}8bit (txt)
│❖➛${prefix}cemiterio (txt)
│❖➛${prefix}googlelogo (txt)
│❖➛${prefix}grass (txt)
│❖➛${prefix}flower (txt)
│❖➛${prefix}batle (txt)
│❖➛${prefix}coffe (txt)
│❖➛${prefix}coffe2 (txt)
│❖➛${prefix}pubg (txt)
│❖➛${prefix}horror (txt)
│❖➛${prefix}fire (txt)
│❖➛${prefix}stone (txt)
│❖➛${prefix}break (txt)
│❖➛${prefix}hallowen (txt)
│❖➛${prefix}vidro (txt)
│❖➛${prefix}carbon (txt)
│❖➛${prefix}metalblue (txt)
│❖➛${prefix}pink (txt)
│❖➛${prefix}colaq (txt)
│❖➛${prefix}ossos (txt)
│❖➛${prefix}blood (txt)
│❖➛${prefix}areia (txt)
│❖➛${prefix}natal (txt)
│❖➛${prefix}style (txt)
│❖➛${prefix}neve (txt)
│❖➛${prefix}pornhub (txt) 
│❖➛${prefix}space (txt)
│❖➛${prefix}jokerlogo (txt)
│❖➛${prefix}love (txt)
│❖➛${prefix}lava (txt)
│❖➛${prefix}luxury (txt)
│❖➛${prefix}steel (txt)
│
└──────────────
│️「 INFO 」
│
│NOME : ${NamaOwner}
│INSTA : ${instagram}
│NÚMERO : ${ownerNumber} 
│YOUTUBE :〘 ${ytb} 〙
│
╰──「 ${NamaBot} 」`
}

exports.help = help





