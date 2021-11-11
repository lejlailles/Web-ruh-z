class Kosar {
  constructor() {
    this.kosarTomb = [];

    this.elem = $(".kosar");
  }

  setujElem(adat) {
    this.kosarTomb.push(adat);
    this.megjelenit();
  }

  megjelenit() {
    $(".kosar").empty();
    $(".kosar").append("<table>");

    $(".kosar table").append("<tr>");
    for (var index in this.kosarTomb[0]) {
      $(".kosar table tr").append("<th id=" + index + ">" + index + "</th>");
    }

    for (var i = 0; i < this.kosarTomb.length; i++) {
      $(".kosar table").append("<tr>");
      for (var item in this.kosarTomb[i]) {
        $(".kosar table tr")
          .eq(i + 1)
          .append("<td>" + this.kosarTomb[i][item] + "</td>");
      }
    }
  }
}
