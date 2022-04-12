export function getAllTextNodes(figma) {
    return figma.currentPage.findAllWithCriteria({types: ['TEXT']});
}

export function getSelectedTextNodes(figma) {
    let textNodes = [];
    let textNodesObj = [];

    const selectedAll = figma.currentPage.selection;
    //get all (readOnly)textNodes from all selection
    for (const n in selectedAll) {
        const curr = selectedAll[n];
        let temp = traverseChildNodesId(curr);
        for (const i in temp) {
            if (temp.length !== 0) {
                textNodesObj.push(temp[i]);
            }
        }
    }
    //get all textNodes on page
    const all = figma.currentPage.findAllWithCriteria({types: ['TEXT']});
    //get actual textNode from current page
    for (const e in all) {
        for (const i in textNodesObj) {
            if (all[e].id === textNodesObj[i].id) {
                textNodes.push(all[e]);
                break;
            }
        }
    }
    return textNodes;
}

export function traverseChildNodesId(arr) {
    let data = [];
    let n = arr;

    function recursive(n) {
        if (!n.children) {
            if (n.type === 'TEXT') {
                data.push({id: n.id, char: n.characters});
            }
            return;
        } else if (n.children) {
            n.children.forEach(recursive);
        }
    }
    recursive(n);
    return data;
}
