# Expense Tracker (Command-Line Utility)

## Overview
This is a simple command-line expense tracker built using JavaScript (Node.js).  
I built this tool to solve a personal problem — I often forget where I spend my money on a daily basis, and I wanted a lightweight way to record and review expenses directly from the terminal.

The application allows users to:
- Add daily expenses
- View all recorded expenses
- See total spending along with category-wise breakdown

---

## Features
- Add an expense with amount, category, optional note, and date
- View all expenses in a readable format
- View total expenses and category-wise totals
- Input validation and graceful error handling
- Persistent storage using a local JSON file

---

## Tech Stack
- JavaScript (Node.js)
- Standard Node.js libraries (`fs`, `path`)

No external frameworks or libraries are used.

---

## How to Run

### Prerequisites
- Node.js installed on your system

### Setup
1. Clone or download this repository
2. Navigate to the project directory
- terminal: 
cd expense-tracker

### Commands

#### Add an expense
- terminal:
node expense-tracker.js add <amount> <category> [note]

Example:
- terminal:
node expense-tracker.js add 250 food "Lunch at canteen"

### List all expenses
- terminal:
node expense-tracker.js list

### View total expenses
- terminal:
node expense-tracker.js total


---


## Data Storage
- All expenses are stored locally in a file named expenses.json.
- If the file does not exist, it is automatically created when the first expense is added.

---


## Design Decisions
• A command-line interface was chosen to keep the tool lightweight and fast.

• JSON file storage was used instead of a database to avoid unnecessary complexity.

• Input validation ensures incorrect data does not break the program.

• The application is intentionally kept small and focused to match real-world daily usage.


---

## Test Cases: 
1. Add expense with valid input Command:
- terminal: 
node expense-tracker.js add 250 food
“Lunch”
- Expected Result: Expense is saved successfully.

  
2. Add expense with invalid amount Command:
- terminal:
 node expense-tracker.js add abc food
- Expected Result: Error message indicating invalid amount.


3. Add expense without category Command:
- terminal:
node expense-tracker.js add 200
- Expected Result: Error message indicating missing category.


4. List expenses when data exists Command:
- terminal:
node expense-tracker.js list
- Expected Result: All saved expenses are displayed.

5. List expenses when no data exists
- Expected Result: Message indicating no expenses are recorded.


6. View total expensesCommand:
- terminal:
node expense-tracker.js total
- Expected Result: Displays overall total and category-wise totals.

---

## Limitations 
• This tool is intended for personal use and single-user scenarios. 
• It does not support editing or deleting expenses. 
• Currency is currently hardcoded.

--- 

Author
KSHITIJ ANAND

Github: https://github.com/kshitijanand6205

---
