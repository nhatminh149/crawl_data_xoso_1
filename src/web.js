const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function crawlLoGan(page) {
    console.log('Đang cào dữ liệu Lô Gan...');
    try {
        await page.goto('https://xosodaiphat.com/thong-ke-lo-gan.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                daylotogan: getClasstd('col-xs-4'),
                daylotogan2: getClasstd('col-xs-6'),
                lotogan: getClasstd('col-xs-2.text-bold'),
                loto: getClasstd('pd5'),
            };
        });
        console.log('Cào dữ liệu Lô Gan thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Lô Gan:', error.message);
    }
}

async function crawlTKLoGanDau(page_crawlTKLoGanDau) {
    console.log('Đang cào dữ liệu TK Lô Gan Đầu...');
    try {
        await page_crawlTKLoGanDau.goto('https://xosodaiphat.com/thong-ke-dau.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlTKLoGanDau.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const gettd = (cl) => {
                return Array.from(document.querySelectorAll(`td`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                tklogandau: getClasstd('col-md-2'),
                tklogandauso: gettd(''),
            };
        });
        console.log('Cào dữ liệu Lô Gan đầu thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Lô Gan đầu:', error.message);
    }
}

//

async function crawlTKLoGanDuoi(page_crawlTKLoGanDuoi) {
    console.log('Đang cào dữ liệu TK Lô Gan Đuôi...');
    try {
        await page_crawlTKLoGanDuoi.goto('https://xosodaiphat.com/thong-ke-duoi.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlTKLoGanDuoi.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const gettd = (cl) => {
                return Array.from(document.querySelectorAll(`td`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                tkloganduoiso: gettd(''),
            };
        });
        console.log('Cào dữ liệu Lô Gan Đuôi thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Lô Gan Đuôi:', error.message);
    }
}

//

async function crawlTKGDB(page_crawlTKGDB) {
    console.log('Đang cào dữ liệu TK Giải Đặc Biệt...');
    try {
        await page_crawlTKGDB.goto('https://xosodaiphat.com/thong-ke-giai-dac-biet.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlTKGDB.evaluate(() => {
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassh3 = (cl) => {
                return Array.from(document.querySelectorAll(`h3.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                haisocuoi: getClassh3('sub-title-bg.color-blue'),
                TKGDBTH: getClass('fontDB'),
                day_haisocuoi: getClasstr('color_prize_tr'),
            };
        });
        console.log('Cào dữ liệu Giải Đặc Biệt thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Giải Đặc Biệt', error.message);
    }
}
//
async function crawl_XSMB_30ngay(page_crawlXSMB_30ngay) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlXSMB_30ngay.goto('https://xosodaiphat.com/xsmb-30-ngay.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlXSMB_30ngay.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                MDB_XSMB_30ngay: getClassspan('madb8.special-code.div-horizontal'),
                GDB_XSMB_30ngay: getClassspan('special-prize-lg.div-horizontal'),
                G1_XSMB_30ngay: getClassspan('number-black-bold.div-horizontal'),
                G2_XSMB_30ngay: getClassspan('col-xs-6.number-black-bold.div-horizontal'),
                G3vG5vG6_XSMB_30ngay: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_XSMB_30ngay: getClassspan('col-xs-6.col-md-3.number-black-bold.div-horizontal'),
                G7_XSMB_30ngay: getClassspan('col-xs-3.special-prize-sm.div-horizontal'),
                Day_XSMB_30ngay: getClass('list-link'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawl_XSMB_90ngay(page_crawlXSMB_90ngay) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlXSMB_90ngay.goto('https://xosodaiphat.com/xsmb-90-ngay.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlXSMB_90ngay.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                MDB_XSMB_90ngay: getClassspan('madb8.special-code.div-horizontal'),
                GDB_XSMB_90ngay: getClassspan('special-prize-lg.div-horizontal'),
                G1_XSMB_90ngay: getClassspan('number-black-bold.div-horizontal'),
                G2_XSMB_90ngay: getClassspan('col-xs-6.number-black-bold.div-horizontal'),
                G3vG5vG6_XSMB_90ngay: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_XSMB_90ngay: getClassspan('col-xs-6.col-md-3.number-black-bold.div-horizontal'),
                G7_XSMB_90ngay: getClassspan('col-xs-3.special-prize-sm.div-horizontal'),
                Day_XSMB_90ngay: getClass('list-link'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

// async function crawl_XSMN_30ngay(page_crawlXSMN_30ngay) {
//     console.log('Đang cào dữ liệu XS Các Miền...');
//     try {
//         await page_crawlXSMN_30ngay.goto('https://xosodaiphat.com/xsmn-30-ngay.html', {
//             waitUntil: 'networkidle2',
//             timeout: 60000,
//         });

//         const result = await page_crawlXSMN_30ngay.evaluate(() => {
//             const getClassspan = (cl) => {
//                 return Array.from(document.querySelectorAll(`span.${cl}`))
//                     .map((el) => el.innerText.trim())
//                     .filter(Boolean);
//             };
//             const getClass = (cl) => {
//                 return Array.from(document.querySelectorAll(`div.${cl}`))
//                     .map((el) => el.innerText.trim())
//                     .filter(Boolean);
//             };
//             const getClassth = (cl) => {
//                 return Array.from(document.querySelectorAll(`th.${cl}`))
//                     .map((el) => el.innerText.trim())
//                     .filter(Boolean);
//             };
//             const getClasstd = (cl) => {
//                 return Array.from(document.querySelectorAll(`td.${cl}`))
//                     .map((el) => el.innerText.trim())
//                     .filter(Boolean);
//             };
//             const getthead = (cl) => {
//                 return Array.from(document.querySelectorAll(`thead`))
//                     .map((el) => el.innerText.trim())
//                     .filter(Boolean);
//             };
//             return {
//                 G8vGDB_XSMN_30ngay: getClassspan('special-prize-lg.div-horizontal'),
//                 G1vG2vG3vG4vG6_XSMN_30ngay: getClassspan('col-xs-12.number-black-bold.div-horizontal'),
//                 G5vG7_XSMN_30ngay: getClassspan('number-black-bold.div-horizontal'),
//                 Tinh_XSMN_30ngay: getClassth('text-center'),
//                 Tinh_XSMN_30ngay_thead: getthead('thead'),
//                 Day_XSMN_30ngay: getClass('list-link'),
//                 XSMN_30ngay:getClasstd('tn_prize'),

//             };
//         });
//         console.log('Cào dữ liệu XS Các Miền thành công.');
//         return result;
//     } catch (error) {
//         console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
//     }
// }

// async function crawl_XSMN_90ngay(page_crawlXSMN_90ngay) {
//     console.log('Đang cào dữ liệu XS Các Miền...');
//     try {
//         await page_crawlXSMN_90ngay.goto('https://xosodaiphat.com/xsmn-90-ngay.html', {
//             waitUntil: 'networkidle2',
//             timeout: 60000,
//         });

//         const result = await page_crawlXSMN_90ngay.evaluate(() => {
//             const getClassspan = (cl) => {
//                 return Array.from(document.querySelectorAll(`span.${cl}`))
//                     .map((el) => el.innerText.trim())
//                     .filter(Boolean);
//             };
//             const getClass = (cl) => {
//                 return Array.from(document.querySelectorAll(`div.${cl}`))
//                     .map((el) => el.innerText.trim())
//                     .filter(Boolean);
//             };
//             const getClassth = (cl) => {
//                 return Array.from(document.querySelectorAll(`th.${cl}`))
//                     .map((el) => el.innerText.trim())
//                     .filter(Boolean);
//             };
//             return {
//                 GDB_XSMN_90ngay: getClassspan('special-prize-lg.div-horizontal'),
//                 G1vG2vG3vG4vG6_XSMN_90ngay: getClassspan('col-xs-12.number-black-bold.div-horizontal'),
//                 G5vG7_XSMN_90ngay: getClassspan('number-black-bold div-horizontal'),
//                 G8_XSMN_90ngay: getClassspan('special-prize-lg div-horizontal'),
//                 Tinh_XSMN_90ngay: getClassth('text-center'),
//                 Day_XSMN_90ngay: getClass('list-link'),
//             };
//         });
//         console.log('Cào dữ liệu XS Các Miền thành công.');
//         return result;
//     } catch (error) {
//         console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
//     }
// }

async function crawlAnGiang(page_crawlAnGiang) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlAnGiang.goto('https://xosodaiphat.com/xsag-xo-so-an-giang.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlAnGiang.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_AnGiang: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_AnGiang: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_AnGiang: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_AnGiang: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_AnGiang: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlCaMau(page_crawlCaMau) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlCaMau.goto('https://xosodaiphat.com/xscm-xo-so-ca-mau.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlCaMau.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_CaMau: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_CaMau: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_CaMau: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_CaMau: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_CaMau: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlDongThap(page_crawlDongThap) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlDongThap.goto('https://xosodaiphat.com/xsdt-xo-so-dong-thap.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlDongThap.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_DongThap: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_DongThap: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_DongThap: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_DongThap: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_DongThap: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlHauGiang(page_crawlHauGiang) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlHauGiang.goto('https://xosodaiphat.com/xshg-xo-so-hau-giang.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlHauGiang.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_HauGiang: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_HauGiang: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_HauGiang: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_HauGiang: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_HauGiang: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlKienGiang(page_crawlKienGiang) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlKienGiang.goto('https://xosodaiphat.com/xskg-xo-so-kien-giang.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlKienGiang.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_KienGiang: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_KienGiang: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_KienGiang: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_KienGiang: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_KienGiang: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlLongAn(page_crawlLongAn) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlLongAn.goto('https://xosodaiphat.com/xsla-xo-so-long-an.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlLongAn.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_LongAn: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_LongAn: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_LongAn: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_LongAn: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_LongAn: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlKonTum(page_crawlKonTum) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlKonTum.goto('https://xosodaiphat.com/xskt-xo-so-kon-tum.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlKonTum.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_KonTum: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_KonTum: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_KonTum: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_KonTum: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_KonTum: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlNinhThuan(page_crawlNinhThuan) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlNinhThuan.goto('https://xosodaiphat.com/xsnt-xo-so-ninh-thuan.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlNinhThuan.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_NinhThuan: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_NinhThuan: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_NinhThuan: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_NinhThuan: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_NinhThuan: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlPhuYen(page_crawlPhuYen) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlPhuYen.goto('https://xosodaiphat.com/xspy-xo-so-phu-yen.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlPhuYen.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_PhuYen: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_PhuYen: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_PhuYen: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_PhuYen: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_PhuYen: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlQuangBinh(page_crawlQuangBinh) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlQuangBinh.goto('https://xosodaiphat.com/xsqb-xo-so-quang-binh.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlQuangBinh.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_QuangBinh: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_QuangBinh: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_QuangBinh: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_QuangBinh: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_QuangBinh: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlQuangNgai(page_crawlQuangNgai) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlQuangNgai.goto('https://xosodaiphat.com/xsqng-xo-so-quang-ngai.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlQuangNgai.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_QuangNgai: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_QuangNgai: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_QuangNgai: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_QuangNgai: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_QuangNgai: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlDakLak(page_crawlDakLak) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlDakLak.goto('https://xosodaiphat.com/xsdlk-xo-so-dak-lak.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlDakLak.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_DakLak: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_DakLak: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_DakLak: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_DakLak: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_DakLak: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlDacNong(page_crawlDacNong) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlDacNong.goto('https://xosodaiphat.com/xsdno-xo-so-dak-nong.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlDacNong.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_DacNong: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_DacNong: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_DacNong: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_DacNong: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_DacNong: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlGiaLai(page_crawlGiaLai) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlGiaLai.goto('https://xosodaiphat.com/xsgl-xo-so-gia-lai.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlGiaLai.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_GiaLai: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_GiaLai: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_GiaLai: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_GiaLai: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_GiaLai: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlHue(page_crawlHue) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlHue.goto('https://xosodaiphat.com/xstth-xo-so-hue.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlHue.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_Hue: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_Hue: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_Hue: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_Hue: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_Hue: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlTayNinh(page_crawlTayNinh) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlTayNinh.goto('https://xosodaiphat.com/xstn-xo-so-tay-ninh.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlTayNinh.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_TayNinh: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_TayNinh: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_TayNinh: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_TayNinh: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_TayNinh: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlBacLieu(page_crawlBacLieu) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlBacLieu.goto('https://xosodaiphat.com/xsbl-xo-so-bac-lieu.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlBacLieu.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_BacLieu: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_BacLieu: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_BacLieu: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_BacLieu: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_BacLieu: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlBenTre(page_crawlBenTre) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlBenTre.goto('https://xosodaiphat.com/xsbtr-xo-so-ben-tre.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlBenTre.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_BenTre: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_BenTre: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_BenTre: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_BenTre: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_BenTre: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlBinhDuong(page_crawlBinhDuong) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlBinhDuong.goto('https://xosodaiphat.com/xsbd-xo-so-binh-duong.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlBinhDuong.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_BinhDuong: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_BinhDuong: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_BinhDuong: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_BinhDuong: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_BinhDuong: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlBinhPhuoc(page_crawlBinhPhuoc) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlBinhPhuoc.goto('https://xosodaiphat.com/xsbp-xo-so-binh-phuoc.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlBinhPhuoc.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_BinhPhuoc: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_BinhPhuoc: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_BinhPhuoc: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_BinhPhuoc: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_BinhPhuoc: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlKhanhHoa(page_crawlKhanhHoa) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlKhanhHoa.goto('https://xosodaiphat.com/xskh-xo-so-khanh-hoa.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlKhanhHoa.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_KhanhHoa: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_KhanhHoa: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_KhanhHoa: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_KhanhHoa: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_KhanhHoa: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}
async function crawlDaNang(page_crawlDaNang) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlDaNang.goto('https://xosodaiphat.com/xsdna-xo-so-da-nang.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlDaNang.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_DaNang: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_DaNang: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_DaNang: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_DaNang: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_DaNang: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}
async function crawlDongNai(page_crawlDongNai) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlDongNai.goto('https://xosodaiphat.com/xsdn-xo-so-dong-nai.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlDongNai.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_DongNai: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_DongNai: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_DongNai: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_DongNai: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_DongNai: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlCanTho(page_crawlCanTho) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlCanTho.goto('https://xosodaiphat.com/xsct-xo-so-can-tho.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlCanTho.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_CanTho: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_CanTho: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_CanTho: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_CanTho: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_CanTho: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlTienGiang(page_crawlTienGiang) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlTienGiang.goto('https://xosodaiphat.com/xstg-xo-so-tien-giang.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlTienGiang.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_TienGiang: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_TienGiang: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_TienGiang: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_TienGiang: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_TienGiang: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlHCM(page_crawlHCM) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlHCM.goto('https://xosodaiphat.com/xshcm-xo-so-tphcm.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlHCM.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_HCM: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_HCM: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_HCM: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_HCM: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_HCM: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlTraVinh(page_crawlTraVinh) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlTraVinh.goto('https://xosodaiphat.com/xstv-xo-so-tra-vinh.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlTraVinh.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_TraVinh: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_TraVinh: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_TraVinh: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_TraVinh: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_TraVinh: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlVinhLong(page_crawlVinhLong) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlVinhLong.goto('https://xosodaiphat.com/xsvl-xo-so-vinh-long.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlVinhLong.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_VinhLong: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_VinhLong: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_VinhLong: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_VinhLong: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_VinhLong: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlVungTau(page_crawlVungTau) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlVungTau.goto('https://xosodaiphat.com/xsvt-xo-so-vung-tau.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlVungTau.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_VungTau: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_VungTau: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_VungTau: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_VungTau: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_VungTau: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlSocTrang(page_crawlSocTrang) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlSocTrang.goto('https://xosodaiphat.com/xsst-xo-so-soc-trang.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlSocTrang.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_SocTrang: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_SocTrang: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_SocTrang: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_SocTrang: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_SocTrang: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlBinhThuan(page_crawlBinhThuan) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlBinhThuan.goto('https://xosodaiphat.com/xsbth-xo-so-binh-thuan.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlBinhThuan.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_BinhThuan: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_BinhThuan: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_BinhThuan: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_BinhThuan: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_BinhThuan: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlQuangNam(page_crawlQuangNam) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlQuangNam.goto('https://xosodaiphat.com/xsqna-xo-so-quang-nam.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlQuangNam.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_QuangNam: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_QuangNam: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_QuangNam: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_QuangNam: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_QuangNam: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlQuangTri(page_crawlQuangTri) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlQuangTri.goto('https://xosodaiphat.com/xsqt-xo-so-quang-tri.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlQuangTri.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_QuangTri: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_QuangTri: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_QuangTri: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_QuangTri: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_QuangTri: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlBinhDinh(page_crawlBinhDinh) {
    console.log('Đang cào dữ liệu XS Các Miền...');
    try {
        await page_crawlBinhDinh.goto('http://xosodaiphat.com/xsbdi-xo-so-binh-dinh.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlBinhDinh.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                G8vGDB_BinhDinh: getClassspan('special-prize-lg.div-horizontal'),
                G7vG5vG3vG2vG1_BinhDinh: getClassspan('number-black-bold.div-horizontal'),
                G6vG4_BinhDinh: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
                G4_BinhDinh: getClassspan('col-sm-3.col-xs-6.number-black-bold.div-horizontal'),
                LT_BinhDinh: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu XS Các Miền thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu XS Các Miền', error.message);
    }
}

async function crawlLoGanCV(page1) {
    console.log('Đang cào dữ liệu Lô Gan cùng về...');
    try {
        await page1.goto('https://xosodaiphat.com/thong-ke-lo-xien.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page1.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                boso2: getClasstd('col-xs-2.text-bold.text-center'),
                boso2_ngayve: getClasstd('col-xs-7'),
                boso2_ngay: getClasstd('col-xs-3.text-center'),
            };
        });
        console.log('Cào dữ liệu Lô Gan ngày cùng về thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Lô Gan:', error.message);
    }
}

//

async function crawlLotoKep(page_crawlLotoKep) {
    console.log('Đang cào dữ liệu Lô tô kép...');
    try {
        await page_crawlLotoKep.goto('https://xosodaiphat.com/thong-ke-lo-kep.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlLotoKep.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                kep: getClasstd('col-xs-2.text-bold.text-center'),
                kep_ngayve: getClasstd('col-xs-7'),
                kep_ngay: getClasstd('col-xs-3.text-center'),
            };
        });
        console.log('Cào dữ liệu Lô tô kép thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Lô tô kép:', error.message);
    }
}

//
async function crawlTKLXH(page_crawlTKLXH) {
    console.log('Đang cào dữ liệu TK lần xuất hiện...');
    try {
        await page_crawlTKLXH.goto('https://xosodaiphat.com/thong-ke-lan-xuat-hien.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlTKLXH.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                phantram_TKLXH: getClasstd('col-md-2.col-xs-1'),
                luot_TKLXH: getClasstd('col-md-2.col-xs-2'),
                boso_TKLXH: getClasstd('col-md-1.col-xs-2.text-center'),
            };
        });
        console.log('Cào dữ liệu TK lần xuất hiện thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu TK lần xuất hiện:', error.message);
    }
}
//
async function crawlTKLXH1(page_crawlTKLXH1) {
    console.log('Đang cào dữ liệu TK lần xuất hiện...');
    try {
        await page_crawlTKLXH1.goto('https://xosodaiphat.com/thong-ke-tan-suat.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlTKLXH1.evaluate(() => {
            const gettr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                bang12_xh: getClasstd('col-xs-2'),
                textleft_xh: getClasstd('text-left'),
            };
        });
        console.log('Cào dữ liệu TK lần xuất hiện thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu TK lần xuất hiện:', error.message);
    }
}
//
async function crawlTKKCB(page_crawlTKKCB) {
    console.log('Đang cào dữ liệu TK Keno cơ bản...');
    try {
        await page_crawlTKKCB.goto('https://xosodaiphat.com/thong-ke-keno-co-ban.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlTKKCB.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClasstr = (cl) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                slxh_TKKCB: getClasstd('col-td-3'),
                boso_TKKCB: getClasstd('col-td-1.text-center'),
                top10_TKKCB: getClasstr('tr'),
            };
        });
        console.log('Cào dữ liệu TK Keno cơ bản thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu TK Keno cơ bản:', error.message);
    }
}

//
async function crawlTKKBS(page_crawlTKKBS) {
    console.log('Đang cào dữ liệu TK Keno bổ sung...');
    try {
        await page_crawlTKKBS.goto('https://xosodaiphat.com/thong-ke-keno-bo-sung.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlTKKBS.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getId = (dau) => {
                return Array.from(document.querySelectorAll(`td[id^="${dau}"]`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const gettr = (dau) => {
                return Array.from(document.querySelectorAll(`tr`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                kyquay_TKKBS: getClasstd('color-blue'),
                lon_TKKBS: getId('big-1'),
                be_TKKBS: getId('small-1'),
                chan_TKKBS: getId('even-1'),
                le_TKKBS: getId('odd-1'),
                combo_TKKBS: gettr('tr'),
            };
        });
        console.log('Cào dữ liệu TK Keno bổ sung thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu TK Keno bổ sung:', error.message);
    }
}

//
async function crawlTKkdencc(page_crawlTKkdencc) {
    console.log('Đang cào dữ liệu 0 đến 99...');
    try {
        await page_crawlTKkdencc.goto('https://xosodaiphat.com/thong-ke-00-99.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlTKkdencc.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getId = (dau) => {
                return Array.from(document.querySelectorAll(`td[id^="${dau}"]`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                phantram_TKkdencc: getClasstd('col-md-2.col-xs-1'),
                luot_TKkdencc: getClasstd('col-md-2.col-xs-2'),
                boso_TKkdencc: getClasstd('col-md-1.col-xs-2.text-center'),
            };
        });
        console.log('Cào dữ liệu 0 đến 99 thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu 0 đến 99:', error.message);
    }
}

async function crawlDienToan123(page_crawlDienToan123) {
    console.log('Đang cào dữ liệu điện toán 123...');
    try {
        await page_crawlDienToan123.goto('https://xosodaiphat.com/xo-so-dien-toan-123.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlDienToan123.evaluate(() => {
            const getul = (cl) => {
                return Array.from(document.querySelectorAll(`li`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                dt123_day: getClass('list-link'),
                dt123: getClass('dientoan-detail'),
            };
        });
        console.log('Cào dữ liệu điện toán 123 thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu điện toán 123:', error.message);
    }
}

async function crawlDienToan636(page_crawlDienToan636) {
    console.log('Đang cào dữ liệu điện toán 636...');
    try {
        await page_crawlDienToan636.goto('https://xosodaiphat.com/xo-so-dien-toan-6x36.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlDienToan636.evaluate(() => {
            const getul = (cl) => {
                return Array.from(document.querySelectorAll(`li`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                dt636_day: getClass('list-link'),
                dt636: getClass('dientoan-detail'),
            };
        });
        console.log('Cào dữ liệu điện toán 636 thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu điện toán 636:', error.message);
    }
}

async function crawlTKTheoThu(page_crawlTKTheoThu) {
    console.log('Đang cào dữ liệu TK theo thứ...');
    try {
        await page_crawlTKTheoThu.goto('https://xosodaiphat.com/thong-ke-theo-thu.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawlTKTheoThu.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                boso_theoThu: getClasstd('col-md-1.col-xs-2.text-center'),
                phantram_theoThu: getClasstd('col-md-2.col-xs-1'),
                luot_theoThu: getClasstd('col-md-2.col-xs-2'),
            };
        });
        console.log('Cào dữ liệu TK theo thứ thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu TK theo thứ:', error.message);
    }
}

async function crawl_Keno(page_crawl_Keno) {
    console.log('Đang cào dữ liệu Keno...');
    try {
        await page_crawl_Keno.goto('https://xosodaiphat.com/keno-truc-tiep-xskeno.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Keno.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                keno_dt: getClasstd('kn-number'),
                text_keno_dt: getClasstd('td-text16.clred'),
                keno_thoigian: getClassspan('pad-012'),
            };
        });
        console.log('Cào dữ liệu Keno thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Keno:', error.message);
    }
}

async function crawl_Power(page_crawl_Power) {
    console.log('Đang cào dữ liệu Power...');
    try {
        await page_crawl_Power.goto('https://xosodaiphat.com/xs-power-xo-so-power-655.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Power.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassp = (cl) => {
                return Array.from(document.querySelectorAll(`p.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                power_class_link: getClass('list-link.left100'),
                power_para_open_next: getClassp('open-next'),
                power_number_ball: getClass('power-detail'),
                power_text_right: getClasstd('text-right'),
                power_para_text_black_bold: getClassp('text-black-bold'),
                power_jackpot: getClassspan('result-jackpot'),
                power_xspower: getClass('block-main-heading'),
                power_ball: getClass('power-detail'),
            };
        });
        console.log('Cào dữ liệu Power thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Power:', error.message);
    }
}

async function crawl_Power_thu3(page_crawl_Power_thu3) {
    console.log('Đang cào dữ liệu Power_thu3...');
    try {
        await page_crawl_Power_thu3.goto('https://xosodaiphat.com/xs-power-655-thu-3.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Power_thu3.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassp = (cl) => {
                return Array.from(document.querySelectorAll(`p.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                power_thu3_class_link: getClass('list-link.left100'),
                power_thu3_para_open_next: getClassp('open-next'),
                power_thu3_number_ball: getClass('power-detail'),
                power_thu3_text_right: getClasstd('text-right'),
                power_thu3_para_text_black_bold: getClassp('text-black-bold'),
                power_thu3_jackpot: getClassspan('result-jackpot'),
                power_thu3_xspower: getClass('block-main-heading'),
                power_thu3_ball: getClass('power-detail'),
            };
        });
        console.log('Cào dữ liệu Power thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Power:', error.message);
    }
}

async function crawl_Power_thu7(page_crawl_Power_thu7) {
    console.log('Đang cào dữ liệu Power_thu7...');
    try {
        await page_crawl_Power_thu7.goto('https://xosodaiphat.com/xs-power-655-thu-7.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Power_thu7.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassp = (cl) => {
                return Array.from(document.querySelectorAll(`p.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                power_thu7_class_link: getClass('list-link.left100'),
                power_thu7_para_open_next: getClassp('open-next'),
                power_thu7_number_ball: getClass('power-detail'),
                power_thu7_text_right: getClasstd('text-right'),
                power_thu7_para_text_black_bold: getClassp('text-black-bold'),
                power_thu7_jackpot: getClassspan('result-jackpot'),
                power_thu7_xspower: getClass('block-main-heading'),
                power_thu7_ball: getClass('power-detail'),
            };
        });
        console.log('Cào dữ liệu Power thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Power:', error.message);
    }
}

async function crawl_Power_thu5(page_crawl_Power_thu5) {
    console.log('Đang cào dữ liệu Power_thu5...');
    try {
        await page_crawl_Power_thu5.goto('https://xosodaiphat.com/xs-power-655-thu-5.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Power_thu5.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassp = (cl) => {
                return Array.from(document.querySelectorAll(`p.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                power_thu5_class_link: getClass('list-link.left100'),
                power_thu5_para_open_next: getClassp('open-next'),
                power_thu5_number_ball: getClass('power-detail'),
                power_thu5_text_right: getClasstd('text-right'),
                power_thu5_para_text_black_bold: getClassp('text-black-bold'),
                power_thu5_jackpot: getClassspan('result-jackpot'),
                power_thu5_xspower: getClass('block-main-heading'),
                power_thu5_ball: getClass('power-detail'),
            };
        });
        console.log('Cào dữ liệu Power thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Power:', error.message);
    }
}

async function crawl_Max3D(page_crawl_Max3D) {
    console.log('Đang cào dữ liệu Max3D...');
    try {
        await page_crawl_Max3D.goto('https://xosodaiphat.com/xo-so-max3d.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Max3D.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                max3d_title: getClass('titlemax3d.bold'),
                max3d_link: getClass('list-link'),
                G1: getClassspan('col-xs-6.special-prize-lg.div-horizontal'),
                G2vKK: getClassspan('col-xs-3.number-black-bold.div-horizontal'),
                G3: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
            };
        });
        console.log('Cào dữ liệu Max3D thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Max3D:', error.message);
    }
}

async function crawl_Max3D_thu2(page_crawl_Max3D_thu2) {
    console.log('Đang cào dữ liệu Max3D_thu2...');
    try {
        await page_crawl_Max3D_thu2.goto('https://xosodaiphat.com/xs-max3d-thu-2.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Max3D_thu2.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                max3d_title_thu2: getClass('titlemax3d.bold'),
                max3d_link_thu2: getClass('list-link'),
                G1_thu2: getClassspan('col-xs-6.special-prize-lg.div-horizontal'),
                G2vKK_thu2: getClassspan('col-xs-3.number-black-bold.div-horizontal'),
                G3_thu2: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
            };
        });
        console.log('Cào dữ liệu Max3D_thu2 thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Max3D_thu2:', error.message);
    }
}

async function crawl_Max3D_thu6(page_crawl_Max3D_thu6) {
    console.log('Đang cào dữ liệu Max3D_thu6...');
    try {
        await page_crawl_Max3D_thu6.goto('https://xosodaiphat.com/xs-max3d-thu-6.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Max3D_thu6.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                max3d_title_thu6: getClass('titlemax3d.bold'),
                max3d_link_thu6: getClass('list-link'),
                G1_thu6: getClassspan('col-xs-6.special-prize-lg.div-horizontal'),
                G2vKK_thu6: getClassspan('col-xs-3.number-black-bold.div-horizontal'),
                G3_thu6: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
            };
        });
        console.log('Cào dữ liệu Max3D_thu6 thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Max3D_thu6:', error.message);
    }
}

async function crawl_Max3D_thu4(page_crawl_Max3D_thu4) {
    console.log('Đang cào dữ liệu Max3D_thu4...');
    try {
        await page_crawl_Max3D_thu4.goto('https://xosodaiphat.com/xs-max3d-thu-4.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Max3D_thu4.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                max3d_title_thu4: getClass('titlemax3d.bold'),
                max3d_link_thu4: getClass('list-link'),
                G1_thu4: getClassspan('col-xs-6.special-prize-lg.div-horizontal'),
                G2vKK_thu4: getClassspan('col-xs-3.number-black-bold.div-horizontal'),
                G3_thu4: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
            };
        });
        console.log('Cào dữ liệu Max3D_thu4 thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Max3D_thu4:', error.message);
    }
}

async function crawl_Max3DPro(page_crawl_Max3DPro) {
    console.log('Đang cào dữ liệu Max3D...');
    try {
        await page_crawl_Max3DPro.goto('https://xosodaiphat.com/xs-max-3d-pro.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Max3DPro.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                max3d_title_pro: getClass('titlemax3d.bold'),
                max3d_link_pro: getClass('list-link'),
                G1_pro: getClassspan('col-xs-6.special-prize-lg.div-horizontal'),
                G2vKK_pro: getClassspan('col-xs-3.number-black-bold.div-horizontal'),
                G3_pro: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
            };
        });
        console.log('Cào dữ liệu Max3D thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Max3D:', error.message);
    }
}

async function crawl_Max3DPro_thu3(page_crawl_Max3DPro_thu3) {
    console.log('Đang cào dữ liệu Max3D...');
    try {
        await page_crawl_Max3DPro_thu3.goto('https://xosodaiphat.com/max-3d-pro-thu-3.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Max3DPro_thu3.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                max3d_title_pro_thu3: getClass('titlemax3d.bold'),
                max3d_link_pro_thu3: getClass('list-link'),
                G1_pro_thu3: getClassspan('col-xs-6.special-prize-lg.div-horizontal'),
                G2vKK_pro_thu3: getClassspan('col-xs-3.number-black-bold.div-horizontal'),
                G3_pro_thu3: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
            };
        });
        console.log('Cào dữ liệu Max3D thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Max3D:', error.message);
    }
}

async function crawl_Max3DPro_thu5(page_crawl_Max3DPro_thu5) {
    console.log('Đang cào dữ liệu Max3D...');
    try {
        await page_crawl_Max3DPro_thu5.goto('https://xosodaiphat.com/max-3d-pro-thu-5.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Max3DPro_thu5.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                max3d_title_pro_thu5: getClass('titlemax3d.bold'),
                max3d_link_pro_thu5: getClass('list-link'),
                G1_pro_thu5: getClassspan('col-xs-6.special-prize-lg.div-horizontal'),
                G2vKK_pro_thu5: getClassspan('col-xs-3.number-black-bold.div-horizontal'),
                G3_pro_thu5: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
            };
        });
        console.log('Cào dữ liệu Max3D thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Max3D:', error.message);
    }
}

async function crawl_Max3DPro_thu7(page_crawl_Max3DPro_thu7) {
    console.log('Đang cào dữ liệu Max3D...');
    try {
        await page_crawl_Max3DPro_thu7.goto('https://xosodaiphat.com/max-3d-pro-thu-7.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Max3DPro_thu7.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                max3d_title_pro_thu7: getClass('titlemax3d.bold'),
                max3d_link_pro_thu7: getClass('list-link'),
                G1_pro_thu7: getClassspan('col-xs-6.special-prize-lg.div-horizontal'),
                G2vKK_pro_thu7: getClassspan('col-xs-3.number-black-bold.div-horizontal'),
                G3_pro_thu7: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
            };
        });
        console.log('Cào dữ liệu Max3D thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Max3D:', error.message);
    }
}

async function crawl_ThanTai(page_crawl_ThanTai) {
    console.log('Đang cào dữ liệu Thần Tài 4...');
    try {
        await page_crawl_ThanTai.goto('https://xosodaiphat.com/xo-so-than-tai.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_ThanTai.evaluate(() => {
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                tt_day: getClass('list-link'),
                tt_number: getClass('dientoan-detail'),
            };
        });
        console.log('Cào dữ liệu Thần Tài thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Thần Tài:', error.message);
    }
}

async function crawl_Mega(page_crawl_Mega) {
    console.log('Đang cào dữ liệu Mega...');
    try {
        await page_crawl_Mega.goto('https://xosodaiphat.com/xs-mega-xo-so-mega-645.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Mega.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassp = (cl) => {
                return Array.from(document.querySelectorAll(`p.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassh2 = (cl) => {
                return Array.from(document.querySelectorAll(`h2.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getli = (cl) => {
                return Array.from(document.querySelectorAll(`li`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                mega_class_link: getClassh2('class-title-list-link'),
                mega_para_open_next: getClassp('open-next'),
                mega_number_ball: getClass('mega-detail'),
                mega_text_right: getClasstd('text-right'),
                mega_para_text_black_bold: getClassp('text-black-bold'),
                mega_jackpot: getClassspan('result-jackpot'),
                mega_xsmega: getClass('block-main-heading'),
                mega_ball: getClass('mega-detail'),
            };
        });
        console.log('Cào dữ liệu Mega thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Mega:', error.message);
    }
}

async function crawl_Mega_thu4(page_crawl_Mega_thu4) {
    console.log('Đang cào dữ liệu Mega_thu4...');
    try {
        await page_crawl_Mega_thu4.goto('https://xosodaiphat.com/xs-mega-thu-4.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Mega_thu4.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassp = (cl) => {
                return Array.from(document.querySelectorAll(`p.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassh2 = (cl) => {
                return Array.from(document.querySelectorAll(`h2.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getli = (cl) => {
                return Array.from(document.querySelectorAll(`li`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                mega_thu4_class_link: getClassh2('class-title-list-link'),
                mega_thu4_para_open_next: getClassp('open-next'),
                mega_thu4_number_ball: getClass('mega-detail'),
                mega_thu4_text_right: getClasstd('text-right'),
                mega_thu4_para_text_black_bold: getClassp('text-black-bold'),
                mega_thu4_jackpot: getClassspan('result-jackpot'),
                mega_thu4_xsmega: getClass('block-main-heading'),
                mega_thu4_ball: getClass('mega-detail'),
            };
        });
        console.log('Cào dữ liệu Mega thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Mega:', error.message);
    }
}

async function crawl_Mega_cn(page_crawl_Mega_cn) {
    console.log('Đang cào dữ liệu Mega_cn...');
    try {
        await page_crawl_Mega_cn.goto('https://xosodaiphat.com/xs-mega-chu-nhat.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Mega_cn.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassp = (cl) => {
                return Array.from(document.querySelectorAll(`p.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassh2 = (cl) => {
                return Array.from(document.querySelectorAll(`h2.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getli = (cl) => {
                return Array.from(document.querySelectorAll(`li`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                mega_cn_class_link: getClassh2('class-title-list-link'),
                mega_cn_para_open_next: getClassp('open-next'),
                mega_cn_number_ball: getClass('mega-detail'),
                mega_cn_text_right: getClasstd('text-right'),
                mega_cn_para_text_black_bold: getClassp('text-black-bold'),
                mega_cn_jackpot: getClassspan('result-jackpot'),
                mega_cn_xsmega: getClass('block-main-heading'),
                mega_cn_ball: getClass('mega-detail'),
            };
        });
        console.log('Cào dữ liệu Mega thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Mega:', error.message);
    }
}

async function crawl_Mega_thu6(page_crawl_Mega_thu6) {
    console.log('Đang cào dữ liệu Mega_thu6...');
    try {
        await page_crawl_Mega_thu6.goto('https://xosodaiphat.com/xs-mega-thu-6.html', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const result = await page_crawl_Mega_thu6.evaluate(() => {
            const getClasstd = (cl) => {
                return Array.from(document.querySelectorAll(`td.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassspan = (cl) => {
                return Array.from(document.querySelectorAll(`span.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassp = (cl) => {
                return Array.from(document.querySelectorAll(`p.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClassh2 = (cl) => {
                return Array.from(document.querySelectorAll(`h2.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getli = (cl) => {
                return Array.from(document.querySelectorAll(`li`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            const getClass = (cl) => {
                return Array.from(document.querySelectorAll(`div.${cl}`))
                    .map((el) => el.innerText.trim())
                    .filter(Boolean);
            };
            return {
                mega_thu6_class_link: getClassh2('class-title-list-link'),
                mega_thu6_para_open_next: getClassp('open-next'),
                mega_thu6_number_ball: getClass('mega-detail'),
                mega_thu6_text_right: getClasstd('text-right'),
                mega_thu6_para_text_black_bold: getClassp('text-black-bold'),
                mega_thu6_jackpot: getClassspan('result-jackpot'),
                mega_thu6_xsmega: getClass('block-main-heading'),
                mega_thu6_ball: getClass('mega-detail'),
            };
        });
        console.log('Cào dữ liệu Mega thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Mega:', error.message);
    }
}

async function crawl() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const page1 = await browser.newPage();
    const page_crawlTKLoGanDau = await browser.newPage();
    const page_crawlTKLoGanDuoi = await browser.newPage();
    const page_crawlTKGDB = await browser.newPage();
    const page_crawlTKLXH = await browser.newPage();
    const page_crawlTKLXH1 = await browser.newPage();
    const page_crawlTKKCB = await browser.newPage();
    const page_crawlTKKBS = await browser.newPage();
    const page_crawlTKkdencc = await browser.newPage();
    const page_crawlCaMau = await browser.newPage();
    const page_crawlCanTho = await browser.newPage();
    const page_crawlAnGiang = await browser.newPage();
    const page_crawl_XSMB_30ngay = await browser.newPage();
    // const page_crawl_XSMN_30ngay = await browser.newPage();
    // const page_crawl_XSMN_90ngay = await browser.newPage();
    const page_crawl_XSMB_90ngay = await browser.newPage();
    const page_crawlDongNai = await browser.newPage();
    const page_crawlDongThap = await browser.newPage();
    const page_crawlHauGiang = await browser.newPage();
    const page_crawlKienGiang = await browser.newPage();
    const page_crawlLongAn = await browser.newPage();
    const page_crawlKonTum = await browser.newPage();
    const page_crawlNinhThuan = await browser.newPage();
    const page_crawlPhuYen = await browser.newPage();
    const page_crawlQuangBinh = await browser.newPage();
    const page_crawlQuangNgai = await browser.newPage();
    const page_crawlDakLak = await browser.newPage();
    const page_crawlDacNong = await browser.newPage();
    const page_crawlGiaLai = await browser.newPage();
    const page_crawlHue = await browser.newPage();
    const page_crawlBacLieu = await browser.newPage();
    const page_crawlBenTre = await browser.newPage();
    const page_crawlBinhDuong = await browser.newPage();
    const page_crawlBinhPhuoc = await browser.newPage();
    const page_crawlTayNinh = await browser.newPage();
    const page_crawlKhanhHoa = await browser.newPage();
    const page_crawlDaNang = await browser.newPage();
    const page_crawlTienGiang = await browser.newPage();
    const page_crawlHCM = await browser.newPage();
    const page_crawlTraVinh = await browser.newPage();
    const page_crawlVinhLong = await browser.newPage();
    const page_crawlVungTau = await browser.newPage();
    const page_crawlSocTrang = await browser.newPage();
    const page_crawlBinhThuan = await browser.newPage();
    const page_crawlQuangNam = await browser.newPage();
    const page_crawlQuangTri = await browser.newPage();
    const page_crawlBinhDinh = await browser.newPage();
    const page_crawlDienToan123 = await browser.newPage();
    const page_crawlDienToan636 = await browser.newPage();
    const page_crawlTKTheoThu = await browser.newPage();
    const page_crawlLotoKep = await browser.newPage();
    const page_crawl_Keno = await browser.newPage();
    const page_crawl_Mega = await browser.newPage();
    const page_crawl_Mega_thu4 = await browser.newPage();
    const page_crawl_Mega_cn = await browser.newPage();
    const page_crawl_Mega_thu6 = await browser.newPage();
    const page_crawl_Power = await browser.newPage();
    const page_crawl_Power_thu3 = await browser.newPage();
    const page_crawl_Power_thu5 = await browser.newPage();
    const page_crawl_Power_thu7 = await browser.newPage();
    const page_crawl_Max3D = await browser.newPage();
    const page_crawl_Max3D_thu2 = await browser.newPage();
    const page_crawl_Max3D_thu4 = await browser.newPage();
    const page_crawl_Max3D_thu6 = await browser.newPage();
    const page_crawl_Max3DPro = await browser.newPage();
    const page_crawl_Max3DPro_thu3 = await browser.newPage();
    const page_crawl_Max3DPro_thu5 = await browser.newPage();
    const page_crawl_Max3DPro_thu7 = await browser.newPage();
    const page_crawl_ThanTai = await browser.newPage();
    console.log('Đang cào dữ liệu chính...');

    // Điều hướng đến trang chính
    await page.goto('https://xosodaiphat.com/', {
        waitUntil: 'networkidle2',
        timeout: 60000,
    });

    // Cào dữ liệu chính
    const data = await page.evaluate(() => {
        // Lấy ngày từ tiêu đề
        const titleEl = document.querySelector('.ketqua_title h1, h1, .title');
        let date = new Date().toLocaleDateString('vi-VN');
        if (titleEl) {
            const match = titleEl.innerText.match(/\d{2}\/\d{2}\/\d{4}/);
            if (match) date = match[0];
        }

        const getNumbers = (prefix) => {
            return Array.from(document.querySelectorAll(`span[id^="${prefix}"]`))
                .map((el) => el.innerText.trim())
                .filter(Boolean);
        };

        const getLoto = (dau) => {
            return Array.from(document.querySelectorAll(`td[id^="${dau}"]`))
                .map((el) => el.innerText.trim())
                .filter(Boolean);
        };

        const getClass = (cl) => {
            return Array.from(document.querySelectorAll(`div.${cl}`))
                .map((el) => el.innerText.trim())
                .filter(Boolean);
        };

        const getClassspan = (cl) => {
            return Array.from(document.querySelectorAll(`span.${cl}`))
                .map((el) => el.innerText.trim())
                .filter(Boolean);
        };

        const getClasstd = (cl) => {
            return Array.from(document.querySelectorAll(`td.${cl}`))
                .map((el) => el.innerText.trim())
                .filter(Boolean);
        };

        const getClassli = (cl) => {
            return Array.from(document.querySelectorAll(`li.${cl}`))
                .map((el) => el.innerText.trim())
                .filter(Boolean);
        };

        const getClassth = (cl) => {
            return Array.from(document.querySelectorAll(`th.${cl}`))
                .map((el) => el.innerText.trim())
                .filter(Boolean);
        };

        const getClassp = (cl) => {
            return Array.from(document.querySelectorAll(`p.${cl}`))
                .map((el) => el.innerText.trim())
                .filter(Boolean);
        };

        return {
            MDBMB: getNumbers('mb_prizeCode_item'),
            date,
            GDBMB: document.querySelector('#mb_prize_DB_item_0')?.innerText.trim() || '---',
            G1MB: getNumbers('mb_prize_1_item'),
            G2MB: getNumbers('mb_prize_2_item'),
            G3MB: getNumbers('mb_prize_3_item'),
            G4MB: getNumbers('mb_prize_4_item'),
            G5MB: getNumbers('mb_prize_5_item'),
            G6MB: getNumbers('mb_prize_6_item'),
            G7MB: getNumbers('mb_prize_7_item'),
            //Lo to
            LT0MB: getLoto('loto_mb_0'),
            LT1MB: getLoto('loto_mb_1'),
            LT2MB: getLoto('loto_mb_2'),
            LT3MB: getLoto('loto_mb_3'),
            LT4MB: getLoto('loto_mb_4'),
            LT5MB: getLoto('loto_mb_5'),
            LT6MB: getLoto('loto_mb_6'),
            LT7MB: getLoto('loto_mb_7'),
            LT8MB: getLoto('loto_mb_8'),
            LT9MB: getLoto('loto_mb_9'),

            TKGDB: getClass('fontDB'),

            //MN
            GDBVL: document.querySelector('#VL_prize_Db_item_0')?.innerText.trim() || '---',
            G1VL: getNumbers('VL_prize_1_item'),
            G2VL: getNumbers('VL_prize_2_item'),
            G3VL: getNumbers('VL_prize_3_item'),
            G4VL: getNumbers('VL_prize_4_item'),
            G5VL: getNumbers('VL_prize_5_item'),
            G6VL: getNumbers('VL_prize_6_item'),
            G7VL: getNumbers('VL_prize_7_item'),
            G8VL: getNumbers('VL_prize_8_item'),

            GDBHCM: document.querySelector('#HCM_prize_Db_item_0')?.innerText.trim() || '---',
            G1HCM: getNumbers('HCM_prize_1_item'),
            G2HCM: getNumbers('HCM_prize_2_item'),
            G3HCM: getNumbers('HCM_prize_3_item'),
            G4HCM: getNumbers('HCM_prize_4_item'),
            G5HCM: getNumbers('HCM_prize_5_item'),
            G6HCM: getNumbers('HCM_prize_6_item'),
            G7HCM: getNumbers('HCM_prize_7_item'),
            G8HCM: getNumbers('HCM_prize_8_item'),

            GDBDT: document.querySelector('#DT_prize_Db_item_0')?.innerText.trim() || '---',
            G1DT: getNumbers('DT_prize_1_item'),
            G2DT: getNumbers('DT_prize_2_item'),
            G3DT: getNumbers('DT_prize_3_item'),
            G4DT: getNumbers('DT_prize_4_item'),
            G5DT: getNumbers('DT_prize_5_item'),
            G6DT: getNumbers('DT_prize_6_item'),
            G7DT: getNumbers('DT_prize_7_item'),
            G8DT: getNumbers('DT_prize_8_item'),

            GDBCM: document.querySelector('#CM_prize_Db_item_0')?.innerText.trim() || '---',
            G1CM: getNumbers('CM_prize_1_item'),
            G2CM: getNumbers('CM_prize_2_item'),
            G3CM: getNumbers('CM_prize_3_item'),
            G4CM: getNumbers('CM_prize_4_item'),
            G5CM: getNumbers('CM_prize_5_item'),
            G6CM: getNumbers('CM_prize_6_item'),
            G7CM: getNumbers('CM_prize_7_item'),
            G8CM: getNumbers('CM_prize_8_item'),

            GDBBD: document.querySelector('#BD_prize_Db_item_0')?.innerText.trim() || '---',
            G1BD: getNumbers('BD_prize_1_item'),
            G2BD: getNumbers('BD_prize_2_item'),
            G3BD: getNumbers('BD_prize_3_item'),
            G4BD: getNumbers('BD_prize_4_item'),
            G5BD: getNumbers('BD_prize_5_item'),
            G6BD: getNumbers('BD_prize_6_item'),
            G7BD: getNumbers('BD_prize_7_item'),
            G8BD: getNumbers('BD_prize_8_item'),

            GDBTV: document.querySelector('#TV_prize_Db_item_0')?.innerText.trim() || '---',
            G1TV: getNumbers('TV_prize_1_item'),
            G2TV: getNumbers('TV_prize_2_item'),
            G3TV: getNumbers('TV_prize_3_item'),
            G4TV: getNumbers('TV_prize_4_item'),
            G5TV: getNumbers('TV_prize_5_item'),
            G6TV: getNumbers('TV_prize_6_item'),
            G7TV: getNumbers('TV_prize_7_item'),
            G8TV: getNumbers('TV_prize_8_item'),

            GDBDN: document.querySelector('#DN_prize_Db_item_0')?.innerText.trim() || '---',
            G1DN: getNumbers('DN_prize_1_item'),
            G2DN: getNumbers('DN_prize_2_item'),
            G3DN: getNumbers('DN_prize_3_item'),
            G4DN: getNumbers('DN_prize_4_item'),
            G5DN: getNumbers('DN_prize_5_item'),
            G6DN: getNumbers('DN_prize_6_item'),
            G7DN: getNumbers('DN_prize_7_item'),
            G8DN: getNumbers('DN_prize_8_item'),

            GDBCT: document.querySelector('#CT_prize_Db_item_0')?.innerText.trim() || '---',
            G1CT: getNumbers('CT_prize_1_item'),
            G2CT: getNumbers('CT_prize_2_item'),
            G3CT: getNumbers('CT_prize_3_item'),
            G4CT: getNumbers('CT_prize_4_item'),
            G5CT: getNumbers('CT_prize_5_item'),
            G6CT: getNumbers('CT_prize_6_item'),
            G7CT: getNumbers('CT_prize_7_item'),
            G8CT: getNumbers('CT_prize_8_item'),

            GDBST: document.querySelector('#ST_prize_Db_item_0')?.innerText.trim() || '---',
            G1ST: getNumbers('ST_prize_1_item'),
            G2ST: getNumbers('ST_prize_2_item'),
            G3ST: getNumbers('ST_prize_3_item'),
            G4ST: getNumbers('ST_prize_4_item'),
            G5ST: getNumbers('ST_prize_5_item'),
            G6ST: getNumbers('ST_prize_6_item'),
            G7ST: getNumbers('ST_prize_7_item'),
            G8ST: getNumbers('ST_prize_8_item'),

            GDBTN: document.querySelector('#TN_prize_Db_item_0')?.innerText.trim() || '---',
            G1TN: getNumbers('TN_prize_1_item'),
            G2TN: getNumbers('TN_prize_2_item'),
            G3TN: getNumbers('TN_prize_3_item'),
            G4TN: getNumbers('TN_prize_4_item'),
            G5TN: getNumbers('TN_prize_5_item'),
            G6TN: getNumbers('TN_prize_6_item'),
            G7TN: getNumbers('TN_prize_7_item'),
            G8TN: getNumbers('TN_prize_8_item'),

            GDBAG: document.querySelector('#AG_prize_Db_item_0')?.innerText.trim() || '---',
            G1AG: getNumbers('AG_prize_1_item'),
            G2AG: getNumbers('AG_prize_2_item'),
            G3AG: getNumbers('AG_prize_3_item'),
            G4AG: getNumbers('AG_prize_4_item'),
            G5AG: getNumbers('AG_prize_5_item'),
            G6AG: getNumbers('AG_prize_6_item'),
            G7AG: getNumbers('AG_prize_7_item'),
            G8AG: getNumbers('AG_prize_8_item'),

            GDBTG: document.querySelector('#TG_prize_Db_item_0')?.innerText.trim() || '---',
            G1TG: getNumbers('TG_prize_1_item'),
            G2TG: getNumbers('TG_prize_2_item'),
            G3TG: getNumbers('TG_prize_3_item'),
            G4TG: getNumbers('TG_prize_4_item'),
            G5TG: getNumbers('TG_prize_5_item'),
            G6TG: getNumbers('TG_prize_6_item'),
            G7TG: getNumbers('TG_prize_7_item'),
            G8TG: getNumbers('TG_prize_8_item'),

            GDBKG: document.querySelector('#KG_prize_Db_item_0')?.innerText.trim() || '---',
            G1KG: getNumbers('KG_prize_1_item'),
            G2KG: getNumbers('KG_prize_2_item'),
            G3KG: getNumbers('KG_prize_3_item'),
            G4KG: getNumbers('KG_prize_4_item'),
            G5KG: getNumbers('KG_prize_5_item'),
            G6KG: getNumbers('KG_prize_6_item'),
            G7KG: getNumbers('KG_prize_7_item'),
            G8KG: getNumbers('KG_prize_8_item'),

            GDBDL: document.querySelector('#DL_prize_Db_item_0')?.innerText.trim() || '---',
            G1DL: getNumbers('DL_prize_1_item'),
            G2DL: getNumbers('DL_prize_2_item'),
            G3DL: getNumbers('DL_prize_3_item'),
            G4DL: getNumbers('DL_prize_4_item'),
            G5DL: getNumbers('DL_prize_5_item'),
            G6DL: getNumbers('DL_prize_6_item'),
            G7DL: getNumbers('DL_prize_7_item'),
            G8DL: getNumbers('DL_prize_8_item'),

            GDBBTR: document.querySelector('#BTR_prize_Db_item_0')?.innerText.trim() || '---',
            G1BTR: getNumbers('BTR_prize_1_item'),
            G2BTR: getNumbers('BTR_prize_2_item'),
            G3BTR: getNumbers('BTR_prize_3_item'),
            G4BTR: getNumbers('BTR_prize_4_item'),
            G5BTR: getNumbers('BTR_prize_5_item'),
            G6BTR: getNumbers('BTR_prize_6_item'),
            G7BTR: getNumbers('BTR_prize_7_item'),
            G8BTR: getNumbers('BTR_prize_8_item'),

            GDBVT: document.querySelector('#VT_prize_Db_item_0')?.innerText.trim() || '---',
            G1VT: getNumbers('VT_prize_1_item'),
            G2VT: getNumbers('VT_prize_2_item'),
            G3VT: getNumbers('VT_prize_3_item'),
            G4VT: getNumbers('VT_prize_4_item'),
            G5VT: getNumbers('VT_prize_5_item'),
            G6VT: getNumbers('VT_prize_6_item'),
            G7VT: getNumbers('VT_prize_7_item'),
            G8VT: getNumbers('VT_prize_8_item'),

            GDBBL: document.querySelector('#BL_prize_Db_item_0')?.innerText.trim() || '---',
            G1BL: getNumbers('BL_prize_1_item'),
            G2BL: getNumbers('BL_prize_2_item'),
            G3BL: getNumbers('BL_prize_3_item'),
            G4BL: getNumbers('BL_prize_4_item'),
            G5BL: getNumbers('BL_prize_5_item'),
            G6BL: getNumbers('BL_prize_6_item'),
            G7BL: getNumbers('BL_prize_7_item'),
            G8BL: getNumbers('BL_prize_8_item'),

            GDBBTH: document.querySelector('#BTH_prize_Db_item_0')?.innerText.trim() || '---',
            G1BTH: getNumbers('BTH_prize_1_item'),
            G2BTH: getNumbers('BTH_prize_2_item'),
            G3BTH: getNumbers('BTH_prize_3_item'),
            G4BTH: getNumbers('BTH_prize_4_item'),
            G5BTH: getNumbers('BTH_prize_5_item'),
            G6BTH: getNumbers('BTH_prize_6_item'),
            G7BTH: getNumbers('BTH_prize_7_item'),
            G8BTH: getNumbers('BTH_prize_8_item'),

            //Lô tô miền nam
            LT0TG: getLoto('mnloto_TG_0'),
            LT1TG: getLoto('mnloto_TG_1'),
            LT2TG: getLoto('mnloto_TG_2'),
            LT3TG: getLoto('mnloto_TG_3'),
            LT4TG: getLoto('mnloto_TG_4'),
            LT5TG: getLoto('mnloto_TG_5'),
            LT6TG: getLoto('mnloto_TG_6'),
            LT7TG: getLoto('mnloto_TG_7'),
            LT8TG: getLoto('mnloto_TG_8'),
            LT9TG: getLoto('mnloto_TG_9'),

            LT0KG: getLoto('mnloto_KG_0'),
            LT1KG: getLoto('mnloto_KG_1'),
            LT2KG: getLoto('mnloto_KG_2'),
            LT3KG: getLoto('mnloto_KG_3'),
            LT4KG: getLoto('mnloto_KG_4'),
            LT5KG: getLoto('mnloto_KG_5'),
            LT6KG: getLoto('mnloto_KG_6'),
            LT7KG: getLoto('mnloto_KG_7'),
            LT8KG: getLoto('mnloto_KG_8'),
            LT9KG: getLoto('mnloto_KG_9'),

            LT0DL: getLoto('mnloto_DL_0'),
            LT1DL: getLoto('mnloto_DL_1'),
            LT2DL: getLoto('mnloto_DL_2'),
            LT3DL: getLoto('mnloto_DL_3'),
            LT4DL: getLoto('mnloto_DL_4'),
            LT5DL: getLoto('mnloto_DL_5'),
            LT6DL: getLoto('mnloto_DL_6'),
            LT7DL: getLoto('mnloto_DL_7'),
            LT8DL: getLoto('mnloto_DL_8'),
            LT9DL: getLoto('mnloto_DL_9'),

            LT0DN: getLoto('mnloto_DN_0'),
            LT1DN: getLoto('mnloto_DN_1'),
            LT2DN: getLoto('mnloto_DN_2'),
            LT3DN: getLoto('mnloto_DN_3'),
            LT4DN: getLoto('mnloto_DN_4'),
            LT5DN: getLoto('mnloto_DN_5'),
            LT6DN: getLoto('mnloto_DN_6'),
            LT7DN: getLoto('mnloto_DN_7'),
            LT8DN: getLoto('mnloto_DN_8'),
            LT9DN: getLoto('mnloto_DN_9'),

            LT0CT: getLoto('mnloto_CT_0'),
            LT1CT: getLoto('mnloto_CT_1'),
            LT2CT: getLoto('mnloto_CT_2'),
            LT3CT: getLoto('mnloto_CT_3'),
            LT4CT: getLoto('mnloto_CT_4'),
            LT5CT: getLoto('mnloto_CT_5'),
            LT6CT: getLoto('mnloto_CT_6'),
            LT7CT: getLoto('mnloto_CT_7'),
            LT8CT: getLoto('mnloto_CT_8'),
            LT9CT: getLoto('mnloto_CT_9'),

            LT0ST: getLoto('mnloto_ST_0'),
            LT1ST: getLoto('mnloto_ST_1'),
            LT2ST: getLoto('mnloto_ST_2'),
            LT3ST: getLoto('mnloto_ST_3'),
            LT4ST: getLoto('mnloto_ST_4'),
            LT5ST: getLoto('mnloto_ST_5'),
            LT6ST: getLoto('mnloto_ST_6'),
            LT7ST: getLoto('mnloto_ST_7'),
            LT8ST: getLoto('mnloto_ST_8'),
            LT9ST: getLoto('mnloto_ST_9'),

            LT0TN: getLoto('mnloto_TN_0'),
            LT1TN: getLoto('mnloto_TN_1'),
            LT2TN: getLoto('mnloto_TN_2'),
            LT3TN: getLoto('mnloto_TN_3'),
            LT4TN: getLoto('mnloto_TN_4'),
            LT5TN: getLoto('mnloto_TN_5'),
            LT6TN: getLoto('mnloto_TN_6'),
            LT7TN: getLoto('mnloto_TN_7'),
            LT8TN: getLoto('mnloto_TN_8'),
            LT9TN: getLoto('mnloto_TN_9'),

            LT0AG: getLoto('mnloto_AG_0'),
            LT1AG: getLoto('mnloto_AG_1'),
            LT2AG: getLoto('mnloto_AG_2'),
            LT3AG: getLoto('mnloto_AG_3'),
            LT4AG: getLoto('mnloto_AG_4'),
            LT5AG: getLoto('mnloto_AG_5'),
            LT6AG: getLoto('mnloto_AG_6'),
            LT7AG: getLoto('mnloto_AG_7'),
            LT8AG: getLoto('mnloto_AG_8'),
            LT9AG: getLoto('mnloto_AG_9'),

            LT0BTH: getLoto('mnloto_BTH_0'),
            LT1BTH: getLoto('mnloto_BTH_1'),
            LT2BTH: getLoto('mnloto_BTH_2'),
            LT3BTH: getLoto('mnloto_BTH_3'),
            LT4BTH: getLoto('mnloto_BTH_4'),
            LT5BTH: getLoto('mnloto_BTH_5'),
            LT6BTH: getLoto('mnloto_BTH_6'),
            LT7BTH: getLoto('mnloto_BTH_7'),
            LT8BTH: getLoto('mnloto_BTH_8'),
            LT9BTH: getLoto('mnloto_BTH_9'),

            LT0HCM: getLoto('mnloto_HCM_0'),
            LT1HCM: getLoto('mnloto_HCM_1'),
            LT2HCM: getLoto('mnloto_HCM_2'),
            LT3HCM: getLoto('mnloto_HCM_3'),
            LT4HCM: getLoto('mnloto_HCM_4'),
            LT5HCM: getLoto('mnloto_HCM_5'),
            LT6HCM: getLoto('mnloto_HCM_6'),
            LT7HCM: getLoto('mnloto_HCM_7'),
            LT8HCM: getLoto('mnloto_HCM_8'),
            LT9HCM: getLoto('mnloto_HCM_9'),

            LT0DT: getLoto('mnloto_DT_0'),
            LT1DT: getLoto('mnloto_DT_1'),
            LT2DT: getLoto('mnloto_DT_2'),
            LT3DT: getLoto('mnloto_DT_3'),
            LT4DT: getLoto('mnloto_DT_4'),
            LT5DT: getLoto('mnloto_DT_5'),
            LT6DT: getLoto('mnloto_DT_6'),
            LT7DT: getLoto('mnloto_DT_7'),
            LT8DT: getLoto('mnloto_DT_8'),
            LT9DT: getLoto('mnloto_DT_9'),

            LT0CM: getLoto('mnloto_CM_0'),
            LT1CM: getLoto('mnloto_CM_1'),
            LT2CM: getLoto('mnloto_CM_2'),
            LT3CM: getLoto('mnloto_CM_3'),
            LT4CM: getLoto('mnloto_CM_4'),
            LT5CM: getLoto('mnloto_CM_5'),
            LT6CM: getLoto('mnloto_CM_6'),
            LT7CM: getLoto('mnloto_CM_7'),
            LT8CM: getLoto('mnloto_CM_8'),
            LT9CM: getLoto('mnloto_CM_9'),

            LT0BTR: getLoto('mnloto_BTR_0'),
            LT1BTR: getLoto('mnloto_BTR_1'),
            LT2BTR: getLoto('mnloto_BTR_2'),
            LT3BTR: getLoto('mnloto_BTR_3'),
            LT4BTR: getLoto('mnloto_BTR_4'),
            LT5BTR: getLoto('mnloto_BTR_5'),
            LT6BTR: getLoto('mnloto_BTR_6'),
            LT7BTR: getLoto('mnloto_BTR_7'),
            LT8BTR: getLoto('mnloto_BTR_8'),
            LT9BTR: getLoto('mnloto_BTR_9'),

            LT0VT: getLoto('mnloto_VT_0'),
            LT1VT: getLoto('mnloto_VT_1'),
            LT2VT: getLoto('mnloto_VT_2'),
            LT3VT: getLoto('mnloto_VT_3'),
            LT4VT: getLoto('mnloto_VT_4'),
            LT5VT: getLoto('mnloto_VT_5'),
            LT6VT: getLoto('mnloto_VT_6'),
            LT7VT: getLoto('mnloto_VT_7'),
            LT8VT: getLoto('mnloto_VT_8'),
            LT9VT: getLoto('mnloto_VT_9'),

            LT0BL: getLoto('mnloto_BL_0'),
            LT1BL: getLoto('mnloto_BL_1'),
            LT2BL: getLoto('mnloto_BL_2'),
            LT3BL: getLoto('mnloto_BL_3'),
            LT4BL: getLoto('mnloto_BL_4'),
            LT5BL: getLoto('mnloto_BL_5'),
            LT6BL: getLoto('mnloto_BL_6'),
            LT7BL: getLoto('mnloto_BL_7'),
            LT8BL: getLoto('mnloto_BL_8'),
            LT9BL: getLoto('mnloto_BL_9'),

            LT0BD: getLoto('mnloto_BD_0'),
            LT1BD: getLoto('mnloto_BD_1'),
            LT2BD: getLoto('mnloto_BD_2'),
            LT3BD: getLoto('mnloto_BD_3'),
            LT4BD: getLoto('mnloto_BD_4'),
            LT5BD: getLoto('mnloto_BD_5'),
            LT6BD: getLoto('mnloto_BD_6'),
            LT7BD: getLoto('mnloto_BD_7'),
            LT8BD: getLoto('mnloto_BD_8'),
            LT9BD: getLoto('mnloto_BD_9'),

            LT0VL: getLoto('mnloto_VL_0'),
            LT1VL: getLoto('mnloto_VL_1'),
            LT2VL: getLoto('mnloto_VL_2'),
            LT3VL: getLoto('mnloto_VL_3'),
            LT4VL: getLoto('mnloto_VL_4'),
            LT5VL: getLoto('mnloto_VL_5'),
            LT6VL: getLoto('mnloto_VL_6'),
            LT7VL: getLoto('mnloto_VL_7'),
            LT8VL: getLoto('mnloto_VL_8'),
            LT9VL: getLoto('mnloto_VL_9'),

            LT0TV: getLoto('mnloto_TV_0'),
            LT1TV: getLoto('mnloto_TV_1'),
            LT2TV: getLoto('mnloto_TV_2'),
            LT3TV: getLoto('mnloto_TV_3'),
            LT4TV: getLoto('mnloto_TV_4'),
            LT5TV: getLoto('mnloto_TV_5'),
            LT6TV: getLoto('mnloto_TV_6'),
            LT7TV: getLoto('mnloto_TV_7'),
            LT8TV: getLoto('mnloto_TV_8'),
            LT9TV: getLoto('mnloto_TV_9'),

            //MT
            GDBPY: document.querySelector('#PY_prize_Db_item_0')?.innerText.trim() || '---',
            G1PY: getNumbers('PY_prize_1_item'),
            G2PY: getNumbers('PY_prize_2_item'),
            G3PY: getNumbers('PY_prize_3_item'),
            G4PY: getNumbers('PY_prize_4_item'),
            G5PY: getNumbers('PY_prize_5_item'),
            G6PY: getNumbers('PY_prize_6_item'),
            G7PY: getNumbers('PY_prize_7_item'),
            G8PY: getNumbers('PY_prize_8_item'),

            GDBTTH: document.querySelector('#TTH_prize_Db_item_0')?.innerText.trim() || '---',
            G1TTH: getNumbers('TTH_prize_1_item'),
            G2TTH: getNumbers('TTH_prize_2_item'),
            G3TTH: getNumbers('TTH_prize_3_item'),
            G4TTH: getNumbers('TTH_prize_4_item'),
            G5TTH: getNumbers('TTH_prize_5_item'),
            G6TTH: getNumbers('TTH_prize_6_item'),
            G7TTH: getNumbers('TTH_prize_7_item'),
            G8TTH: getNumbers('TTH_prize_8_item'),

            GDBDLK: document.querySelector('#DLK_prize_Db_item_0')?.innerText.trim() || '---',
            G1DLK: getNumbers('DLK_prize_1_item'),
            G2DLK: getNumbers('DLK_prize_2_item'),
            G3DLK: getNumbers('DLK_prize_3_item'),
            G4DLK: getNumbers('DLK_prize_4_item'),
            G5DLK: getNumbers('DLK_prize_5_item'),
            G6DLK: getNumbers('DLK_prize_6_item'),
            G7DLK: getNumbers('DLK_prize_7_item'),
            G8DLK: getNumbers('DLK_prize_8_item'),

            GDBQNA: document.querySelector('#QNA_prize_Db_item_0')?.innerText.trim() || '---',
            G1QNA: getNumbers('QNA_prize_1_item'),
            G2QNA: getNumbers('QNA_prize_2_item'),
            G3QNA: getNumbers('QNA_prize_3_item'),
            G4QNA: getNumbers('QNA_prize_4_item'),
            G5QNA: getNumbers('QNA_prize_5_item'),
            G6QNA: getNumbers('QNA_prize_6_item'),
            G7QNA: getNumbers('QNA_prize_7_item'),
            G8QNA: getNumbers('QNA_prize_8_item'),

            GDBKT: document.querySelector('#KT_prize_Db_item_0')?.innerText.trim() || '---',
            G1KT: getNumbers('KT_prize_1_item'),
            G2KT: getNumbers('KT_prize_2_item'),
            G3KT: getNumbers('KT_prize_3_item'),
            G4KT: getNumbers('KT_prize_4_item'),
            G5KT: getNumbers('KT_prize_5_item'),
            G6KT: getNumbers('KT_prize_6_item'),
            G7KT: getNumbers('KT_prize_7_item'),
            G8KT: getNumbers('KT_prize_8_item'),

            GDBKH: document.querySelector('#KH_prize_Db_item_0')?.innerText.trim() || '---',
            G1KH: getNumbers('KH_prize_1_item'),
            G2KH: getNumbers('KH_prize_2_item'),
            G3KH: getNumbers('KH_prize_3_item'),
            G4KH: getNumbers('KH_prize_4_item'),
            G5KH: getNumbers('KH_prize_5_item'),
            G6KH: getNumbers('KH_prize_6_item'),
            G7KH: getNumbers('KH_prize_7_item'),
            G8KH: getNumbers('KH_prize_8_item'),

            GDBDNA: document.querySelector('#DNA_prize_Db_item_0')?.innerText.trim() || '---',
            G1DNA: getNumbers('DNA_prize_1_item'),
            G2DNA: getNumbers('DNA_prize_2_item'),
            G3DNA: getNumbers('DNA_prize_3_item'),
            G4DNA: getNumbers('DNA_prize_4_item'),
            G5DNA: getNumbers('DNA_prize_5_item'),
            G6DNA: getNumbers('DNA_prize_6_item'),
            G7DNA: getNumbers('DNA_prize_7_item'),
            G8DNA: getNumbers('DNA_prize_8_item'),

            GDBKH: document.querySelector('#KH_prize_Db_item_0')?.innerText.trim() || '---',
            G1KH: getNumbers('KH_prize_1_item'),
            G2KH: getNumbers('KH_prize_2_item'),
            G3KH: getNumbers('KH_prize_3_item'),
            G4KH: getNumbers('KH_prize_4_item'),
            G5KH: getNumbers('KH_prize_5_item'),
            G6KH: getNumbers('KH_prize_6_item'),
            G7KH: getNumbers('KH_prize_7_item'),
            G8KH: getNumbers('KH_prize_8_item'),

            GDBGL: document.querySelector('#GL_prize_Db_item_0')?.innerText.trim() || '---',
            G1GL: getNumbers('GL_prize_1_item'),
            G2GL: getNumbers('GL_prize_2_item'),
            G3GL: getNumbers('GL_prize_3_item'),
            G4GL: getNumbers('GL_prize_4_item'),
            G5GL: getNumbers('GL_prize_5_item'),
            G6GL: getNumbers('GL_prize_6_item'),
            G7GL: getNumbers('GL_prize_7_item'),
            G8GL: getNumbers('GL_prize_8_item'),

            GDBNT: document.querySelector('#NT_prize_Db_item_0')?.innerText.trim() || '---',
            G1NT: getNumbers('NT_prize_1_item'),
            G2NT: getNumbers('NT_prize_2_item'),
            G3NT: getNumbers('NT_prize_3_item'),
            G4NT: getNumbers('NT_prize_4_item'),
            G5NT: getNumbers('NT_prize_5_item'),
            G6NT: getNumbers('NT_prize_6_item'),
            G7NT: getNumbers('NT_prize_7_item'),
            G8NT: getNumbers('NT_prize_8_item'),

            GDBQB: document.querySelector('#QB_prize_Db_item_0')?.innerText.trim() || '---',
            G1QB: getNumbers('QB_prize_1_item'),
            G2QB: getNumbers('QB_prize_2_item'),
            G3QB: getNumbers('QB_prize_3_item'),
            G4QB: getNumbers('QB_prize_4_item'),
            G5QB: getNumbers('QB_prize_5_item'),
            G6QB: getNumbers('QB_prize_6_item'),
            G7QB: getNumbers('QB_prize_7_item'),
            G8QB: getNumbers('QB_prize_8_item'),

            GDBBDI: document.querySelector('#BDI_prize_Db_item_0')?.innerText.trim() || '---',
            G1BDI: getNumbers('BDI_prize_1_item'),
            G2BDI: getNumbers('BDI_prize_2_item'),
            G3BDI: getNumbers('BDI_prize_3_item'),
            G4BDI: getNumbers('BDI_prize_4_item'),
            G5BDI: getNumbers('BDI_prize_5_item'),
            G6BDI: getNumbers('BDI_prize_6_item'),
            G7BDI: getNumbers('BDI_prize_7_item'),
            G8BDI: getNumbers('BDI_prize_8_item'),

            GDBQT: document.querySelector('#QT_prize_Db_item_0')?.innerText.trim() || '---',
            G1QT: getNumbers('QT_prize_1_item'),
            G2QT: getNumbers('QT_prize_2_item'),
            G3QT: getNumbers('QT_prize_3_item'),
            G4QT: getNumbers('QT_prize_4_item'),
            G5QT: getNumbers('QT_prize_5_item'),
            G6QT: getNumbers('QT_prize_6_item'),
            G7QT: getNumbers('QT_prize_7_item'),
            G8QT: getNumbers('QT_prize_8_item'),

            LT0DNA: getLoto('mtloto_DNA_0'),
            LT1DNA: getLoto('mtloto_DNA_1'),
            LT2DNA: getLoto('mtloto_DNA_2'),
            LT3DNA: getLoto('mtloto_DNA_3'),
            LT4DNA: getLoto('mtloto_DNA_4'),
            LT5DNA: getLoto('mtloto_DNA_5'),
            LT6DNA: getLoto('mtloto_DNA_6'),
            LT7DNA: getLoto('mtloto_DNA_7'),
            LT8DNA: getLoto('mtloto_DNA_8'),
            LT9DNA: getLoto('mtloto_DNA_9'),

            LT0KH: getLoto('mtloto_KH_0'),
            LT1KH: getLoto('mtloto_KH_1'),
            LT2KH: getLoto('mtloto_KH_2'),
            LT3KH: getLoto('mtloto_KH_3'),
            LT4KH: getLoto('mtloto_KH_4'),
            LT5KH: getLoto('mtloto_KH_5'),
            LT6KH: getLoto('mtloto_KH_6'),
            LT7KH: getLoto('mtloto_KH_7'),
            LT8KH: getLoto('mtloto_KH_8'),
            LT9KH: getLoto('mtloto_KH_9'),

            LT0KT: getLoto('mtloto_KT_0'),
            LT1KT: getLoto('mtloto_KT_1'),
            LT2KT: getLoto('mtloto_KT_2'),
            LT3KT: getLoto('mtloto_KT_3'),
            LT4KT: getLoto('mtloto_KT_4'),
            LT5KT: getLoto('mtloto_KT_5'),
            LT6KT: getLoto('mtloto_KT_6'),
            LT7KT: getLoto('mtloto_KT_7'),
            LT8KT: getLoto('mtloto_KT_8'),
            LT9KT: getLoto('mtloto_KT_9'),

            LT0GL: getLoto('mtloto_GL_0'),
            LT1GL: getLoto('mtloto_GL_1'),
            LT2GL: getLoto('mtloto_GL_2'),
            LT3GL: getLoto('mtloto_GL_3'),
            LT4GL: getLoto('mtloto_GL_4'),
            LT5GL: getLoto('mtloto_GL_5'),
            LT6GL: getLoto('mtloto_GL_6'),
            LT7GL: getLoto('mtloto_GL_7'),
            LT8GL: getLoto('mtloto_GL_8'),
            LT9GL: getLoto('mtloto_GL_9'),

            LT0NT: getLoto('mtloto_NT_0'),
            LT1NT: getLoto('mtloto_NT_1'),
            LT2NT: getLoto('mtloto_NT_2'),
            LT3NT: getLoto('mtloto_NT_3'),
            LT4NT: getLoto('mtloto_NT_4'),
            LT5NT: getLoto('mtloto_NT_5'),
            LT6NT: getLoto('mtloto_NT_6'),
            LT7NT: getLoto('mtloto_NT_7'),
            LT8NT: getLoto('mtloto_NT_8'),
            LT9NT: getLoto('mtloto_NT_9'),

            LT0TTH: getLoto('mtloto_TTH_0'),
            LT1TTH: getLoto('mtloto_TTH_1'),
            LT2TTH: getLoto('mtloto_TTH_2'),
            LT3TTH: getLoto('mtloto_TTH_3'),
            LT4TTH: getLoto('mtloto_TTH_4'),
            LT5TTH: getLoto('mtloto_TTH_5'),
            LT6TTH: getLoto('mtloto_TTH_6'),
            LT7TTH: getLoto('mtloto_TTH_7'),
            LT8TTH: getLoto('mtloto_TTH_8'),
            LT9TTH: getLoto('mtloto_TTH_9'),

            LT0DLK: getLoto('mtloto_DLK_0'),
            LT1DLK: getLoto('mtloto_DLK_1'),
            LT2DLK: getLoto('mtloto_DLK_2'),
            LT3DLK: getLoto('mtloto_DLK_3'),
            LT4DLK: getLoto('mtloto_DLK_4'),
            LT5DLK: getLoto('mtloto_DLK_5'),
            LT6DLK: getLoto('mtloto_DLK_6'),
            LT7DLK: getLoto('mtloto_DLK_7'),
            LT8DLK: getLoto('mtloto_DLK_8'),
            LT9DLK: getLoto('mtloto_DLK_9'),

            LT0QNA: getLoto('mtloto_QNA_0'),
            LT1QNA: getLoto('mtloto_QNA_1'),
            LT2QNA: getLoto('mtloto_QNA_2'),
            LT3QNA: getLoto('mtloto_QNA_3'),
            LT4QNA: getLoto('mtloto_QNA_4'),
            LT5QNA: getLoto('mtloto_QNA_5'),
            LT6QNA: getLoto('mtloto_QNA_6'),
            LT7QNA: getLoto('mtloto_QNA_7'),
            LT8QNA: getLoto('mtloto_QNA_8'),
            LT9QNA: getLoto('mtloto_QNA_9'),

            LT0QB: getLoto('mtloto_QB_0'),
            LT1QB: getLoto('mtloto_QB_1'),
            LT2QB: getLoto('mtloto_QB_2'),
            LT3QB: getLoto('mtloto_QB_3'),
            LT4QB: getLoto('mtloto_QB_4'),
            LT5QB: getLoto('mtloto_QB_5'),
            LT6QB: getLoto('mtloto_QB_6'),
            LT7QB: getLoto('mtloto_QB_7'),
            LT8QB: getLoto('mtloto_QB_8'),
            LT9QB: getLoto('mtloto_QB_9'),

            LT0BDI: getLoto('mtloto_BDI_0'),
            LT1BDI: getLoto('mtloto_BDI_1'),
            LT2BDI: getLoto('mtloto_BDI_2'),
            LT3BDI: getLoto('mtloto_BDI_3'),
            LT4BDI: getLoto('mtloto_BDI_4'),
            LT5BDI: getLoto('mtloto_BDI_5'),
            LT6BDI: getLoto('mtloto_BDI_6'),
            LT7BDI: getLoto('mtloto_BDI_7'),
            LT8BDI: getLoto('mtloto_BDI_8'),
            LT9BDI: getLoto('mtloto_BDI_9'),

            LT0QT: getLoto('mtloto_QT_0'),
            LT1QT: getLoto('mtloto_QT_1'),
            LT2QT: getLoto('mtloto_QT_2'),
            LT3QT: getLoto('mtloto_QT_3'),
            LT4QT: getLoto('mtloto_QT_4'),
            LT5QT: getLoto('mtloto_QT_5'),
            LT6QT: getLoto('mtloto_QT_6'),
            LT7QT: getLoto('mtloto_QT_7'),
            LT8QT: getLoto('mtloto_QT_8'),
            LT9QT: getLoto('mtloto_QT_9'),

            //keno
            keno: getClasstd('kn-number'),
            pad_012: getClassspan('pad-012'),
            td_text16: getClasstd('td-text16.clred'),

            //Jack pot
            para_open_next: getClassp('open-next'),
            number_ball: getClass('mega-detail'),
            number_ball2: getClass('power-detail'),
            text_right: getClasstd('text-right'),
            para_text_black_bold: getClassp('text-black-bold'),
            jackpot: getClassspan('result-jackpot'),
            xsmega: getClass('block-main-heading'),
            jackpot_day: getClass('list-link.left100'),

            //max3d
            max3dg1: getClassspan('col-xs-6.special-prize-lg.div-horizontal'),
            max3dg24: getClassspan('col-xs-3.number-black-bold.div-horizontal'),
            max3dg3: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
            titlemax3d: getClass('titlemax3d'),

            //xsdt
            xsdt_day: getClass('list-link'),
            xsdt_ball: getClass('dientoan-detail'),
            xsdt_number: getClassli('no-border'),

            tenTinhMTMN: getClassth('text-center'),
        };
    });

    const crawlTKLoGanDauResult = await crawlTKLoGanDau(page_crawlTKLoGanDau);
    const loGanResult = await crawlLoGan(page);
    const loGanCVResult = await crawlLoGanCV(page1);
    const crawlTKLoGanDuoiResult = await crawlTKLoGanDuoi(page_crawlTKLoGanDuoi);
    const crawlTKGDBResult = await crawlTKGDB(page_crawlTKGDB);
    const crawlTKLXHResult = await crawlTKLXH(page_crawlTKLXH);
    const crawlTKLXH1Result = await crawlTKLXH1(page_crawlTKLXH1);
    const crawlTKKCBResult = await crawlTKKCB(page_crawlTKKCB);
    const crawlTKKBSResult = await crawlTKKBS(page_crawlTKKBS);
    const crawlTKkdenccResult = await crawlTKkdencc(page_crawlTKkdencc);
    const crawlAnGiangResult = await crawlAnGiang(page_crawlAnGiang);
    const crawl_XSMB_30ngayResult = await crawl_XSMB_30ngay(page_crawl_XSMB_30ngay);
    // const crawl_XSMN_30ngayResult = await crawl_XSMN_30ngay(page_crawl_XSMN_30ngay);
    // const crawl_XSMN_90ngayResult = await crawl_XSMN_90ngay(page_crawl_XSMN_90ngay);
    const crawl_XSMB_90ngayResult = await crawl_XSMB_90ngay(page_crawl_XSMB_90ngay);
    const crawlCaMauResult = await crawlCaMau(page_crawlCaMau);
    const crawlDongThapResult = await crawlDongThap(page_crawlDongThap);
    const crawlHauGiangResult = await crawlHauGiang(page_crawlHauGiang);
    const crawlKienGiangResult = await crawlKienGiang(page_crawlKienGiang);
    const crawlLongAnResult = await crawlLongAn(page_crawlLongAn);
    const crawlKonTumResult = await crawlKonTum(page_crawlKonTum);
    const crawlNinhThuanResult = await crawlNinhThuan(page_crawlNinhThuan);
    const crawlPhuYenResult = await crawlPhuYen(page_crawlPhuYen);
    const crawlQuangBinhResult = await crawlQuangBinh(page_crawlQuangBinh);
    const crawlQuangNgaiResult = await crawlQuangNgai(page_crawlQuangNgai);
    const crawlDakLakResult = await crawlDakLak(page_crawlDakLak);
    const crawlDacNongResult = await crawlDacNong(page_crawlDacNong);
    const crawlGiaLaiResult = await crawlGiaLai(page_crawlGiaLai);
    const crawlHueResult = await crawlHue(page_crawlHue);
    const crawlBacLieuResult = await crawlBacLieu(page_crawlBacLieu);
    const crawlBinhDuongResult = await crawlBinhDuong(page_crawlBinhDuong);
    const crawlBenTreResult = await crawlBenTre(page_crawlBenTre);
    const crawlBinhPhuocResult = await crawlBinhPhuoc(page_crawlBinhPhuoc);
    const crawlTayNinhResult = await crawlTayNinh(page_crawlTayNinh);
    const crawlKhanhHoaResult = await crawlKhanhHoa(page_crawlKhanhHoa);
    const crawlDaNangResult = await crawlDaNang(page_crawlDaNang);
    const crawlDongNaiResult = await crawlDongNai(page_crawlDongNai);
    const crawlSocTrangResult = await crawlSocTrang(page_crawlSocTrang);
    const crawlCanThoResult = await crawlCanTho(page_crawlCanTho);
    const crawlTienGiangResult = await crawlTienGiang(page_crawlTienGiang);
    const crawlHCMResult = await crawlHCM(page_crawlHCM);
    const crawlTraVinhResult = await crawlTraVinh(page_crawlTraVinh);
    const crawlVinhLongResult = await crawlVinhLong(page_crawlVinhLong);
    const crawlVungTauResult = await crawlVungTau(page_crawlVungTau);
    const crawlBinhThuanResult = await crawlBinhThuan(page_crawlBinhThuan);
    const crawlQuangTriResult = await crawlQuangTri(page_crawlQuangTri);
    const crawlQuangNamResult = await crawlQuangNam(page_crawlQuangNam);
    const crawlBinhDinhResult = await crawlBinhDinh(page_crawlBinhDinh);
    const crawlDienToan123Result = await crawlDienToan123(page_crawlDienToan123);
    const crawlDienToan636Result = await crawlDienToan636(page_crawlDienToan636);
    const crawlTKTheoThuResult = await crawlTKTheoThu(page_crawlTKTheoThu);
    const crawlLotoKepResult = await crawlLotoKep(page_crawlLotoKep);
    const crawl_KenoResult = await crawl_Keno(page_crawl_Keno);
    const crawl_MegaResult = await crawl_Mega(page_crawl_Mega);
    const crawl_Mega_thu4Result = await crawl_Mega_thu4(page_crawl_Mega_thu4);
    const crawl_Mega_cnResult = await crawl_Mega_cn(page_crawl_Mega_cn);
    const crawl_Mega_thu6Result = await crawl_Mega_thu6(page_crawl_Mega_thu6);
    const crawl_PowerResult = await crawl_Power(page_crawl_Power);
    const crawl_Power_thu3Result = await crawl_Power_thu3(page_crawl_Power_thu3);
    const crawl_Power_thu5Result = await crawl_Power_thu5(page_crawl_Power_thu5);
    const crawl_Power_thu7Result = await crawl_Power_thu7(page_crawl_Power_thu7);
    const crawl_Max3DResult = await crawl_Max3D(page_crawl_Max3D);
    const crawl_Max3D_thu2Result = await crawl_Max3D_thu2(page_crawl_Max3D_thu2);
    const crawl_Max3D_thu4Result = await crawl_Max3D_thu4(page_crawl_Max3D_thu4);
    const crawl_Max3D_thu6Result = await crawl_Max3D_thu6(page_crawl_Max3D_thu6);
    const crawl_Max3DProResult = await crawl_Max3DPro(page_crawl_Max3DPro);
    const crawl_Max3DPro_thu3Result = await crawl_Max3DPro_thu3(page_crawl_Max3DPro_thu3);
    const crawl_Max3DPro_thu5Result = await crawl_Max3DPro_thu5(page_crawl_Max3DPro_thu5);
    const crawl_Max3DPro_thu7Result = await crawl_Max3DPro_thu7(page_crawl_Max3DPro_thu7);
    const crawl_ThanTaiResult = await crawl_ThanTai(page_crawl_ThanTai);

    await browser.close();
    const finalData = {
        ...data,
        ...loGanResult,
        ...loGanCVResult,
        ...crawlTKLoGanDauResult,
        ...crawlTKLoGanDuoiResult,
        ...crawlTKGDBResult,
        ...crawlTKLXHResult,
        ...crawlTKLXH1Result,
        ...crawlTKKCBResult,
        ...crawlTKKBSResult,
        ...crawlTKkdenccResult,
        ...crawlAnGiangResult,
        ...crawl_XSMB_30ngayResult,
        // ...crawl_XSMN_30ngayResult,
        // ...crawl_XSMN_90ngayResult,
        ...crawl_XSMB_90ngayResult,
        ...crawlCaMauResult,
        ...crawlDongThapResult,
        ...crawlHauGiangResult,
        ...crawlKienGiangResult,
        ...crawlLongAnResult,
        ...crawlKonTumResult,
        ...crawlNinhThuanResult,
        ...crawlPhuYenResult,
        ...crawlQuangBinhResult,
        ...crawlQuangNgaiResult,
        ...crawlDakLakResult,
        ...crawlDacNongResult,
        ...crawlGiaLaiResult,
        ...crawlHueResult,
        ...crawlBacLieuResult,
        ...crawlBenTreResult,
        ...crawlBinhDuongResult,
        ...crawlBinhPhuocResult,
        ...crawlTayNinhResult,
        ...crawlKhanhHoaResult,
        ...crawlDaNangResult,
        ...crawlDongNaiResult,
        ...crawlSocTrangResult,
        ...crawlCanThoResult,
        ...crawlTienGiangResult,
        ...crawlHCMResult,
        ...crawlTraVinhResult,
        ...crawlVinhLongResult,
        ...crawlVungTauResult,
        ...crawlBinhThuanResult,
        ...crawlQuangTriResult,
        ...crawlQuangNamResult,
        ...crawlBinhDinhResult,
        ...crawlDienToan123Result,
        ...crawlDienToan636Result,
        ...crawlTKTheoThuResult,
        ...crawlLotoKepResult,
        ...crawl_KenoResult,
        ...crawl_MegaResult,
        ...crawl_Mega_thu4Result,
        ...crawl_Mega_cnResult,
        ...crawl_Mega_thu6Result,
        ...crawl_PowerResult,
        ...crawl_Power_thu3Result,
        ...crawl_Power_thu5Result,
        ...crawl_Power_thu7Result,
        ...crawl_Max3DResult,
        ...crawl_Max3D_thu2Result,
        ...crawl_Max3D_thu4Result,
        ...crawl_Max3D_thu6Result,
        ...crawl_Max3DProResult,
        ...crawl_Max3DPro_thu3Result,
        ...crawl_Max3DPro_thu5Result,
        ...crawl_Max3DPro_thu7Result,
        ...crawl_ThanTaiResult,
    };

    const dir = path.join(__dirname, '..', 'data', 'infos');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(path.join(dir, 'infos.json'), JSON.stringify(finalData, null, 2));

    console.log(`Đã cào xong kết quả ngày ${finalData.date}`);
    return finalData;
}

module.exports = {
    crawl,
    crawlLoGan,
    crawlTKGDB,
    crawlLoGanCV,
    crawlTKLoGanDau,
    crawlTKLoGanDuoi,
    crawlTKLXH,
    crawlTKLXH1,
    crawlTKKCB,
    crawlTKKBS,
    crawlTKkdencc,
    crawlAnGiang,
    crawl_XSMB_30ngay,
    // crawl_XSMN_30ngay,
    // crawl_XSMN_90ngay,
    crawl_XSMB_90ngay,
    crawlCaMau,
    crawlDongNai,
    crawlDongThap,
    crawlHauGiang,
    crawlKienGiang,
    crawlLongAn,
    crawlKonTum,
    crawlTienGiang,
    crawlHCM,
    crawlTraVinh,
    crawlVinhLong,
    crawlVungTau,
    crawlNinhThuan,
    crawlPhuYen,
    crawlQuangBinh,
    crawlQuangNgai,
    crawlDakLak,
    crawlDacNong,
    crawlGiaLai,
    crawlHue,
    crawlBacLieu,
    crawlBinhDuong,
    crawlBinhPhuoc,
    crawlBenTre,
    crawlTayNinh,
    crawlKhanhHoa,
    crawlDaNang,
    crawlSocTrang,
    crawlCanTho,
    crawlBinhThuan,
    crawlQuangTri,
    crawlQuangNam,
    crawlBinhDinh,
    crawlDienToan123,
    crawlDienToan636,
    crawlTKTheoThu,
    crawlLotoKep,
    crawl_Keno,
    crawl_Mega,
    crawl_Mega_thu4,
    crawl_Mega_cn,
    crawl_Mega_thu6,
    crawl_Power,
    crawl_Power_thu3,
    crawl_Power_thu5,
    crawl_Power_thu7,
    crawl_Max3D,
    crawl_Max3D_thu2,
    crawl_Max3D_thu4,
    crawl_Max3D_thu6,
    crawl_Max3DPro,
    crawl_Max3DPro_thu3,
    crawl_Max3DPro_thu5,
    crawl_Max3DPro_thu7,
    crawl_ThanTai,
};
