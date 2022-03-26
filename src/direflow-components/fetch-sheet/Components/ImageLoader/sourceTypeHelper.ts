export const sourceTypeHelper = (source: string): string => {
  const linkExpression =
    /https?:\/\/(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;

  const linkChecker = new RegExp(linkExpression);

  if (linkChecker.test(source)) {
    return source;
  } else return `data:image/png;base64,${source}`;
};
