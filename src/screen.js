const CONTENT_ID = "content"

class Screen {
  static getHtml(item) {
    return `
    <div class="col-md-3">
      <div class="card" style="width: 18rem;">
        <img src="${item.img}" name="${item.name}" class="card-img-top" alt="...">
      </div>
    </div>
    `
  }

  static changeHtml(html) {
    const content = document.getElementById(CONTENT_ID)
    content.innerHTML = html
  }

  static getStringHtmlThroughImage(items) {

    return items.map(Screen.getHtml).join('')
  }

  static updateImage(items) {
    const html = Screen.getStringHtmlThroughImage(items)
    Screen.changeHtml(html)
  }
}