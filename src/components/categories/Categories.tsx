import {v4 as uuidv4} from "uuid";
import styles from './Categories.module.scss'

const Categories = () => {
  const listData = [
    {
      id: uuidv4(),
      title: 'All Tasks'
    },
    {
      id: uuidv4(),
      title: 'Favourites'
    },
    {
      id: uuidv4(),
      title: 'Groceries'
    },
    {
      id: uuidv4(),
      title: 'Work'
    },
    {
      id: uuidv4(),
      title: 'Study'
    },
    {
      id: uuidv4(),
      title: 'Sports'
    }
  ]
  return (
      <div className={styles.categories}>
        <ul>
          {listData.map(item => (
              <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <button className={styles.categories_button}>+ New Category</button>
      </div>
  );
};

export default Categories;
