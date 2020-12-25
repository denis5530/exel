const CODES_NUM = {
    A: 65,
    Z: 90
}

function createCell(colsCount) {
    const cols = new Array(colsCount)
        .fill('<div class="cell" contenteditable></div>')
        .join('')

    return `
        ${cols}
    `
}

function createCol(col) {
    return `
    <div class="column">
        ${col}
    </div>
    `
}

function createRow(content, info = '') {
    return `
        <div class="row">
            <div class="row-info">${info}</div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES_NUM.A + index)
}

export function createTable(rowsCount = 100) {
    const colsCount = CODES_NUM.Z - CODES_NUM.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(createCol)
        .join('')

    rows.push(createRow(cols))

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(createCell(colsCount), i + 1))
    }

    return rows.join('')
}