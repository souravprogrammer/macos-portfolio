import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "AnimeFlix",
        title: "Anime Flix",
        file: "markdown/Anime-flx.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "watch high quality show online without any ads...",
        link: "https://github.com/souravprogrammer/dogeSan"
      },
      {
        id: "WebShare",
        title: "WebShare",
        file: "https://raw.githubusercontent.com/souravprogrammer/webShare/master/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt:
          "webShare is a simple file sharing web application built using TypeScript...",
        link: "https://github.com/souravprogrammer/dogeSan"
      },
      {
        id: "dogeSan",
        title: "DogeSan",
        file: "https://raw.githubusercontent.com/souravprogrammer/dogeSan/master/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "Doge San is a small app that allows you to watch your favorite...",
        link: "https://github.com/souravprogrammer/dogeSan"
      }
    ]
  }
];

export default bear;
