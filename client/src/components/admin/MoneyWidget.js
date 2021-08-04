import React from 'react'
import './moneywig.css'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
function MoneyWidget(props) {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PKR',
      });
    return (
        <div className="money-wig-wrap">
            <div className="money-upper-sub-wrap">
            <div className="money-title">
            {props.title}
            </div>
            <div className="revenue-icon">
            <AccountBalanceIcon/>
            </div>
            </div>
            <div className="money-number">
            {formatter.format(props.number)}
            </div>
        </div>
    )
}

export default MoneyWidget
