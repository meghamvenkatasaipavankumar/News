const cric=document.getElementById("ipl");
const fin=document.getElementById("finance");
const poli=document.getElementById("politics");
const mon=document.getElementById("money");
const search=document.getElementById("search-button");
const sbox=document.getElementById("search-text");
const newstype=document.getElementById("newstype");
const newsdetails=document.getElementById("newsdetails");



const api_key="af3057995695441c8f4be3accec8abd5"
const exp="https://newsapi.org/v2/top-headlines?country=in&category=";
const news="https://newsapi.org/v2/top-headlines?country=in&apikey=";
const CRICKET="https://newsapi.org/v2/top-headlines?country=in&category=politics&apikey=";
const FINANCE="https://newsapi.org/v2/top-headlines?country=in&category=business&apikey=";
const POLITICS="https://newsapi.org/v2/top-headlines?country=in&category=technology&apikey=";
const MONEY="https://newsapi.org/v2/top-headlines?country=in&category=sports&apikey=";
const SEARCH="https://newsapi.org/v2/everything?q=";




window.onload = function() {
    newstype.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};


cric.addEventListener("click",function(){
	newstype.innerHTML="<h4>Cricket</h4>";
	fetchcricket();

});

fin.addEventListener("click",function(){
	newstype.innerHTML="<h4>Finance</h4>";
	fetchfinance();
});

poli.addEventListener("click",function(){
	newstype.innerHTML="<h4>Politics</h4>";
	fetchpolitics();
});

mon.addEventListener("click",function(){
	newstype.innerHTML="<h4>Money</h4>";
	fetchmoney();
});

search.addEventListener("click",function(){
	newstype.innerHTML="<h4>Search : "+sbox.value+"</h4>";
	fetchsearch();
});




const fetchHeadlines = async () => {
    const response = await fetch(news+api_key);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsdataarr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displaynews();
}


const fetchcricket = async() => {

	const response=await fetch(CRICKET+api_key);
	newsdataarr=[];
	if(response.status >=200 && response.status <300)
	{
		const myjson=await response.json();
		console.log(myjson);
		newsdataarr=myjson.articles;
	}
	else{
		console.log(response.status,response.statusText);
		newsdetails.innerHTML = "<h5>No data found.</h5>"
		return;
	} 
	displaynews();
}

const fetchfinance = async() => {

	const response=await fetch(FINANCE+api_key);
	newsdataarr=[];
	if(response.status >=200 && response.status<300)
	{
		const myjson=await response.json();
		newsdataarr=myjson.articles;
	}
	else{
console.log(response.status,response.statusText);
newsdetails.innerHTML = "<h5>No data found.</h5>"
		return;
	} 
	displaynews();
}


const fetchpolitics = async() => {

	const response=await fetch(POLITICS+api_key);
	newsdataarr=[];
	if(response.status >=200 && response.status<300)
	{
		const myjson=await response.json();
		newsdataarr=myjson.articles;
	}
	else{
console.log(response.status,response,statusText);
newsdetails.innerHTML = "<h5>No data found.</h5>"
		return;
	} 
	displaynews();
}


const fetchmoney = async() => {

	const response=await fetch(MONEY+api_key);
	newsdataarr=[];
	if(response.status >=200 && response.status<300)
	{
		const myjson=await response.json();
		newsdataarr=myjson.articles;
	}
	else{
console.log(response.status,response,statusText);
newsdetails.innerHTML = "<h5>No data found.</h5>"
		return;
	} 
	displaynews();
}


const fetchsearch = async() => {

	const response=await fetch(exp+sbox.value+"&apikey="+api_key);
	newsdataarr=[];
	const myjson=await response.json();
	if(myjson.articles!=null)
	{
		
		newsdataarr=myjson.articles;
	}
	else{
		console.log(response.status,response.statusText);
		newsdetails.innerHTML= "<h2 style='margin:350px 0px 0px 650px;'>No data found.</h2>";
		return;
	} 
	displaynews();
}

function displaynews(){

			newsdetails.innerHTML="";
		newsdataarr.forEach(news => {

			var date = news.publishedAt.split("T");
			var col=document.createElement('div');
			col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

			var card=document.createElement('div');
			card.className="p-2";

			var image=document.createElement('img');
			image.setAttribute("match","matchparent");
			image.setAttribute("width","100%");
			image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);


		});
}