export default function cleanSet(set, startString) {
    if (!startString) {
        return '';
    }
    
    return Array.from(set)
        .filter((value) => {
            return typeof value === 'string' && value.startsWith(startString);
        })
        .map((value) => {
            return value.slice(startString.length);
        })
        .join('-');
}
