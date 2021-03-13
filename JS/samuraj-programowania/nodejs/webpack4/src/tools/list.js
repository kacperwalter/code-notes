export const listGenerator = (...elements) => {
    const addElement = elements.forEach(element => {
        return `
            <li>${element}</li>
        `
    })
    return `
    <ul>
        ${addElement}
    </ul>
    `
}