"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.redirect('/login');
});
// router.get("/", async function (req, res, next) {
//     let clientCookie = req.cookies;
//     let timeStamp = Date.now();
//     console.log(2);
//     if (Object.keys(clientCookie).length === 0) {
//         let cookie = await initCookie(timeStamp);
//         if (cookie) {
//             let csrf = await initCsrf(cookie.token, timeStamp);
//             if (csrf) {
//                 console.log(22);
//                 req['newCsrf'] = csrf.csrf;
//                 res.cookie("token", cookie.token, { httpOnly: true, expires: cookie.values.expiry });
//                 res.render("index", { csrf: csrf.csrf });
//             } else {
//                 res.sendStatus(404);
//             }
//         } else {
//             res.sendStatus(404);
//         }
//     } else {
//         let cookieIsExist = await isLogined(clientCookie.token, timeStamp);
//         if (
//             clientCookie.hasOwnProperty("userId") &&
//             cookieIsExist.length == 1 &&
//             clientCookie.userId == cookieIsExist[0].value.userId
//         ) {
//             res.redirect('/home');
//         } else {
//             let serverCookie = await getCredentials(clientCookie.token, timeStamp);
//             if (serverCookie.length == 1) {
//                 console.log("2here!!!");
//                 let newCsrf = await updateCsrf(serverCookie[0].token, timeStamp);
//                 if (newCsrf) {
//                     res.render("index", { csrf: newCsrf.csrf });
//                 } else {
//                     res.sendStatus(404);
//                 }
//             } else {
//                 console.log("2here")
//                 let cookie = await initCookie(timeStamp);
//                 if (cookie) {
//                     let csrf = await initCsrf(cookie.token, timeStamp);
//                     if (csrf) {
//                         res.cookie("token", cookie.token, { httpOnly: true, expires: cookie.values.expiry });
//                         res.render("index", { csrf: csrf.csrf });
//                     } else {
//                         res.sendStatus(404);
//                     }
//                 } else {
//                     res.sendStatus(404);
//                 }
//             }
//         }
//     }
// });
// router.get("/*splat", async function (req, res, next) {
//     let clientCookie = req.cookies;
//     let timeStamp = Date.now();
//     console.log(1);
//     if (Object.keys(clientCookie).length === 0) {
//         let cookie = await initCookie(timeStamp);
//         if (cookie) {
//             let csrf = await initCsrf(cookie.token, timeStamp);
//             if (csrf) {
//                 console.log(11);
//                 req['newCsrf'] = csrf.csrf;
//                 res.cookie("token", cookie.token, { httpOnly: true, expires: cookie.values.expiry });
//                 res.render("index", { csrf: csrf.csrf });
//             } else {
//                 res.sendStatus(404);
//             }
//         } else {
//             res.sendStatus(404);
//         }
//     } else {
//         let cookieIsExist = await isLogined(clientCookie.token, timeStamp);
//         if (
//             clientCookie.hasOwnProperty("userId") &&
//             cookieIsExist.length == 1 &&
//             clientCookie.userId == cookieIsExist[0].value.userId
//         ) {
//             res.redirect('/home');
//         } else {
//             let serverCookie = await getCredentials(clientCookie.token, timeStamp);
//             if (serverCookie.length == 1) {
//                 console.log("1here!!!");
//                 let newCsrf = await updateCsrf(serverCookie[0].token, timeStamp);
//                 if (newCsrf) {
//                     res.render("index", { csrf: newCsrf.csrf });
//                 } else {
//                     res.sendStatus(404);
//                 }
//             } else {
//                 console.log("1here")
//                 let cookie = await initCookie(timeStamp);
//                 if (cookie) {
//                     let csrf = await initCsrf(cookie.token, timeStamp);
//                     if (csrf) {
//                         res.cookie("token", cookie.token, { httpOnly: true, expires: cookie.values.expiry });
//                         res.render("index", { csrf: csrf.csrf });
//                     } else {
//                         res.sendStatus(404);
//                     }
//                 } else {
//                     res.sendStatus(404);
//                 }
//             }
//         }
//     }
// });
// router.get("/", firstVisitCookie, async function (req, res, next) {
//     let timeStamp = Date.now();
//     let clientCookie = req.cookies;
//     let cookieIsExist = await isLogined(clientCookie.token, timeStamp);
//     if (cookieIsExist.length == 1) {
//         res.redirect('/home');
//     } else {
//         let serverCookie = await getCredentials(clientCookie.token, timeStamp);
//         if (serverCookie.length == 1) {
//             let newCsrf = await updateCsrf(serverCookie[0].token);
//             if (newCsrf) {
//                 res.render("index", { csrf: newCsrf.csrf });
//             } else {
//                 res.sendStatus(404);
//             }
//         } else {
//             let cookie = await initCookie();
//             if (cookie) {
//                 let csrf = await initCsrf(cookie.token);
//                 if (csrf) {
//                     res.cookie("token", cookie.token, { httpOnly: true });
//                     res.render("index", { csrf: csrf.csrf });
//                 } else {
//                     res.sendStatus(404);
//                 }
//             } else {
//                 res.sendStatus(404);
//             }
//         }
//     }
// });
// router.get("/*splat", async function (req, res, next) {
//     console.log("here!@#!");
//     let timeStamp = Date.now();
//     let clientCookie = req.cookies;
//     let cookieIsExist = await isLogined(clientCookie.token, timeStamp);
//     if (cookieIsExist.length == 1) {
//         res.redirect('/home');
//     } else {
//         console.log("here");
//         let serverCookie = await getCredentials(clientCookie.token, timeStamp);
//         if (serverCookie.length == 1) {
//             let newCsrf = await updateCsrf(serverCookie[0].token, timeStamp);
//             if (newCsrf) {
//                 res.render("index", { csrf: newCsrf.csrf });
//             } else {
//                 res.sendStatus(404);
//             }
//         } else {
//             let cookie = await initCookie(timeStamp);
//             if (cookie) {
//                 let csrf = await initCsrf(cookie.token, timeStamp);
//                 if (csrf) {
//                     res.cookie("token", cookie.token, { httpOnly: true });
//                     res.render("index", { csrf: csrf.csrf });
//                 } else {
//                     res.sendStatus(404);
//                 }
//             } else {
//                 res.sendStatus(404);
//             }
//         }
//     }
// });
exports.default = router;
