URL Shortener Microservice
=========================

User Story: I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.

User Story: If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

User Story: When I visit that shortened URL, it will redirect me to my original link.

Usage:

Create new short link

https://fcc-sp-urlshort.glitch.me/<url>

Use short link 

https://fcc-sp-urlshort.glitch.me/<1234>

Example:

Create:

https://fcc-sp-urlshort.glitch.me/http://www.google.com

Will return:

Url: http://www.google.com added!

Use fcc-sp-urlshort.glitch.me/1

Use link:

https://fcc-sp-urlshort.glitch.me/1