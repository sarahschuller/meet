# meet
 
<h1>Feature 1: Filter Events by City</h1>

<h3>Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.</h3>
<ul>
<li>Given user hasn’t searched for any city</li>
<li>When the user opens the app</li>
<li>Then the user should see a list of all upcoming events</li>
</ul>

<h3>Scenario 2: User should see a list of suggestions when they search for a city.</h3>
<ul>
<li>Given the main page is open</li>
<li>When user starts typing in the city textbox</li>
<li>Then the user should see a list of cities (suggestions) that match what they’ve typed</li>
</ul>

<h3>Scenario 3: User can select a city from the suggested list.</h3>
<ul>
<li>Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing</li>
<li>When the user selects a city (e.g., “Berlin, Germany”) from the list</li>
<li>Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city</li>
</ul>

<h1>Feature 2: Show/hide an event's details</h1>
	
<h3>Scenario 1: An event element is collapsed by default</h3>
<ul>
<li>Given the user is on the main page</li>
<li>When nothing is selected</li>
<li>Then the event element will collapse</li>
</ul>

<h3>Scenario 2: User can expand an event to see its details</h3>
<ul>
<li>Given the user wants to see event details</li>
<li>When the user selects an event</li>
<li>Then details about the event will expand</li>
</ul>
 
<h3>Scenario 3: User can collapse an event to hide its details</h3>
<ul>
<li>Given the user wants to hide an event’s details</li>
<li>When the user selects an expanded event</li>
<li>Then the details about the event will collapse</li>
</ul>
   
<h1>Feature 3: Specify number of events</h1>
   
<h3>Scenario 1: When user hasn’t specified a number, 32 is the default number</h3>
<ul>
<li>Given the user has not specified a number of events to be displayed</li>
<li>When the user loads the app</li>
<li>Then 32 events will be seen by default</li>
</ul>
   
<h3>Scenario 2: User can change the number of events they want to see</h3>
<ul>
<li>Given the user wants to change the number of events to be displayed</li>
<li>When the user selects the dropdown</li>
<li>Then the user can select the number of events to be displayed</li>
</ul>
     
<h1>Feature 4: Use the app when offline</h1>
     
<h3>Scenario 1: Show cached data when there’s no internet connection</h3>
<ul>     
<li>Given the user does not have internet access</li>
<li>When the user opens the app and has cached data</li>
<li>Then the user will have access to the cached data of upcoming events</li>
</ul>
    
<h3>Scenario 2: Show error when user changes the settings (city, time range)</h3>
<ul>    
<li>Given the user does not have internet access</li>
<li>When the user changes the settings (city, time range)</li>
<li>Then the user will get an error message</li>
</ul>
     
<h1>Feature 5: Data visualization</h1>
     
<h3>Scenario 1: Show a chart with the number of upcoming events in each city</h3>
<ul>     
<li>Given the user is on the main page</li>
<li>When the user wants to see upcoming events</li>
<li>Then the user will see a chart with the number of upcoming events in each city</li>
</ul>

<h1>Tools</h1>
<ul>
<li>HTML/CSS</li>
<li>Javascript</li>
<li>React</li>
<li>Jes</li>
<li>Cucumber</li>
<li>Puppeteer</li>
<li>Recharts</li>
</ul>


<a href="https://sarahschuller.github.io/meet/" target="blank">View Live</a>
<br><br>
<img src="https://user-images.githubusercontent.com/93050611/160255685-8b04625a-3937-4109-a30a-20d40c0ab1cf.png">
