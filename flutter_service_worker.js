'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8da097c07c0cf0b38983dfd4e9a3881",
".git/config": "db542cb72247d2fc3e4d8538adb3655f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "366c212daea628e76879622e3ad28f3f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "12d1475519557da346da8af4bc128fa3",
".git/logs/refs/heads/main": "12d1475519557da346da8af4bc128fa3",
".git/logs/refs/remotes/origin/HEAD": "12d1475519557da346da8af4bc128fa3",
".git/objects/03/c8d0ddec91b4b162d2ecb8417b079c5abe5f1c": "6e4f1779ee08c2a156ce51396d21bc66",
".git/objects/1e/24d49c9ca89ef84f7bc3333a7d1ef966f64869": "0937587ee8c6115bd454203fa91d265e",
".git/objects/1f/3f936abd2d5ac0de7194084f6cce9ad364aab6": "1ae18c4b3b9c716c64e35ea9abc2f5a7",
".git/objects/46/a2ca0656a0b03ffccabce068a9c9a847169dac": "f2da0cd00663076a67bc5bd550d65608",
".git/objects/52/8c3fa1b17ae3db9eb7b9ea660b7a5681866744": "51380b4f02057b9bbbf3c3f98991f960",
".git/objects/70/9835dd10cd657ff78ec707f70510b9fde1702f": "0b831848116f0be18985ace081c7f87b",
".git/objects/7b/79e7706ac1be90ec1b06f7fc7b1a5c23fb3e41": "13998dcf17ff1f2728e5761c871cc5f7",
".git/objects/7d/28abeb07171731def6090854d402941c58e901": "d53ca47c4e8fb64287cbf51fe649e9ce",
".git/objects/93/55c8549ce0f463d3f4caf824c23cdfd241f21a": "066e351669506d691fe753124ca6921d",
".git/objects/95/c5782aed54c923fc4ec87da0ef0f7db5935932": "28ea0fdbcd0c14f2ae3597f870f88ca9",
".git/objects/9b/621f1dda84b1c55dda84b016589bf11fc10a1e": "99599f560748c324afd5c461ceb1e91a",
".git/objects/ad/95f9b51116ac7b453c146f5db5c9f308c4eab3": "b9d194510fb4e20efc7c9652c55dc758",
".git/objects/d4/cfa35a60d37fa39d482387cdb87895fd488a65": "b61b56471bac2335de293581743569ca",
".git/objects/d4/d66d7417325d1c577fc826c72b97d9507c1a34": "5040c73609b4be1f3a81778892a60612",
".git/objects/dd/99c82ee2967485e9068c2f796963290bff9341": "617fa39d4b13bf08ef557d16d836d792",
".git/objects/fd/e1ddd4c4212e596154d720cbd2bce5bac311e6": "d0292cee30fcd28750dc83871a7dcf9f",
".git/objects/pack/pack-da6c6aed5a9c2e4d79fa26d888dd91965d9a7ba2.idx": "810038b1d4d0f38e2ee944b9d485c91b",
".git/objects/pack/pack-da6c6aed5a9c2e4d79fa26d888dd91965d9a7ba2.pack": "47306d89c7f8e5987138c39d4ddf685e",
".git/packed-refs": "cb819b459b16307e6d88f84d65f1bfc6",
".git/refs/heads/main": "bea960752a3f1458d7de6a8879dbd3ac",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/AssetManifest.bin": "419857f93b8f6f27d2313c1b1da5b702",
"assets/AssetManifest.bin.json": "65eb5c45545f89ff88cdc47aa7456fac",
"assets/AssetManifest.json": "f14ad521726405f4f3195d88559392dd",
"assets/assets/Allgemeinwissen.json": "5b380eb43b85f53fdbdbe1a7ad8f7a11",
"assets/assets/Astrologie.json": "6ff828a5d859d78fb941b68e1a4392ee",
"assets/assets/Azure%2520Cloud.json": "be6c1308a27665293d3130a59dfc98b3",
"assets/assets/Datenschutz.json": "c90f34621fd956b988777ab9ca849d70",
"assets/assets/favicon.png": "b0b49ebb3ab636953d4b215d8b476643",
"assets/assets/files.json": "ae55684b6c9f972b2376ea40d29caf00",
"assets/assets/Icecream%2520Rolls.json": "81689e6e2f91926f3a8ffbd7ffa1f297",
"assets/assets/images/cards.png": "d9520814c974100024487ffeaa3ee0b0",
"assets/assets/images/decks.png": "070e15fa01557a47ffd2a348ba7e7fc8",
"assets/assets/images/spaces.png": "c1fa05038abc91e5ffbb1642aef15587",
"assets/assets/L%25C3%25B6schwasser.json": "50e046e8d9ced657fbe26f4e5571cea2",
"assets/assets/L%C3%B6schwasser.json": "eebcc2413120862b11e7c17805a37552",
"assets/assets/questions.json": "82eabace6c90a3b00764f43ed2d786ca",
"assets/assets/questions2.json": "de20b7c03f8529136684ee1f6cbeb977",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ed1cff9021449e0e19d88b24c0bdf3d1",
"assets/NOTICES": "26709e8f788b954172f2d1b0d9c0ffb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b0b49ebb3ab636953d4b215d8b476643",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6b89543d79056f1fddd66168e63153f7",
"/": "6b89543d79056f1fddd66168e63153f7",
"main.dart.js": "0e45a79ee6f7259c126689d0d937ff98",
"manifest.json": "56d13a8827a1d32a5ed327751c76524b",
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
