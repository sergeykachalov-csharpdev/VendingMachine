# VendingMachine

### .NET Core WebApi + Angular

User interface features:
* Deposit the amount by clicking on the buttons with the coin value(1, 2, 5, 10). If the coin is blocked, highlight the corresponding button and block the click. Show the amount you deposited.
* Select a drink by clicking on the corresponding image. At the same time, do not allow you to select finished drinks or drinks that cost more than the amount paid. After selecting a drink, the number of remaining drinks should decrease by one, the number of coins in the machine should increase, and the remaining amount should be returned in the form of change. Blocked coins can be issued as change.

Administrative interface features:
* Access to the administrative interface's secret key, which is passed as a parameter in the address bar
* Manage the range of drinks: add, delete drinks, change their quantity, cost, and image
* Manage coins in the machine: change the number of coins, block the acceptance of certain coins
* Possibility to import drinks