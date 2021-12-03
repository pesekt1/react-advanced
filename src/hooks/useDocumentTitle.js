import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    //ComponentDidUpdate + ComponentDidMount
    document.title = title;

    return () => {
      //ComponentWillUnmount
      console.log("cleanup");
    };
  });
}
