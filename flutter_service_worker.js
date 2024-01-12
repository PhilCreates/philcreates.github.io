'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b6d632ad8c2bb8bdb059ecc8ad0730e9",
".git/config": "db542cb72247d2fc3e4d8538adb3655f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c9fcc10c1dd08d3d96334e4ecc277186",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "731881419e84167bd62addf66d248ce7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f0d68de6ceb5d248b76e02113fc50f86",
".git/logs/refs/heads/main": "6217fed013405b6810a8fb59b344f036",
".git/logs/refs/remotes/origin/main": "636a2ab6a24fdd2d335b88d40b60020b",
".git/objects/00/a85158ae8629f2e5b78457b5e48f77532c12e9": "c12e8d2ebdcb00b04f9f905291ca7ac3",
".git/objects/01/8996c264923c6e6a55b1f027824cf214680ce4": "2e46b7b7ab0627b6af44e0279f797c8a",
".git/objects/02/ee719b3d08dba8a89c795f238307156ac17267": "c4485116ebaee74d94742a56ab4cb6df",
".git/objects/03/1679c5c65f7f10c0b94da39da7ed109d266578": "9cdad8637cdd6431cbb7e87080092d15",
".git/objects/03/28be174ae0f3435368df4c3b1ab1ba2994d324": "1771c680555f48692e6a5a884f713dee",
".git/objects/03/c8d0ddec91b4b162d2ecb8417b079c5abe5f1c": "6e4f1779ee08c2a156ce51396d21bc66",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/78bdc42bf8af86cb341250088581d73fe0fb79": "2a441e115fea972db83bd2f6bd373fbf",
".git/objects/05/92d6f7220cf74a794c7679bf9c135c0a08193b": "a6f1da1056f283437acd872f4b80ca2d",
".git/objects/05/e26d191058b586e4d7f3c6a692d0ef217b489b": "5c834e5171adcd36f6806838b58f888d",
".git/objects/06/d36abef92c439ca00a363d1113b1488fbb5b82": "4ceb3fb5491da67dc6b6bfbd8acd56a3",
".git/objects/08/07f4d1aec6d42775ce221e7851986add8413d4": "f3a93f4430ecb22569cd6aec4a5b9349",
".git/objects/08/159d21bb97567ce42bb003334d4b50cb77d593": "da3b960be1b802e62886675309fbc2f7",
".git/objects/08/832274587cc4c8e09d292431ba35bba580b69b": "d116fea7e95eca31410a7970a222e3c0",
".git/objects/0a/c4e1047a0f668469d589d9fdfaf1325d7f6b08": "c409d1e6a6506f2fd6fd27bcf2d351c7",
".git/objects/0b/0b39ed0714cad2f5be44b5fbc8ee529f1969e2": "643a19dd8f9695ca2b91cea2aa7d8b99",
".git/objects/0b/900c76bbd80adab4fce204c003e7b32cc64cc5": "f10aaf1eea3a5ea7d34ac455e8d72e76",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/aedee2ce0d0fc9857f49634b981a44e5709f5c": "4d1ce3437002ee95461487613b591fc4",
".git/objects/0d/bc50b0ca7b33c55ab5bf6ff25d5e1820503c2e": "bb112b63dfd2e199e24e2de50dc74e52",
".git/objects/0d/dea8b0acf63805413eb4653a4a1eabca5a327f": "2cb2849ea91371581d0bd1b470bc7835",
".git/objects/0d/f28b2a75ce41759a6963aef1c5f32e05f12668": "488cc61451d850dfea7dda7ef2acf6a4",
".git/objects/0e/30247d04d9d249f8f3de5b1c475a064c0e2dcd": "d2ab2dc553115616093c66f655d64f6e",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/6c147dcbd25a42bbaaae9115c98c98af1ec834": "5d731c1e808fb6f61ffb467e331f98da",
".git/objects/10/b5f2011a235a426217eb3d98208bd33a036075": "dae431dd8c8c17f4ba0178cd6c7a5ab5",
".git/objects/11/c4a3dd862890b4dbd4bf2e2ee66b8d74c6daba": "d527ce5547345c17a7fffcbc65cabd02",
".git/objects/12/b70e17a90043294ceaf65f5c0dca02f1766c23": "0c1897ec18bdc5f495e4c5269b29fbf9",
".git/objects/12/ec7ab6f0e60e8bea5457b37d9f0b81f23b041c": "024d447facf723acd6eed13af0f56835",
".git/objects/13/2fdd21f75da456b33971606063ba2e6e6c2c1c": "d9a41f3dfea50db6ec23730980279b51",
".git/objects/14/f75bebda9fab60eceb906edd0e271c52ac22e3": "3115a34c823313cd93d1fee6d835c3e7",
".git/objects/16/18d5b484a203d1b81fb0a6763f0d2173ce7fbf": "4678cc2660df8ca5a742a1b188133998",
".git/objects/16/4324f1a151b9237c3cdf2f7529ed140e946e98": "d3aa52e6ef22631a4170fd3c67e5c462",
".git/objects/17/45a5a865663374fcc4b79fade5f5b6062b495e": "e99ad922607ee8b0cd70824b3c3ede4d",
".git/objects/18/39725db6745e1f5ae6443a49c21e26d4a90036": "266a03363b0a8c1dcfa9f585bc0ab48f",
".git/objects/18/6fe88c11184109da613aeb5feb509c3cdb3c33": "865c7f87c7e3340c04167244d51a36d6",
".git/objects/18/c6d12e78d435ff5a73ddece297b5032dc974ea": "c493273f97bd475e72e761a3ba77978d",
".git/objects/19/2aa37460aac44566a6bcdf1a27289e037e961d": "d208402daf35b782fbae01ceaa5dc0a3",
".git/objects/19/2e0a0f14ba6cb7d73df794185da6bdc20f7e3d": "746ddd9e89f0f6955c3d20cb574bd486",
".git/objects/1a/5e7aa4ce6dc248c5dbbcbc8fe02bb3b2cf33b2": "f383befa199de3416437975e2197fffc",
".git/objects/1a/f734f4232c92c922570caa6d0ae5f88a56afc1": "b1bd77042418ff70f97980dbd6f9db7e",
".git/objects/1c/66a91640f34f6b57300067c4e21f85e1f5cdea": "888024731bca2303d1c21db203e3ef66",
".git/objects/1c/969f67f47be0e6e8858df076e94600670e91e0": "6be3182b2898d9194442c0a20d657265",
".git/objects/1d/0f76859b09b83ec126ddb7700a35cdfaf89882": "03d1af9609d4a3b82c3c0afca71ff963",
".git/objects/1d/4fb8cb03b2d8366b83e3281f8411749bde6a8b": "12e3045a511449b805b17ac762858ec0",
".git/objects/1d/665aa5b33823ba62070afd91b089fcd18f223d": "ef967a05ca42746f76e02b6faf66cd2b",
".git/objects/1e/1976a78bc570e37ba75e6c9f04d226c8eaa10d": "c33fa1ab2f282c487d8713fa3ca1e3d4",
".git/objects/1e/2199cd3174804033d17f5af1f367e6f8dc584d": "c7350f0b04062f51f2d19731ceb83460",
".git/objects/1f/0e405dd48e4a8389ef1bd5d03fbd332bb52054": "4bd53877334fd179890f9830e3cb33c8",
".git/objects/1f/6def98dfb83d16094c974d6292eb0bfddbf82f": "2090e0ddf386571d4b496e635ba6b588",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/9750dcbd6aa3868414ad2f932c76ce3ac38ed4": "377e91d7b0eb9c40aaa94ef8c41c4a85",
".git/objects/22/10adbc593bdd369036feefc22783b49aae4030": "07fcb8639b86e3bed4e4a573df24417e",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/23/a768a29b2dd6321b609d08cc1fb236ace3f718": "2b6ac750954c4ddb70d8a102c71fa47a",
".git/objects/23/c55fee008039a5eed7840483b33ac202971b07": "5fa58e09b364fc2fd2881ca76e3f50cd",
".git/objects/24/a4c70aaa4dac8040aea4ed3b432e39e965a3d3": "1e767b82418c8e43af7501f8ce95fe80",
".git/objects/24/d73e148dfb42c4c4a951e62962b6fd54bc0a79": "0e27c6291ad99a9f79a796ac79d6823d",
".git/objects/25/1aa2fe80593c8a765e3c8437b2d8de8182c267": "59900446152ebf390d3f537d50c1ab1c",
".git/objects/25/a24477d75952e0c2831fa913f2b51bd7364216": "76a7cc45d1843c5f639d7677e66b394c",
".git/objects/26/e0a0270d5192d956abfff95de999357cc77e23": "cee631985274f8ecf92be031f9fc42d2",
".git/objects/27/5748b42f90c1279565ac68099a984e383f4f35": "ee3af7e9bffd3e318b34889e650b190a",
".git/objects/28/a9d8105866b216188feadd46ff27d6d89c2b70": "83c63c291147639ad78479bfa8a6d63c",
".git/objects/29/c63bbb5e2d26c57586a46e199eea061538c553": "e05d4a231c630a4552c46e41e4fd82fe",
".git/objects/2a/7c62fda6b71a71a8dd77175ef923cce6732562": "0ef6fade97cc249caacd58584460aae8",
".git/objects/2a/c6d118f98f6d7860fc3902558223c1125282be": "41d5fcb78360cc594bdda13cf530102b",
".git/objects/2a/c8b69870892def93e28c39a93c65cb7c8673e8": "83717b910b1f3fc86a45b45c0fa8141e",
".git/objects/2b/7d2a93ae7e2765912fd00206b94042a422a036": "f85140d1a1f14cf8d4ae3eb626aa74e5",
".git/objects/2b/9ad28973a7ec53e9f8e873e05c4fce59a6f2f8": "0cf3e0a7433af4524a99a122e83de211",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/279851b7016bd42e4ef52aacf45195fb4213ca": "26f897a5a7c3d0c6a0ba88d431b76ef6",
".git/objects/2c/5bab3f9682fd4cdb1d6a3e458725bd3fddb123": "3f3c50e4dac8e543b7e594f047594dd4",
".git/objects/2c/aa712dbfe6ccab2ee3b93296862ff9608fa501": "24808606a474e32f6f556da8a48dc23f",
".git/objects/2c/bcf2914b159e5e0a68b6fb38d219fec3b49e13": "63a5b3c96575a1bc2789d2c6c5334672",
".git/objects/2d/3a1e8aa1c010a329eba833df8f89ea494ed18f": "2d393b4eb5ec21e04ee732f3a7d13f50",
".git/objects/2e/76ccbfb058bafe4a8bb27f5ad4f762996ada2c": "51de5a66bd138d7ad9ca52ef11e27375",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/30/d067fdf078ff2a9a7f375393c82eb58632bf18": "70949ad165bd3d01a826f7122219edc3",
".git/objects/33/185a7c1de50071291442be750d041890857e54": "6272d39c9bebe9d484fd5d53aa33aad3",
".git/objects/33/85e1463863df12a52bdc8875c7e1fc8e929751": "d7f0390f5cd84f7ac52e6908624acc99",
".git/objects/33/a29fff0a3331a702f120ec390401ec41d910d9": "6d3f26e1ebbbd48de41351c8e66c3439",
".git/objects/33/e91c3260effad9fd7e218519b4d1175a785212": "333683897615226e28725b3e86b863e5",
".git/objects/34/33e871c784d756b99cbd07d84709c685124f66": "30e2bef7df97399ebb409cdc9537d732",
".git/objects/35/92e12cbbbfaecc773845227e2442fc04575525": "3166bfca3bfca7f05df975dbd569d633",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/38/bbd0056d3c4cfb35a455f6cdae9585edca4b20": "5529d4a24f61796c220917b51530ae74",
".git/objects/39/114f0c9855cf10e2ba2cc090ed57bfc68cc0ec": "231eea970e9063b40e5d321b77b6bbe4",
".git/objects/39/bbca18779cf512c04b2fdba0a0708f47fea39b": "a00b145d9bbf06a347b78252c5e4617c",
".git/objects/39/daf2f8fd0f4f23275ac4ce6015e06352bdd388": "5802ce06788bf21dcc5c486171a33ba9",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/c6c4aa585296fb59d9ec3c178b6c0a189c828f": "f67bf483dd7a458ba1bc67aaf5f76ea6",
".git/objects/3b/cad6be096250dbf49a691a7d0eb6096ce501df": "123ff301843eb34437330738dd282eca",
".git/objects/3c/44c6ebc8192155e8692767fd0c41aa6b08bf57": "cbba7e7bea577a502d363d1724ccb514",
".git/objects/3d/9af0e3f5dd712644101a7bbba19db31d807b53": "f1a8e93b681984eeb0ee41914c0402b5",
".git/objects/40/4ebfc9673e4518abc335dc7c18f8d0bb1c5e5a": "1107d822d928fbd08d8eb6700c73b284",
".git/objects/42/67c2962dcb4d336aa4488406ac94b6cdb9b4f4": "2701b1267d168124bccb26bb0a01057e",
".git/objects/42/cb382f7b42b80a1837f250cf2f1d51e561b8f6": "f51404d900585576ed71b4e83f0683a7",
".git/objects/42/fb324beb5aa18400791642fa2be7d42eeae4d9": "f7c3c781d4fff9e53a0b166c204b05e0",
".git/objects/43/add96a9eb90dc2afe45321ea1a1dde4d43ddc7": "f9791d0b86d06e57bb4cb09bd85e2b8c",
".git/objects/43/bda97ee21ee24410c8b90a13a2016efd13fa2b": "d5ed5bb0d21bec3c2602e7d8f8e8be85",
".git/objects/43/d6480aa741c5f2d6039a5becfa65c7f63baa0a": "3a1e1f7cdaf8efd946738d29dc5ebd67",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/5fe55a5fb6396e3c8e127a0b5240eeb36e8b93": "3083cdd06d2c614923f1def055cd6d95",
".git/objects/44/a416388cd34543f727c4a1d9175c6fc5dde643": "5b466baa79754a7273a73b2b90511d1b",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/45/85f04fc93da805cd9b3b41604a78b87b34f145": "51488807917ce16734dded11cce7ffbb",
".git/objects/46/3da4392999afeb067414a7dd559e974c5bcd39": "27e7dd7525f6856b7ff2bca661f46fa1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/c6faee7f09d0dfc49908c2a701971b3a2e3678": "ea08ffa7a95199cf4b55c093f0337a14",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/4a405dac1a1794b381d512a60fb90bfb720182": "fb42cac598bcf9ed6407aae6fa19d45e",
".git/objects/48/f1eea355850526726ab14d003c33c880ebd9d1": "1ec0871caadac4205de84fc10e2d9531",
".git/objects/48/ff21eb795fe807fe13ce225fec3e72730f6d8a": "2068b53ba25e480fc9cb4241115fb6d9",
".git/objects/49/770be2200838de1a97e588caf94397944b3ebf": "bdd74303ed5fefab41891b0be9b9f916",
".git/objects/49/e353b4b8bb3f2ab33d818b67adec4f0c5c67d1": "3d7bad5680fb23f1d695299a0ca074f4",
".git/objects/4a/3b280ac5ef37ce34caa2985eec86cb5962dab5": "0de0280ba97415663bb819fad07ef7ba",
".git/objects/4a/e3826172ea6185b92a2913755a797709e581c0": "1ef06842d86e55884babae2dab897857",
".git/objects/4b/3a9a97a8955c1ee3dc9c9a33d01af38757a0c3": "80822ad0e6236cee4299d3f39c3c0c2d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/53ce5f998e536c58f9a021bae14d8e8e9c7276": "a789e88733e247141baed03224f4d44a",
".git/objects/4d/7cd803c5d3125a262731fb93f1521bc167a2d5": "694bdb546c303eb35ed9b3cb60d31d22",
".git/objects/4d/7e77fd3e553a1f017d3ee6b7408d4c29537261": "7f34d0485ec52db27b6e93472d5ea7bc",
".git/objects/4d/e4d7a38f2af859bd289a8e7b3d8dc16e37682f": "7c1c6e6b60dad7b78fcef72b7741c1af",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/8c52a341c58775cbefe58beec8dba5c39497cf": "2d9eced813d872330f40d51453dd5959",
".git/objects/50/c12137079340297692541efdd979fb6f5f27c1": "53d87cf1f2ec815fc57b951fd415ec12",
".git/objects/51/8aea173b39e8b8853de6a2e285e7779feca519": "44af7c841184011de16b25025f4e791b",
".git/objects/52/8c3fa1b17ae3db9eb7b9ea660b7a5681866744": "51380b4f02057b9bbbf3c3f98991f960",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/bd18a07f3a15a5a1d72407bc894e38c3dbdfbd": "4790cae0bd50d9b1c5f44397239d487e",
".git/objects/53/e4800b9a89c92dc3ef1d444084b05a70d6915f": "8eed87006c647faaa4758ed72ce63aca",
".git/objects/55/28b7c4808439881bcacf665bd66bacaaf385bf": "d1b27107c359e893b3a72bfdb6fc4df9",
".git/objects/55/328dcc95ff6273f2ce4751ea6d8a31e7f60c8b": "a781203f38831573bb8f16e2e5230bae",
".git/objects/56/20a335abd44b3925fc9fcd77aaedce77abf47d": "831212ac4d1c9135944ac149ed13184a",
".git/objects/58/e9d7ba662647273639c099ee79b83a5ac4a903": "627faf6df41a02f584abd69c732158b9",
".git/objects/5a/81819477150e7f3ae0f04bd93a9530ad0913c8": "9f088beba954132e25cc4592b82aa0f2",
".git/objects/5a/b78e82d495ab6f173a114f56be954cc369f8c8": "7bc989f1efbfc8bbcae6ddd2f456c5eb",
".git/objects/5b/40e2934e3022a8925b5b8ff46004c46519f551": "a4d4505ee91c31d0b656e72ec10065c0",
".git/objects/5c/5ac60f58811674864537b2d126745738f7afd3": "62c4887cbb4434c02c58ebfba560815d",
".git/objects/5c/73a5a0e700f189a5297ceecfcce94e5a968e5b": "168ac2db97e1ff21e79a33ce88da1328",
".git/objects/5c/ce404c93579bdfa2f57ff73d6fecc1a6d3d8cb": "866244854529ec9a767d153d62ce9a39",
".git/objects/5e/5e14bf419926c690a5782e6243e5d91db6d691": "861067ba8b009e03d3ebcbd7cb135472",
".git/objects/60/7d48b30fe56bfa3b4f3013303b62717c5fd458": "e1f1155f4d0e5dced88f30935d10e845",
".git/objects/61/dd6a9b58b7b4f8552619dbaa79dc3d7e3e66bd": "1bfcbc3b86a51c2d7b1c630aea80c0b9",
".git/objects/63/154da2894cddcb46f4b0af2b54344d2355a92e": "1711ac0ba28104093aa0b720155bba58",
".git/objects/65/960fa09aeb8b4b404adf16ccda21c93826a4db": "5bfba673fbba15e2ed0dfe9e04d48dd9",
".git/objects/66/7e424f242e028c05acdf743ca9ade739ffef60": "450b11bccb480f244cc0111c971214df",
".git/objects/67/e5f3dcc162cb6e26aeef206df2285a19184a45": "03168ae7f5277185044a5b797a14dbe5",
".git/objects/68/8147f28b840d4dbf257239bc0ec17ae518b2d7": "61fe5de9b15d6cfedbf77a630425beeb",
".git/objects/68/d0fca65df28231dfae9afd440734519d3bd222": "86859f6345fd2a293626504030d6466f",
".git/objects/69/1a08df05a7496c8715b79a272aa67c0a641838": "e2acfd142cd0fcc41cb165e169d353b7",
".git/objects/69/8cf7b7b7910f8de4ab2c107bbd6803adb67a18": "59662f095011e58a2f82df5e3f89ecfb",
".git/objects/69/9b339cfb1aaa45c215a1a27bc84cca50c06da0": "ef0506183f9c4f325beaf772f26378ef",
".git/objects/6a/40bd207667185e97ae5dbb4e2a1d9b62f1fcc5": "e360b0021f81e725fcd28681202fa942",
".git/objects/6a/79c14b7c3c6a596530675fdb13e37b2e878b92": "bb3e90cfd53952c92910959725b3dba6",
".git/objects/6a/837020bb6ef9c5c28e85b457a9bf63680d98eb": "128f3cfabe70c8b78d4e053c076c4bd4",
".git/objects/6b/f2411d6a1f79ffb70cc69e0f6f64a8f8e080bb": "df73137f18e7112a8f70406b8e766d70",
".git/objects/6c/373f890bb40cc778c621b072d7e78a09c8f1e9": "2f27dff728aa7fe25067d15f1b7ee20b",
".git/objects/6c/540091bd625e268def40df7551c93487decd26": "a44555eeb661c39bd6621335de14d6ee",
".git/objects/6e/5a3f529707bd44bb9d53df98a7036e22c301cb": "3375797b36236e4232d8d65db4bfaf33",
".git/objects/6f/add836225e37f7b6534e39c1bc9598e59e3c0d": "e6caac0056e89b4271424dc9b38bdc40",
".git/objects/70/0ef9c9dabda7978b92f46cdba38f8e1e524c9f": "77889b1d1b1fc8fee9703e43485e6df8",
".git/objects/70/9835dd10cd657ff78ec707f70510b9fde1702f": "0b831848116f0be18985ace081c7f87b",
".git/objects/72/3b1f861084403aaaf203e3fdb70da8e3f47276": "8c15be136978a53e9e5fe151599e4ad0",
".git/objects/73/f7eac537e9f5e288f01da3db57efddf447a762": "dcc87a18e18657d4bb820e20476cf16c",
".git/objects/74/245ace01ca794a904c87af19859d9d96b40e9b": "0bc4b811817d8fb626bd47e27871a713",
".git/objects/77/3f7c010b3a003c3e6c56a42c8888ca9eb3254b": "740dccafb545cc5c1eb737eda559157f",
".git/objects/78/0fac52a8409f5bd025c45d9e5ceb2331004065": "13de4abe06991e5974d0bf3de546588d",
".git/objects/79/3f9933d02c9186724cb238a1718a73c3bfb554": "53780234a23afdfe2e7c392dcfedaf9a",
".git/objects/79/82fb8ccb2d883ee1860626642b7a85b23b237a": "9e1707d43687f07abb291c1e70e6bf60",
".git/objects/79/e8468bbd828d6248de68586a9fb01791a14f48": "e626f76af529705bdb7e7479da04e60e",
".git/objects/7a/e72e62a1fafe6621dfe5d516ab48054da8fac4": "bcc88f290f116be8ed0ff44ba8e5bed2",
".git/objects/7b/79e7706ac1be90ec1b06f7fc7b1a5c23fb3e41": "13998dcf17ff1f2728e5761c871cc5f7",
".git/objects/7b/daeb40e4dc5d757521705a5496d040f1560dfb": "432d77bf5360886aebd2792ea11d35f4",
".git/objects/7c/b6c9406a33f5a02617ce554e902cc158da12b3": "86b0b20ac1c393557ad0bb731429b5d3",
".git/objects/7d/28abeb07171731def6090854d402941c58e901": "d53ca47c4e8fb64287cbf51fe649e9ce",
".git/objects/7d/f28f477dc645c13e11bdc0393d2b7ee90a1c20": "9a082ac607ea1ee8db2d2949e4c82a94",
".git/objects/7e/54fa41d114201d5a77f547360ee7714f1f3532": "2e83f102cc8693b572f27b4991a836df",
".git/objects/7e/7f1ffe99f0de215925e7408befbdd6abd37428": "ef6761f49b38b4db0794846d156d1e01",
".git/objects/7e/d740bae59b6e427ac7096fed54618741df56fe": "46e1ea982a1123ca5543ffd01a3dabd2",
".git/objects/7f/2952060ed4b3589d23b78ee1103f243d98ffe6": "de23b9337dc0c8fe082f9d1f61f08114",
".git/objects/80/e18c70dc9c808c6e02e98cf429bb210c0446a7": "e87410bdc1324c09cf1222465716da77",
".git/objects/81/7426a0173340ee1ca17301b05282efb43ce0e4": "e03c9aa4ff2e01d8ec339562316d92a0",
".git/objects/83/8c416a46bef3b5890eaaa413d545d198995a6e": "8ac74a1606f4caa10e888c9ef1a6aee7",
".git/objects/84/8fb4e48f8c10d3ddce7e70b80526af680fe154": "00a3be2cf9f9ae45839ec968c3a5f89a",
".git/objects/85/831e4aed59580004b77d92db009a586cf1e7f6": "e27499eacdbe5b5cd26bfe1f6cf16d02",
".git/objects/85/8b90fb72527c43ac0663579e2bddc6d9b23be3": "50f83a1a67b797983668ab102a497015",
".git/objects/86/efc674ae356804ce960576811f7db5e1b8bab8": "ee3ebd81ba0dac738c7c425dc691ddcf",
".git/objects/87/2c5459e68b145af86e6664f3c5026e01c84c7a": "3b35f7d7af15c92dd547dfdd449c9414",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9210fb7af17e3043121a2109088b62b7864ca1": "aa100510e27382d28e19613964a1b376",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bf2ad8abd75ab5f64755a4a78a0d516c74ac7e": "09cdbf33d8a571e1505826300febcff0",
".git/objects/8b/6cd6fa2f0f320196ea5a49b21879da4595aed8": "23f972d871d2fca89f0cedb779a6469d",
".git/objects/8b/e70ef7909afc630247d194399f09ea7f3ac7ed": "61a1b9c5a264f36f81fd588632b6ed09",
".git/objects/8c/88d8ed09e0b3433ff78ffbf9e2217b0593d01c": "c8a34eb8e5df5a120512bc200ce0bf0a",
".git/objects/8c/fc809e6a7dce52fd2d91d24b16b1990c765cbb": "8399ca7907daf669000307299cac11e1",
".git/objects/8e/7c65dc0dcff755f682e0591db6cc6fe733c4ae": "dcc19d0d2b30d78351315e186b152e38",
".git/objects/92/1cfc770e02f88cc32d2c6dcaa2895f503cc2b1": "41c1a3432f8dcd7ebd23f7a0107a0e5e",
".git/objects/92/9331a3b05754d10d6b3a4d25409b23ffe41853": "f77037b9a04def2a67ac95793b249b3c",
".git/objects/92/d4e911d85eb0ce0411effc74f7698ca0a33e6b": "5de676c722dc6632a1195f4b72edc5f5",
".git/objects/93/55c8549ce0f463d3f4caf824c23cdfd241f21a": "066e351669506d691fe753124ca6921d",
".git/objects/93/9aff8d43e480ef900d628a86856a5637a95e8a": "ac4861c0e049857120cee9bfc2819e1c",
".git/objects/94/8debc3f465e4ff8f96fe17be48cc809b73b4b6": "3a22c531dd7435ec9f940a1e2ae3effb",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/06a365aa596c81f3daf6f57d4b9e7c2a2a647a": "a58829d5d4bc1dca7b46b50a88ee2f76",
".git/objects/96/94843ef21e2b1dd8969abb1e1ae662943ba86e": "9129b64e69aab0894836f33365af2cdf",
".git/objects/96/b7c109aa8c969cf45a6a4998fd52e989d3af65": "ac1cd63100a1b18e146de37e52dd44e0",
".git/objects/97/f0f7592edcc4d98c864f77132d493cc50087b1": "e76249ea3b56dc78a3f8a8a5353b5bc1",
".git/objects/98/28f982c6d3cc10895538b31b30147ffa54e919": "12eda1a18fd2bbefd95f671ce0469645",
".git/objects/9b/019a28cfc2ad1ceecd3262c56ca0e23ce9fe1c": "f6cb92f566bd308b6dacc1d1a47d4edb",
".git/objects/9b/621f1dda84b1c55dda84b016589bf11fc10a1e": "99599f560748c324afd5c461ceb1e91a",
".git/objects/9c/654429693318edf6e0e2bfd6733debdd1d2c87": "09a21b255ab59892539c355ea76f4f81",
".git/objects/9d/78d62e796e6768f9d673d69eb9d8116f13f73b": "5714a4d749704cb4cc0774b62f69eb6b",
".git/objects/9e/315f36f15eb9fa44aaf7a48f9d6dde43cecb96": "9fabc6a237ae6c82174bf238c620a64c",
".git/objects/9e/4437a6bc7f658d732e52a79f5a356be2469035": "f65b36fba28a0f541ef700dc48b69481",
".git/objects/9f/509a1d9760983f93dda93753fed575e1ee63a8": "35bae4f5bedbc5a46e6dbfd0f1051f2e",
".git/objects/9f/9073f0681aded8dc453c3d51a51c7d79b69cc2": "2116484ce8fe0aac3ef0d4817c74ce86",
".git/objects/a0/4382c26be0706b96a049528fb1da644a82dbc0": "4ef66b7428120029cc2ee49d34a9ed13",
".git/objects/a0/4fcfcdd2c2a11206d3a9bd898f37082133ed02": "cc5dfeb02495409effaa06e4542ca37d",
".git/objects/a0/861d853302ec26e5b12a04b66ef4ea0e1afed9": "b124aef47954fca05e8c70bc5ab5dc28",
".git/objects/a1/4d6a5d0ba2478241bc3f94840afb97563eaa83": "f560501d038db92636178a0c5dab8227",
".git/objects/a2/a84a6199b351fcc2c5f4b92f22de1f1cecc83b": "99f6023e81513c8ee36655eceab16298",
".git/objects/a4/1789f50f22c48baace2996c4c7af1df9c0468f": "b6451534fe8387a7d677cc2a7bf5fd08",
".git/objects/a5/319d258b02b5f1286c39d7f2a05c5f83ec6f11": "05e87a1b66df2d1685714b47f3f6e35d",
".git/objects/a6/15721a482ddb5f8c7ed5e904ce8cebe1d4841e": "669f5871f2508b48ed2740534cd65c0f",
".git/objects/a7/089079dfe64b7968af04c60eb959eb1c3e8226": "541cab07938ff0e15d81855c514c58e6",
".git/objects/a8/4ce8c0ed64a3559f6c60354b58a0cc744ee823": "d92e83e4b8aa1afd80d835d0b991f0c7",
".git/objects/a9/ed6a6e2932fb8130c52c92b2720521fbb591de": "c49627ef670a74d557d1e9e69025f4e5",
".git/objects/aa/237780963a360fbf2977324796cb91637c4f5b": "8a854bab9b234a882a84e4be87300d68",
".git/objects/ab/a8425ca30e13fef03629a51b5a39b0322729ea": "116a33d89fd6e6d606f19ac465e34e3e",
".git/objects/ab/ba9f69bbd81e68d48618eb062af5a2b7e1b52e": "7c7752dfd556f73223c4bd7bbf998cb5",
".git/objects/ad/6d8ca9200331ee80a68bfdc32b22ae1bed9d4e": "55166b9a6609ff48327748cfce6a0191",
".git/objects/ae/9f8168c74e94c874c84fd6ce0e4e2bd426fa60": "7d203b1d1fa1e07ca9eb6eea7e769248",
".git/objects/af/59137becf385863de88784e42ddae111606566": "9af4d0484903288ad18d360e9e4acb3f",
".git/objects/b2/4d596d6b9dcef3687bc967e94b71cf7bc2452a": "333e75a57cd9520711f6ed2dd0bdb3de",
".git/objects/b2/a8a4ac0405c5bcdab68103ea2e095bb9f0b892": "531174575af94201ee5c8b9cd2b90c8d",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/b3/5668893b340cf7e8abcf264f05c837778b2d3a": "ac24a1835e5315eb0f97a273b7f63304",
".git/objects/b4/32c5baec25327c3abd10d6bfcbf2ba9e223686": "f29f3142082d057acdee99c56d1d472d",
".git/objects/b4/4cb3b5004f38c7e14f1ca53a4f7c3134eb2481": "9463a796c666fb92e8b6e5cddcfbf340",
".git/objects/b4/c9926d791dd94b2289c9700de679f93a898802": "833f3fe6ddc61038fd7248f5f5d41c99",
".git/objects/b4/e4ca0bf2a682cd6cc22026ab9315c9bfe2a75b": "fa7f5b63ad180814ddfbc830eb1f809a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/293009faddbd663c935793ac3a663871ecf684": "02b6c2052bb1546b5f71ee972547d374",
".git/objects/b8/c1be7c27a5bfd77b41255b4d2d773c1af8cf91": "fbeee275e61cd30dffd1bfd7b2de61e5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a58a9616a9b15469e4f7208c002ac246c8ff6a": "179469d7e95ce4a38794247fd6d24fed",
".git/objects/b9/ca6e0c566af15813744abce99391cf57950ecd": "3638e70ec631cc6ff8add452ba4e01f0",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/d37b5d13c3cedbcf3b32edd9d5362898c9bde8": "a4a7f703bfac7c010be36bf0904ca933",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/b13c79c6a26813f67d0862f2dd7a205143a8de": "f953818465ea9ebf3e6f159c374610ab",
".git/objects/bc/c9e7b9dea11296ef2c13eb96f7dc6bc1d018fe": "0d842710221faa083251e1c06c395432",
".git/objects/be/16319a3bcaad7e64b720495ad3d478befbce28": "f87d12cde0163cb1ab3756b5590c8603",
".git/objects/be/c902e834640a3d9658a8fa09064007529c76a4": "edf8b96be240726b372f2db6c5d02e3d",
".git/objects/bf/42be2bf28b22234ffb1bd942e1675d6a790314": "7c9c4e14f63806e2bdae93ceb246b823",
".git/objects/c0/f94358d24cf42fd71bf87c6ec69f1c4a0ee421": "559cdff9e2adb41c0ba409746fd2cfb5",
".git/objects/c4/a1ba7fe212ea0a7f2eae114cdb679bc021efcb": "25cfcf45ea1c8a5bb5cef267a7aca9cb",
".git/objects/c5/ce670ea7532b78e45ac5a6283db583516cac3e": "24aaf70304c9e488b054717c1d0fa1d2",
".git/objects/c5/eefec475d251fa7dff44020aff7d39829095d3": "e7efe38df1f8039ab716000d38310f80",
".git/objects/c6/3b29b0776a5b6802df2005cab664b34d71a3e5": "7858bf7f4df32d475bcb7ab6200bfce6",
".git/objects/c6/3d786bca4be8dbf5d49c07df2c4fc3c07d8eb3": "8b483ae91c09925ea68b1933f225edb4",
".git/objects/c6/8568fad2178061577cf86e89f9983a3ef2d86e": "4f14ee2d44b6a1968a8d2ccbb26f08e0",
".git/objects/c8/03a8800b6d077ee1acd3ad36104e7fd576996d": "a03f6435b82edfd8c7addec46ba94018",
".git/objects/c8/4c2a94efe4e607e510ff554d12e9d9d8904b39": "9bc2a17dde66ca283d75111acb1ceb79",
".git/objects/c9/56ba0bb8635d62915c37c736325b136295e6fb": "09d50bd6f964d3437a44c9d65e42d436",
".git/objects/c9/7b969a5b8f6481bd1c90d8a5e5e55428e84e56": "2b25c8f590706d049f5b35b3852e5803",
".git/objects/ca/f0c066ffbf7f37f1070d274b8983af2a03704a": "f48e1b27f4f2cda5da44ed77195ad263",
".git/objects/cb/af674ce525d149e952db9c4401fcec3459efe0": "dd3c5b05f61ec45e7179948c57308f98",
".git/objects/cc/1a57bce9e28c74bf5196abd6766c486b1a2ac0": "c10363959d15376b05519398a865b85d",
".git/objects/ce/959d79579e33732016660538d023dcf20594fb": "3736287955e28788faff301c2102c287",
".git/objects/ce/b4859e34a8065a1ffa1b5704b9e3b645c4160f": "7acdf7731643fd517ace83bf3a00c74a",
".git/objects/d0/933ff39028846bde79678a1b4cb05e5d2cce62": "862de526bd1d4d9c5c435e90d7734568",
".git/objects/d1/55b4f54f55f27fdeae3d9de409474623d07e54": "b986f46a8f04b8466ba3fce3c08bf591",
".git/objects/d3/fc09fec713364e6bdf6aad850d50cf000e38d1": "85e39cb603fcbd42c34705ca5f5ff793",
".git/objects/d4/d66d7417325d1c577fc826c72b97d9507c1a34": "5040c73609b4be1f3a81778892a60612",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ad04bcaa154f0ffb0b96e38ddfcc5d8a5cf5b4": "20d6a82d4515bca7287231e11fe5d5ad",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/728773302c37e950ae19b0552355e600074e57": "b3f9b0a2c45cf21ec6f05ba7481a1331",
".git/objects/d7/e94f2c22866072e98e68ec7853406ee7dd36ff": "17dbf66637e60353be1c63584ec3b1c2",
".git/objects/d8/04bf24988e52ea75103c3b73f0f716b6b31508": "8dd7fb934ab1dcd6da58e79672f646fe",
".git/objects/d8/61802fc25e79a8fd9a078c6d8707efe06681c7": "53ad474ea42c8dcc11527a48466f81a4",
".git/objects/d8/92a7bec3f3957422cc14a36660c340105bf89f": "3b7db68f464687dfcd3b8f1f65784917",
".git/objects/da/34ef2bc5ed7c8a9e210e3e9c587d29eb7e1b04": "4462cbd508c51cc1fa250a09fe478d32",
".git/objects/da/6a5fda7bdbb7ac0abd59021554ab0513492f74": "2d85e65ce148285d0492982ad37587d0",
".git/objects/da/733d3ce124589312d2d997bab3232c7612569b": "5e06c764de923e9a28dc17eb76d51519",
".git/objects/da/e9510f158277c397c90f27b6216c09564889d3": "e7d2c4d0bee4baa46d3ce26061bf2bca",
".git/objects/dd/72b0deef69e88b4a17edaba0b2f5930f741263": "8446fb18cdce4c44ad8779bd1f90b51c",
".git/objects/dd/bc1a01a760edb8c23592236e1882fa9f8c021c": "f206e1bb0ed93f69775b11a71ded58cd",
".git/objects/de/7213a2d765cc0c08cb70edec146c15137d9e0e": "b566e51659a114408bd7fd10be9bcfad",
".git/objects/de/caa2c0f19ea749feb8aae2eb42c7dcc7964828": "3d8b332c4451643f712d5b0031201472",
".git/objects/de/e763872e6a8468d97181fc5074ca65aa6ec9da": "9e1b73c3ada030b5e8486bb5faaad18b",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/d14021c6f02c055196e6cde8cf90d8819750a7": "369a5321ed54ab07a9ce3698f2562762",
".git/objects/e0/2ac035cc9e3a273bca4c96f8f363980e00ea16": "d465d2b49cc395d5b40f35b497061bbf",
".git/objects/e0/86d7c8ab8dd21408fd982831d5abe3dd5c2526": "1731a212dcd33d1154d4f3519e4c308f",
".git/objects/e1/a1d78c389dc1d249ddfd8632d8bc20f23070f5": "887b9b96870bcdadbb04707c7ee2caf1",
".git/objects/e4/37a52606438136bd696f8d60f1a61d34b3c49d": "56372449962deb96152615b23fc45c4a",
".git/objects/e4/7732723942f061a57743967b46d6599572b41f": "c6b770b861cd5c1bdc86de0964e6e81e",
".git/objects/e4/7acd17d5799bc08af8106e4acf7098189cbda6": "6802a2dc2c23ef424a37af599246a6ba",
".git/objects/e4/86263c1b3e5298dc747995ff176913322e2cc1": "22d36694518204de30d752e3001ae9c1",
".git/objects/e4/c0d02581e132adb84596a7cbc4322812a692bd": "d351757ec737f14b73cc636155e4c6de",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/7c56cc89a870440a1947968867f195e7533d21": "18ab3e884746450e7bed98962e064b07",
".git/objects/e9/b7e334f690757943678791d96e4be977d6e350": "0d8bc4d91855e509b585bbe1f2bde280",
".git/objects/eb/5d1003fb0ecc6b72a30013b50e24d6cf4c1c85": "95347055d4ec3d481ab4e9772799636d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/269b95a86637a37d7e0bd9ed563636999d1f57": "1721a341db84bbc87e5355bf212446ad",
".git/objects/ee/cc160f15c81f05303a062963ba1ec66ef7367a": "54c5cede18a5bcd1eecbc1536c7afb82",
".git/objects/ee/fe82679a7effa885505cf71a6c6186f880ef8a": "df00d0bf9404be371dd88004e2743c26",
".git/objects/ef/29ed0480f49678e2c6257c1bdf10d9bb1dc12e": "d56b35081a7d568df0ee544183821986",
".git/objects/ef/4961569ba6f81cf0210f7e32cebdee9f5d5268": "c56949a085b192f460ed565cdc990cb1",
".git/objects/f0/083c6ffd7c9092f390db06b2661b9b8e22a189": "ae9e4dbb54f56293fdeed28cdcb0078f",
".git/objects/f1/5bfe8a76258cc35a441b5d2398d24048406bd1": "fae4f3711a83789345ee9c7b4119c969",
".git/objects/f2/c5920f69343087d13c5638fc699cd4b9bf58e8": "710f72eea0f1aba821321aad431f53e9",
".git/objects/f3/f18a57cf060c87ba9b8bdb40a2f4b8dce52611": "a32897fc5721eb97ea96b352edff1ce1",
".git/objects/f5/125c2110b19e39208795f28a7bdf7f6882501f": "b0ef2b6b5ee7f108d71491e263d58136",
".git/objects/f6/91a279d008e4bf6ad3b3a4810cddc9eb447449": "497773149263f751fdd4126e68df2c7e",
".git/objects/f7/fdbae588294bbd47c1cc6e4ee436c3054270ca": "d19d93c2e6032c7994b2e6efab0573b3",
".git/objects/f9/a5a228692f96f1cf57f1dabf2273d4a5d1b5e1": "e4283f56371fd6db1af200cfba81dcf2",
".git/objects/f9/d1b4e27191cabfbe4edf2ee7ee48b6765dd545": "0d3ea90d650abda56ca83a416f46b960",
".git/objects/fc/e8759286645f8d35b71e9084894944d31c87af": "fc3ad8858f45cf45dfce1b92f70358fe",
".git/objects/fe/4c0d84ac4ef075e7e63dca1823de1d95c654c6": "24e5596b6b73b05fc55411af3dea92d0",
".git/objects/fe/4d37765349ff92620037801477f3bc9cfaf1e8": "67949b30407f534bc3ede6a7c6e950b5",
".git/objects/fe/56c46d045e7fec229aed5884ef33e9d1ee182a": "9dd6a36b8ceb72ea1c4871e0a94080a6",
".git/ORIG_HEAD": "48076f596713ad314fcc2ee5599803d6",
".git/refs/heads/main": "d1c87b68fffbd31740aaac089fd7d4a7",
".git/refs/remotes/origin/main": "d1c87b68fffbd31740aaac089fd7d4a7",
".github/workflows/azure-static-web-apps-gentle-mud-0a0485003.yml": "383fea901f5b853a5bfdb6e6e58da265",
".github/workflows/azure-static-web-apps-proud-forest-0f863fc10.yml": "83ae3e1e3bcfe2e0297a7bf990f14f4e",
".github/workflows/azure-static-web-apps-witty-pebble-082eb3e10.yml": "990e91d2add9af45c6375e2f58fd41a2",
".idea/misc.xml": "e8494194f326e27a32cf68e86b9a2faa",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "74d3a64f52848d5e8db631b1685e58c8",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "07e4b010e4f183ba30ac502b234f798a",
"assets/AssetManifest.bin": "29056d05b913d06e1ed69e828555e5e9",
"assets/AssetManifest.bin.json": "b920fb85c49739894682fda130ec70a8",
"assets/AssetManifest.json": "f574981678c383d1a6bcc89dd1f1a728",
"assets/assets/data/Allgemeinwissen.json": "5b380eb43b85f53fdbdbe1a7ad8f7a11",
"assets/assets/data/Astrologie.json": "6ff828a5d859d78fb941b68e1a4392ee",
"assets/assets/data/Azure%20Cloud.json": "be6c1308a27665293d3130a59dfc98b3",
"assets/assets/data/Azure%2520Cloud.json": "be6c1308a27665293d3130a59dfc98b3",
"assets/assets/data/Datenschutz.json": "c90f34621fd956b988777ab9ca849d70",
"assets/assets/data/files.json": "597171a94fe6c16e76f5cc03557d2d71",
"assets/assets/data/files_v1.json": "882224f4ea1f7e7ebd218c5410f5fc63",
"assets/assets/data/Icecream%20Rolls.json": "81689e6e2f91926f3a8ffbd7ffa1f297",
"assets/assets/data/Icecream%2520Rolls.json": "81689e6e2f91926f3a8ffbd7ffa1f297",
"assets/assets/data/L%25C3%25B6schwasser.json": "50e046e8d9ced657fbe26f4e5571cea2",
"assets/assets/data/L%C3%B6schwasser.json": "50e046e8d9ced657fbe26f4e5571cea2",
"assets/assets/data/Nahrungserg%25C3%25A4nzungsmittel.json": "3e87a4132ffbcefa9d02b49401201ea2",
"assets/assets/data/Nahrungserg%C3%A4nzungsmittel.json": "3e87a4132ffbcefa9d02b49401201ea2",
"assets/assets/data/questions.json": "82eabace6c90a3b00764f43ed2d786ca",
"assets/assets/data/questions2.json": "de20b7c03f8529136684ee1f6cbeb977",
"assets/assets/images/boxes.png": "a9d988cd6785918680f105ce032970be",
"assets/assets/images/boxes1.png": "2d8bc81641bfaf92c6d70713a69896e0",
"assets/assets/images/cards.png": "8402baf68eacc926a655a5eb7f4f7ff7",
"assets/assets/images/cards1.png": "892c6094d01d82aa1a83000715a97b20",
"assets/assets/images/cards2.png": "bc3a93e30b7e6e97276a980becc212f3",
"assets/assets/images/cards3.png": "d9520814c974100024487ffeaa3ee0b0",
"assets/assets/images/decks.png": "070e15fa01557a47ffd2a348ba7e7fc8",
"assets/assets/images/decks1.png": "0e33f0a0bf8262723d168abe74b572a8",
"assets/assets/images/document.png": "1b19d893b558e29dbae139d7197a3c5e",
"assets/assets/images/ErsteHilfe.jpg": "3253244f22bd3a3727327823997fb72e",
"assets/assets/images/favicon.png": "fd8077e48118c9ff9dece0f6b0d915f2",
"assets/assets/images/favicon0.png": "b0b49ebb3ab636953d4b215d8b476643",
"assets/assets/images/FKS/346b7878-e6fa-4e61-97e5-68c436a07ad5.webp": "11637b1558a8aa9967fd54a6807b605f",
"assets/assets/images/FKS/Allgemeines_Kompetenzmodell_de.jpg": "babcf1de8ee7126dc0833eab36695363",
"assets/assets/images/FKS/Einsatzphasen_Feuerwehr.png": "b64a73af9da0617a5370d1abf757b4d7",
"assets/assets/images/FKS/Einsatzphasen_Symbol_R_de.jpg": "210c740328cd36e9c0852339e9071df2",
"assets/assets/images/FKS/Feuerwehreinsatz.png": "d7a09560626cbbff680f184266a4964d",
"assets/assets/images/FKS/Fuehrungsrhytmus_Fuehrungsablauf_de.png": "a39eb4c2520b467cf5636b44f4ea2107",
"assets/assets/images/FKS/Schweiz_Kantone.png": "c5570b1df859765d3c30d2803f5dfff9",
"assets/assets/images/Freiburg.jpg": "3f73c82ad40e1186d8541b3f6e8cd5cb",
"assets/assets/images/image_placeholder.png": "f71031b6cf989dcc1c0903fa799d35c1",
"assets/assets/images/Konstanz.jpg": "e0fa894d0d632ad81dd1e54d3db4d4db",
"assets/assets/images/spaces0.png": "c1fa05038abc91e5ffbb1642aef15587",
"assets/assets/images/TODO.png": "20e049992dc4ce8de2b2558b9317e1ac",
"assets/assets/images/topic.png": "0a8418eb22bf56c5f94590a82e85100b",
"assets/assets/images/webpage.png": "339f252fefc7dc9ed5e8038da608546f",
"assets/assets/images/Z%25C3%25BCrich.jpg": "859dbd1e1f011109e4a1437e4aed5ff9",
"assets/assets/images/Z%C3%BCrich.jpg": "859dbd1e1f011109e4a1437e4aed5ff9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "85e1186be5f3dfbb2db4d87f66434768",
"assets/NOTICES": "25b61524eb3600090ec8e4ad637f46ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "fd8077e48118c9ff9dece0f6b0d915f2",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dcff08825c59c8025ae4267b78f7ba88",
"/": "dcff08825c59c8025ae4267b78f7ba88",
"main.dart.js": "42bdaec9e3c4481ef8a1b2567c7dbcd3",
"manifest.json": "34d7a93a24a9edfdcbc76b9763f73a11",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
