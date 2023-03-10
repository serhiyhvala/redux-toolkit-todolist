import styles from './Categories.module.scss'
import {FormEvent, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {addCategory, changeCategory, getCategoriesFromLocalStorage} from "@store/categories/categoriesSlice";
import {NavLink} from "react-router-dom";
import Button from "@ui/Button/Button";

const Categories = () => {
  const [inputValue, setInputValue] = useState('')
  const {categories, currentCategory} = useAppSelector(state => state.categories)
  const dispatch = useAppDispatch()
  const handleSubmitCategory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addCategory(inputValue))
    setInputValue('')
  }
  useEffect(() => {
    const storageCategories = JSON.parse(localStorage.getItem('categories') || '[]')
    if (storageCategories?.length > 0) {
      dispatch(getCategoriesFromLocalStorage(storageCategories))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])
  return (
      <div className={styles.categories}>
        <ul>
          {categories.map(item => {
            const isActiveCategory = currentCategory === item.shortName ? styles.activeItem : ''
            const setRoute = item.shortName === 'all' ? '/' : item.shortName
            return <NavLink to={setRoute} onClick={() => dispatch(changeCategory(item.shortName))} key={item.id}>
              <li className={isActiveCategory}>{item.title}</li>
            </NavLink>
          })}
        </ul>
        <form onSubmit={handleSubmitCategory}>
          <input type="text" required={true} value={inputValue} onChange={e => setInputValue(e.target.value)}
                 placeholder='Enter Your Category'/>
          <Button className='secondary'>+ New Category</Button>
        </form>
      </div>
  );
};

export default Categories;
