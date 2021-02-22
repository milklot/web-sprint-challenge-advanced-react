import { useState } from "react"
 
const useLocalStorage = (key, initialValue) => {
   // Get from local storage by key
   const [storedValue, setStoredValue] = useState(() => {
       const item = window.localStorage.getItem(key);
       // Parse and return stored json or, if undefined, return initialValue
       return item ? JSON.parse(item) : initialValue;
       });
   const setValue = (value) => {
       setStoredValue(value); // save our state
       localStorage.setItem(key, JSON.stringify(value));//set the value to localStorage using the key that was passed into the hook
   };
 
   return [storedValue, setValue]
}
 
export default useLocalStorage;