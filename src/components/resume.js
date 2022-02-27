import * as React from 'react';
import { resumeStyles } from '../styles';
import ResumeIcon from '/content/images/svg/resume.svg';

function Resume() {
  return (
    <a
      href="/MattCachoResume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      // className={resumeStyles.resume}
    >
      <ResumeIcon className={resumeStyles.icon} />
    </a>
  );
}

export default Resume;
