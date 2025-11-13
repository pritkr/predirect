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
  ultimateGuitar: false,
  twitch: false,
  instagram: false,
  wolframAlpha: false,
  bandcamp: true,
  tumblr: true,
  soundcloud: true,
  reddit: true,
  instructables: false,
  knowyourmeme: false,
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
  "https://inv.nadeko.net",
  "https://invidious.nerdvpn.de",
  "https://invidious.f5.si",
  "https://inv.perditum.com",
  "https://yewtu.be",
  "https://tube.cadence.moe",
  "https://tube.boritsch.de",
];
const twitterInstances = [
  "https://xcancel.com",
  "https://nitter.poast.org",
  "https://nitter.privacyredirect.com",
  "https://lightbrd.com",
  "https://nitter.space",
  "https://nitter.tiekoetter.com",
  "https://nuku.trabun.org",
  "https://nitter.kuuro.net",
  "https://worldcorrespondents.com",
];
const mediumInstances = [
  "https://scribe.rip",
  "https://scribe.nixnet.services",
  "https://scribe.citizen4.eu",
  "https://scribe.bus-hit.me",
  "https://scribe.froth.zone",
  "https://scribe.privacydev.net",
  "https://scribe.rawbit.ninja",
  "https://sc.vern.cc",
  "https://m.opnxng.com",
  "https://scribe.manasiwibi.com",
  "https://scribe.r4fo.com",
  "https://scribe.privacyredirect.com",
];
const tiktokInstances = [
  "https://proxitok.pabloferreiro.es",
  "https://proxitok.pussthecat.org",
  "https://tok.habedieeh.re",
  "https://proxitok.privacydev.net",
  "https://tok.artemislena.eu",
  "https://tok.adminforge.de",
  "https://cringe.whatever.social",
  "https://proxitok.lunar.icu",
  "https://proxitok.privacy.com.de",
  "https://cringe.seitan-ayoub.lol",
  "https://tt.opnxng.com",
  "https://tiktok.wpme.pl",
  "https://proxitok.r4fo.com",
  "https://proxitok.belloworld.it",
];
const quoraInstances = [
  "https://quetre.iket.me",
  "https://qr.vern.cc",
  "https://quetre.pussthecat.org",
  "https://quetre.tokhmi.xyz",
  "https://quetre.privacydev.net",
  "https://ask.habedieeh.re",
  "https://quetre.blackdrgn.nl",
  "https://quetre.lunar.icu",
  "https://q.opnxng.com",
  "https://ask.sudovanilla.org",
  "https://quetre.drgns.space",
  "https://quetre.r4fo.com",
  "https://quetre.ducks.party",
  "https://quetre.nadeko.net",
  "https://quetre.private.coffee",
  "https://quetre.canine.tools",
  "https://qt.bloat.cat",
  "https://quetre.jeikobu.net",
  "https://quetre.franklyflawless.org",
  "https://q.307200.xyz",
  "https://quora.nerdvpn.de",
  "https://quetre.privacyredirect.com",
];
const fandomInstances = [
  "https://breezewiki.com",
  "https://antifandom.com",
  "https://breezewiki.pussthecat.org",
  "https://z.opnxng.com",
  "https://breezewiki.hyperreal.coffee",
  "https://breezewiki.woodland.cafe",
  "https://breezewiki.catsarch.com",
  "https://breezewiki.nadeko.net",
  "https://fandom.reallyaweso.me",
  "https://breezewiki.r4fo.com",
  "https://bw.artemislena.eu",
  "https://bw.hamstro.dev",
  "https://breeze.hostux.net",
  "https://breezewiki.private.coffee",
];
const imdbInstances = [
  "https://libremdb.iket.me",
  "https://libremdb.pussthecat.org",
  "https://ld.vern.cc",
  "https://binge.whatever.social",
  "https://libremdb.lunar.icu",
  "https://libremdb.jeikobu.net",
  "https://lmdb.hostux.net",
  "https://binge.whateveritworks.org",
  "https://libremdb.nerdyfam.tech",
  "https://libremdb.tux.pizza",
  "https://libremdb.frontendfriendly.xyz",
  "https://d.opnxng.com",
  "https://libremdb.catsarch.com",
  "https://libremdb.r4fo.com",
  "https://libremdb.privacydev.net",
  "https://libremdb.ducks.party",
  "https://lmdb.ngn.tf",
  "https://lmdb.bloat.cat",
  "https://libremdb.darkness.services",
  "https://libremdb.hyperreal.coffee",
  "https://ld.ca.zorby.top",
  "https://imdb.nerdvpn.de",
  "https://libremdb.canine.tools",
  "https://libremdb-fly.fly.dev",
  "https://libremdb.franklyflawless.org",
];
const geniusInstances = [
  "https://dm.vern.cc",
  "https://sing.whatever.social",
  "https://dumb.lunar.icu",
  "https://dumb.privacydev.net",
  "https://dumb.ducks.party",
  "https://dumb.privacyfucking.rocks",
  "https://dumb.hyperreal.coffee",
  "https://dumb.bloat.cat",
  "https://dumb.jeikobu.net",
  "https://dumb.canine.tools",
  "https://lyr.dc09.ru",
  "https://db.kuuro.net",
];
const ytmusicInstances = [
  "beatbump.io",
  "https://hyperpipe.surge.sh",
  "https://music.adminforge.de",
  "https://music.pfcd.me",
  "https://hyperpipe.frontendfriendly.xyz",
  "https://hyperpipe.drgns.space",
  "https://hyperpipe.projectsegfau.lt",
  "https://hp.ggtyler.dev",
  "https://hyperpipe.lunar.icu",
  "https://hp.iqbalrifai.eu.org",
  "https://hp.ngn.tf",
  "https://hyperpipe.ducks.party",
  "https://hyperpipe.darkness.services",
];
const goodreadsInstances = [
  "https://biblioreads.eu.org",
  "https://biblioreads.vercel.app",
  "https://biblioreads.mooo.com",
  "https://bl.vern.cc",
  "https://biblioreads.lunar.icu",
  "https://read.whateveritworks.org",
  "https://biblioreads.privacyfucking.rocks",
  "https://read.seitan-ayoub.lol",
  "https://read.freedit.eu",
  "https://biblioreads.ducks.party",
  "https://biblioreads.snine.nl",
  "https://biblioreads.privacyredirect.com",
  "https://reads.nezumi.party",
  "https://br.bloat.cat",
  "https://biblioreads.canine.tools",
  "https://biblioreads.franklyflawless.org",
];
const imgurInstances = [
  "https://rimgo.pussthecat.org",
  "https://rimgo.totaldarkness.net",
  "https://rimgo.bus-hit.me",
  "https://imgur.artemislena.eu",
  "https://imgur.010032.xyz",
  "https://rimgo.hostux.net",
  "https://ri.nadeko.net",
  "https://rimgo.lunar.icu",
  "https://rimgo.projectsegfau.lt",
  "https://rimgo.eu.projectsegfau.lt",
  "https://rimgo.us.projectsegfau.lt",
  "https://rimgo.in.projectsegfau.lt",
  "https://rimgo.fascinated.cc",
  "https://rimgo.nohost.network",
  "https://rimgo.catsarch.com",
  "https://rimgo.frontendfriendly.xyz",
  "https://rimgo.drgns.space",
  "https://rimgo.quantenzitrone.eu",
  "https://rimgo.frylo.net",
  "https://rimgo.ducks.party",
  "https://rimgo.perennialte.ch",
  "https://rmgur.com",
  "https://rimgo.privacyredirect.com",
  "https://rimgo.reallyaweso.me",
  "https://rimgo.bloat.cat",
  "https://rimgo.darkness.services",
  "https://rimgo.4o1x5.dev",
  "https://rimgo.aketawi.space",
  "https://imgur.nerdvpn.de",
  "https://rimgo.thebunny.zone",
  "https://rimgo.canine.tools",
  "https://rimgo.astrial.org",
  "https://imgur.fsky.io",
  "https://r.opnxng.com",
  "https://imgur.sudovanilla.org",
  "https://i.datuan.dev",
  "https://rg.kuuro.net",
  "https://rimgo.proxik.cloud",
];
const pixivInstances = [
  "https://pixivfe.exozy.me",
  "https://pixivfe.drgns.space",
  "https://pixivfe.ducks.party",
  "https://pixiv.perennialte.ch",
  "https://pixivfe.darkness.services",
  "https://pixivfe.thebunny.zone",
];
const ultimateGuitarInstances = [];
const twitchInstances = [
  "https://safetwitch.drgns.space",
  "https://ttv.vern.cc",
  "https://twitch.sudovanilla.org",
  "https://safetwitch.ducks.party",
  "https://safetwitch.nogafam.fr",
  "https://safetwitch.privacyredirect.com",
  "https://safetwitch.darkness.services",
  "https://safetwitch.4o1x5.dev",
  "https://safetwitch.adminforge.de",
  "https://twitch.blitzw.in",
  "https://safetwitch.canine.tools",
  "https://safetwitch.privadency.com",
];
const instagramInstances = [];
const wolframAlphaInstances = [];
const redditInstances = [
  "https://redlib.catsarch.com",
  "https://redlib.perennialte.ch",
  "https://libreddit.privacydev.net",
  "https://red.artemislena.eu",
  "https://redlib.nadeko.net",
  "https://redlib.4o1x5.dev",
  "https://redlib.frontendfriendly.xyz",
  "https://redlib.reallyaweso.me",
  "https://reddit.rtrace.io",
  "https://lr.ptr.moe",
  "https://redlib.orangenet.cc",
  "https://redlib.privadency.com",
];
const bandcampInstances = [
  "https://bandcamp.lurkmore.com",
  "https://tent.bloat.cat",
  "https://tent.canine.tools",
  "https://tent.deep-swarm.xyz",
  "https://tent.lab8.cz",
  "https://tent.nbh.ax",
  "https://tent.private.coffee",
  "https://tent.sny.sh",
  "https://tn.dc09.ru",
  "https://tn.maid.zone",
  "https://tn.vern.cc",
];
const tumblrInstances = [
  "https://pb.bloat.cat",
  "https://tb.opnxng.com",
  "https://priviblur.pussthecat.org",
  "https://priviblur.thebunny.zone",
  "https://priviblur.canine.tools",
  "https://pb.cleberg.net",
  "https://tumblr.nerdvpn.de",
  "https://pb.proxik.cloud",
  "https://priviblur.privadency.com",
];
const soundcloudInstances = [
  "https://sc.maid.zone",
  "https://sc.bloat.cat",
  "https://sc.opnxng.com",
  "https://sc2.bloat.cat",
  "https://sc.tijn.dev",
  "https://sc.kuuro.net",
  "https://sc.perditum.com",
];
const udInstances = [
  "https://rd.vern.cc",
  "https://rd.bloat.cat",
];
const instructablesInstances = [];
const knowyourmemeInstances = [];
const searchInstances = [
  "https://baresearch.org",
  "https://copp.gg",
  "https://darmarit.org/searx",
  "https://etsi.me",
  "https://fairsuch.net",
  "https://find.xenorio.xyz",
  "https://kantan.cat",
  "https://metacat.online",
  "https://o5.gg",
  "https://ooglester.com",
  "https://opnxng.com",
  "https://paulgo.io",
  "https://priv.au",
  "https://search.2b9t.xyz",
  "https://search.abohiccups.com",
  "https://search.anoni.net",
  "https://search.atl.tools",
  "https://search.bladerunn.in",
  "https://search.buddyverse.net",
  "https://search.catboy.house",
  "https://search.charliewhiskey.net",
  "https://search.einfachzocken.eu",
  "https://search.ethibox.fr",
  "https://search.femboy.ad",
  "https://search.hbubli.cc",
  "https://search.im-in.space",
  "https://search.indst.eu",
  "https://search.inetol.net",
  "https://search.internetsucks.net",
  "https://search.ipsys.bf",
  "https://search.ipv6s.net",
  "https://search.leptons.xyz",
  "https://search.mdosch.de",
  "https://search.nerdvpn.de",
  "https://search.oh64.moe",
  "https://search.ononoki.org",
  "https://search.perditum.com",
  "https://search.privacyredirect.com",
  "https://search.rhscz.eu",
  "https://search.rowie.at",
  "https://search.sapti.me",
  "https://search.undertale.uk",
  "https://search.unredacted.org",
  "https://search.url4irl.com",
  "https://searx.ankha.ac",
  "https://searx.dresden.network",
  "https://searx.juancord.xyz",
  "https://searx.lunar.icu",
  "https://searx.mbuf.net",
  "https://searx.mxchange.org",
  "https://searx.namejeff.xyz",
  "https://searx.oloke.xyz",
  "https://searx.ox2.fr",
  "https://searx.party",
  "https://searx.perennialte.ch",
  "https://searx.ppeb.me",
  "https://searx.rhscz.eu",
  "https://searx.ro",
  "https://searx.sev.monster",
  "https://searx.stream",
  "https://searx.tiekoetter.com",
  "https://searx.tuxcloud.net",
  "https://searxng.biz",
  "https://searxng.canine.tools",
  "https://searxng.f24o.zip",
  "https://searxng.hweeren.com",
  "https://searxng.shreven.org",
  "https://searxng.site",
  "https://searxng.website",
  "https://seek.fyi",
  "https://sx.catgirl.cloud",
  "https://www.gruble.de",
];
const translateInstances = [
  "https://mozhi.aryak.me",
  "https://translate.projectsegfau.lt",
  "https://translate.nerdvpn.de",
  "https://mozhi.ducks.party",
  "https://mozhi.pussthecat.org",
  "https://mozhi.adminforge.de",
  "https://translate.privacyredirect.com",
  "https://mozhi.canine.tools",
  "https://mzh.dc09.ru",
  "https://mozhi.franklyflawless.org",
];
const snopesInstances = ["sd.vern.cc"];
const reutersInstances = [];
const stackoverflowInstances = [
  "https://code.whatever.social",
  "https://ao.vern.cc",
  "https://overflow.smnz.de",
  "https://overflow.lunar.icu",
  "https://overflow.adminforge.de",
  "https://overflow.floppa.cloud",
  "https://overflow.hostux.net",
  "https://overflow.projectsegfau.lt",
  "https://code.xbdm.fun",
  "https://overflow.fascinated.cc",
  "https://ao.bloat.cat",
  "https://anonoverflow.frontendfriendly.xyz",
  "https://ao.owo.si",
  "https://overflow.datura.network",
  "https://overflow.freedit.eu",
  "https://ao.rootdo.com",
  "https://anonoverflow.hyperreal.coffee",
  "https://o.sudovanilla.org",
  "https://anonymousoverflow.privacyfucking.rocks",
  "https://exchange.seitan-ayoub.lol",
  "https://overflow.r4fo.com",
  "https://overflow.ducks.party",
  "https://ao.ngn.tf",
  "https://overflow.snine.nl",
  "https://anonymousoverflow.privacyredirect.com",
  "https://soflow.nerdvpn.de",
  "https://overflow.einfachzocken.eu",
  "https://overflow.seasi.dev",
  "https://anonymousoverflow.catsarch.com",
  "https://overflow.darkness.services",
  "https://anonflow.aketawi.space",
  "https://ao.bunk.lol",
  "https://o.iii.st",
  "https://overflow.canine.tools",
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
