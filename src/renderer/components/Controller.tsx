import React from 'react'
import { useState } from 'react';

function Controller() {

    const [version, setVersion] = useState("a");

    window.electron.ipcRenderer.once('get-version', (arg: any) => {
        setVersion(arg);
    });
    window.electron.ipcRenderer.sendMessage('get-version');

    return (
    <div>Controller got {version}</div> 
  )
}

export default Controller

  