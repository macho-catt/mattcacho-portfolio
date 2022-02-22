import * as React from 'react';
import { resumeStyles } from '../styles';

function Resume() {
  return (
    <a
      href="/MattCachoResume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={resumeStyles.resume}
    >
      Resume
    </a>
  );
}

export default Resume;
