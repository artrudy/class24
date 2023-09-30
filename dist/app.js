class InvalidUsernameError extends Error {
}
class InvalidEmailError extends Error {
}
class InvalidPasswordError extends Error {
}
const users = [];
const addUserFrom = document.querySelector("form[name='add-new-user']");
if (!addUserFrom) {
    console.error("Could't find and add user.");
}
else {
    addUserFrom.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        users.push({
            userName: getRequiredString(formData, "userName"),
            userEmail,
            userPassword,
            passwordConfirmation,
        });
    });
}
function register(userName, userEmail, userPassword, passwordConfirmation) {
    if (users.some((user) => user.userName === userName)) {
        throw new InvalidUsernameError(`Username ${userName} already taken`);
    }
    if (!userEmail.includes("@")) {
        throw new InvalidEmailError(`Invalid email: ${userEmail}`);
    }
    if (userPassword === passwordConfirmation) {
        throw new InvalidPasswordError(`Password: ${userPassword} is not the same is confirmPassword: ${passwordConfirmation}`);
    }
    if (!userPassword.match(/^(?=^[ -~]{6,64}$)(?=.*([a-z][A-Z]))(?=.*[0-9])(.*[ -/|:-@|\[-`|{-~]).+$/)) {
        throw new InvalidPasswordError("Password must contain: min 6 and max 64 characters, min 1 lowercase character, min 1 uppercase character, min 1 number and min 1 special characters");
    }
    users.push({
        userName,
        userEmail,
        userPassword,
        passwordConfirmation,
    });
}
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
try {
    register("tomas", "fdsfs@fe.vs", "asd", "asd");
}
catch (error) {
    if (!(error instanceof InvalidEmailError ||
        error instanceof InvalidUsernameError ||
        error instanceof InvalidPasswordError)) {
        throw error;
    }
    alert(error.message);
}
