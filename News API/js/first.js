var httpRes = new XMLHttpRequest();
var allData = [];
var category = "general";
var links = document.getElementsByClassName("nav-link");

getData(category);

for(i=0 ; i<links.length ; i++)
{
    links[i].addEventListener("click" , function(e){
        category = e.target.text;
        getData(category);
    })
}
function getData(category)
{
    httpRes.open("GET", "https://newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=d944c3f10a654a22a20da92494df468d");
    httpRes.send();
    httpRes.onreadystatechange = function () {
        if (httpRes.readyState == 4 && httpRes.status == 200) {
            allData = JSON.parse(httpRes.response).articles;
            displayData();
        }
    }
}

function displayData()
{
    var temp =``;
    for(var i=0 ; i<allData.length ; i++)
    {
        temp +=`
        <div class="col-md-4">
                <div class="item">
                    <img src="${allData[i].urlToImage}" class="img-fluid">
                    <h5>`+ allData[i].title+`</h5>
                    <p>${allData[i].description}</p>
                </div>
            </div>
        `;
    }
    document.getElementById("news").innerHTML=temp;
}