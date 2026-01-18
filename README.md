# Graphithium

Graphithium is an open-source project. I am currently working alone on it, so please be patient. Graphithium is a web app developed using Vue.js and Node.js, it is essentially a web app-based alternative to Obsidian.

# Version
Current version --> 0.0.0

Example : 1.2.3
1 --> Major update (Frontend, optimizations, features, etc...)
2 --> Medium update (Correcting features)
3 --> Minor update (bug fix)

# Installation

To init the project --> `npm install`

To start the project --> `npm run dev`

To run the web app, a database is required. For this project, MariaDB is used due to its ease of setup and reliability.

# Features

When your **account** is set up, you can log in and use the following features :

- Create your own **vault**
- Assign a custom name to each vault
- Store vaults in any location of your choice
- Create, edit and delete files
- Create and delete folders

Additional features will be added in future releases !

## Account

You must first create an account using a dedicated registration page. The account is strictly local, which means Graphithium does not require or use any internet access.

From your profile page, you can configure:
- Name
- Username
- Description
- Profile picture
- Status
- Online visibility (Online, Idle, Do Not Disturb, Invisible)
- Location (Country / State)

A dedicated section will be implemented to allow secure password changes:
- Current password
- New password
- Password confirmation

# NO AI

AI doesn't have any place in this project, not a single line of AI-generated code will be implemented without any verification and a minimum of understanding.

# Workflow

- Branche `main` --> Latest stable version
- Branche `dev` --> Latest version (possibly unstable --> Not recommended for production)
- Branche `dev-alex` --> Beta versions (Not recommended for production)


# FAQ


When did the project start?
- 17/01/2026

Can I run it on Windows?
- Yes, you need to install npm and follow the `installation` steps.

Can I use Graphithium for my company?
- Yes, as long as you respect the MIT License.

My Graphithium crashed, why?
- Check the database, logs, and version.  
  If the issue persists, please report it by creating an issue on GitHub.

Where can I find the version?
- In your account settings, below the "Change password" section.

End date of the project (first realse ?):
- Not finished yet.

Does the project work without internet?
- Yes

On which OS `Graphithium` has been tested ? 
- On Fedora 43 and Ubuntu 24.04

Is this project stable or still in test phase ? 
- Test phase

Why Vue.js and Node.js?
- Because these two frameworks are a good way to learn and improve.







