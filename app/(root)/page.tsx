import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Wilfred", lastName:'Manyara', email:'info@wilfredmanyara.com' };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and Manage your Account and Transactions efficiently"
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn}
        transaction={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}
      />
    </section>
  );
};

export default Home;
