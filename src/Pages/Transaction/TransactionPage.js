import React from 'react';
import TransactionLayout from '../../components/Transaction/TransactionLayout';
import TransactionSkeleton from "../../components/Skeletons/TransactionSkeleton"
import { useState,useEffect } from 'react';

function Transaction() {
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => setLoading(false), 2000); // Adjust the timing as needed
        return () => clearTimeout(timer);
      }, []);
    return (
        <div>
            {loading && <TransactionSkeleton/>}
            <TransactionLayout/>
        </div>
    );
    // return (
        
    //     <div>
    //         <TransactionLayout/>
    //     </div>
    // );
}

export default Transaction;