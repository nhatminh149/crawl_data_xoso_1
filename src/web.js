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

async function crawlLoGanCV(page1) {
    console.log('Đang cào dữ liệu Lô Gan...');
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
            };
        });
        console.log('Cào dữ liệu Lô Gan ngày cùng về thành công.');
        return result;
    } catch (error) {
        console.error('Lỗi khi cào dữ liệu Lô Gan:', error.message);
    }
}

async function crawl() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const page1 = await browser.newPage();

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
            return Array.from(
                document.querySelectorAll(`span[id^="${prefix}"]`),
            )
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

        const getClassp = (cl) => {
            return Array.from(document.querySelectorAll(`p.${cl}`))
                .map((el) => el.innerText.trim())
                .filter(Boolean);
        };

        return {
            MDBMB: getNumbers('mb_prizeCode_item'),
            date,
            GDBMB:
                document
                    .querySelector('#mb_prize_DB_item_0')
                    ?.innerText.trim() || '---',
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
            GDBVL:
                document
                    .querySelector('#VL_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1VL: getNumbers('VL_prize_1_item'),
            G2VL: getNumbers('VL_prize_2_item'),
            G3VL: getNumbers('VL_prize_3_item'),
            G4VL: getNumbers('VL_prize_4_item'),
            G5VL: getNumbers('VL_prize_5_item'),
            G6VL: getNumbers('VL_prize_6_item'),
            G7VL: getNumbers('VL_prize_7_item'),
            G8VL: getNumbers('VL_prize_8_item'),

            GDBHCM:
                document
                    .querySelector('#HCM_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1HCM: getNumbers('HCM_prize_1_item'),
            G2HCM: getNumbers('HCM_prize_2_item'),
            G3HCM: getNumbers('HCM_prize_3_item'),
            G4HCM: getNumbers('HCM_prize_4_item'),
            G5HCM: getNumbers('HCM_prize_5_item'),
            G6HCM: getNumbers('HCM_prize_6_item'),
            G7HCM: getNumbers('HCM_prize_7_item'),
            G8HCM: getNumbers('HCM_prize_8_item'),

            GDBDT:
                document
                    .querySelector('#DT_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1DT: getNumbers('DT_prize_1_item'),
            G2DT: getNumbers('DT_prize_2_item'),
            G3DT: getNumbers('DT_prize_3_item'),
            G4DT: getNumbers('DT_prize_4_item'),
            G5DT: getNumbers('DT_prize_5_item'),
            G6DT: getNumbers('DT_prize_6_item'),
            G7DT: getNumbers('DT_prize_7_item'),
            G8DT: getNumbers('DT_prize_8_item'),

            GDBCM:
                document
                    .querySelector('#CM_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1CM: getNumbers('CM_prize_1_item'),
            G2CM: getNumbers('CM_prize_2_item'),
            G3CM: getNumbers('CM_prize_3_item'),
            G4CM: getNumbers('CM_prize_4_item'),
            G5CM: getNumbers('CM_prize_5_item'),
            G6CM: getNumbers('CM_prize_6_item'),
            G7CM: getNumbers('CM_prize_7_item'),
            G8CM: getNumbers('CM_prize_8_item'),

            GDBBD:
                document
                    .querySelector('#BD_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1BD: getNumbers('BD_prize_1_item'),
            G2BD: getNumbers('BD_prize_2_item'),
            G3BD: getNumbers('BD_prize_3_item'),
            G4BD: getNumbers('BD_prize_4_item'),
            G5BD: getNumbers('BD_prize_5_item'),
            G6BD: getNumbers('BD_prize_6_item'),
            G7BD: getNumbers('BD_prize_7_item'),
            G8BD: getNumbers('BD_prize_8_item'),

            GDBTV:
                document
                    .querySelector('#TV_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1TV: getNumbers('TV_prize_1_item'),
            G2TV: getNumbers('TV_prize_2_item'),
            G3TV: getNumbers('TV_prize_3_item'),
            G4TV: getNumbers('TV_prize_4_item'),
            G5TV: getNumbers('TV_prize_5_item'),
            G6TV: getNumbers('TV_prize_6_item'),
            G7TV: getNumbers('TV_prize_7_item'),
            G8TV: getNumbers('TV_prize_8_item'),

            GDBDN:
                document
                    .querySelector('#DN_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1DN: getNumbers('DN_prize_1_item'),
            G2DN: getNumbers('DN_prize_2_item'),
            G3DN: getNumbers('DN_prize_3_item'),
            G4DN: getNumbers('DN_prize_4_item'),
            G5DN: getNumbers('DN_prize_5_item'),
            G6DN: getNumbers('DN_prize_6_item'),
            G7DN: getNumbers('DN_prize_7_item'),
            G8DN: getNumbers('DN_prize_8_item'),

            GDBCT:
                document
                    .querySelector('#CT_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1CT: getNumbers('CT_prize_1_item'),
            G2CT: getNumbers('CT_prize_2_item'),
            G3CT: getNumbers('CT_prize_3_item'),
            G4CT: getNumbers('CT_prize_4_item'),
            G5CT: getNumbers('CT_prize_5_item'),
            G6CT: getNumbers('CT_prize_6_item'),
            G7CT: getNumbers('CT_prize_7_item'),
            G8CT: getNumbers('CT_prize_8_item'),

            GDBST:
                document
                    .querySelector('#ST_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1ST: getNumbers('ST_prize_1_item'),
            G2ST: getNumbers('ST_prize_2_item'),
            G3ST: getNumbers('ST_prize_3_item'),
            G4ST: getNumbers('ST_prize_4_item'),
            G5ST: getNumbers('ST_prize_5_item'),
            G6ST: getNumbers('ST_prize_6_item'),
            G7ST: getNumbers('ST_prize_7_item'),
            G8ST: getNumbers('ST_prize_8_item'),

            GDBTN:
                document
                    .querySelector('#TN_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1TN: getNumbers('TN_prize_1_item'),
            G2TN: getNumbers('TN_prize_2_item'),
            G3TN: getNumbers('TN_prize_3_item'),
            G4TN: getNumbers('TN_prize_4_item'),
            G5TN: getNumbers('TN_prize_5_item'),
            G6TN: getNumbers('TN_prize_6_item'),
            G7TN: getNumbers('TN_prize_7_item'),
            G8TN: getNumbers('TN_prize_8_item'),

            GDBAG:
                document
                    .querySelector('#AG_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1AG: getNumbers('AG_prize_1_item'),
            G2AG: getNumbers('AG_prize_2_item'),
            G3AG: getNumbers('AG_prize_3_item'),
            G4AG: getNumbers('AG_prize_4_item'),
            G5AG: getNumbers('AG_prize_5_item'),
            G6AG: getNumbers('AG_prize_6_item'),
            G7AG: getNumbers('AG_prize_7_item'),
            G8AG: getNumbers('AG_prize_8_item'),

            GDBBTH:
                document
                    .querySelector('#BTH_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1BTH: getNumbers('BTH_prize_1_item'),
            G2BTH: getNumbers('BTH_prize_2_item'),
            G3BTH: getNumbers('BTH_prize_3_item'),
            G4BTH: getNumbers('BTH_prize_4_item'),
            G5BTH: getNumbers('BTH_prize_5_item'),
            G6BTH: getNumbers('BTH_prize_6_item'),
            G7BTH: getNumbers('BTH_prize_7_item'),
            G8BTH: getNumbers('BTH_prize_8_item'),

            //Lô tô miền nam
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

            //MT
            GDBPY:
                document
                    .querySelector('#PY_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1PY: getNumbers('PY_prize_1_item'),
            G2PY: getNumbers('PY_prize_2_item'),
            G3PY: getNumbers('PY_prize_3_item'),
            G4PY: getNumbers('PY_prize_4_item'),
            G5PY: getNumbers('PY_prize_5_item'),
            G6PY: getNumbers('PY_prize_6_item'),
            G7PY: getNumbers('PY_prize_7_item'),
            G8PY: getNumbers('PY_prize_8_item'),

            GDBTTH:
                document
                    .querySelector('#TTH_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1TTH: getNumbers('TTH_prize_1_item'),
            G2TTH: getNumbers('TTH_prize_2_item'),
            G3TTH: getNumbers('TTH_prize_3_item'),
            G4TTH: getNumbers('TTH_prize_4_item'),
            G5TTH: getNumbers('TTH_prize_5_item'),
            G6TTH: getNumbers('TTH_prize_6_item'),
            G7TTH: getNumbers('TTH_prize_7_item'),
            G8TTH: getNumbers('TTH_prize_8_item'),

            GDBKT:
                document
                    .querySelector('#KT_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1KT: getNumbers('KT_prize_1_item'),
            G2KT: getNumbers('KT_prize_2_item'),
            G3KT: getNumbers('KT_prize_3_item'),
            G4KT: getNumbers('KT_prize_4_item'),
            G5KT: getNumbers('KT_prize_5_item'),
            G6KT: getNumbers('KT_prize_6_item'),
            G7KT: getNumbers('KT_prize_7_item'),
            G8KT: getNumbers('KT_prize_8_item'),

            GDBKH:
                document
                    .querySelector('#KH_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1KH: getNumbers('KH_prize_1_item'),
            G2KH: getNumbers('KH_prize_2_item'),
            G3KH: getNumbers('KH_prize_3_item'),
            G4KH: getNumbers('KH_prize_4_item'),
            G5KH: getNumbers('KH_prize_5_item'),
            G6KH: getNumbers('KH_prize_6_item'),
            G7KH: getNumbers('KH_prize_7_item'),
            G8KH: getNumbers('KH_prize_8_item'),

            GDBDNA:
                document
                    .querySelector('#DNA_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1DNA: getNumbers('DNA_prize_1_item'),
            G2DNA: getNumbers('DNA_prize_2_item'),
            G3DNA: getNumbers('DNA_prize_3_item'),
            G4DNA: getNumbers('DNA_prize_4_item'),
            G5DNA: getNumbers('DNA_prize_5_item'),
            G6DNA: getNumbers('DNA_prize_6_item'),
            G7DNA: getNumbers('DNA_prize_7_item'),
            G8DNA: getNumbers('DNA_prize_8_item'),

            GDBKH:
                document
                    .querySelector('#KH_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1KH: getNumbers('KH_prize_1_item'),
            G2KH: getNumbers('KH_prize_2_item'),
            G3KH: getNumbers('KH_prize_3_item'),
            G4KH: getNumbers('KH_prize_4_item'),
            G5KH: getNumbers('KH_prize_5_item'),
            G6KH: getNumbers('KH_prize_6_item'),
            G7KH: getNumbers('KH_prize_7_item'),
            G8KH: getNumbers('KH_prize_8_item'),

            GDBGL:
                document
                    .querySelector('#GL_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1GL: getNumbers('GL_prize_1_item'),
            G2GL: getNumbers('GL_prize_2_item'),
            G3GL: getNumbers('GL_prize_3_item'),
            G4GL: getNumbers('GL_prize_4_item'),
            G5GL: getNumbers('GL_prize_5_item'),
            G6GL: getNumbers('GL_prize_6_item'),
            G7GL: getNumbers('GL_prize_7_item'),
            G8GL: getNumbers('GL_prize_8_item'),

            GDBNT:
                document
                    .querySelector('#NT_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1NT: getNumbers('NT_prize_1_item'),
            G2NT: getNumbers('NT_prize_2_item'),
            G3NT: getNumbers('NT_prize_3_item'),
            G4NT: getNumbers('NT_prize_4_item'),
            G5NT: getNumbers('NT_prize_5_item'),
            G6NT: getNumbers('NT_prize_6_item'),
            G7NT: getNumbers('NT_prize_7_item'),
            G8NT: getNumbers('NT_prize_8_item'),

            GDBQB:
                document
                    .querySelector('#QB_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1QB: getNumbers('QB_prize_1_item'),
            G2QB: getNumbers('QB_prize_2_item'),
            G3QB: getNumbers('QB_prize_3_item'),
            G4QB: getNumbers('QB_prize_4_item'),
            G5QB: getNumbers('QB_prize_5_item'),
            G6QB: getNumbers('QB_prize_6_item'),
            G7QB: getNumbers('QB_prize_7_item'),
            G8QB: getNumbers('QB_prize_8_item'),

            GDBBDI:
                document
                    .querySelector('#BDI_prize_Db_item_0')
                    ?.innerText.trim() || '---',
            G1BDI: getNumbers('BDI_prize_1_item'),
            G2BDI: getNumbers('BDI_prize_2_item'),
            G3BDI: getNumbers('BDI_prize_3_item'),
            G4BDI: getNumbers('BDI_prize_4_item'),
            G5BDI: getNumbers('BDI_prize_5_item'),
            G6BDI: getNumbers('BDI_prize_6_item'),
            G7BDI: getNumbers('BDI_prize_7_item'),
            G8BDI: getNumbers('BDI_prize_8_item'),

            GDBQT:
                document
                    .querySelector('#QT_prize_Db_item_0')
                    ?.innerText.trim() || '---',
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
            LT9KT: getLoto('mtloto_KH_9'),

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
            text_right: getClasstd('text-right'),
            para_text_black_bold: getClassp('text-black-bold'),
            jackpot: getClassspan('result-jackpot'),
            xsmega: getClass('block-main-heading'),

            //max3d
            max3dg1: getClassspan('col-xs-6.special-prize-lg.div-horizontal'),
            max3dg24: getClassspan('col-xs-3.number-black-bold.div-horizontal'),
            max3dg3: getClassspan('col-xs-4.number-black-bold.div-horizontal'),
            titlemax3d: getClass('titlemax3d'),
        };
    });

    const loGanResult = await crawlLoGan(page);
    const loGanCVResult = await crawlLoGanCV(page1);

    await browser.close();
    const finalData = { ...data, ...loGanResult, ...loGanCVResult };

    const dir = path.join(__dirname, '..', 'data', 'infos');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(
        path.join(dir, 'infos.json'),
        JSON.stringify(finalData, null, 2),
    );

    console.log(`Đã cào xong kết quả ngày ${finalData.date}`);
    return finalData;
}

module.exports = { crawl, crawlLoGan, crawlLoGanCV };
