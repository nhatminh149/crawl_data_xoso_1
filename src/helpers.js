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
    html += '<td class="px-4 py-3 text-center font-bold bg-indigo-200 sticky left-0 z-10 shadow-lg">Loto</td>';
    for (let i = 0; i < 20; i++) {
        const num = String(startNum + i).padStart(2, '0');
        html += `<td class="px-3 py-2 text-center font-bold text-gray-800">${num}</td>`;
    }
    html += '</tr>';

    html += '<tr class="bg-white">';
    html += '<td class="px-4 py-3 text-center font-bold bg-indigo-200 sticky left-0 z-10 shadow-lg">Ngày</td>';
    for (let i = 0; i < 20; i++) {
        const value = loto[dataStartIndex + i] || 0;
        let cellClass = 'px-3 py-2 text-center font-bold text-lg ';
        
        if (value >= 35)      cellClass += 'bg-red-700 text-white animate-pulse';
        else if (value >= 30) cellClass += 'bg-red-600 text-white';
        else if (value >= 25) cellClass += 'bg-red-500 text-white';
        else if (value >= 20) cellClass += 'bg-orange-600 text-white';
        else if (value >= 15) cellClass += 'bg-orange-400 text-black';
        else if (value >= 10) cellClass += 'bg-yellow-400 text-black';
        else                  cellClass += 'text-gray-600';

        html += `<td class="${cellClass}">${value === 0 ? '-' : value}</td>`;
    }
    html += '</tr>';

    return new Handlebars.SafeString(html);
});