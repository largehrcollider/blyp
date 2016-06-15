# Allows login
Upon visiting the site, an unauthenticated user will be met with a login screen.

Naming convention (facebook):
* **Log In** to authenticate users
* **Sign Up** to create new account for users

## Client

## Server
Our app will be a Single Page Application (SPA). The server will only process GET requests for static assets (images, js, css) and requests related to DB queries. All other GET requests will be defaulted to a "catch all" route, i.e `app.get(/*)` that will return the single index.html page of the app.
### Routes
Since

# Allow one user
# Allow user to add inventory
# Allow form of payment
# Allow transaction which connects with inventory when sale is completed inventory is deducted
# Allow receipt of said transaction 
