import { Helmet } from "react-helmet";
import { HiTerminal } from "react-icons/hi";
import { RiGamepadFill, RiInformationFill } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import Sticky from "react-stickynode";
import AboutCodeSnippet from "../../components/AboutCodeSnippet/AboutCodeSnippet";
import AboutMainMenuActive from "../../components/ActiveLink/AboutMainMenuActive";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Mahamudul Hasan</title>
      </Helmet>
      {/* <ResponsiveAbout /> */}
      <div className=" md:grid grid-cols-12  w-full">
        <div className="col-span-7 border-r border-p4 w-full h-full">
          <div className="flex h-full items-start lg:items-stretch">
            <div className="min-w-[7%] border-r border-b lg:border-b-0 border-p4 pt-5  ">
              <Sticky
                enabled={true}
                top={80}
                innerActiveClass="max-lg:!static max-lg:!transform-none max-lg:!w-auto"
              >
                <div className="text-2xl flex flex-col items-center gap-5 text-s1">
                  <AboutMainMenuActive to={"/about/professional-info"}>
                    <HiTerminal />
                  </AboutMainMenuActive>
                  <AboutMainMenuActive to={"/about/personal-info"}>
                    <RiInformationFill />
                  </AboutMainMenuActive>
                  <AboutMainMenuActive to={"/about/hobbies"}>
                    <RiGamepadFill />
                  </AboutMainMenuActive>
                </div>
              </Sticky>
            </div>

            <div className="md:flex md:min-w-[93%]">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="col-span-5  lg:pb-0 pb-10">
          <div className={`border-b border-p4 w-full h-10`}></div>
          <div className="w-full md:pr-6 md:px-0 px-2">
            <div className="w-full min-h-[calc(100%-40px)] px-5 mb-10 py-3 border-r border-p4">
              <span className="text-s1 md:text-2xl text-xl">{`// Code snippet showcase:`}</span>
              <div className="mt-10 mb-5 space-y-8">
                <AboutCodeSnippet>
                  {`function initializeModelChunk(chunk) {
  const value = parseModel(chunk._response, chunk._value);
  const initializedChunk = chunk;
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`}
                </AboutCodeSnippet>
                <AboutCodeSnippet>
                  {`function initializeModelChunk(chunk) {
  const value = parseModel(chunk._response, chunk._value);
  const initializedChunk = chunk;
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`}
                </AboutCodeSnippet>
                <AboutCodeSnippet>
                  {`export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);`}
                </AboutCodeSnippet>
                <AboutCodeSnippet>
                  {`export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);`}
                </AboutCodeSnippet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
