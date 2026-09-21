export function store(key, value){
  try {
    if (value === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch(e){ return null; }
}
