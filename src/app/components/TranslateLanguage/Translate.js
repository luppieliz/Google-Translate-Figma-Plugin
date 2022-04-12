import axios from 'axios';

export default async function translateLanguage(text, targetLanguage) {
    //pre process
    text = text.replace(/#/g, '%23');
    text = text.replace(/&/g, '%26');
    // send request
    const {data} = await axios
        .post(
            `https://translation.googleapis.com/language/translate/v2?target=${targetLanguage}&key=AIzaSyCkaGXVXUig8mhdWxc0UnscUIT_lIWOQmA&q=${text}`,
            {},
            {}
        )
        .catch(function (error) {
            console.log('ERROR' + error);
        });
    const result = data.data.translations[0].translatedText;
    return result;
}
