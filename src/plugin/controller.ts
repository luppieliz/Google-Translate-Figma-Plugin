import {getSelectedTextNodes} from '../app/components/TranslateLanguage/TraverseNodes';
import replaceTextNode from '../app/components/TranslateLanguage/ReplaceText';
export const fig = figma;

let textNodes = [];
let numOfSelected = 0;
let firstClick = false;

if (!figma.currentPage.selection.length) {
    figma.notify('please select something to translate');
} else {
    figma.showUI(__html__, {width: 250, height: 320, title: 'Language Tester'});
    firstClick = true;
    textNodes = getSelectedTextNodes(figma);
    numOfSelected = textNodes.length;
    figma.ui.postMessage({
        type: 'numOfSelected',
        selected: numOfSelected,
    });
}
figma.ui.onmessage = async (msg) => {
    if (msg.type === 'languageChosen') {
        let target = msg.target;
        for (const node in textNodes) {
            let text = textNodes[node];
            //save original textNodes in client storage
            if (firstClick) {
                figma.clientStorage.setAsync(text.id, text.characters);
                console.log("keys" + await figma.clientStorage.keysAsync())
            }
            //sent to UI
            figma.ui.postMessage({
                type: 'networkRequest',
                text: text.characters,
                target: target,
                id: text.id,
            });
        }
    } else if (msg.type === 'response') {
        firstClick = false;
        let processedRes = msg.response.replace(/(&quot;)/g, '"');
        let currTextNode;
        for (const n in textNodes) {
            //find matching id
            if (msg.id === textNodes[n].id) {
                currTextNode = textNodes[n];
                break;
            }
        }
        replaceTextNode(figma, currTextNode, processedRes);
        figma.notify('Translating...... Do note large selections may take awhile', {timeout: 1000}).cancel();
    } else if (msg.type === 'reset') {
        for (const node in textNodes) {
            let text = textNodes[node];
            let oldData = await figma.clientStorage.getAsync(text.id);
            console.log("oldData: " + oldData)
            replaceTextNode(figma, textNodes[node], oldData);
        }
    }
};
