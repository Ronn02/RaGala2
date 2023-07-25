import React, { useState, useEffect, useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
import { db } from '../firebase/firebase';
import { AuthContext } from '../AppContext/AppContext';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  where,
} from 'firebase/firestore';
import RagalaNavbar from '../Navbar/RagalaNavbar';
import PCNavBar from '../Navbar/PCNavBar';

const style = {
  container: `max-w-[500px] mt-20 w-full mx-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex flex-wrap justify-between mt-4`,
  input: `border p-2 w-full md:w-48 text-xl my-2`,
  button: `border p-4 ml-2 bg-[#6F87BE] text-white`,
  count: `text-center p-2`,
  task: `flex flex-wrap justify-between bg-gray-100 p-4 my-2 capitalize`,
  taskCompleted: `flex flex-wrap justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex items-center`,
  taskText: `ml-2 cursor-pointer`,
  taskTextCompleted: `ml-2 cursor-pointer line-through`,
  deleteButton: `cursor-pointer flex items-center`,
  priorityHigh: `text-red-600  font-bold`,
  priorityMedium: `text-orange-600 font-bold`,
  priorityLow: `text-green-600 font-bold`
};

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  // Function to create a new todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
    if (user) {
      await addDoc(collection(db, 'todos'), {
        text: input,
        completed: false,
        userId: user.uid,
        category,
        priority,
        dueDate,
        notes,
      });
    } else {
      alert('Please log in to add todos.');
    }
    // Reset input fields after creating a new todo
    setInput('');
    setCategory('');
    setPriority('medium');
    setDueDate('');
    setNotes('');
  };

  useEffect(() => {
    let unsubscribe = null;

    if (user) {
      const q = query(collection(db, 'todos'), where('userId', '==', user.uid));
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        let todosArr = [];
        querySnapshot.forEach((doc) => {
          todosArr.push({ ...doc.data(), id: doc.id });
        });
        setTodos(todosArr);
      });
    } else {
      setTodos([]);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);

  // Function to toggle completion status of a todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  // Function to delete a todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  const Todo = ({ todo }) => {
    let priorityColor;
    if (todo.priority === "high") {
      priorityColor = style.priorityHigh;
    } else if (todo.priority === "medium") {
      priorityColor = style.priorityMedium;
    } else if (todo.priority === "low") {
      priorityColor = style.priorityLow;
    }
    return (
      <li className={todo.completed ? style.taskCompleted : style.task}>
        <div className={style.row}>
          <input
            onChange={() => toggleComplete(todo)}
            type='checkbox'
            checked={todo.completed ? 'checked' : ''}
          />
          <div>
            <p
              onClick={() => toggleComplete(todo)}
              className={todo.completed ? style.taskTextCompleted : style.taskText}
            >
              {todo.text}
            </p>
            <p><span className='text-[#1D5D9B]'>Category:</span> {todo.category} </p>
            <p><span className='text-[#1D5D9B]'>Priority:</span> <span className={priorityColor}>{todo.priority}</span></p>
            {todo.dueDate && (
              <p><span className='text-[#1D5D9B]'>Due Date:</span> {new Date(todo.dueDate).toLocaleString()}</p>
            )}
            {todo.notes && <p><span className='text-[#1D5D9B]'>Notes:</span>{todo.notes}</p>}
          </div>
        </div>
        <button onClick={() => deleteTodo(todo.id)} className={style.deleteButton}>
          <FaRegTrashAlt />
        </button>
      </li>
    );
  };

  return (
    <div><PCNavBar></PCNavBar>
    <div className={style.container}>
      
      <h3 className={style.heading}>To Do List</h3>
      <form onSubmit={createTodo} className={style.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={style.input}
          type='text'
          placeholder='Add Todo'
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={style.input }
          type='text'
          placeholder='Category'
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={style.input}
        >
          <option value='high' >High Priority</option>
          <option value='medium'>Medium Priority</option>
          <option value='low'>Low Priority</option>
        </select>
        <input
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className={style.input}
          type='datetime-local'
        />
        <input
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={style.input}
          type='text'
          placeholder='Notes'
        />
        <button className={style.button}>
          <AiOutlinePlus size={30} />
        </button>
      </form>
      <ul>
        {todos.length === 0 ? (
          <p className={style.count}>No todos found</p>
        ) : (
          todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))
        )}
      </ul>
      {todos.length > 0 && (
        <p className={style.count}>{`You have ${todos.length} todos`}</p>
      )}
    
    </div></div>
  );
};

export default ToDo;
