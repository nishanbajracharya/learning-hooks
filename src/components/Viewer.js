import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import content from '../constants/content';

function Viewer(props) {
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={tomorrowNight}>
        {content[props.path]}
      </SyntaxHighlighter>
      {props.children}
    </div>
  );
}

export default Viewer;
