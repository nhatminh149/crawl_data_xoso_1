const Handlebars = require('handlebars');

Handlebars.registerHelper('get', function (array, index) {
    return array[index];
});

// bảng lô gan 
Handlebars.registerHelper('lotoGanBlock', function(startNum, dataStartIndex, options) {
    const result = options.data.root.result || this.result || {};
    const loto = result.loto || [];

    let html = '';

    html += '<tr class="bg-gradient-to-r from-indigo-50 to-blue-50 border-b-2 border-indigo-300">';
    html += '<td class="text-center bg-[#E8E8E8] sticky left-0 z-10 shadow-lg" style="color:#AA0000">Loto</td>';
    for (let i = 0; i < 20; i++) {
        const num = String(startNum + i).padStart(2, '0');
        html += `<td class=" text-center bg-[#E8E8E8]" style="color:#AA0000">${num}</td>`;
    }
    html += '</tr>';

    html += '<tr class="bg-white">';
    html += '<td class="h-3xl text-center bg-white sticky left-0 z-10 ">Ngày</td>';
    for (let i = 0; i < 20; i++) {
        const value = loto[dataStartIndex + i] || 0;
        let cellClass = ' text-center text-lg ';
        
        if (value >= 35)      cellClass += 'text-back animate-pulse';
        else if (value >= 30) cellClass += 'text-back';
        else if (value >= 25) cellClass += 'text-back';
        else if (value >= 20) cellClass += 'text-back';
        else if (value >= 15) cellClass += 'text-black';
        else if (value >= 10) cellClass += 'text-black';
        else                  cellClass += 'text-gray-600';

        html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
    }
    html += '</tr>';

    return new Handlebars.SafeString(html);
});


// bảng lô gan 
Handlebars.registerHelper('lotodau', function(startNum, dataStartIndex, options) {
    const result = options.data.root.result || this.result || {};
    const tklogandauso = result.tklogandauso || [];
    let html = '';
    for (let i = 0; i <= 10; i++) {
        const value = tklogandauso[dataStartIndex + i] || 0;
        let cellClass = ' text-center';
        
        if (value >= 35)      cellClass += 'text-back text-center';
        else if (value >= 30) cellClass += 'text-back text-center';
        else if (value >= 25) cellClass += 'text-back text-center';
        else if (value >= 20) cellClass += 'text-back text-center';
        else if (value >= 15) cellClass += 'text-black text-center';
        else if (value >= 10) cellClass += 'text-black text-center';
        else                  cellClass += 'text-black text-center';

        html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
    }
    html += '</tr>';

    return new Handlebars.SafeString(html);
});

// bảng lô gan 
Handlebars.registerHelper('lotoduoi', function(startNum, dataStartIndex, options) {
    const result = options.data.root.result || this.result || {};
    const tkloganduoiso = result.tkloganduoiso || [];
    let html = '';
    for (let i = 0; i <= 10; i++) {
        const value = tkloganduoiso[dataStartIndex + i] || 0;
        let cellClass = ' text-center';
        
        if (value >= 35)      cellClass += 'text-back text-center';
        else if (value >= 30) cellClass += 'text-back text-center';
        else if (value >= 25) cellClass += 'text-back text-center';
        else if (value >= 20) cellClass += 'text-back text-center';
        else if (value >= 15) cellClass += 'text-black text-center';
        else if (value >= 10) cellClass += 'text-black text-center';
        else                  cellClass += 'text-black text-center';

        html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
    }
    html += '</tr>';

    return new Handlebars.SafeString(html);
});

// bảng tkgdb
Handlebars.registerHelper('tkgdb', function(startNum, dataStartIndex, options) {
    const result = options.data.root.result || this.result || {};
    const TKGDBTH = result.TKGDBTH || [];
    let html = '';
    for (let i = 0; i < 7 ; i++) {
        const value = TKGDBTH[dataStartIndex + i] || 0;
        let cellClass = 'text-center';
        
        if (value >= 35)      cellClass += 'text-back text-center';
        else if (value >= 30) cellClass += 'text-back text-center';
        else if (value >= 25) cellClass += 'text-back text-center';
        else if (value >= 20) cellClass += 'text-back text-center';
        else if (value >= 15) cellClass += 'text-black text-center';
        else if (value >= 10) cellClass += 'text-black text-center';
        else                  cellClass += 'text-black text-center';

        html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
    }
    html += '</tr>';

    return new Handlebars.SafeString(html);
});





