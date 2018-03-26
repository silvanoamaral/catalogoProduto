/**
 * Footer
*/
const footerTemplate = () => {
    return `
        <p>Footer</p>
    `;
};
export default function renderFooter(element) {
    const template = footerTemplate();
    element.innerHTML = template;
    //element.appendChild(template);

    //return template;
};