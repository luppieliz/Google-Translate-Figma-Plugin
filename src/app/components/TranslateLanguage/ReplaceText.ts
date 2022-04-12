export default async function replaceTextNode(figma, textNode, newText) {
    await figma.loadFontAsync(textNode.fontName as FontName);
    textNode.characters = textNode.characters.replace(textNode.characters, newText);
}
