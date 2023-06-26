import { FaFortAwesome, FaGraduationCap } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Education = () => {
  return (
    <div className="text-s1">
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #1E2D3D" }}
          date="2022 - present"
          iconStyle={{ background: "#011627", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">B.Sc. In CSE</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dhaka International University (DIU)
          </h4>
          <p>B.Sc in Computer Science and Engineering is ongoing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #1E2D3D" }}
          date="Sep 1, 2015 - Jul 31, 2019"
          iconStyle={{ background: "#011627", color: "#fff" }}
          icon={<FaFortAwesome />}
        >
          <h3 className="vertical-timeline-element-title">
            Diploma in Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Institute of Information Technology Bogura (IITB)
          </h4>
          <p>I have completed Diploma in Computer Technology</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
