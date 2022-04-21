/**
 * Utility method to print text to the html document and the console.
 * You don't have to change anything here!
 *
 * @param data the data that should be printed
 */
function output(data) {
    console.log(data);
    const el = document.createElement('pre');
    el.textContent = data;
    document.body.append(el);
}
