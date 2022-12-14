
window.onload = function () {

    // URLを取得
    let url = new URL(window.location.href);

    // URLSearchParamsオブジェクトを取得
    let params = url.searchParams;

    // getメソッド
    //　param受け取り
    let land = params.get("land")
    /*タグを挿入するオブジェクトを取得*/
    const firstViewElement = document.getElementById('hoge');
    firstViewElement.insertAdjacentHTML('beforebegin', `${land}`);
    

};