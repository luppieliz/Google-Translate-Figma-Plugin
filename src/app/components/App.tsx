import React, {useState, useEffect} from 'react';
import '../styles/ui.css';
import translateLanguage from './TranslateLanguage/Translate';
import {fig} from "../../plugin/controller"

let chosenLang;
let original

const App = () => {
    const [numOfSelected, setNumOfSelected] = useState(0);

    const onLanguageClick = async (language) => {
        chosenLang = language;
        parent.postMessage({pluginMessage: {type: 'languageChosen', target: chosenLang}}, '*');
    };

    const onReset = () => {
        parent.postMessage({pluginMessage: {type: 'reset'}}, '*');
    };

    useEffect(() => {
        window.onmessage = async (event) => {
            if (event.data.pluginMessage.type === 'networkRequest') {
                let msgText = event.data.pluginMessage.text;
                const translatedText = await translateLanguage(msgText, chosenLang);
                const textId = event.data.pluginMessage.id;
                parent.postMessage(
                    {
                        pluginMessage: {
                            type: 'response',
                            response: translatedText,
                            id: textId,
                        },
                    },
                    '*'
                );
            } 
            else if (event.data.pluginMessage.type === 'numOfSelected') {
                setNumOfSelected(event.data.pluginMessage.selected);
            }
            else if (event.data.pluginMessage.type === 'saveOriginal'){
                original = event.data.pluginMessage.selected
            }   
        };
    }, []);

    return (
        <div>
            <h5 className="textStyle">Language tester</h5>
            <div className="headerStyle">
                <h5 className="textStyle">Select Language</h5>
                <button onClick={onReset} className="resetBtn">
                    Reset
                </button>
            </div>
            <button onClick={() => onLanguageClick('en')}>English</button>
            <button onClick={() => onLanguageClick('ms')}>Bahasa</button>
            <button onClick={() => onLanguageClick('es')}>Spanish</button>
            <button onClick={() => onLanguageClick('zh-TW')}>Traditional Chinese</button>
            <button onClick={() => onLanguageClick('th')}>Thai</button>
            <button onClick={() => onLanguageClick('vi')}>Vietnamese</button>
            <hr />
            <h5> text Selected : {numOfSelected}</h5>
        </div>
    );
};

export default App;
