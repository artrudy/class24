class InvalidUsernameError extends Error {
}
class InvalidEmailError extends Error {
}
class InvalidPasswordError extends Error {
}
const users = [];
// const addUserForm = document.querySelector("form[name='add-new-user']");
const addUserFormId = document.getElementById("add-user");
console.log(addUserFormId);
// console.log(addUserForm);
function onSubmit(e) {
    e.preventDefault();
    // const userDataFormForm = new FormData(addUserFormId);
    // const userNameFromForm = userDataFormForm.get("userName");
    const userDataFromForm1 = new FormData(e.target);
    console.log("userDataFromForm1", userDataFromForm1);
    const userNameFromForm = userDataFromForm1.get("userName");
    console.log("userNameFromForm", userNameFromForm);
    const userEmailFromFrom = userDataFromForm1.get("email");
    console.log("userEmailFromFrom", userEmailFromFrom);
    const userPasswordFromForm = userDataFromForm1.get("userPassword");
    console.log("userPasswordFromForm", userPasswordFromForm);
    const userPasswordConfirmationFromFormData = userDataFromForm1.get("passwordComfirmation");
    console.log("userPasswordConfirmationFromFormData", userPasswordConfirmationFromFormData);
    users.push({
        userNameFromForm,
        userEmailFromFrom,
        userPasswordFromForm,
        userPasswordConfirmationFromFormData,
    });
    console.log(userDataFromForm1.get("userName"));
    console.log(users);
    // console.log(userNameFromForm);
}
addUserFormId?.addEventListener("submit", onSubmit);
// const addUserFrom = document.querySelector("form[name='add-new-user']");
// if (!addUserFrom) {
//   console.error("Could't find and add user.");
// } else {
//   addUserFrom.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const formData = new FormData(e.target as HTMLFormElement);
// users.push({
//   userName,
//   userEmail,
//   userPassword,
//   passwordConfirmation,
// });
//   });
// }
// function register(
//   userName: string,
//   userEmail: string,
//   userPassword: string,
//   passwordConfirmation: string
// ) {
//   if (users.some((user) => user.userName === userName)) {
//     throw new InvalidUsernameError(`Username ${userName} already taken`);
//   }
//   if (!userEmail.includes("@")) {
//     throw new InvalidEmailError(`Invalid email: ${userEmail}`);
//   }
//   if (userPassword === passwordConfirmation) {
//     throw new InvalidPasswordError(
//       `Password: ${userPassword} is not the same is confirmPassword: ${passwordConfirmation}`
//     );
//   }
//   if (
//     !userPassword.match(
//       /^(?=^[ -~]{6,64}$)(?=.*([a-z][A-Z]))(?=.*[0-9])(.*[ -/|:-@|\[-`|{-~]).+$/
//     )
//   ) {
//     throw new InvalidPasswordError(
//       "Password must contain: min 6 and max 64 characters, min 1 lowercase character, min 1 uppercase character, min 1 number and min 1 special characters"
//     );
//   }
//   users.push({
//     userName,
//     userEmail,
//     userPassword,
//     passwordConfirmation,
//   });
// }
// try {
//   register("omer", "omer@gmail", "", "");
//   register("omer", "omer@gmail", "", "");
//   register("omer2", "omergmail", "", "");
// } catch (error) {
//   if (
//     !(
//       error instanceof InvalidEmailError ||
//       error instanceof InvalidUsernameError ||
//       error instanceof InvalidPasswordError
//     )
//   ) {
//     throw error;
//   }
//   alert(error.message);
// }
// try {
//   register("tomas", "fdsfs@fe.vs", "asd", "asd");
// } catch (error) {
//   if (
//     !(
//       error instanceof InvalidEmailError ||
//       error instanceof InvalidUsernameError ||
//       error instanceof InvalidPasswordError
//     )
//   ) {
//     throw error;
//   }
//   alert(error.message);
// }
