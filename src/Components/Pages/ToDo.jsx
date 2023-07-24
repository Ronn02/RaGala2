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

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const authContext = useContext(AuthContext);
  const { user } = authContext;

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
      });
    } else {
      alert('Please log in to add todos.');
    }
    setInput('');
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

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  const Todo = ({ todo }) => {
    return (
      <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
          <input
            onChange={() => toggleComplete(todo)}
            type='checkbox'
            checked={todo.completed ? 'checked' : ''}
          />
          <p
            onClick={() => toggleComplete(todo)}
            className={
              todo.completed ? style.textComplete : style.text
            }
          >
            {todo.text}
          </p>
        </div>
        <button onClick={() => deleteTodo(todo.id)}>
          <FaRegTrashAlt />
        </button>
      </li>
    );
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type='text'
            placeholder='Add Todo'
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}
      </div>
      <RagalaNavbar></RagalaNavbar>
    </div>
  );
};

export default ToDo;
