// RapiAPI SoundCloud 2 mp3 api



// needs an ID extractor from SoundCloud URL , now it should be able to identify valid SoundCloud url and differentiate from
// normal video url and playlist url

// the response has to be send to frontend (react) and let it be displayed as a form of card element 

const axios = require('axios');

let soundcloudURL = "https://soundcloud.com/rudelies/lookinatu?si=872bf51b4013459e9bfd956097edf9e6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" ;

const options = {
  method: 'GET',
  url: 'https://soundcloud-downloader4.p.rapidapi.com/soundcloud/track',
  params: {
    url: {soundcloudURL}
  },
  headers: {
    'X-RapidAPI-Key': '6345e3c929mshf8ced71e88a8694p18ffa5jsndce88d519253',
    'X-RapidAPI-Host': 'soundcloud-downloader4.p.rapidapi.com'
  }
};

console.log(soundcloudURL);
 
    myAsyncFunction();
    async function myAsyncFunction() {
      try {
        console.log("hi");
        const response = await axios.request(options);
        console.log(response.data);
        const ans = response.data;
        console.log(ans.link);
        console.log(ans.title);
        console.log(ans.status);
      } catch (error) {
        console.error(error);
      }
    }






//     hi
// {
//   users: {
//     full_name: 'Tiago Dalia',
//     followers_count: 229,
//     id: 629012307,
//     permalink_url: 'https://soundcloud.com/musicdalia',
//     username: 'Dalia'
//   },
//   music: {
//     thumbnail: 'https://i1.sndcdn.com/artworks-g1VVDRNbrSFfPTvB-lWd2LQ-t500x500.jpg',
//     title: 'The Chainsmokers - High (Dalia Remix)',
//     descriptions: 'Enjoy!\n\nFree download: https://hypeddit.com/9u8xjk',
//     genres: 'Dance & EDM',
//     url: 'https://soundcloud.com/musicdalia/the-chainsmokers-high-dalia-remix',
//     duration: 203259,
//     likes_count: 51,
//     reposts_count: 15,
//     playback_count: 2855,
//     created_at: '2022-01-31T20:52:25Z',
//     release_date: null,
//     license: 'all-rights-reserved',
//     tag_list: '"The Chainsmokers" High Remix House "Slap House" "Brazilian Bass"',
//     waveform_url: 'https://wave.sndcdn.com/XA3MhXIiidNq_m.json',
//     download_count: 0,
//     download_url: 'https://cf-media.sndcdn.com/XA3MhXIiidNq.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vWEEzTWhYSWlpZE5xLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjg2NDgwMjA1fX19XX0_&Signature=UlDWAdG-SnxoxvbHCnwU8ZZeThhSIig-ulf7J3MhfniW2~Ip8~YXYUmJGXrlIBl6S4D~96awaVuaFpCjmRmszCVJh-Jghack~kyFG2wO29vrFXjyX93UXoe7rTYGFQ-QARHDv~UOpJgLJsvABIGeP8d0uccOSd0yd~rebWwvnA2Jp5Vl1fLPmGLg4vqJ0h6RlTqrUs9lXTiPMnErdWG4ncH3vGGl6SXdpFj~Zu4RlM4RX0fllh~WhII2-SKZXxmPxsX0uD0mYDt05gLztA4-FWSNKeruMqwtSROoX2n1t0QW1hhO2PvgM9zEbJR3n0ESrhQ64fUQAespVc4UuCouEg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
//   }
// }
// undefined
// undefined
// undefined