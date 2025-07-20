export const ExperienceAutoCount = () => {
    const start = new Date('2023-02-01');
    const now = new Date();

    const diffInMonths =
        (now.getFullYear() - start.getFullYear()) * 12 +
        (now.getMonth() - start.getMonth());

    const years = Math.floor(diffInMonths / 12);
    return years < 1 ? '0+' : `${years}+`;
}