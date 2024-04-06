(function(){

    const woodStock  = $('#premium_exchange_stock_wood').text()
    const stoneStock = $('#premium_exchange_stock_stone').text()
    const ironStock  = $('#premium_exchange_stock_iron').text()

    const woodFull  = $('#premium_exchange_capacity_wood').text()
    const stoneFull = $('#premium_exchange_capacity_stone').text()
    const ironFull  = $('#premium_exchange_capacity_iron').text()

    const html = `
        <tr>
            <td class="strong">Disponível</td>
            <td class="center">${woodFull - woodStock}</td>
            <td class="center">${stoneFull - stoneStock}</td>
            <td class="center">${ironFull - ironStock}</td>
        </tr>
    `;

    $('table.premium-exchange tbody').append(html)

})()
