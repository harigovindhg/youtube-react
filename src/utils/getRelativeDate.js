import moment from 'moment';
export const getRelativeDate = (dateValue) => {
    const today = moment(new Date());
    const diffDate = today.diff(dateValue, 'days');
    if (diffDate === 0) {
        return `Today`
    } else if (diffDate > 0 && diffDate < moment(new Date()).daysInMonth()) {
        if (diffDate === 1) return `1 day ago`;
        else return `${diffDate} days ago`;
    } else if (diffDate > moment(new Date()).daysInMonth()) {
        const monthDiff = Math.floor(diffDate / moment(new Date()).daysInMonth());
        if (monthDiff === '1') {
            return `1 month ago`;
        } else {
            return `${monthDiff} months ago`;
        }
    }
}