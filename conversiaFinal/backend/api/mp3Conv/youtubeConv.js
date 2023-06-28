// RapiAPI youtube 2 mp3 api

// https://rapidapi.com/ytjar/api/youtube-mp36/

// needs an ID extractor from YT URL , now it should be able to identify valid YT url and differentiate from
// normal video url and playlist url

// the response has to be send to frontend (react) and let it be displayed as a form of card element 

const axios = require('axios');

require('dotenv').config();

const apiKey = process.env.YTMP3KEY;
const apiHost = process.env.YTMP3HOST;
const vidID = "9yUzR7_95t0";



const options = {
  method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {id:  vidID},
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': apiHost
    }
};

  /*
    example response : 

    {
  "link": "https://mdelta.123tokyo.xyz/get.php/6/29/UxxajLWwzqY.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=j54M3Zv0DdHIL1iQnOH_zQ&s=1686382615&n=Icona%20Pop%20-%20I%20Love%20It%20%28feat.%20Charli%20XCX%29%20%5BOFFICIAL%20VIDEO%5D",
  "title": "Icona Pop - I Love It (feat. Charli XCX) [OFFICIAL VIDEO]",
  "progress": 0,
  "duration": 179.98367469363,
  "status": "ok",
  "msg": "success"
}
  

    TODO : 
    [] extract link in a link variable
    [] extract title in a title variable
  */


    export async function myAsyncFunction() {
      try {
        // console.log("hi");
        const response = await axios.request(options);
        // console.log(response.data);
        // const ans = response.data;
        // console.log(ans.link);
        // console.log(ans.title);
        // console.log(ans.status);
        return  response.data;
      } catch (error) {
        console.error(error);
      }
    }



    