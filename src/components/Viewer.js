import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import content from '../constants/content';

function Viewer(props) {
  return (
    <div className="lg:clearfix">
      <div className="lg:w-1/2 lg:float-left lg:h-screen">
      <SyntaxHighlighter language="javascript" style={atomOneLight} className="h-full border-r">
        {content[props.path]}
      </SyntaxHighlighter>
      </div>
      <div className="lg:w-1/2 lg:float-left lg:h-screen bg-white">{props.children}</div>
    </div>
  );
}

export default Viewer;
