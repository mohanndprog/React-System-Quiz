import React, { useState } from 'react';

const AddExam = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'تربية اسلامية', subCategories: ['أحكام شرعية', 'تلاوة'] },
    { id: 2, name: 'رياضيات', subCategories: ['أحكام شرعية', 'تلاوة'] },
    { id: 3, name: 'لغة عربية', subCategories: ['أحكام شرعية', 'تلاوة'] }
  ]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (selectedCategories.includes(category)) {
      setSelectedCategories(prevSelectedCategories =>
        prevSelectedCategories.filter(cat => cat.id !== categoryId)
      );
    } else {
      setSelectedCategories(prevSelectedCategories => [...prevSelectedCategories, category]);
    }
  };

  const handleSubcategoryChange = (categoryId, subcategoryIndex, value) => {
    const updatedCategories = [...categories];
    const categoryIndex = updatedCategories.findIndex(cat => cat.id === categoryId);
    updatedCategories[categoryIndex].subCategories[subcategoryIndex] = value;
    setCategories(updatedCategories);
  };

  return (
    <div>
  
      <form>
        {categories.map(category => (
          <div key={category.id} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={category.id}
              id={`category-${category.id}`}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category.id)}
            />
            <label className="form-check-label" htmlFor={`category-${category.id}`}>
              {category.name}
            </label>
            {selectedCategories.includes(category) && (
              <div>
                {category.subCategories.map((subCategory, index) => (
                  <div key={index}>
                    <label htmlFor={`subcategory-${category.id}-${index}`}>
                      {subCategory}
                    </label>
                    <input
                      type="number"
                      id={`subcategory-${category.id}-${index}`}
                
                      onChange={(e) =>
                        handleSubcategoryChange(category.id, index, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
     
      </form>
    </div>
  );
};

export default AddExam;
