
export const setLocalStorage = (key: string, value: any): void => {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.error("Error escribiendo en LocalStorage:", error);
  }
};

export const getLocalStorage = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.error("Error leyendo LocalStorage:", error);
    return null;
  }
};

export const deleteLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error eliminando LocalStorage:", error);
  }
};

export const updateLocalStorage = <T>(
  key: string,
  updater: (currentValue: T | null) => T
): void => {
  try {
    const currentValue = getLocalStorage<T>(key);
    const newValue = updater(currentValue);
    setLocalStorage(key, newValue);
  } catch (error) {
    console.error("Error actualizando LocalStorage:", error);
  }
};
