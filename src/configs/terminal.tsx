import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hey there! I received my Bachelor's degree in Computer Science at Deenbandhu
              Chhotu Ram University Of Science And Technology, Murthal Sonipat (Haryana).
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Front development / backend development"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content: "I'm a incoming Valorant Radiant lol."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:souravsh1234567@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                souravsh1234567@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/souravprogrammer"
                target="_blank"
                rel="noreferrer"
              >
                @souravprogrammer
              </a>
            </li>

            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/sourav-sharma-5428ab10a/"
                target="_blank"
                rel="noreferrer"
              >
                sourav sharma
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
