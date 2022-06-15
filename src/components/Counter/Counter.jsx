import { deposit, withdraw } from "../../redux/actions/index";
import { connect } from "react-redux";

const Counter = ({ amount, deposit, withdraw }) => {
  return (
    <div>
      <h1>{amount}</h1>
      <button onClick={() => deposit()}>Deposit $10</button>
      <button onClick={() => withdraw()}>Withdraw $10</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};

export default connect(mapStateToProps, { deposit, withdraw })(Counter);
