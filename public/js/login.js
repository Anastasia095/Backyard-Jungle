console.log("HEY IM TEST!")
async function signupFormHandler(event) {
  event.preventDefault();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (user_name && email && password) {
      const response = await fetch('/api/user', {
          method: 'post',
          body: JSON.stringify({
              user_name,
              email,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        if (email && password) {
            const response = await fetch('/api/user/login', {
                method: 'post',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });
      
            if (response.ok) {
                document.location.replace('/api/profile/');
            } else {
                alert(response.statusText);
            }
        }
      } else {
          alert(response.statusText);
          console.log('unsuccessfull')
      }
  }
};

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
      const response = await fetch('/api/user/login', {
          method: 'post',
          body: JSON.stringify({
              email,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
          document.location.replace('/api/profile/');
      } else {
          alert(response.statusText);
      }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
//******************************************************* */

