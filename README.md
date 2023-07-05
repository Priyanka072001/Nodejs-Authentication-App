## Nodejs-Authentication-App
<h3>Create a complete authentication system which can be used as a starter code for creating any new
application</h3>
<p> Implemented the following for a user with respective html pages:
  <ul>
<li> Sign up with email</li>
<li>Sign in (which redirects to a blank home page with a sign out and reset password button after sign in)</li>
<li>Sign out</li>
<li>Reset password after sign in</li>
<li>Google login/signup (Social authentication)</li>
<li>Display notifications for unmatching passwords during sign up and incorrect password during sign in</li>
</ul>
</p>
<p>
# Folder Structure
  <ul>
<li>Assets: It contains all css files</li>
<li>Config: It contains connection to Database, Authentication etc.</li>
<li>Controller: It redirect the webpage according to user action.</li>
<li>Models: It contains Database Schema.</li>
<li>Routes: It contains all routes.</li>
<li> Views: It contins all ejs file which render UI to browser.</li>
  </ul>
</p>
<p>
# Getting Started
  <ol type="1">
<li>Clone the project.</li>
<li>Go to folder.</li>
<li>Run command: `npm install`, to install all dependencies</li>
<li>Connect to mongodb.</li>
<li>Give user credentials in `config > passorport-google-outh2-stratergy`.</li>
<li>Run command: `npm start`</li>
<li> Go to https://localhost/8000 to use the application.</li>
