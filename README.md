
# This is a small example app 

The idea is to display a static page - a home page - with no login. Nothing on the page is private. It's just a menu and some instructions.

If a button on that page requires permissions to access it, then a login page will be shown.

Page needing no login..

http://v206x/public-static-page-xataface/index.php?-table=about_this_app&-action=homepage#  

or

http://v206x/public-static-page-xataface/index.php?-action=homepage#  


## Data:

See `sql/` folder for data tables definition and username/password

---

### was .. viewstaticpage_loginLater-xataface

# Now..

https://github.com/dgleba/public-static-page-xataface

I have tested this as actionlogin2, at sftp://albe@10.4.1.224/var/www/html/actionlogin2


# One way to install this.

```
cd /var/www/html
git clone https://github.com/dgleba/public-static-page-xataface.git actionlogin2
cd actionlogin2
mkdir templates_c; touch templates_c/.keep; chmod -R 777  templates_c
cp config.dbc.example config.dbc
cp conf-example.ini conf.ini
cd ..
git clone https://github.com/shannah/xataface.git
```
remember to - create the data in test database using the code in the `sql` folder


---
David Gleba
dgleba@gmail.com

