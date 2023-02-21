import {v4 as uuidv4} from "uuid";
import styles from './Categories.module.scss'
import {useState} from "react";

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
  const [data, setData] = useState(listData)
  const newTask = {
    id: uuidv4(),
    title: 'All Tasks'
  }
  return (
      <div className={styles.categories}>
        <ul>
          {data.map(item => (
              <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <button className={styles.categories_button}
                onClick={() => setData([...data, newTask])}
        >+ New Category</button>
      </div>
  );
};

export default Categories;
