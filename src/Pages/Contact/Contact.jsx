import React from "react";

const Contact = () => {
  let arr = [
    { name: "X", link: "#" },
    { name: "Email", link: "mailto:kdeotale46@gmail.com" },
    { name: "Git-Hub", link: "https://github.com/kunal8987" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kunal-deotale-976b10246/",
    },
  ];
  return (
    <div className="bg-base-200 flex-col md:flex-row">
      <footer className="footer footer-center text-base-content rounded p-5">
        <div className="place-items-center">
          <h1 className="md:text-5xl text-3xl font-merry font-bold">
            Connect With Me
          </h1>
        </div>
        <nav className=" flex flex-col md:flex-row">
          {arr.map((el) => {
            return (
              <div className="badge font-lora text-xl p-4 mx-2 badge-accent">
                <a href={el.link} target="_blank">
                  {el.name}
                </a>
              </div>
            );
          })}
        </nav>
        <aside>
          <p className=" font-merry font-semibold text-lg">
            Copyright © {new Date().getFullYear()} - All Right Reserved By KUNAL
            DEOTALE
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Contact;
