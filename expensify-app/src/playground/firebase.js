// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((child) => {
//     expenses.push({
//       ...child.val(),
//       id: child.key,
//     });
//   });

//   console.log(expenses);
// });

// expenses fetched from fixtures
// push to collection in database

// push takes on object at a time so a loop is necessary
// expenses.forEach((expense) => {
//   database.ref('expenses').push(expense).then(() => console.log('expense added'));
// });

// fetch something from database
// database.ref().once('value')
//   .then((snapshot) => console.log(snapshot.val()))
//   .catch(e => console.log(e));

// try {
//   database.ref().set({
//     user: [
//       {
//         name: 'Shawon Ashraf',
//         website: 'shawonashraf.github.io'
//       }
//     ]
//   });
//   console.log('Data has been saved');
// } catch (e) {
//   console.log(e);
// }

// remove data
// wait for 10s to see it in actual
// try {
//   setTimeout(() => {
//     database.ref().remove();
//     console.log('Data was removed');
//   }, 10000);
// } catch (e) {
//   console.log(e);
// }

