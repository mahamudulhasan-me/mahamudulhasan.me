import emailjs from "emailjs-com";
import moment from "moment/moment";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { FaHandPeace } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContactNumber from "./ContactNumber";
import FindMe from "./FindMe";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nli385v",
        "template_3h2bc0f",
        form.current,
        "zlcygz2kBru-sUdFt"
      )
      .then((response) => {
        if (response.status === 200) {
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  const customTheme = {
    background: "transparent",
    fontSize: "16px",
  };
  return (
    <>
      <Helmet>
        <title>Contact | Mahamudul Hasan</title>
      </Helmet>
      <div className="md:grid md:grid-cols-12 lg:min-h-[calc(100vh-6.5rem)]">
        <div className="col-span-7  md:border-r border-p4 h-full md:flex justify-start text-s1">
          <div className="lg:min-w-[36%] h-full border-r border-p4  space-y-1 -z-50">
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
            <div className="flex justify-center items-center h-full w-full">
              {success ? (
                <div className="text-center">
                  <h2 className="text-3xl text-white flex justify-center items-center">
                    Thank You! <FaHandPeace color="#F9BF2F" />
                  </h2>
                  <p>
                    Your message has been accepted. <br /> You will recieve
                    answer really soon!
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 py-3 px-6 rounded-lg text-white bg-[#1C2B3A] hover:bg-[#263B50] transition-all"
                  >
                    send-new-message
                  </button>
                </div>
              ) : (
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="contact-form space-y-6"
                >
                  <div>
                    <label htmlFor="name">_name</label>
                    <br />
                    <input
                      type="text"
                      name="user_name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="name">_email</label>
                    <br />
                    <input
                      type="text"
                      name="user_email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="name">_message</label>
                    <br />
                    <textarea
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                      className="md:w-[23rem] w-[20rem] h-36 bg-p3 rounded-lg px-3 py-4 outline-none border border-p4 mt-2"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className=" py-3 px-6 rounded-lg text-white bg-[#1C2B3A] hover:bg-[#263B50] transition-all"
                  >
                    submit-message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-5 ">
          <div className={`border-b  border-p4 w-full h-10`}></div>
          <div className="w-full h-full lg:pr-6 ">
            <div className=" md:flex w-full lg:h-[calc(100%-40px)] h-full  justify-center items-center lg:border-r border-p4 lg:pb-0 pb-20">
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
