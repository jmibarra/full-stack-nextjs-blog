// utils/dateUtils.js

export function formatDate(isoDate) {
    const date = new Date(isoDate);

    const day = String(date.getUTCDate()).padStart(2, '0'); // Día con 2 dígitos
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Mes (0-11) + 1
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}`;
}
