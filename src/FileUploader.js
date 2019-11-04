import { Receiver } from 'react-file-uploader';

import React from 'react';

export default function FileUploader() {
  return (
    <div>
     <h1>Upload </h1>
     <h3>File Name</h3>
     <input className="input is-info" type="text" placeholder="Text input"  />
     <h3>Description</h3>
     <input className="input is-info" type="text" placeholder="Text input" />
    </div>
  );
}
