import './ExpenseItem.css'
const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>Sep 30th 2023</div>
      <div className="expense-item__description">
        <h2>BreakFast</h2>
        <div className="expense-item__price">$0.5</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
