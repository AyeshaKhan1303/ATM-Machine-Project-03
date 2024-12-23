# ATM-Machine-Project-03
This project simulates an ATM machine using TypeScript. It allows users to perform basic banking operations such as balance inquiry, fast withdrawal, and cash withdrawal. The project uses the `inquirer` library for an interactive command-line interface.

---

## Features

1. **PIN Authentication**: Users must enter the correct PIN to access their account.
2. **Balance Inquiry**: View the current account balance.
3. **Fast Withdrawal**: Select predefined amounts for quick cash withdrawal.
4. **Cash Withdrawal**: Enter a custom amount to withdraw.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile TypeScript to JavaScript:

   ```bash
   npx tsc
   ```

---

## Usage

1. Run the project:

   ```bash
   node dist/index.js
   ```

2. Follow the interactive prompts:
   - Enter the correct PIN to access your account.
   - Choose an operation from the menu.
   - For withdrawal, select or input the desired amount.

---

## Code Overview

### Main Logic

The project uses the `inquirer` package to prompt the user for:
- PIN input
- Operation selection
- Amount selection for withdrawals

Example code snippet:

```typescript
let optionAnswer = await inquirer.prompt([
  {
    name: "operations",
    message: "Please Select Option",
    type: "list",
    choices: ["Balance Inquiry", "Fast Withdrawal", "Cash Withdrawal"],
  },
]);

if (optionAnswer.operations === "Balance Inquiry") {
  console.log(myBalance);
} else if (optionAnswer.operations === "Fast Withdrawal") {
  let amountAnswer = await inquirer.prompt([
    {
      name: "Amount",
      message: "Please Select Amount",
      type: "list",
      choices: [1000, 5000, 10000, 15000, 25000],
    },
  ]);
  myBalance -= amountAnswer.Amount;
  console.log(`Your remaining balance is: ${myBalance}`);
}
```

---

## File Structure

```
ATM-Machine-Project/
├── node_modules/
├── src/
│   └── index.ts
├── dist/
│   └── index.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## Dependencies

- **[inquirer](https://www.npmjs.com/package/inquirer)**: For interactive command-line prompts.

Install it using:

```bash
npm install inquirer
```

---

## Future Enhancements

1. Add a user authentication system with multiple accounts.
2. Include deposit functionality.
3. Enhance error handling for invalid inputs.
4. Add logging to keep track of transactions.

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.

---

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions and bug fixes.

---
