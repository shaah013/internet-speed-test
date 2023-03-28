# internet speed test
[Full Demo](https://codepen.io/caloverys/full/LYQMZxX)

<img width="1848" alt="Screenshot 2023-03-28 at 1 44 31 AM" src="https://user-images.githubusercontent.com/79812606/228139823-a16bf1bf-36c1-43b4-b407-08f4bd881a68.png">

This is a project that used to determine the upload and download speed of user.

Unforunately, there is not really very precise way to determine the upload speed as it really vary based on which the server you are uploading to. The current way I do in my projecy is to send an invalid request to google server (google has the most almost of servers in the world) and measuring the time it takes to get a reponse from google server to calculate the internet speed after receiving an reponse from the server.

Some possible [ways](https://github.com/Caloverys/internet-speed-test/blob/main/download_beta.js) that I think about to calculate the download speed and the way I use to measure the download speed.

The website works on resolution higher than 800px on chrome. It will produce an error on Safari as [Safari doesn't support the Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API#browser_compatibility)














