const getStoredCategory = () => {
    const storedCategory = localStorage.getItem('category-list');
    if (storedCategory) {
      return JSON.parse(storedCategory);
    }
    return [];
  };
  
  const savedCategory = (id) => {
    const storedCategoryList = getStoredCategory();
    // const exists = storedCategoryList.find((itemId) => itemId === id);
    // if (!exists) {
      storedCategoryList.push(id);
      localStorage.setItem('category-list', JSON.stringify(storedCategoryList));
    // }
  };
  
  export { getStoredCategory, savedCategory };
  