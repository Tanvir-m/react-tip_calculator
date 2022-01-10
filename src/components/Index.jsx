
import Header from './Header';
import style from '../css/style.module.css';
import Input from './Input';
import CustomerList from './CustomerList';
import Footer from './Footer';
import { useState } from 'react';

const Index = () => {
    const [customerList, setCustomerList] = useState([]);
    let [totalTips, setTotalTips] = useState(0);

    const inputValue = (amt,name)=>{
        const items = [...customerList];
        items.push(`${name} offering a tip of ${amt} rupee`);
        setCustomerList(items);

    }

    const tips = (amt)=>{
        setTotalTips(totalTips += amt);
    }

    
    return (
        <>
            <div className={style.main}>
                <Header />
                <Input 
                inputValue={inputValue}
                tips={tips}
                
                  />
                <CustomerList 
                customerList={customerList}
                totalTips={totalTips} />
                <Footer />
            </div>
        </>
    )
}

export default Index
