'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5424d650dd09f0c83955950b294e59ba",
"assets/AssetManifest.bin.json": "fa304642787e7108819c94478238721d",
"assets/AssetManifest.json": "63a4afb096596fda2dd927d3f93469b6",
"assets/assets/data/UserContent.json": "7e1737da3ca45e43ebd7f172d12926fa",
"assets/assets/data/UserDesigns.json": "58193fed0f59f04f9edca4afb3f1a710",
"assets/assets/data/UserStats.json": "852939771987dcdd7625726b27163aea",
"assets/assets/images/audio.png": "73d6a431d9105b6b9dce6b13633f2b15",
"assets/assets/images/auth.png": "9e9bf46b175521037764b2392f274a2d",
"assets/assets/images/books.png": "225c32d927f997ea4b4275fdfe069b0f",
"assets/assets/images/books0.png": "6610cc212ba9d3f456fc28a4738ace1b",
"assets/assets/images/books00.png": "1b012193633fe9707d7907c678504b22",
"assets/assets/images/books000.png": "95bd7de49f46277fc6ea5da60319292a",
"assets/assets/images/bot.png": "d14e04f2994f21a5d55b5a2f156c192b",
"assets/assets/images/boxes.png": "a9d988cd6785918680f105ce032970be",
"assets/assets/images/boxes0.png": "2c8cf67c66ceafff916cf71f31f19162",
"assets/assets/images/boxes00.png": "ad3700f671017803fb3f20aed25027cd",
"assets/assets/images/boxes1.png": "2d8bc81641bfaf92c6d70713a69896e0",
"assets/assets/images/boxes2.png": "27bad6c264c272f6b2ea14de6b41f500",
"assets/assets/images/card.png": "fb29299484b2779a4c0042cfcc4c92e9",
"assets/assets/images/cards.png": "8402baf68eacc926a655a5eb7f4f7ff7",
"assets/assets/images/cards0.png": "12371130ddb3a05d572515271324e6f1",
"assets/assets/images/cards00.png": "41e1ae4bb70bd2b89f6c0a224562d097",
"assets/assets/images/cards1.png": "892c6094d01d82aa1a83000715a97b20",
"assets/assets/images/cards2.png": "ebf05d45959f99fd6b3b71369dab242e",
"assets/assets/images/cards3.png": "bc3a93e30b7e6e97276a980becc212f3",
"assets/assets/images/cases.png": "dba0afa3ac6ab5794cc3980aa6d5f1bc",
"assets/assets/images/cases0.png": "e710eaafefc63f2a7d8cbb3aef8638e4",
"assets/assets/images/cases00.png": "cf7cb538cbb143b4cd846aff2c3f19c3",
"assets/assets/images/cases000.png": "c9ac6693e2fc9ae64669fb58b1812abe",
"assets/assets/images/cases0000.png": "e6bea6ac19e0cb6ac07027c71d6d368a",
"assets/assets/images/cases00000.png": "42c11dfb45695143d2c104b08533ab26",
"assets/assets/images/cases2.png": "3a49ed67140d0625a7ee1eb655bdf825",
"assets/assets/images/decks.png": "070e15fa01557a47ffd2a348ba7e7fc8",
"assets/assets/images/decks0.png": "6dda97b5b924bfb604576ed6299e8e51",
"assets/assets/images/decks00.png": "e66a093ec2647dd61473f451f1ed2ecb",
"assets/assets/images/decks1.png": "0e33f0a0bf8262723d168abe74b572a8",
"assets/assets/images/decks2.png": "b16b8cf6983d1e4b45e2e4da69c452ca",
"assets/assets/images/def/abitur_bw.png": "ab6f115eaab22a7266e777a5937618a2",
"assets/assets/images/def/ankunft_im_dorf.jpg": "d01d8ecb9fa5dcfbad53545c9eb1fb8d",
"assets/assets/images/def/Erdgeist%2520Symbolik%2520in%2520Faust%2520II%2520(Symbolik%2520und%2520Allegorie%2520in%2520Faust%2520II).png": "41fab561ee1896f9971afb4841835045",
"assets/assets/images/def/faust.jpg": "b8717e14187536ccc30d9134d2325066",
"assets/assets/images/def/Fausts%2520und%2520Gretchens%2520Beziehung%2520(Charakterbeziehungen).png": "68bf8b755e14524ee3b1dfc8f2397224",
"assets/assets/images/def/Gerade_Koordinatenform.PNG": "0eaefa516306608858cdb0e0e0645741",
"assets/assets/images/def/Gretchens%2520Trag%25C3%25B6die%2520(Charakterentwicklung).png": "f358e7d80e91f29cea1c114ae232aa61",
"assets/assets/images/def/Gretchentrag%25C3%25B6die%2520(Hauptthema).png": "3532f5aaebe47f1f6aeb4f0705bb896c",
"assets/assets/images/def/Helenen-Symbolik%2520in%2520Faust%2520II%2520(Symbolik%2520und%2520Allegorie%2520in%2520Faust%2520II).png": "771a3ba1176beb372bcec9db09539bc2",
"assets/assets/images/def/lotte.jpg": "772c15db3e975dd0aa6954c198dbb390",
"assets/assets/images/def/mephisto.jpg": "e7bb274d7985c1fed553616d5fc459cf",
"assets/assets/images/def/Mephistopheles%2520in%2520Faust%2520II%2520-%2520Eigenschaften%2520und%2520Charakterz%25C3%25BCge%2520(Charakteranalyse%2520-%2520Faust%2520II).png": "bfa10c8bddef07c7a26ef691ebd06a57",
"assets/assets/images/def/Mephistopheles%2520in%2520Faust%2520II%2520-%2520Identit%25C3%25A4t%2520(Charakteranalyse%2520-%2520Faust%2520II).png": "44286c5e069399a38ff2ce3f893acef2",
"assets/assets/images/def/Mephistopheles%2520in%2520Faust%2520II%2520-%2520Rolle%2520und%2520Funktion%2520(Charakteranalyse%2520-%2520Faust%2520II).png": "e80603c1a09089ca431f87508c5adfd7",
"assets/assets/images/def/Mephistopheles%2520Symbolik%2520in%2520Faust%2520II%2520(Symbolik%2520und%2520Allegorie%2520in%2520Faust%2520II).png": "03465d50235495c0e448ce236449c4cd",
"assets/assets/images/def/studierzimmer.jpg": "5aac4af8223b1cd271b5568a0179515c",
"assets/assets/images/def/Welt%2520in%2520Faust%2520II%25201.png": "3f7f70e0620155e8f5c01c26544e446c",
"assets/assets/images/def/Welt%2520in%2520Faust%2520II%25202.png": "ab07232ee72e9fd321dae25e4e7e4779",
"assets/assets/images/def/Welt%2520in%2520Faust%2520II%25203.png": "ca9ea2f2cde805977209c21026840497",
"assets/assets/images/def/werther.jpg": "b6d869e31be0982ba42e424d677ea901",
"assets/assets/images/dice.png": "3db77282722b030d3bde3657779f7740",
"assets/assets/images/document.png": "1b19d893b558e29dbae139d7197a3c5e",
"assets/assets/images/ErsteHilfe.jpg": "3253244f22bd3a3727327823997fb72e",
"assets/assets/images/fact_icon.png": "79731f99e9dc74a2d8f5118825cea449",
"assets/assets/images/fast.png": "56daa78c50f1f4481d73a513968fff34",
"assets/assets/images/favicon.png": "41e1ae4bb70bd2b89f6c0a224562d097",
"assets/assets/images/favicon0.png": "b0b49ebb3ab636953d4b215d8b476643",
"assets/assets/images/favicon00.png": "41e1ae4bb70bd2b89f6c0a224562d097",
"assets/assets/images/favicon1.png": "fd8077e48118c9ff9dece0f6b0d915f2",
"assets/assets/images/fks/0e485914-d742-4e4f-90b0-9463bd220db5.webp": "9c96e35435d5ed2f569f4035e1f88daa",
"assets/assets/images/fks/22edcd54-b2a1-4e6c-b1da-392f39b783b7.webp": "4d22d807a5fe2824923d10aa539dfbf2",
"assets/assets/images/fks/346b7878-e6fa-4e61-97e5-68c436a07ad5.webp": "11637b1558a8aa9967fd54a6807b605f",
"assets/assets/images/fks/4c01f33f-ae8e-40bb-a622-5da0d5b55825.webp": "68b73827709265d4f94d10db35ae3fd1",
"assets/assets/images/fks/8accdc4e-2dad-4fce-9bf0-113abae1ecc6.webp": "178ac307e4f845c206496942a3ff706e",
"assets/assets/images/fks/ABC%2520Handbuch%2520DE.png": "72a66c0681eb231bf7abf5f517742fd0",
"assets/assets/images/fks/ABC-Eins%25C3%25A4tze.png": "dae56ed0b69eb7307e8a473b88ab4240",
"assets/assets/images/fks/ABCFaltkartenDE.png": "d0b340814fa7bed4a54ffaccf162c2c6",
"assets/assets/images/fks/Allgemeines_Kompetenzmodell_de.jpg": "babcf1de8ee7126dc0833eab36695363",
"assets/assets/images/fks/Basiswissen%2520DE.png": "508670c8fd7ba6037c2ab41a800f70ac",
"assets/assets/images/fks/Einsatzphasen_Feuerwehr.png": "b64a73af9da0617a5370d1abf757b4d7",
"assets/assets/images/fks/Einsatzphasen_Symbol_R_de.jpg": "210c740328cd36e9c0852339e9071df2",
"assets/assets/images/fks/Fachkompetenz.png": "4100d82aaff9ef94d93c092678973ed1",
"assets/assets/images/fks/Feuerwehreinsatz.png": "d7a09560626cbbff680f184266a4964d",
"assets/assets/images/fks/FKS_Geschaeftsberichte.png": "f746cdaf5ca41b1f33a97f45b28429cd",
"assets/assets/images/fks/FKS_Geschaeftsbericht_2022_de.png": "f8a9f2523cf6e9e34290e77eb9e47452",
"assets/assets/images/fks/Fuehrungsrhytmus_Fuehrungsablauf_de.png": "a39eb4c2520b467cf5636b44f4ea2107",
"assets/assets/images/fks/Handbuecher.png": "d1fff10da561f73b2ce6aa7917f1e9d6",
"assets/assets/images/fks/logo_fks_cssp_csp.webp": "67e952c27ba2cf473383262cfa8a6817",
"assets/assets/images/fks/Reglement%2520Basiswissen%2520DE.png": "5ac4977f13af7ba44c1d328134219d28",
"assets/assets/images/fks/Schweiz_Kantone.png": "c5570b1df859765d3c30d2803f5dfff9",
"assets/assets/images/fks/Selbstkompetenz.png": "b08f369dafd8f0b7f32ba9e55ee7009a",
"assets/assets/images/fks/Sozialkompetenz.png": "7e008c803ad50c389b0abd90b8585b6b",
"assets/assets/images/Freiburg.jpg": "3f73c82ad40e1186d8541b3f6e8cd5cb",
"assets/assets/images/gdpr/privacy.png": "38d1faa869854eb173cb701985c27cc9",
"assets/assets/images/goals.png": "052d97ddd12c180d202f16a7bd37bcc3",
"assets/assets/images/grace/hotel%2520grace%2520luxus.jpg": "0fe4cc4c6fb74645313ff7ff7f4beb1c",
"assets/assets/images/grace/hotel-grace-logo.png": "1d0c490acba4d1f27991cc37b5cf7719",
"assets/assets/images/grace/organizational_culture.webp": "d3501e9295b7a5645b4c74b2edcd4721",
"assets/assets/images/grace/polo%2520on%2520snow.jpg": "2d7abeaa857c356509c4538158a4f938",
"assets/assets/images/grace/st.%2520moritz.png": "36cbe28b24e0a3ae28ff97d8c3c0eb33",
"assets/assets/images/grace/wintersport.png": "21923e3cfb2d3772975013f168fadcd1",
"assets/assets/images/ibk-snow/1024-resize-of-69262f98-a2cb-4854-a3ca-a256bbb4e09c..webp": "d53b9d63cc1ec9ac119ce6312526f2f8",
"assets/assets/images/ibk-snow/600-resize-of-Logo%2520IBK-Snow.webp": "1dd1fbda06a500aa4b859cd33ef6698f",
"assets/assets/images/ibk-snow/basics.png": "1f77d02fe44c569c9566a40d49aa2811",
"assets/assets/images/image_placeholder.png": "f71031b6cf989dcc1c0903fa799d35c1",
"assets/assets/images/Konstanz.jpg": "e0fa894d0d632ad81dd1e54d3db4d4db",
"assets/assets/images/libraries.png": "7b29170d00001d8b988e460cb8db9c0d",
"assets/assets/images/libraries0.png": "1b5a57cdd00c48294a3ea76bc71aa7b0",
"assets/assets/images/libraries00.png": "662192582b75ae40cdf73c5db6d1fcf5",
"assets/assets/images/libraries000.png": "8b04c6ef1bd94a75c46b0f995c30aba2",
"assets/assets/images/login.png": "10b56ee827f6fbc33be33f248aef3c84",
"assets/assets/images/new.png": "78d969bf8d6c5ddc1248719780c8eb8a",
"assets/assets/images/new0.png": "8c2d53b36a0288a19994ddb2955388c7",
"assets/assets/images/pdf.png": "afd8f140f743d4a3bff08539dcd772d4",
"assets/assets/images/plus.png": "0f26184387c00fbb2d6482ee4af65894",
"assets/assets/images/profile.png": "9a3fef34f5b483ea1d7a4f2b1c6e822e",
"assets/assets/images/quiz_button.png": "a1c3c827e00655a2162c8485002a61b3",
"assets/assets/images/quiz_icon.png": "5bee456ee18635934c47359f0acde80a",
"assets/assets/images/remember.png": "a0f56945ee328dbba1b2950e5e6b0091",
"assets/assets/images/search.png": "c430e5c32559d1b8f5c41c92eb26a470",
"assets/assets/images/settings.png": "908502c9deb38059180f3eb3834b1a1d",
"assets/assets/images/spaces.png": "c1fa05038abc91e5ffbb1642aef15587",
"assets/assets/images/startpaper.png": "8d9f5e3e7a5921b5f9c4e61aaea9c563",
"assets/assets/images/statistics.png": "1d7203c2f6dafedddcadad197dcbc587",
"assets/assets/images/study.png": "759189c547963bf7bf7fbdef8a146acb",
"assets/assets/images/test_card_img.png": "b84a5fdd04e2320507285b6eea576bb7",
"assets/assets/images/TODO.png": "20e049992dc4ce8de2b2558b9317e1ac",
"assets/assets/images/topic.png": "0a8418eb22bf56c5f94590a82e85100b",
"assets/assets/images/topic2.png": "83827a321807de94dbf511bb02d3fbb2",
"assets/assets/images/topic2.svg": "6daf9d446ed28b72e8581924c91d8114",
"assets/assets/images/webpage.png": "83097aefa75652d67a02cc0bd0da5a4d",
"assets/assets/images/wikipedia.png": "5b9cd6a45e612d75fd8291e9b2e7b29f",
"assets/assets/images/youtube.png": "acc302f07423c6b9bd98f5f9dc1f56f1",
"assets/assets/images/Z%25C3%25BCrich.jpg": "859dbd1e1f011109e4a1437e4aed5ff9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "56f400c54596cfa4d09e3c7202dc3d55",
"assets/NOTICES": "4cad2b864bd0148262e5ea4482ca0646",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "41e1ae4bb70bd2b89f6c0a224562d097",
"favicon0.png": "bc3a93e30b7e6e97276a980becc212f3",
"favicon1.png": "5789ab7263eeb98bbc0abd3e96bae32d",
"favicon2.png": "fd8077e48118c9ff9dece0f6b0d915f2",
"favicon3.png": "f2aae9707e256e5622844c8ea4628a7d",
"favicon_fks.png": "67e952c27ba2cf473383262cfa8a6817",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "27a0b8870694777d08188cd8c5b74025",
"index.html": "9641395277f9f91325ae4726acfdcf25",
"/": "9641395277f9f91325ae4726acfdcf25",
"main.dart.js": "b481e845dbb4b81188b34d2a5dc10f11",
"manifest.json": "e1bc707244e81af6cc66ded0ddca001a",
"philcreates.github.io/.git/COMMIT_EDITMSG": "f80a1fc02bc2d2c748d1e17ab94da4de",
"philcreates.github.io/.git/config": "c402fc1ae74346928cdf24a3c655defe",
"philcreates.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"philcreates.github.io/.git/FETCH_HEAD": "afc2368c2e2c95e6e4ab3b9181ff1506",
"philcreates.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"philcreates.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"philcreates.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"philcreates.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"philcreates.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"philcreates.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"philcreates.github.io/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"philcreates.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"philcreates.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"philcreates.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"philcreates.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"philcreates.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"philcreates.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"philcreates.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"philcreates.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"philcreates.github.io/.git/index": "d8e5200b6b49269c5a2ac39c4f815bce",
"philcreates.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"philcreates.github.io/.git/logs/HEAD": "c6960782b976c0db2dae6b2ddb2b3461",
"philcreates.github.io/.git/logs/refs/heads/main": "c6960782b976c0db2dae6b2ddb2b3461",
"philcreates.github.io/.git/logs/refs/remotes/origin/HEAD": "1294139c3727b9e4c84144abdc55fb86",
"philcreates.github.io/.git/logs/refs/remotes/origin/main": "2cc00e48287af49a823b86c04eed0ed6",
"philcreates.github.io/.git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
"philcreates.github.io/.git/objects/1b/2fbbf104baa58e239807eb682d92dad98db2b4": "00412a3795cbf2001c8aa25ae0faea90",
"philcreates.github.io/.git/objects/1d/e83a380b0bd274670ced1b8a8548f154408273": "680f535aaf89e8665e27bb34f5f70838",
"philcreates.github.io/.git/objects/28/3dbacc07c5da03733486591258c2db96255cbd": "c96d318d3c2a384622e45aeef717635f",
"philcreates.github.io/.git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
"philcreates.github.io/.git/objects/3f/b00ea327bf39ec67b9e1dc588a9e52584fc5bc": "e12695c78e947955fc8237a8fec8ed6d",
"philcreates.github.io/.git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
"philcreates.github.io/.git/objects/48/2607f08e6ba685422ce7f7a38631ff1894768d": "409d350850ea300e860423095c1806a6",
"philcreates.github.io/.git/objects/48/909339e9cda8b52de7c8c10cc755e5453604e5": "1520685d3e91269bff018ce18c61e86c",
"philcreates.github.io/.git/objects/48/a157539707a08fa90b296f6c9442bd4e53e719": "dc75331d606de89b1e771b2e7818ccc5",
"philcreates.github.io/.git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
"philcreates.github.io/.git/objects/4c/7c45527be9a029044049f8c1782bd3282f3953": "dbf53e2697c7f6926ab436521c554ad0",
"philcreates.github.io/.git/objects/4c/dc15c6f91e56f5fd06b9fd28308a4d633203f2": "2d224888e4d6c16fc64d8d3200c78473",
"philcreates.github.io/.git/objects/4e/2597e7f8ce4b861212559052571b97e48072dd": "38b3dafbd36f2d99b907aa411d099722",
"philcreates.github.io/.git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
"philcreates.github.io/.git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
"philcreates.github.io/.git/objects/55/cc32e33d183ec0f8878ae127620df22dbe3b7e": "2f938700d3f91a544fe6dabf0e916c64",
"philcreates.github.io/.git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
"philcreates.github.io/.git/objects/62/384ac34d8ecf9c347d56e1521ec84cc1967ab9": "2c57e33ecf91169f4b9e8b67a9e43cf2",
"philcreates.github.io/.git/objects/62/508927cff88d973f28d74e7e851a95b56f593a": "788486e8e74893f0291e87b6e8dd3eb9",
"philcreates.github.io/.git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
"philcreates.github.io/.git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
"philcreates.github.io/.git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
"philcreates.github.io/.git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
"philcreates.github.io/.git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
"philcreates.github.io/.git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
"philcreates.github.io/.git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
"philcreates.github.io/.git/objects/77/7bf82bc49118719efb2d10ee124d0545420e71": "f3bfe0d8e0ab70942aa65c78ffdb5299",
"philcreates.github.io/.git/objects/7c/333158a3b6cc591239a0f947cd0039b87b232d": "3052d8963f0f10fb4d882e081b07d99d",
"philcreates.github.io/.git/objects/88/bae4391ec2833578af9d28bd41ac03e3e74b20": "15748d4409d75b732961b216893179ec",
"philcreates.github.io/.git/objects/99/1769982128b5f062671db203084a02b8a83fdf": "2b5bf570857617934daaef88ed56f2e5",
"philcreates.github.io/.git/objects/99/6f832f73c42b502853ef0d909404898a22dd89": "4fa47bfba0dfa2b326cfd2b590c1666a",
"philcreates.github.io/.git/objects/9b/7e03c65efa3fd237534850f65afe50cbde322a": "ed1ce6c51da956f8ae57d3b02e70f146",
"philcreates.github.io/.git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
"philcreates.github.io/.git/objects/9d/4d061e3bf5d549195dce7e737e3e4bdc08dd2c": "804f3dc6666216ca1080605cbf7bf748",
"philcreates.github.io/.git/objects/ad/b2132d26e2a612df4f45314c0a36d2d0d2d92c": "3f5798a908ec5ad1de181cd636f998a2",
"philcreates.github.io/.git/objects/b8/c7779f9fc31d4b95076fdd0ad5f5853f984b6a": "3680919f207257025bba8228cfb9015b",
"philcreates.github.io/.git/objects/b9/2eff7153519aa977d1bc76b73412e2e7084562": "d343ab156cecd6a774152c3fd653ae6d",
"philcreates.github.io/.git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
"philcreates.github.io/.git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
"philcreates.github.io/.git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
"philcreates.github.io/.git/objects/c8/e5944568db6585758f72e7f86ea36651bbfff8": "9a95980b4dc37013134cb50421c5a321",
"philcreates.github.io/.git/objects/ca/108e12c64c16c6cde56a842cb40771b48ed782": "c27ec9fbeed3a62b241716a32475b25a",
"philcreates.github.io/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"philcreates.github.io/.git/objects/d8/cee6d974a25f5b959e7aa96b2dd3622a040465": "f72cbc3d6e0f6c2f56d13f9e5cf5360b",
"philcreates.github.io/.git/objects/db/30e1545eb29471fe08e8f19f1f345db8bd1ab4": "d63883bfd7c11c911436113943d26019",
"philcreates.github.io/.git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
"philcreates.github.io/.git/objects/df/fec740dd3d5abaf9893a0747bf8d16120ef5c9": "a571a8a10ccf2ff09ffbe2d638da722d",
"philcreates.github.io/.git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
"philcreates.github.io/.git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
"philcreates.github.io/.git/objects/ea/06d9936c5c3d505bd4f9eb30d091926101d013": "930d94ec04ba8d806a61859d5838ad96",
"philcreates.github.io/.git/objects/ee/74998e628e4dda518dcb73054afba17a94691b": "5857eb6ca43edbe809ca1f91731bafb7",
"philcreates.github.io/.git/objects/f0/b23a869172002c5e8f26243a9deea4680f179e": "881ff86926911a3858dca03649069c0a",
"philcreates.github.io/.git/objects/f1/37ecd220397ddd705bb811564fc94662a5cdd9": "19147854c9a0ab3621d9f522474640fd",
"philcreates.github.io/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"philcreates.github.io/.git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
"philcreates.github.io/.git/objects/pack/pack-c3e80ddd0c56bbcb4d32e86e3b5fd1c51430dbdf.idx": "4d2a48c4cb1a495ae04a6d9b6c9d6787",
"philcreates.github.io/.git/objects/pack/pack-c3e80ddd0c56bbcb4d32e86e3b5fd1c51430dbdf.pack": "1ab61a6342f525af6636a43ad9c26e2d",
"philcreates.github.io/.git/objects/pack/pack-c3e80ddd0c56bbcb4d32e86e3b5fd1c51430dbdf.rev": "cdb52c975111a277712bce9641ac7a9d",
"philcreates.github.io/.git/ORIG_HEAD": "206641ec24af88b119276556107b3a7b",
"philcreates.github.io/.git/packed-refs": "55f9e45f4db06818ce8c2b62e8908cc9",
"philcreates.github.io/.git/refs/heads/main": "a71d72b740cb72765c870714b251e63f",
"philcreates.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"philcreates.github.io/.git/refs/remotes/origin/main": "a71d72b740cb72765c870714b251e63f",
"philcreates.github.io/assets/AssetManifest.bin": "5424d650dd09f0c83955950b294e59ba",
"philcreates.github.io/assets/AssetManifest.bin.json": "fa304642787e7108819c94478238721d",
"philcreates.github.io/assets/AssetManifest.json": "63a4afb096596fda2dd927d3f93469b6",
"philcreates.github.io/assets/assets/data/Azure%20Cloud.json": "be6c1308a27665293d3130a59dfc98b3",
"philcreates.github.io/assets/assets/data/Icecream%20Rolls.json": "81689e6e2f91926f3a8ffbd7ffa1f297",
"philcreates.github.io/assets/assets/data/L%C3%B6schwasser.json": "50e046e8d9ced657fbe26f4e5571cea2",
"philcreates.github.io/assets/assets/data/Nahrungserg%C3%A4nzungsmittel.json": "3e87a4132ffbcefa9d02b49401201ea2",
"philcreates.github.io/assets/assets/data/UserContent.json": "7e1737da3ca45e43ebd7f172d12926fa",
"philcreates.github.io/assets/assets/data/UserDesigns.json": "58193fed0f59f04f9edca4afb3f1a710",
"philcreates.github.io/assets/assets/data/UserStats.json": "852939771987dcdd7625726b27163aea",
"philcreates.github.io/assets/assets/images/audio.png": "73d6a431d9105b6b9dce6b13633f2b15",
"philcreates.github.io/assets/assets/images/auth.png": "9e9bf46b175521037764b2392f274a2d",
"philcreates.github.io/assets/assets/images/books.png": "225c32d927f997ea4b4275fdfe069b0f",
"philcreates.github.io/assets/assets/images/books0.png": "6610cc212ba9d3f456fc28a4738ace1b",
"philcreates.github.io/assets/assets/images/books00.png": "1b012193633fe9707d7907c678504b22",
"philcreates.github.io/assets/assets/images/books000.png": "95bd7de49f46277fc6ea5da60319292a",
"philcreates.github.io/assets/assets/images/bot.png": "d14e04f2994f21a5d55b5a2f156c192b",
"philcreates.github.io/assets/assets/images/boxes.png": "a9d988cd6785918680f105ce032970be",
"philcreates.github.io/assets/assets/images/boxes0.png": "2c8cf67c66ceafff916cf71f31f19162",
"philcreates.github.io/assets/assets/images/boxes00.png": "ad3700f671017803fb3f20aed25027cd",
"philcreates.github.io/assets/assets/images/boxes1.png": "2d8bc81641bfaf92c6d70713a69896e0",
"philcreates.github.io/assets/assets/images/boxes2.png": "27bad6c264c272f6b2ea14de6b41f500",
"philcreates.github.io/assets/assets/images/card.png": "fb29299484b2779a4c0042cfcc4c92e9",
"philcreates.github.io/assets/assets/images/cards.png": "8402baf68eacc926a655a5eb7f4f7ff7",
"philcreates.github.io/assets/assets/images/cards0.png": "12371130ddb3a05d572515271324e6f1",
"philcreates.github.io/assets/assets/images/cards00.png": "41e1ae4bb70bd2b89f6c0a224562d097",
"philcreates.github.io/assets/assets/images/cards1.png": "892c6094d01d82aa1a83000715a97b20",
"philcreates.github.io/assets/assets/images/cards2.png": "ebf05d45959f99fd6b3b71369dab242e",
"philcreates.github.io/assets/assets/images/cards3.png": "bc3a93e30b7e6e97276a980becc212f3",
"philcreates.github.io/assets/assets/images/cases.png": "dba0afa3ac6ab5794cc3980aa6d5f1bc",
"philcreates.github.io/assets/assets/images/cases0.png": "e710eaafefc63f2a7d8cbb3aef8638e4",
"philcreates.github.io/assets/assets/images/cases00.png": "cf7cb538cbb143b4cd846aff2c3f19c3",
"philcreates.github.io/assets/assets/images/cases000.png": "c9ac6693e2fc9ae64669fb58b1812abe",
"philcreates.github.io/assets/assets/images/cases0000.png": "e6bea6ac19e0cb6ac07027c71d6d368a",
"philcreates.github.io/assets/assets/images/cases00000.png": "42c11dfb45695143d2c104b08533ab26",
"philcreates.github.io/assets/assets/images/cases2.png": "3a49ed67140d0625a7ee1eb655bdf825",
"philcreates.github.io/assets/assets/images/decks.png": "070e15fa01557a47ffd2a348ba7e7fc8",
"philcreates.github.io/assets/assets/images/decks0.png": "6dda97b5b924bfb604576ed6299e8e51",
"philcreates.github.io/assets/assets/images/decks00.png": "e66a093ec2647dd61473f451f1ed2ecb",
"philcreates.github.io/assets/assets/images/decks1.png": "0e33f0a0bf8262723d168abe74b572a8",
"philcreates.github.io/assets/assets/images/decks2.png": "b16b8cf6983d1e4b45e2e4da69c452ca",
"philcreates.github.io/assets/assets/images/def/abitur_bw.png": "ab6f115eaab22a7266e777a5937618a2",
"philcreates.github.io/assets/assets/images/def/ankunft_im_dorf.jpg": "d01d8ecb9fa5dcfbad53545c9eb1fb8d",
"philcreates.github.io/assets/assets/images/def/Erdgeist%2520Symbolik%2520in%2520Faust%2520II%2520(Symbolik%2520und%2520Allegorie%2520in%2520Faust%2520II).png": "41fab561ee1896f9971afb4841835045",
"philcreates.github.io/assets/assets/images/def/faust.jpg": "b8717e14187536ccc30d9134d2325066",
"philcreates.github.io/assets/assets/images/def/Fausts%2520und%2520Gretchens%2520Beziehung%2520(Charakterbeziehungen).png": "68bf8b755e14524ee3b1dfc8f2397224",
"philcreates.github.io/assets/assets/images/def/Gerade_Koordinatenform.PNG": "0eaefa516306608858cdb0e0e0645741",
"philcreates.github.io/assets/assets/images/def/Gretchens%2520Trag%25C3%25B6die%2520(Charakterentwicklung).png": "f358e7d80e91f29cea1c114ae232aa61",
"philcreates.github.io/assets/assets/images/def/Gretchentrag%25C3%25B6die%2520(Hauptthema).png": "3532f5aaebe47f1f6aeb4f0705bb896c",
"philcreates.github.io/assets/assets/images/def/Helenen-Symbolik%2520in%2520Faust%2520II%2520(Symbolik%2520und%2520Allegorie%2520in%2520Faust%2520II).png": "771a3ba1176beb372bcec9db09539bc2",
"philcreates.github.io/assets/assets/images/def/lotte.jpg": "772c15db3e975dd0aa6954c198dbb390",
"philcreates.github.io/assets/assets/images/def/mephisto.jpg": "e7bb274d7985c1fed553616d5fc459cf",
"philcreates.github.io/assets/assets/images/def/Mephistopheles%2520in%2520Faust%2520II%2520-%2520Eigenschaften%2520und%2520Charakterz%25C3%25BCge%2520(Charakteranalyse%2520-%2520Faust%2520II).png": "bfa10c8bddef07c7a26ef691ebd06a57",
"philcreates.github.io/assets/assets/images/def/Mephistopheles%2520in%2520Faust%2520II%2520-%2520Identit%25C3%25A4t%2520(Charakteranalyse%2520-%2520Faust%2520II).png": "44286c5e069399a38ff2ce3f893acef2",
"philcreates.github.io/assets/assets/images/def/Mephistopheles%2520in%2520Faust%2520II%2520-%2520Rolle%2520und%2520Funktion%2520(Charakteranalyse%2520-%2520Faust%2520II).png": "e80603c1a09089ca431f87508c5adfd7",
"philcreates.github.io/assets/assets/images/def/Mephistopheles%2520Symbolik%2520in%2520Faust%2520II%2520(Symbolik%2520und%2520Allegorie%2520in%2520Faust%2520II).png": "03465d50235495c0e448ce236449c4cd",
"philcreates.github.io/assets/assets/images/def/studierzimmer.jpg": "5aac4af8223b1cd271b5568a0179515c",
"philcreates.github.io/assets/assets/images/def/Welt%2520in%2520Faust%2520II%25201.png": "3f7f70e0620155e8f5c01c26544e446c",
"philcreates.github.io/assets/assets/images/def/Welt%2520in%2520Faust%2520II%25202.png": "ab07232ee72e9fd321dae25e4e7e4779",
"philcreates.github.io/assets/assets/images/def/Welt%2520in%2520Faust%2520II%25203.png": "ca9ea2f2cde805977209c21026840497",
"philcreates.github.io/assets/assets/images/def/werther.jpg": "b6d869e31be0982ba42e424d677ea901",
"philcreates.github.io/assets/assets/images/dice.png": "3db77282722b030d3bde3657779f7740",
"philcreates.github.io/assets/assets/images/document.png": "1b19d893b558e29dbae139d7197a3c5e",
"philcreates.github.io/assets/assets/images/ErsteHilfe.jpg": "3253244f22bd3a3727327823997fb72e",
"philcreates.github.io/assets/assets/images/fact_icon.png": "79731f99e9dc74a2d8f5118825cea449",
"philcreates.github.io/assets/assets/images/fast.png": "56daa78c50f1f4481d73a513968fff34",
"philcreates.github.io/assets/assets/images/favicon.png": "41e1ae4bb70bd2b89f6c0a224562d097",
"philcreates.github.io/assets/assets/images/favicon0.png": "b0b49ebb3ab636953d4b215d8b476643",
"philcreates.github.io/assets/assets/images/favicon00.png": "41e1ae4bb70bd2b89f6c0a224562d097",
"philcreates.github.io/assets/assets/images/favicon1.png": "fd8077e48118c9ff9dece0f6b0d915f2",
"philcreates.github.io/assets/assets/images/fks/0e485914-d742-4e4f-90b0-9463bd220db5.webp": "9c96e35435d5ed2f569f4035e1f88daa",
"philcreates.github.io/assets/assets/images/fks/22edcd54-b2a1-4e6c-b1da-392f39b783b7.webp": "4d22d807a5fe2824923d10aa539dfbf2",
"philcreates.github.io/assets/assets/images/fks/346b7878-e6fa-4e61-97e5-68c436a07ad5.webp": "11637b1558a8aa9967fd54a6807b605f",
"philcreates.github.io/assets/assets/images/fks/4c01f33f-ae8e-40bb-a622-5da0d5b55825.webp": "68b73827709265d4f94d10db35ae3fd1",
"philcreates.github.io/assets/assets/images/fks/8accdc4e-2dad-4fce-9bf0-113abae1ecc6.webp": "178ac307e4f845c206496942a3ff706e",
"philcreates.github.io/assets/assets/images/fks/ABC%2520Handbuch%2520DE.png": "72a66c0681eb231bf7abf5f517742fd0",
"philcreates.github.io/assets/assets/images/fks/ABC-Eins%25C3%25A4tze.png": "dae56ed0b69eb7307e8a473b88ab4240",
"philcreates.github.io/assets/assets/images/fks/ABCFaltkartenDE.png": "d0b340814fa7bed4a54ffaccf162c2c6",
"philcreates.github.io/assets/assets/images/fks/Allgemeines_Kompetenzmodell_de.jpg": "babcf1de8ee7126dc0833eab36695363",
"philcreates.github.io/assets/assets/images/fks/Basiswissen%2520DE.png": "508670c8fd7ba6037c2ab41a800f70ac",
"philcreates.github.io/assets/assets/images/fks/Einsatzphasen_Feuerwehr.png": "b64a73af9da0617a5370d1abf757b4d7",
"philcreates.github.io/assets/assets/images/fks/Einsatzphasen_Symbol_R_de.jpg": "210c740328cd36e9c0852339e9071df2",
"philcreates.github.io/assets/assets/images/fks/Fachkompetenz.png": "4100d82aaff9ef94d93c092678973ed1",
"philcreates.github.io/assets/assets/images/fks/Feuerwehreinsatz.png": "d7a09560626cbbff680f184266a4964d",
"philcreates.github.io/assets/assets/images/fks/FKS_Geschaeftsberichte.png": "f746cdaf5ca41b1f33a97f45b28429cd",
"philcreates.github.io/assets/assets/images/fks/FKS_Geschaeftsbericht_2022_de.png": "f8a9f2523cf6e9e34290e77eb9e47452",
"philcreates.github.io/assets/assets/images/fks/Fuehrungsrhytmus_Fuehrungsablauf_de.png": "a39eb4c2520b467cf5636b44f4ea2107",
"philcreates.github.io/assets/assets/images/fks/Handbuecher.png": "d1fff10da561f73b2ce6aa7917f1e9d6",
"philcreates.github.io/assets/assets/images/fks/logo_fks_cssp_csp.webp": "67e952c27ba2cf473383262cfa8a6817",
"philcreates.github.io/assets/assets/images/fks/Reglement%2520Basiswissen%2520DE.png": "5ac4977f13af7ba44c1d328134219d28",
"philcreates.github.io/assets/assets/images/fks/Schweiz_Kantone.png": "c5570b1df859765d3c30d2803f5dfff9",
"philcreates.github.io/assets/assets/images/fks/Selbstkompetenz.png": "b08f369dafd8f0b7f32ba9e55ee7009a",
"philcreates.github.io/assets/assets/images/fks/Sozialkompetenz.png": "7e008c803ad50c389b0abd90b8585b6b",
"philcreates.github.io/assets/assets/images/Freiburg.jpg": "3f73c82ad40e1186d8541b3f6e8cd5cb",
"philcreates.github.io/assets/assets/images/gdpr/privacy.png": "38d1faa869854eb173cb701985c27cc9",
"philcreates.github.io/assets/assets/images/goals.png": "052d97ddd12c180d202f16a7bd37bcc3",
"philcreates.github.io/assets/assets/images/grace/hotel%2520grace%2520luxus.jpg": "0fe4cc4c6fb74645313ff7ff7f4beb1c",
"philcreates.github.io/assets/assets/images/grace/hotel-grace-logo.png": "1d0c490acba4d1f27991cc37b5cf7719",
"philcreates.github.io/assets/assets/images/grace/organizational_culture.webp": "d3501e9295b7a5645b4c74b2edcd4721",
"philcreates.github.io/assets/assets/images/grace/polo%2520on%2520snow.jpg": "2d7abeaa857c356509c4538158a4f938",
"philcreates.github.io/assets/assets/images/grace/st.%2520moritz.png": "36cbe28b24e0a3ae28ff97d8c3c0eb33",
"philcreates.github.io/assets/assets/images/grace/wintersport.png": "21923e3cfb2d3772975013f168fadcd1",
"philcreates.github.io/assets/assets/images/ibk-snow/1024-resize-of-69262f98-a2cb-4854-a3ca-a256bbb4e09c..webp": "d53b9d63cc1ec9ac119ce6312526f2f8",
"philcreates.github.io/assets/assets/images/ibk-snow/600-resize-of-Logo%2520IBK-Snow.webp": "1dd1fbda06a500aa4b859cd33ef6698f",
"philcreates.github.io/assets/assets/images/ibk-snow/basics.png": "1f77d02fe44c569c9566a40d49aa2811",
"philcreates.github.io/assets/assets/images/image_placeholder.png": "f71031b6cf989dcc1c0903fa799d35c1",
"philcreates.github.io/assets/assets/images/Konstanz.jpg": "e0fa894d0d632ad81dd1e54d3db4d4db",
"philcreates.github.io/assets/assets/images/libraries.png": "7b29170d00001d8b988e460cb8db9c0d",
"philcreates.github.io/assets/assets/images/libraries0.png": "1b5a57cdd00c48294a3ea76bc71aa7b0",
"philcreates.github.io/assets/assets/images/libraries00.png": "662192582b75ae40cdf73c5db6d1fcf5",
"philcreates.github.io/assets/assets/images/libraries000.png": "8b04c6ef1bd94a75c46b0f995c30aba2",
"philcreates.github.io/assets/assets/images/login.png": "10b56ee827f6fbc33be33f248aef3c84",
"philcreates.github.io/assets/assets/images/new.png": "78d969bf8d6c5ddc1248719780c8eb8a",
"philcreates.github.io/assets/assets/images/new0.png": "8c2d53b36a0288a19994ddb2955388c7",
"philcreates.github.io/assets/assets/images/pdf.png": "afd8f140f743d4a3bff08539dcd772d4",
"philcreates.github.io/assets/assets/images/plus.png": "0f26184387c00fbb2d6482ee4af65894",
"philcreates.github.io/assets/assets/images/profile.png": "9a3fef34f5b483ea1d7a4f2b1c6e822e",
"philcreates.github.io/assets/assets/images/quiz_button.png": "a1c3c827e00655a2162c8485002a61b3",
"philcreates.github.io/assets/assets/images/quiz_icon.png": "5bee456ee18635934c47359f0acde80a",
"philcreates.github.io/assets/assets/images/remember.png": "a0f56945ee328dbba1b2950e5e6b0091",
"philcreates.github.io/assets/assets/images/school/corpus_delicti.jpg": "26b2b732f40b00e41ba0b82e5e239747",
"philcreates.github.io/assets/assets/images/school/die_habenichtse.jpg": "e8327384bbb3eec27a9d1504afede22e",
"philcreates.github.io/assets/assets/images/school/essay.jpg": "b45fc9e2d11a90a390cd22899caa6fb9",
"philcreates.github.io/assets/assets/images/school/tauben_im_gras.jpg": "65568ea1851806193c265fd0243058fc",
"philcreates.github.io/assets/assets/images/school/woyzeck.jpg": "906a26bdf6e9b040c8d64d425950330d",
"philcreates.github.io/assets/assets/images/search.png": "c430e5c32559d1b8f5c41c92eb26a470",
"philcreates.github.io/assets/assets/images/settings.png": "908502c9deb38059180f3eb3834b1a1d",
"philcreates.github.io/assets/assets/images/spaces.png": "c1fa05038abc91e5ffbb1642aef15587",
"philcreates.github.io/assets/assets/images/startpaper.png": "8d9f5e3e7a5921b5f9c4e61aaea9c563",
"philcreates.github.io/assets/assets/images/statistics.png": "1d7203c2f6dafedddcadad197dcbc587",
"philcreates.github.io/assets/assets/images/study.png": "759189c547963bf7bf7fbdef8a146acb",
"philcreates.github.io/assets/assets/images/test_card_img.png": "b84a5fdd04e2320507285b6eea576bb7",
"philcreates.github.io/assets/assets/images/TODO.png": "20e049992dc4ce8de2b2558b9317e1ac",
"philcreates.github.io/assets/assets/images/topic.png": "0a8418eb22bf56c5f94590a82e85100b",
"philcreates.github.io/assets/assets/images/topic2.png": "83827a321807de94dbf511bb02d3fbb2",
"philcreates.github.io/assets/assets/images/topic2.svg": "6daf9d446ed28b72e8581924c91d8114",
"philcreates.github.io/assets/assets/images/webpage.png": "83097aefa75652d67a02cc0bd0da5a4d",
"philcreates.github.io/assets/assets/images/wikipedia.png": "5b9cd6a45e612d75fd8291e9b2e7b29f",
"philcreates.github.io/assets/assets/images/youtube.png": "acc302f07423c6b9bd98f5f9dc1f56f1",
"philcreates.github.io/assets/assets/images/Z%25C3%25BCrich.jpg": "859dbd1e1f011109e4a1437e4aed5ff9",
"philcreates.github.io/assets/assets/images/Z%C3%BCrich.jpg": "859dbd1e1f011109e4a1437e4aed5ff9",
"philcreates.github.io/assets/assets/videos/nature.mp4": "c3e64f077c9c04a32c1ca78aafe9f0a7",
"philcreates.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"philcreates.github.io/assets/fonts/MaterialIcons-Regular.otf": "56f400c54596cfa4d09e3c7202dc3d55",
"philcreates.github.io/assets/NOTICES": "9961e461318a4fcb8b5a81579a7d41e4",
"philcreates.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"philcreates.github.io/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"philcreates.github.io/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"philcreates.github.io/assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"philcreates.github.io/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"philcreates.github.io/canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"philcreates.github.io/canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"philcreates.github.io/canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"philcreates.github.io/canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"philcreates.github.io/canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"philcreates.github.io/canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"philcreates.github.io/canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"philcreates.github.io/canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"philcreates.github.io/canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"philcreates.github.io/canvaskit/skwasm.worker.js": "e35e7fbec8f04f340add4f6ace89a29c",
"philcreates.github.io/favicon.png": "41e1ae4bb70bd2b89f6c0a224562d097",
"philcreates.github.io/favicon0.png": "bc3a93e30b7e6e97276a980becc212f3",
"philcreates.github.io/favicon00.png": "41e1ae4bb70bd2b89f6c0a224562d097",
"philcreates.github.io/favicon1.png": "5789ab7263eeb98bbc0abd3e96bae32d",
"philcreates.github.io/favicon2.png": "fd8077e48118c9ff9dece0f6b0d915f2",
"philcreates.github.io/favicon3.png": "f2aae9707e256e5622844c8ea4628a7d",
"philcreates.github.io/favicon_fks.png": "67e952c27ba2cf473383262cfa8a6817",
"philcreates.github.io/flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"philcreates.github.io/flutter_bootstrap.js": "24f81e773b5c225cec94f2eb9a53c9c5",
"philcreates.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"philcreates.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"philcreates.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"philcreates.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"philcreates.github.io/index.html": "372e41295e28a69a086937d6cec8c49d",
"philcreates.github.io/main.dart.js": "2221a06ea22662e1af15024d4df22627",
"philcreates.github.io/manifest.json": "e1bc707244e81af6cc66ded0ddca001a",
"philcreates.github.io/version.json": "11e1a177d57c5da2bc6e3a6acc3010f4",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
