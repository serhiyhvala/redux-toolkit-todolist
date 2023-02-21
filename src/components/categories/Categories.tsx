import styles from './Categories.module.scss'
import {FormEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {addCategory, changeCategory} from "@store/categories/categoriesSlice";
import {Link} from "react-router-dom";
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
  return (
      <div className={styles.categories}>
        <ul>
          {categories.map(item => {
            const isActiveCategory = currentCategory === item.shortName ? styles.activeItem : ''
            const setRoute = item.shortName === 'all' ? '/' : item.shortName
            return <Link to={setRoute} onClick={() => dispatch(changeCategory(item.shortName))} key={item.id}>
              <li className={isActiveCategory}>{item.title}</li>
            </Link>
          })}
        </ul>
        <form onSubmit={handleSubmitCategory}>
          <input type="text" required={true} value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Enter Your Category'/>
          <Button className='secondary'>+ New Category</Button>
        </form>
      </div>
  );
};

export default Categories;
