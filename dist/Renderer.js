
const render = function (recipes) {
    const source = $('#template').html()
    const template = Handlebars.compile(source)
    const container = $(`#container`)
    container.empty()
    const newHtml = template({recipe: recipes})
    container.append(newHtml)
}