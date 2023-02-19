const { hash, genSalt } = require("bcrypt");
const fs = require("fs")
const path = require('path');
 const names = [];
 const emails = [];
 const passwords = [];
const namesfile = fs
  .readFileSync(path.join(__dirname, "./data/names.txt"), "utf-8")
  .split("\n");
  const emailsfile = fs
    .readFileSync(path.join(__dirname, "./data/emails.txt"), "utf-8")
    .split("\n");
    const passwordsfile = fs
      .readFileSync(path.join(__dirname, "./data/passwords.txt"), "utf-8")
      .split("\n");
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function MD5Hash(string) {
  //Step 1: Convert the input string to bytes
  let bytes = [];
  for (let i = 0; i < string.length; i++) {
    bytes.push(string.charCodeAt(i));
  }
  //Step 2: Calculate the MD5 hash
  let hash = CryptoJS.MD5(CryptoJS.enc.Latin1.parse(bytes));
  //Step 3: Return the hash as a hex string
  return hash.toString(CryptoJS.enc.Hex);
}
 async function generateFakeUserData(number) {
 for (const name of namesfile) {
   name.toLocaleLowerCase();
   names.push(name);
 }
 for (const email of emailsfile) {
   email.toLocaleLowerCase();
   emails.push(email);
 }
 for (const password of passwordsfile) {
   password.toLocaleLowerCase();
   passwords.push(password);
 } 
const fakeUserData = [];
  for(let i = 0; i < number; i++) {
   fakeUserData.push({
     id: rand(1, 100),
     name: names[i],
     email: emails[i],
     password: passwords[i],
   });
  }
  return fakeUserData;
}
module.exports = {
  generateFakeUserData,
};