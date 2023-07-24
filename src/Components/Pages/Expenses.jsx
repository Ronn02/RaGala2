import React, { useState, useEffect, useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
import { db } from '../firebase/firebase';
import { AuthContext } from '../AppContext/AppContext';
import {
  query,
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  where,
} from 'firebase/firestore';
import RagalaNavbar from '../Navbar/RagalaNavbar';

const style = {
  container: `max-w-[500px] mt-20 w-full mx-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex flex-wrap justify-between mt-4`,
  input: `border p-2 w-full md:w-48 text-xl my-2`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
  expense: `flex flex-wrap justify-between bg-gray-100 p-4 my-2 capitalize`,
  row: `flex items-center`,
  expenseText: `ml-2 cursor-pointer`,
  deleteButton: `cursor-pointer flex items-center`,
};

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseText, setExpenseText] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  // Function to create a new expense
  const createExpense = async (e) => {
    e.preventDefault();
    if (expenseText === '' || amount <= 0 || category === '') {
      alert('Please enter valid expense details');
      return;
    }
    if (user) {
      await addDoc(collection(db, 'expenses'), {
        text: expenseText,
        amount: parseFloat(amount),
        category,
        userId: user.uid,
      });
    } else {
      alert('Please log in to add expenses.');
    }
    // Reset expense input fields after creating a new expense
    setExpenseText('');
    setAmount(0);
    setCategory('');
  };

  useEffect(() => {
    let unsubscribe = null;

    if (user) {
      const q = query(collection(db, 'expenses'), where('userId', '==', user.uid));
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        let expensesArr = [];
        querySnapshot.forEach((doc) => {
          expensesArr.push({ ...doc.data(), id: doc.id });
        });
        setExpenses(expensesArr);
      });
    } else {
      setExpenses([]);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);

  // Function to delete an expense
  const deleteExpense = async (id) => {
    await deleteDoc(doc(db, 'expenses', id));
  };

  const Expense = ({ expense }) => {
    return (
      <li className={style.expense}>
        <div className={style.row}>
          <p className={style.expenseText}>
            {expense.text} - Amount: ₱{expense.amount.toFixed(2)} - Category: {expense.category}
          </p>
        </div>
        <button onClick={() => deleteExpense(expense.id)} className={style.deleteButton}>
          <FaRegTrashAlt />
        </button>
      </li>
    );
  };

  return (
    <div className={style.container}>
      <h3 className={style.heading}>Expenses Plan</h3>
      <form onSubmit={createExpense} className={style.form}>
        <input
          value={expenseText}
          onChange={(e) => setExpenseText(e.target.value)}
          className={style.input}
          type='text'
          placeholder='Expense Name'
        />
        <input
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className={style.input}
          type='number'
          placeholder='Amount'
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={style.input}
          type='text'
          placeholder='Category'
        />
        <button className={style.button}>
          <AiOutlinePlus size={30} />
        </button>
      </form>
      <ul>
        {expenses.length === 0 ? (
          <p className={style.count}>No expenses found</p>
        ) : (
          expenses.map((expense, index) => (
            <Expense key={index} expense={expense} />
          ))
        )}
      </ul>
      {expenses.length > 0 && (
        <p className={style.count}>{`You have ${expenses.length} expenses`}</p>
      )}
      <RagalaNavbar />
    </div>
  );
};

export default Expenses;
