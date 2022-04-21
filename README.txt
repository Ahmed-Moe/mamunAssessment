Running instructions:
1.Isntall XAMPP
 - install JQuery

2.Run apache and mysql

3.Go to phpmyadmin and import moneytransferform DB into mysql

4.Run index.html 

5.Preferred to put the folder inside htdocs in xampp (then you can access the pages through http://localhost/test/index.html)
 	
Testing instruction:

- Card numbr 16 digits if last number of the card number is 7 the payment will be a failure

- Card Holder name is a maximum of 100 characters

- Expiration date is a failure for any date before the date the test has been held 

- Security code is only 3 digits

- Amount of money converted shouldn't be less than 0.01 and not more than 1000 

Notes: - 

Design colors were inspired by the mamun.om website 



