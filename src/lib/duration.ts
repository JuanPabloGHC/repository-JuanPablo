// Number of whole months between two dates (not counting a partial final month).
const diffInMonths = (dateStart: Date, dateEnd: Date): number => {
    let months =
        (dateEnd.getFullYear() - dateStart.getFullYear()) * 12 +
        (dateEnd.getMonth() - dateStart.getMonth());

    // If we haven't reached the start day-of-month yet, the last month isn't complete.
    if (dateEnd.getDate() < dateStart.getDate()) months--;

    return Math.max(0, months);
};

// Human-readable duration, e.g. "1 year and 2 months".
export const formatDuration = (dateStart: Date, dateEnd: Date): string => {
    const totalMonths = diffInMonths(dateStart, dateEnd);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts: string[] = [];

    if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
    if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);

    if (parts.length === 0) return "less than a month";

    return parts.join(" and ");
};
