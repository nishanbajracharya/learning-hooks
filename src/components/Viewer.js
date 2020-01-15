import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

import content from 'constants/content';

function Viewer(props) {
  return (
    <div className="lg:clearfix">
      <div className="lg:w-1/2 lg:float-left lg:h-screen border-r">
      <SyntaxHighlighter language="jsx" style={tomorrow} className="syntax-highlighter h-full">
        {content[props.path]}
      </SyntaxHighlighter>
      </div>
      <div className="lg:w-1/2 lg:float-left lg:h-screen bg-white overflow-auto">{props.children}</div>
    </div>
  );
}

export default Viewer;
