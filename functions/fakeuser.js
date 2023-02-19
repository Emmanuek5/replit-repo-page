function generateFakeUserData(number) {

const names = ['John', 'Paul', 'George', 'Ringo', 'Mary', 'Sue', 'Bob', 'Carol']
const emails = ['john@example.com', 'paul@example.com', 'george@example.com', 'ringo@example.com', 'mary@example.com', 'sue@example.com', 'bob@example.com', 'carol@example.com']
const passwords = [
  "password1",
  "password2",
  "password3",
  "password4",
  "password5",
  "password6",
  "password7",
  "password8",
];  
const fakeUserData = [];

  for(let i = 0; i < number; i++) {
    fakeUserData.push({
      name: names[i],
      email: emails[i],
      password: passwords[i]
    });
  }


  return fakeUserData;
}

module.exports = {
  generateFakeUserData,
};