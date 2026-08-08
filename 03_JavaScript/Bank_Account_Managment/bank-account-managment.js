class BankAccount {
  constructor(){
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if(amount > 0) {
      this.balance += amount;
      this.transactions.push({type: 'deposit', amount: amount});
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return `Deposit amount must be greater than zero`;
    }
  }

  withdraw(amount) {
    if(amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({type: 'withdraw', amount: amount});
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return `Insufficient balance or invalid amount.`;
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions.
      filter(tx => tx.type   === 'deposit')
      .map(tx => tx.amount);
    return `Deposits: ${deposits.join(',')}`;
  }

  listAllwithdrawals() {
    const withdrawals = this.transactions
      .filter(tx => tx.type ==='withdraw')
      .map(tx => tx.amount);
    return `Withdrawals: ${withdrawals.join(',')}`;
  }
};

ba = new BankAccount();
console.log(ba.deposit(100));
console.log(ba.deposit(-50));
console.log(ba.deposit(200));
console.log(ba.withdraw(50));
console.log(ba.withdraw(150));
console.log(ba.withdraw(-50));
console.log(ba.listAllDeposits());
console.log(ba.listAllwithdrawals());
console.log(ba.checkBalance());

myAccount = new BankAccount();
myAccount.deposit(10);
myAccount.deposit(35);
myAccount.deposit(90);
console.log(myAccount.listAllDeposits());
myAccount.withdraw(20);
myAccount.withdraw(50);
myAccount.withdraw(100);
console.log(myAccount.listAllwithdrawals());
console.log(myAccount.checkBalance());





