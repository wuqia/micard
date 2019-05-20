const opts = {
    headers: {
        cookie: 'xmuuid=XMGUEST-32789F20-37CD-11E9-BA83-67519B091550; mstuid=1550969007515_3754; euid=nermuk%2F1chHpN9zPu0xGpQ%3D%3D; XM_293892505_UN=293892505; lastsource=www.google.com; globalSite=us; _ga=GA1.2.1239073831.1551750322; userId=293892505; cUserId=y7zsGYQqY5o5MPzGB3m0pbO1DgY; xm_order_btauth=90bf8affec7667011ca4e6126652e16f; axmuid=WuKTE1hzTkZLcHhamHNJ4oahQj1vSPkN3sUHQqICsRc%3D; xm_10046_sid=14d285ppaubp45gikapsgag7t0; xm_user_www_num=0; serviceToken=SIyfVMJdJYcl6xBJQ06fjJn0ijXN44MWgMk%2Fydoh4nWA5rzIJ0JTshT2eVnKkv%2Fwiqbo0vQDbXuPjACxhgrht27I4v%2FEWlfjKm%2B1VNZAn9Bf7zUEmnRHVe88mt3BkE0%2FippOlCAI%2BMKG3IbLel%2BHE6Qv6I3pEyR%2BOjhu3gqo%2Flc%3D; xm_link_history=2WXa%2Bq2gN0Vy9%2FkIjRbKhcyci058zp1PZO5eW%2FO5Lmw%3D; pageid=e494810088e29f19; msttime=https%3A%2F%2Fmall.10046.mi.com%2Fvno%2Findex; msttime1=https%3A%2F%2Fmall.10046.mi.com%2Fvno%2Findex; mUserId=8z8lZiChsvOUywJ5jp9HuqHyp%2F7DS2sbPDxAnRQ7cvg%3D; log_code=894751fafd80e2ff-085032e00b001cfb|https%3A%2F%2Fmall.10046.mi.com%2Ffanscard%2Findex; mstz=5555873147399f74-3385e270e72e9a47|%2F%2Fmall.10046.mi.com%2Ffanscard%2Findex|1041694133.116|pcpid|https%253A%252F%252Fwww.mi.com%252Fmicard%252F|https%25253A%25252F%25252Fmall.10046.mi.com%25252Ffanscard%25252Findex; xm_vistor=1550969007515_3754_1558305047867-1558305568070'
    }
};

fs = require('fs');
const fetch = require("node-fetch");
const keyword = '444';
var i;
(async function() {
    for (i = 0; i < 400; i++) {
        await fetch('https://mall.10046.mi.com/fanscard/getPhoneList?page_num=1&city_id=' + i + '&search=' + keyword + '&goods_id=2172300003&jumpcode=', opts)
        .then(res => res.json())
        .then(response => {
            if(JSON.stringify(response).includes('"data":["')) {
                console.log(response)
                fs.appendFileSync(keyword + '.txt', 'city = ' + i + '   ' + JSON.stringify(response) + '\n')
            }
        })
        .catch(function(error) {
            console.log(error)
        });
        await sleep(100);
    }
})();

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}