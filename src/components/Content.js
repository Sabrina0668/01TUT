import{FaTrashAlt} from "react-icons/fa";

const Content = ({items,handleCheck,handleDelete}) => {
    
  return (
    <main>
        <ul>
          {items.map((item) => (
             <li className="item" key={item.id}>
              <input 
               type='checkbox'
               onChange={() => handleCheck(item.id)}
               checked={item.checked}
            />
            <label 
               style={(item.checked) ? {textDecoration:'line-through'} :null}
               onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
            <FaTrashAlt
               onclick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
             </li>
          ))}
        </ul>
    </main>
  )
}

export default Content