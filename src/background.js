let defaultRedirectServices = {
  youtube: true,
  twitter: true,
  medium: true,
  tiktok: true,
  quora: true,
  fandom: true,
  imdb: true,
  genius: true,
  ytmusic: true,
  goodreads: true,
  imgur: true,
  pixiv: true,
  ud: true,
  ultimateGuitar: true,
  twitch: false,
  instagram: false,
  wolframAlpha: false,
  bandcamp: true,
  tumblr: true,
  soundcloud: true,
  reddit: true,
  instructables: true,
  knowyourmeme: true,
  search: false,
  translate: true,
  snopes: false,
  reuters: false,
  stackoverflow: false,
};
let defaultCustomInstances = {
  youtubeInstance: "",
  twitterInstance: "",
  mediumInstance: "",
  tiktokInstance: "",
  quoraInstance: "",
  fandomInstance: "",
  imdbInstance: "",
  geniusInstance: "",
  ytmusicInstance: "",
  goodreadsInstance: "",
  imgurInstance: "",
  pixiv: "",
  udInstance: "",
  ultimateGuitarInstance: "",
  twitchInstance: "",
  instagramInstance: "",
  wolframAlphaInstance: "",
  bandcampInstance: "",
  tumblrInstance: "",
  soundcloudInstance: "",
  redditInstance: "",
  instructablesInstance: "",
  knowyourmemeInstance: "",
  searchInstance: "",
  translateInstance: "",
  snopesInstance: "",
  reutersInstance: "",
  stackoverflowInstance: "",
};
const youtubeInstances = [
  "inv.nadeko.net",
  "invidious.nerdvpn.de",
  "piped.private.coffee",
  "tube.boritsch.de",
  "tube.cadence.moe",
  "yewtu.be",
];
const twitterInstances = [
  "xcancel.com",
];
const mediumInstances = [
  "m.opnxng.com",
  "md.vern.cc",
  "medium.hostux.net",
  "sc.vern.cc",
  "scribe.froth.zone",
  "scribe.nixnet.services",
  "scribe.privacydev.net",
  "scribe.privacyredirect.com",
  "scribe.r4fo.com",
  "scribe.rawbit.ninja",
  "scribe.rip",
];
const tiktokInstances = [
  "proxitok.belloworld.it",
  "tiktok.wpme.pl",
  "tok.adminforge.de",
  "tok.artemislena.eu",
  "tok.habedieeh.re",
  "tt.opnxng.com",
];
const quoraInstances = [
  "q.opnxng.com",
  "qr.vern.cc",
  "quetre.blackdrgn.nl",
  "quetre.canine.tools",
  "quetre.ducks.party",
  "quetre.iket.me",
  "quetre.jeikobu.net",
  "quetre.lunar.icu",
  "quetre.privacyredirect.com",
  "quetre.private.coffee",
  "quetre.pufe.org",
  "quetre.pussthecat.org",
  "quetre.r4fo.com",
];
const fandomInstances = [
  "antifandom.com",
  "breeze.hostux.net",
  "breeze.mint.lgbt",
  "breezewiki.catsarch.com",
  "breezewiki.com",
  "breezewiki.nadeko.net",
  "breezewiki.pussthecat.org",
  "breezewiki.r4fo.com",
  "breezewiki.woodland.cafe",
  "bw.artemislena.eu",
  "z.opnxng.com",
];
const imdbInstances = [
  "binge.whatever.social",
  "d.opnxng.com",
  "libremdb.canine.tools",
  "libremdb.catsarch.com",
  "libremdb.darkness.services",
  "libremdb.ducks.party",
  "libremdb.iket.me",
  "libremdb.jeikobu.net",
  "libremdb.pussthecat.org",
  "libremdb.r4fo.com",
  "lmdb.bloat.cat",
];
const geniusInstances = [
  "dm.vern.cc",
  "dumb.bloat.cat",
  "dumb.canine.tools",
  "dumb.ducks.party",
  "dumb.jeikobu.net",
  "sing.whatever.social",
];
const ytmusicInstances = [
  "hp.ggtyler.dev",
  "music.adminforge.de",
];
const goodreadsInstances = [
  "biblioreads.canine.tools",
  "biblioreads.ducks.party",
  "biblioreads.eu.org",
  "biblioreads.lunar.icu",
  "biblioreads.mooo.com",
  "biblioreads.privacyredirect.com",
  "biblioreads.vercel.app",
  "bl.vern.cc",
  "br.bloat.cat",
  "read.freedit.eu",
];
const imgurInstances = [
  "imgur.artemislena.eu",
  "imgur.nerdvpn.de",
  "ri.nadeko.net",
  "rimgo.4o1x5.dev",
  "rimgo.aketawi.space",
  "rimgo.bloat.cat",
  "rimgo.canine.tools",
  "rimgo.catsarch.com",
  "rimgo.darkness.services",
  "rimgo.ducks.party",
  "rimgo.frontendfriendly.xyz",
  "rimgo.hostux.net",
  "rimgo.nohost.network",
  "rimgo.privacyredirect.com",
  "rimgo.reallyaweso.me",
  "rmgur.com",
];
const pixivInstances = [
  "pixiv.perennialte.ch",
];
const ultimateGuitarInstances = [];
const twitchInstances = [];
const instagramInstances = [
  "proxigram.privacyredirect.com",
];
const wolframAlphaInstances = [];
const redditInstances = [
  "i.opnxng.com",
  "redlib.4o1x5.dev",
  "redlib.catsarch.com",
  "redlib.orangenet.cc",
  "redlib.perennialte.ch",
  "redlib.privadency.com",
  "teddit.adminforge.de",
  "teddit.laserdisc.tokyo",
  "teddit.projectsegfau.lt",
  "teddit.pussthecat.org",
];
const bandcampInstances = [
  "tent.bloat.cat",
  "tent.canine.tools",
  "tent.deep-swarm.xyz",
  "tent.lab8.cz",
  "tent.nbh.ax",
  "tent.private.coffee",
  "tent.sny.sh",
  "tn.dc09.ru",
  "tn.maid.zone",
  "tn.vern.cc",
];
const tumblrInstances = [
  "tb.opnxng.com",
  "tumblr.nerdvpn.de",
];
const soundcloudInstances = [
  "sc.maid.zone",
  "sc.opnxng.com",
  "sc.perditum.com",
  "sc.tijn.dev",
  "sc2.bloat.cat",
  "sc2.maid.zone",
];
const udInstances = [
  "rd.vern.cc",
  "rd.bloat.cat",
];
const instructablesInstances = [];
const knowyourmemeInstances = [];
const searchInstances = [
  "searx.tiekoetter.com",
  "searx.stream",
  "search.rhscz.eu",
  "search.hbubli.cc",
  "searx.rhscz.eu",
  "searxng.site",
  "search.inetol.net",
  "search.bladerunn.in",
  "searx.oloke.xyz",
  "searx.namejeff.xyz",
  "ooglester.com",
  "search.ipsys.bf",
  "search.freestater.org",
  "searxng.shreven.org",
  "search.im-in.space"
];
const translateInstances = [
  "lingva.garudalinux.org",
  "lingva.lunar.icu",
  "mozhi.adminforge.de",
  "mozhi.aryak.me",
  "mozhi.bloat.cat",
  "mozhi.canine.tools",
  "mozhi.ducks.party",
  "mozhi.pussthecat.org",
  "mzh.dc09.xyz",
  "simplytranslate.aketawi.space",
  "simplytranslate.ducks.party",
  "simplytranslate.leemoon.network",
  "simplytranslate.org",
  "simplytranslate.pussthecat.org",
  "st.adast.dk",
  "st.odyssey346.dev",
  "st.privacydev.net",
  "translate.dr460nf1r3.org",
  "translate.igna.wtf",
  "translate.jae.fi",
  "translate.nerdvpn.de",
  "translate.plausibility.cloud",
  "translate.privacyredirect.com",
  "translate.projectsegfau.lt",
  "translate.slipfox.xyz",
  "translate.tiekoetter.com",
];
const snopesInstances = [
  "sd.vern.cc",
];
const reutersInstances = [
];
const stackoverflowInstances = [
  "anonflow.aketawi.space",
  "anonoverflow.frontendfriendly.xyz",
  "anonymousoverflow.catsarch.com",
  "anonymousoverflow.privacyredirect.com",
  "ao.bloat.cat",
  "ao.owo.si",
  "ao.vern.cc",
  "o.iii.st",
  "overflow.adminforge.de",
  "overflow.canine.tools",
  "overflow.darkness.services",
  "overflow.ducks.party",
  "overflow.einfachzocken.eu",
  "overflow.floppa.cloud",
  "overflow.hostux.net",
  "overflow.r4fo.com",
  "soflow.nerdvpn.de",
];
function eventualUpdateRules() {
  chrome.storage.sync
    .get(["redirectServices", "customInstances"])
    .then((savedData) => {
      const savedRedirectServices =
        savedData.redirectServices || defaultRedirectServices;
      const customInstances =
        savedData.customInstances || defaultCustomInstances;
      updateRules(savedRedirectServices, customInstances);
      console.log("eventually updated rules");
    });
}
eventualUpdateRules();
function getRandomInstance(instances) {
  return instances[Math.floor(Math.random() * instances.length)];
}

function updateRules(parameterRedirectServices, customInstances) {
  const redirectRules = [];

  const randYoutubeInstance =
    customInstances.youtubeInstance || getRandomInstance(youtubeInstances);
  const randTwitterInstance =
    customInstances.twitterInstance || getRandomInstance(twitterInstances);
  const randMediumInstance =
    customInstances.mediumInstance || getRandomInstance(mediumInstances);
  const randTiktokInstance =
    customInstances.tiktokInstance || getRandomInstance(tiktokInstances);
  const randQuoraInstance =
    customInstances.quoraInstance || getRandomInstance(quoraInstances);
  const randFandomInstance =
    customInstances.fandomInstance || getRandomInstance(fandomInstances);
  const randImdbInstance =
    customInstances.imdbInstance || getRandomInstance(imdbInstances);
  const randGeniusInstance =
    customInstances.geniusInstance || getRandomInstance(geniusInstances);
  const randytmusicInstance =
    customInstances.ytmusicInstance || getRandomInstance(ytmusicInstances);
  const randgoodreadsInstance =
    customInstances.goodreadsInstance || getRandomInstance(goodreadsInstances);
  const randimgurInstance =
    customInstances.imgurInstance || getRandomInstance(imgurInstances);
  const randpixivInstance =
    customInstances.pixivInstance || getRandomInstance(pixivInstances);
  const randUDInstance =
    customInstances.udInstance || getRandomInstance(udInstances);
  const randUltimateGuitarInstance =
    customInstances.ultimateGuitarInstance ||
    getRandomInstance(ultimateGuitarInstances);
  const randTwitchInstance =
    customInstances.twitchInstance || getRandomInstance(twitchInstances);
  const randInstagramInstance =
    customInstances.instagramInstance || getRandomInstance(instagramInstances);
  const randWolframAlphaInstance =
    customInstances.wolframAlphaInstance ||
    getRandomInstance(wolframAlphaInstances);
  const randBandcampInstance =
    customInstances.bandcampInstance || getRandomInstance(bandcampInstances);
  const randTumblrInstance =
    customInstances.tumblrInstance || getRandomInstance(tumblrInstances);
  const randSoundcloudInstance =
    customInstances.soundcloudInstance ||
    getRandomInstance(soundcloudInstances);
  const randRedditInstance =
    customInstances.redditInstance || getRandomInstance(redditInstances);
  const randInstructablesInstance =
    customInstances.instructablesInstance ||
    getRandomInstance(instructablesInstances);
  const randknowyourmemeInstance =
    customInstances.knowyourmemeInstance ||
    getRandomInstance(knowyourmemeInstances);
  const randsearchInstance =
    customInstances.searchInstance || getRandomInstance(searchInstances);
  const randtranslateInstance =
    customInstances.translateInstance || getRandomInstance(translateInstances);
  const randsnopesInstance =
    customInstances.snopesInstance || getRandomInstance(snopesInstances);
  const randreutersInstance =
    customInstances.reutersInstance || getRandomInstance(reutersInstances);
  const randstackoverflowInstance =
    customInstances.stackoverflowInstance ||
    getRandomInstance(stackoverflowInstances);

  function createRedirectRule(id, filter, instance) {
    try {
      uri = new URL(instance)
      protocol = uri.protocol.slice(0, -1) //uri.protocol returns a trailing colon; slice that off
      instance = uri.hostname
      port = uri.port
    } catch {
      protocol = "https"
      port = null
    }
    var transform = { scheme: protocol, host: instance, port: port }

    return {
      id: id,
      priority: 1,
      condition: {
        urlFilter: `||${filter}`,
        resourceTypes: ["main_frame"],
        excludedInitiatorDomains: [instance],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: transform,
        },
      },
    };
  }

  if (parameterRedirectServices.youtube) {
    redirectRules.push({
      id: 1,
      priority: 1,
      condition: {
        urlFilter: "||youtube.com",
        resourceTypes: ["main_frame"],
        excludedInitiatorDomains: [randYoutubeInstance],
        excludedRequestDomains: ["accounts.youtube.com", "studio.youtube.com"],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: { scheme: "https", host: randYoutubeInstance },
        },
      },
    });
    redirectRules.push({
      id: 2,
      priority: 1,
      condition: {
        urlFilter: "||youtube.com/embed",
        resourceTypes: ["sub_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: { scheme: "https", host: randYoutubeInstance },
        },
      },
    });
    redirectRules.push({
      id: 3,
      priority: 1,
      condition: {
        urlFilter: "||youtube-nocookie.com/embed",
        resourceTypes: ["sub_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: { scheme: "https", host: randYoutubeInstance },
        },
      },
    });
  }

  if (parameterRedirectServices.twitter) {
    redirectRules.push(
      createRedirectRule(4, "twitter.com", randTwitterInstance)
    );
    redirectRules.push(createRedirectRule(5, "x.com", randTwitterInstance));
    redirectRules.push({
      id: 6,
      priority: 1,
      condition: {
        regexFilter: "^https://t\\.co/(.*)$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randTwitterInstance}/t.co/\\1`,
        },
      },
    });
    redirectRules.push({
      id: 7,
      priority: 1,
      condition: {
        regexFilter: "^https://(pbs|video)\\.twimg\\.com/(.*)$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randTwitterInstance}/pic/\\1.twimg.com/\\2`,
        },
      },
    });
  }

  if (parameterRedirectServices.medium) {
    redirectRules.push(createRedirectRule(8, "medium.com", randMediumInstance));
  }
  if (parameterRedirectServices.tiktok) {
    redirectRules.push(createRedirectRule(9, "tiktok.com", randTiktokInstance));
  }
  if (parameterRedirectServices.quora) {
    redirectRules.push(createRedirectRule(10, "quora.com", randQuoraInstance));
  }
  if (parameterRedirectServices.fandom) {
    redirectRules.push({
      id: 11,
      priority: 2,
      condition: {
        regexFilter: "^https://(.*)\\.fandom\\.com/(.*)$",
        resourceTypes: ["main_frame"],
        excludedRequestDomains: ["www.fandom.com"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randFandomInstance}/\\1/\\2`,
        },
      },
    });
  }
  if (parameterRedirectServices.imdb) {
    redirectRules.push(createRedirectRule(12, "imdb.com", randImdbInstance));
  }
  if (parameterRedirectServices.genius) {
    redirectRules.push(
      createRedirectRule(13, "genius.com", randGeniusInstance)
    );
  }
  if (parameterRedirectServices.ytmusic) {
    redirectRules.push({
      id: 14,
      priority: 2,
      condition: {
        urlFilter: `||music.youtube.com`,
        resourceTypes: ["main_frame"],
        excludedInitiatorDomains: [randytmusicInstance],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: { scheme: "https", host: randytmusicInstance },
        },
      },
    });
  }
  if (parameterRedirectServices.goodreads) {
    redirectRules.push(
      createRedirectRule(15, "goodreads.com", randgoodreadsInstance)
    );
  }
  if (parameterRedirectServices.imgur) {
    redirectRules.push(createRedirectRule(16, "imgur.com", randimgurInstance));
    redirectRules.push({
      id: 17,
      priority: 2,
      condition: {
        regexFilter: "^https?://i\\.stack\\.imgur\\.com(/.*)?$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randimgurInstance}/stack\\1
          `,
        },
      },
    });
  }
  if (parameterRedirectServices.pixiv) {
    redirectRules.push(createRedirectRule(18, "pixiv.net", randpixivInstance));
    redirectRules.push({
      id: 19,
      priority: 2,
      condition: {
        regexFilter: "^https?://www?.pixiv\\.net/en(/.*)?$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randpixivInstance}\\1
          `,
        },
      },
    });
  }
  if (parameterRedirectServices.ud) {
    redirectRules.push(
      createRedirectRule(20, "urbandictionary.com", randUDInstance)
    );
  }
  if (parameterRedirectServices.ultimateGuitar) {
    redirectRules.push(
      createRedirectRule(21, "ultimate-guitar.com", randUltimateGuitarInstance)
    );
  }
  if (parameterRedirectServices.twitch) {
    redirectRules.push(createRedirectRule(22, "twitch.tv", randTwitchInstance));
  }
  if (parameterRedirectServices.instagram) {
    redirectRules.push(
      createRedirectRule(23, "instagram.com", randInstagramInstance)
    );
  }
  if (parameterRedirectServices.wolframAlpha) {
    redirectRules.push(
      createRedirectRule(24, "wolframalpha.com", randWolframAlphaInstance)
    );
  }
  if (parameterRedirectServices.bandcamp) {
    redirectRules.push(
      createRedirectRule(25, "bandcamp.com", randBandcampInstance)
    );
    redirectRules.push({
      id: 26,
      priority: 2,
      condition: {
        regexFilter: "^https://(.*)\\.bandcamp\\.com/$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randBandcampInstance}/artist.php?name=\\1`,
        },
      },
    });
    redirectRules.push({
      id: 27,
      priority: 3,
      condition: {
        regexFilter: "^https://(.*)\\.bandcamp\\.com/(track|album)/(.*)$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randBandcampInstance}/release.php?artist=\\1&type=\\2&name=\\3`,
        },
      },
    });
    redirectRules.push({
      id: 28,
      priority: 2,
      condition: {
        regexFilter: "^https://bandcamp\\.com/search\\?q=(.*)$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randBandcampInstance}/search.php?query=\\1`,
        },
      },
    });
  }
  if (parameterRedirectServices.tumblr) {
    redirectRules.push(
      createRedirectRule(29, "tumblr.com", randTumblrInstance)
    );
    redirectRules.push({
      id: 30,
      priority: 2,
      condition: {
        regexFilter: "^https://(.*)\\.tumblr\\.com/(.*)$",
        resourceTypes: ["main_frame"],
        excludedRequestDomains: ["www.tumblr.com"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randTumblrInstance}/\\1/\\2`,
        },
      },
    });
    redirectRules.push({
      id: 31,
      priority: 3,
      condition: {
        regexFilter: "^https://(.*)\\.tumblr\\.com/post/(.*)$",
        resourceTypes: ["main_frame"],
        excludedRequestDomains: ["www.tumblr.com"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randTumblrInstance}/\\1/\\2`,
        },
      },
    });
  }
  if (parameterRedirectServices.soundcloud) {
    redirectRules.push({
      id: 32,
      priority: 2,
      action: {
        type: "redirect",
        redirect: {
          url: `https://${randSoundcloudInstance}/kiosk?serviceId=1`,
        },
      },
      condition: {
        urlFilter: "||soundcloud.com/|",
        resourceTypes: ["main_frame"],
        excludedInitiatorDomains: [randSoundcloudInstance],
      },
    });
    redirectRules.push({
      id: 33,
      priority: 1,
      condition: {
        regexFilter: "^https://soundcloud\\.com/(.*)$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randSoundcloudInstance}/stream?url=https://soundcloud.com/\\1`,
        },
      },
    });
  }
  if (parameterRedirectServices.reddit) {
    redirectRules.push(
      createRedirectRule(34, "reddit.com", randRedditInstance)
    );
  }
  if (parameterRedirectServices.instructables) {
    redirectRules.push(
      createRedirectRule(35, "instructables.com", randInstructablesInstance)
    );
  }
  if (parameterRedirectServices.knowyourmeme) {
    redirectRules.push(
      createRedirectRule(36, "knowyourmeme.com", randknowyourmemeInstance)
    );
  }
  if (parameterRedirectServices.search) {
    redirectRules.push({
      id: 37,
      priority: 1,
      condition: {
        urlFilter: "||www.google.com/search",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: {
            scheme: "https",
            host: randsearchInstance,
            queryTransform: {
              removeParams: [
                "client",
                "sclient",
                "source",
                "aq",
                "pq",
                "sa",
                "swrnum",
                "as_q",
                "oi",
                "resnum",
                "sourceid",
                "ie",
                "gs_lcrp",
                "oq",
                "newwindow",
                "safe",
                "pws",
                "complete",
                "as_qdr",
                "adtest",
              ],
            },
          },
        },
      },
    });
  }
  if (parameterRedirectServices.translate) {
    redirectRules.push({
      id: 38,
      priority: 1,
      condition: {
        urlFilter: `||translate.google.com`,
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: {
            scheme: "https",
            host: randtranslateInstance,
            queryTransform: { removeParams: ["op"] },
          },
        },
      },
    });
  }
  if (parameterRedirectServices.snopes) {
    redirectRules.push(
      createRedirectRule(39, "snopes.com", randsnopesInstance)
    );
  }
  if (parameterRedirectServices.reuters) {
    redirectRules.push(
      createRedirectRule(40, "reuters.com", randreutersInstance)
    );
  }
  if (parameterRedirectServices.stackoverflow) {
    redirectRules.push(
      createRedirectRule(41, "stackoverflow.com", randstackoverflowInstance)
    );
    redirectRules.push({
      id: 42,
      priority: 1,
      condition: {
        regexFilter: "^https://(.*)\\.stackexchange\\.com/questions/(.*)$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randstackoverflowInstance}/exchange/\\1/questions/\\2`,
        },
      },
    });
  }
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42,
    ],
    addRules: redirectRules,
  });
  console.log("Updated Rules:");
  console.log(redirectRules);
  console.log(parameterRedirectServices);
  console.log(customInstances);
}

async function checkAlarmState() {
  const alarm = await chrome.alarms.get("updateRulesAlarm");

  if (!alarm) {
    await chrome.alarms.create("updateRulesAlarm", {
      delayInMinutes: 3,
      periodInMinutes: 3,
    });
  }
}

checkAlarmState();
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm && alarm.name === "updateRulesAlarm") {
    eventualUpdateRules();
    console.log("Alarm fired");
  }
});
chrome.runtime.onMessage.addListener((message) => {
  if (
    message &&
    message.type === "updateOptions" &&
    message.redirectServices &&
    message.customInstances
  ) {
    redirectServices = message.redirectServices;
    customInstances = message.customInstances;
    updateRules(redirectServices, customInstances);
  }
});
chrome.runtime.onInstalled.addListener((handleInstalled) => {
  if (handleInstalled.reason == "install" || "update") {
    //first install
    //show onboarding page
    chrome.tabs.create({
      url: "onboarding.html",
    });
  }
});
