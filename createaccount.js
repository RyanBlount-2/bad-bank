function CreateAccount() {
   // Destructure useState.
   let {useState} = React;

   // Define states.
   let [name, setName] = useState('');
   let [email, setEmail] = useState('');
   let [password, setPassword] = useState('');
   let [button, setButton] = useState(true);
   let [display, setDisplay] = useState(true);
   let [error, setError] = useState('');

   // Accesses context.
   let ctx = React.useContext(UserContext);

   // Set button status.
   function changeButtonStatus(input, field) {
      // This section makes the button status very responsive to the last input the user typed.
      switch(field) {
         case 'name':
            name = input;
            break;
         case 'email':
            email = input;
            break;
         case 'password':
            password = input;
            break;
         default:
            break;
      }
      // If all form fields have input, enable the Create Account button.
      if (name && email && password.length > 7) {
         setButton(false);
      }
      // If all form fields do not have input, disable the Create Account button.
      else {
         setButton(true);
      }
   }

   // Validate the form field submissions.
   function validate(input, field) {
      // Does not validate the form field and throws an error if the form field is blank or the user fills in the form field incorrectly.
      if (!input) {
         // Set the error message.
         setError('Error: ' + field + ' field must not be left blank.');
         // Set the error message to the default value after the specified time.
         setTimeout(() => setError(''), 3000);
         return false;
      }
      if (input) {
         let length = input.length;
         if (length > 0 && length < 8 && field === 'Password') {
            setError('Error: Password field must contain at least 8 characters.');
            setTimeout(() => setError(''), 3000);
            return false;
         }
      }
      setError('');
      // Validates the form field if the user fills in the form field correctly.
      return true;
   }

   function validateField(input, field) {
      // If the form fields do not all validate, an account is not created and an error is thrown.
      switch(field) {
         case 'name':
            name = input;
            if (!validate(name, 'Name')) return;
            break;
         case 'email':
            email = input;
            if (!validate(email, 'Email')) return;
            break;
         case 'password':
            password = input;
            if (!validate(password, 'Password')) return;
            break;
         default:
            break;
      }
   }

   // Handles the creation of a new account.
   function handleCreate() {
      ctx.users.push({name, email, password, balance: 0, loggedIn: false, displayed: false});
      console.log(`Congratulations, ${name}. Your new account has been created.`);
      alert(`Congratulations, ${name}. Your new account has been created.`);
      // Toggle the display to notify the user of the new account being created successfully.
      setDisplay(false);
   }

   // Clears the form fields.
   function clearForm() {
      // Toggle the display to allow the user to create a new account and reset the form fields.
      setName('');
      setEmail('');
      setPassword('');
      setButton(true);
      setDisplay(true);
      setError('');
   }

   return (
      <MyCard
         id="create-account"
         header="Create Account"
         status={error}
         body={display ? (
            <>
               {/* Section for entering name. */}
               Name
               <br/>
               <input id="name" className="form-control" type="input" placeholder="Enter Name" value={name} onChange={(e) => {setName(e.currentTarget.value); validateField(e.currentTarget.value, 'name'); changeButtonStatus(e.currentTarget.value, 'name')}}/><br/>
               {/* Section for entering email. */}
               Email
               <br/>
               <input id="email" className="form-control" type="input" placeholder="Enter Email" value={email} onChange={(e) => {setEmail(e.currentTarget.value); validateField(e.currentTarget.value, 'email'); changeButtonStatus(e.currentTarget.value, 'email')}}/><br/>
               {/* Section for entering password. */}
               Password
               <br/>
               <input id="password" className="form-control" type="input" placeholder="Enter Password" value={password} onChange={(e) => {setPassword(e.currentTarget.value); validateField(e.currentTarget.value, 'password'); changeButtonStatus(e.currentTarget.value, 'password')}}/><br/>
               {/* Button for creating account. */}
               <button id="create-account-button" className="btn btn-light" type="submit" onClick={handleCreate} disabled={button}>Create Account</button>
            </>
         ):(
            <>
               {/* Section for notifying user of form submission. */}
               <h5>Account Successfully Created</h5>
               {/* Button for adding another account. This also resets the form fields to their default values. */}
               <button className="btn btn-light" type="submit" onClick={clearForm}>Add Another Account</button>
            </>
         )}
      />
   );
}
