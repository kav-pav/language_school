// const FB = require("fb");
// const GoogleSpreadsheet = require("google-spreadsheet");
// const async = require("async");

const { Router } = require("express");
const fetch = require("node-fetch");

const router = new Router();

async function getData() {
  const url =
    "https://spreadsheets.google.com/feeds/cells/1J76hVezTU8joOPzqAU2XbBerOYaUHxItDteB-nDMcpo/1/public/full?alt=json";

  return new Promise((resolve, reject) => {
    const response = fetch(url)
      .catch(err => {
        return { success: false };
      })
      .then(res => res.json())
      .then(json => {
        const sc = json.feed.entry;
        const posts = [
          {
            title: sc[5].content.$t,
            date: sc[6].content.$t,
            image: sc[7].content.$t,
            link: sc[8].content.$t
          },
          {
            title: sc[9].content.$t,
            date: sc[10].content.$t,
            image: sc[11].content.$t,
            link: sc[12].content.$t
          },
          {
            title: sc[13].content.$t,
            date: sc[14].content.$t,
            image: sc[15].content.$t,
            link: sc[16].content.$t
          }
        ];
        return { success: true, data: posts };
      });
    setTimeout(() => {
      const error = { success: false };
      reject(error);
    }, 2000);
    if (response.sucess === false) {
      resolve(response);
    }
    resolve(response);
  });
}

router.post("/get", async (req, res) => {
  try {
    const data = await getData();
    res.json({
      data
    });
  } catch (error) {
    res.json({
      success: false,
      error
    });
  }
});

module.exports = router;

// async function getAccessToken() {
//   return new Promise((resolve, reject) => {
//     FB.api(
//       "oauth/access_token",
//       {
//         client_id: "2475045299217110",
//         client_secret: "47212599d3d33ec9f6c026f374e4e680",
//         grant_type: "client_credentials"
//       },
//       async function(res) {
//         if (!res || res.error) {
//           reject(false);
//         }
//         debugger;
//         await FB.setAccessToken(res.access_token);
//         resolve(true);
//       }
//     );
//     debugger;
//   });
// }

// async function getData() {
//   FB.api("/168446953218965/posts", function(res) {
//     if (!res || res.error) {
//       console.log(!res ? "error occurred" : res.error);
//       return;
//     }
//     debugger;
//   });
// }

// const fb = FB.Facebook(options);

// router.post("/get", async (req, res) => {
//   debugger;
//   await getAccessToken();
//   debugger;
//   const acessToken = FB.getAccessToken();
//   await getData();
//   debugger;
//   try {
//     const success = await sendMail(req.body);
//     res.json({
//       success
//     });
//   } catch (error) {
//     res.json({
//       success: false,
//       error
//     });
//   }
// });
