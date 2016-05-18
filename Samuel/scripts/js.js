function addToCart(id) {
    var orderQuantity = document.getElementById(id).getElementsByTagName("input")[0].value;
    var produktPrice = document.getElementById(id).getElementsByTagName("h3")[0].innerHTML;
    var produktName = document.getElementById(id).getElementsByTagName("legend")[0].innerHTML;
    var totalPrice = parseInt(produktPrice) * orderQuantity;
    
    var outputLine = orderQuantity + 'st ' + produktName + ' a´' + produktPrice + ' Total: ' + totalPrice;

    sessionStorage.setItem(id, orderQuantity + ', ' + produktName + ', ' + produktPrice + ', ' + totalPrice);

    return window.alert(orderQuantity + 'st ' + produktName + ' lagda i varukorgen');
}

function kassan() {

    var kassa = document.getElementById("kundvagn").getElementsByTagName("table")[0];
    var totalAntal = 0;
    var totalPris = 0;

    for (var i = 0, len = sessionStorage.length; i < len; ++i) {

        var produktArray = sessionStorage.getItem(sessionStorage.key(i)).split(",");

        totalAntal += parseInt(produktArray[0]);
        totalPris += parseInt(produktArray[3]);

        var node = document.createElement("tr");
        node.innerHTML = '<td>' + produktArray[0] + '</td><td>' + produktArray[1] + '</td><td>' + parseInt(produktArray[2]) + '</td><td>' + produktArray[3] + '</td>';

        kassa.appendChild(node)   
    }

    var head = document.createElement("tr");
    head.innerHTML = '<th><p>----</p></th><th></th><th></th><th><p>----</p></th>';
    kassa.appendChild(head);

    var foot = document.createElement("tr");
    foot.innerHTML = '<td>' + totalAntal + '</td><td></td><td></td><td>' + totalPris + '</td><td>';
    kassa.appendChild(foot);

}

function removeFromCart() {
    
    for (var i = 0, len = 100; i < len; i++) {

        sessionStorage.removeItem(i);

    }

    location.reload();

}

function kvitto() {
    kassan();
    var url = window.location.href.split("?");
    var param = url[1].split("&");

    var pair = [];
    for (var i = 0, len = param.length; i < len; ++i) {
        var parameter = param[i].split("=");

        pair.push(parameter[1]);
    }


    var doc = document.getElementById("levadress");
    doc.getElementsByTagName('p')[0].innerHTML = pair[3];
    doc.getElementsByTagName('p')[1].innerHTML = pair[4];
    doc.getElementsByTagName('p')[2].innerHTML = pair[5];
    doc.getElementsByTagName('p')[3].innerHTML = pair[6];
    doc.getElementsByTagName('p')[4].innerHTML = pair[7];

    var doc2 = document.getElementById("faktadress");
    doc2.getElementsByTagName('p')[5].innerHTML = pair[8];
    doc2.getElementsByTagName('p')[6].innerHTML = pair[9];
    doc2.getElementsByTagName('p')[7].innerHTML = pair[10];
    doc2.getElementsByTagName('p')[8].innerHTML = pair[11];
    doc2.getElementsByTagName('p')[9].innerHTML = pair[12];
    doc2.getElementsByTagName('p')[10].innerHTML = pair[13];

    removeFromCart();


}
