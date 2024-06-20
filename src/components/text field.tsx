import React, { useState } from 'react';
import AceEditor from 'react-ace';
import Tabs from './Tab';
import File from './file';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const Item = [
    {
        title: "cow.json",
        content: "blabla",
        type: "none"
    },
    {
        title: "main.js",
        content: "blabla",
        type: "script"
    },
    {
        title: 'Sword',
        content: 'blabla',
        type: 'item'
    },
    {
        title: 'Shield',
        content: 'blabla',
        type: 'item'
    },
];

const TextField: React.FC = () => {
    const [code, setCode] = useState<string>("console.log('Hello, world!');");

    const onChange = (newValue: string) => {
        setCode(newValue);
    };

    function alerntcode() {
        alert(code);
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-row flex-1 overflow-hidden">
                <div className="w-1/2 flex flex-col">
                    <Tabs tab={Item} active={2} />
                    <div className="flex-1">
                        <AceEditor
                            mode="javascript"
                            theme="monokai"
                            name="my-editor"
                            value={code}
                            onChange={onChange}
                            editorProps={{ $blockScrolling: true }}
                            width="100%"
                            height="100%"
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-1/2 p-4">
                    <button onClick={alerntcode} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Run</button>
                    <File />
                </div>
            </div>
        </div>
    );
};

export default TextField;