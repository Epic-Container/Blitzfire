import React, { useState } from "react";
import Editor from "@monaco-editor/react"

const TextField: React.FC = () => {
    let [theme, setTheme] = useState("vs-dark");
    function themeHandler () {
        setTheme(theme === "vs-dark" ? "vs-light" : "vs-dark")
    }
    return (
        <div className='h-screen w-screen'>
            <button onClick={themeHandler}>Change Theme</button>
            <Editor
                height="100vh"
                width="100%"
                defaultLanguage="javascript"
                theme={theme}
            />
        </div>
    );
};
export default TextField;