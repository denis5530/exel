export function capitalizeAndPrefix(string, prefix) {
    if (typeof string !== 'string'){
        return ''
    }
    return prefix + string.charAt(0).toUpperCase() + string.slice(1)
}