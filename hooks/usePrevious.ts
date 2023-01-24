import { useRef, useEffect } from "react"

export default function usePrevious(value:any) {
    const previousValueRef = useRef();
  
    useEffect(() => {
      previousValueRef.current = value;
    }, [value]);
  
    return previousValueRef.current;
  }