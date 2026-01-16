//Importing Files and Paths
const fs = require("fs");
const path = require("path");

// File where expenses will be stored
const DATA_FILE = path.join(__dirname, "expenses.json");

// Ensure data file exists
function ensureDataFile() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
}

// Read expenses from file
function readExpenses() {
  ensureDataFile();
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

// Write expenses to file
function writeExpenses(expenses) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(expenses, null, 2));
}

// Get command-line arguments
const args = process.argv.slice(2);
const command = args[0];

// ADD EXPENSE COMMAND
function addExpense(amount, category, note) {
  // Validation
  if (!amount || isNaN(amount)) {
    console.error("Error: Amount must be a valid number.");
    return;
  }

  if (!category) {
    console.error("Error: Category is required.");
    return;
  }

  const expenses = readExpenses();

  const expense = {
    amount: Number(amount),
    category: category.toLowerCase(),
    note: note || "",
    date: new Date().toISOString().split("T")[0]
  };

  expenses.push(expense);
  writeExpenses(expenses);

  console.log("Expense added successfully.");
}

// Command routing
switch (command) {
  case "add": {
    const amount = args[1];
    const category = args[2];
    const note = args.slice(3).join(" ");
    addExpense(amount, category, note);
    break;
  }

  case "list": {
    listExpenses();
    break;
  }

  case "total": {
    showTotal();
    break;
  }

  default:
    console.error("Error: Unknown command. Use 'add', 'list', or 'total'.");
}

// LIST ALL EXPENSES
function listExpenses() {
  const expenses = readExpenses();

  if (expenses.length === 0) {
    console.log("No expenses recorded yet.");
    return;
  }

  console.log("Your Expenses:\n");

  expenses.forEach((expense, index) => {
    console.log(
      `${index + 1}. ${expense.date} | ${expense.category} | ₹${expense.amount} | ${expense.note || "No note"}`
    );
  });
}

// SHOW TOTAL EXPENSES
function showTotal() {
  const expenses = readExpenses();

  if (expenses.length === 0) {
    console.log("No expenses recorded yet.");
    return;
  }

  let total = 0;
  const categoryTotals = {};

  expenses.forEach(expense => {
    total += expense.amount;

    if (!categoryTotals[expense.category]) {
      categoryTotals[expense.category] = 0;
    }
    categoryTotals[expense.category] += expense.amount;
  });

  console.log(`Total Expense: ₹${total}\n`);
  console.log("Category-wise totals:");

  for (const category in categoryTotals) {
    console.log(`${category} : ₹${categoryTotals[category]}`);
  }
}