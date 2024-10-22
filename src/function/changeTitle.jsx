import { useEffect } from "react";

export const changeTitle = (title) => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerText = title;
  }, [title]);
};
