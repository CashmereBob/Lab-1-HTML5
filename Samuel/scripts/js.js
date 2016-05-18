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
    foot.innerHTML = '<td>' + totalAntal + '</td><td></td><td></td><td>' + totalPris + '</td>';
    kassa.appendChild(foot);

}

