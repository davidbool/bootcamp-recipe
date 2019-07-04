const button = $(`#search`)

const addevents = function(){
    $('img').on('click', function() {
let ingredients = $(this).closest("span").find("ul").first("li").html().split("<")
let ingredient = ingredients[1].slice(3,ingredients[1].length - 1)
console.log(ingredient)
    })
}

button.on('click', function () {
    const input = $('#input').val()
    $.ajax({
        type: "GET",
        url: `sanity/${input}`,
        success: function (response) {
            render(response)
            addevents()
        }
    });
})



