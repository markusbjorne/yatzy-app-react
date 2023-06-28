export function setValue( key, value) {
    localStorage.setItem(key, `${value}`);
}

export function getValue( key ) {
    const str = localStorage.getItem(key);
    return str ? parseInt(str) : null;
}

export function clear() {
    localStorage.clear();
}