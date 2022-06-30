import React from "react";

type ResumeProps = {resume: boolean}

const Resume:React.FC<ResumeProps> = (props) => {
  return (
    <div className="col-cent">
      <h1>Thanks for viewing my Resume</h1>
      <a href="http://www.quintinrussell.us/">My Portfolio</a>
    </div>
  )
}

export default Resume
