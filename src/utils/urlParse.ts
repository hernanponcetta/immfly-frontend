const urlParse = (url: string): string => {
  const urlList = url.split("/");

  return urlList[urlList.length - 2];
};

export default urlParse;
