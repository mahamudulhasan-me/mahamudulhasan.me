import moment from "moment/moment";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { RiCloseFill } from "react-icons/ri";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContactNumber from "./ContactNumber";
import FindMe from "./FindMe";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const customTheme = {
    background: "transparent",
    fontSize: "18px",
  };
  return (
    <>
      <Helmet>
        <title>Contact | Mahamudul Hasan</title>
      </Helmet>
      <div className="grid grid-cols-12 min-h-[calc(100vh-6.5rem)]">
        <div className="col-span-7  border-r border-p4 h-full flex justify-start text-s1">
          <div className="min-w-[36%] h-full border-r border-p4 ">
            <ContactNumber />
            {/* find me compo */}
            <FindMe />
          </div>
          <div className="text-s1 w-full">
            <div className={`border-b  border-p4 w-full h-10`}>
              <span className="border-r border-p4 h-full w-fit flex gap-1 items-center px-3 cursor-pointer ">
                contacts
                <RiCloseFill size={20} />
              </span>
            </div>
            <div className="flex justify-center items-center h-full">
              <form className="contact-form space-y-6">
                <div>
                  <label htmlFor="name">_name</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    className=""
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="name">_email</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="name">_message</label>
                  <br />
                  <textarea
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-[23rem] h-36 bg-p3 rounded-lg px-3 py-4 outline-none border border-p4 mt-2"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className=" py-3 px-6 rounded-lg text-white bg-[#1C2B3A] hover:bg-[#263B50] transition-all"
                >
                  submit-message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-5 ">
          <div className={`border-b  border-p4 w-full h-10`}></div>
          <div className="w-full h-full pr-6 ">
            <div className=" flex w-full h-[calc(100%-40px)] justify-center items-center border-r border-p4">
              <SyntaxHighlighter
                language="javascript"
                showLineNumbers
                customStyle={customTheme}
                style={gradientDark}
              >
                {`const button = document.querySelector('#sendBtn');

const message = {
	name: ${name ? name : '""'},
	email: ${email ? email : '""'},
	message: ${message ? message : '""'},
	date: ${moment(new Date()).format("Do MMM YYYY")}
}

button.addEventListener('click', () => {
	form.send(message);
})`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
