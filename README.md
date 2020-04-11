A React project for Data visualization of COVIC-19 cases, deaths etc.

Project under development in Alpha Stage.

To Do:
Optimize mobile versions
Improve the overall design for all screen sizes
Update charts to display some usefull, easy to interpret statistics
Update the data for the Cards charts. At the moment,  the chart displays only Total  cases for all cards
Add explanations for the diagrams as well as a short walk-through  text to what  each diagram represents
Add a multi handle range slider to select between dates to display in charts
Fix warning message: "Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?"
Fix warning message: "Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node"


Changelog:
0.04 ==11/4/2020==
Fixed Confirmed Cases Logarithmic Chart to display data properly
Added Tooltip popovers in cards
Added Charts inside cards to portray a vague representation of the specific data for each country
Added dynamic coloring for the charts nested inside cards. The color represents the trend of the specific metric
Added Tabs to charts so the user can now select the type of chart he wants
Made experimental change to the design of the country menu. Each country is nested inside a hexagon
Added some basic neomorphic design elements to the country menu
Various small changes and improvements



0.03 ==08/4/2020==
Various cosmetic changes
Various improvements for the mobile versions
Made charts responsive
Added a burger menu so the user can select a country
Added charts to the cards