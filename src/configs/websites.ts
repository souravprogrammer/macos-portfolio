import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-blog",
        title: "Website",
        img: "https://zxh.io/img/avatar.jpg",
        link: "https://souravprogrammer.github.io/portfolio/",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/souravprogrammer",
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/sourav-sharma-5428ab10a/"
      },
      {
        id: "my-twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://www.twitter.com"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:souravsh1234567@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "my-blog",
        title: "Website",
        img: "https://animeflix-36kxzzxld-souravprogrammer.vercel.app/icon-192x192.png",
        link: "https://animeflix-36kxzzxld-souravprogrammer.vercel.app",
        inner: true
      },
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://www.twitter.com/"
      },
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "steam",
        title: "Steam",
        img: "img/sites/steam.svg",
        link: "https://store.steampowered.com/"
      },
      {
        id: "youtube",
        title: "youtube",
        img: "https://www.youtube.com/s/desktop/3515f74b/img/favicon_144x144.png",
        link: "https://youtube.com/"
      },
    ]
  }
};

export default websites;
