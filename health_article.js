// 1. Declare variables for the request and the data source
var xhr = new XMLHttpRequest();
var url = './health_article.json';

// 2. Configure the request
xhr.open('GET', url, true);
xhr.responseType = 'json';

// 3. Define what happens when the data is successfully loaded
xhr.onload = function() {
    // Retrieve the articles array from the JSON response
    var articles = xhr.response.articles;
    // Get the HTML element where articles will be displayed
    var articlesDiv = document.getElementById('articles');

    // 4. Iterate through each article to build the HTML structure
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        // 5. Append all elements to the main article container
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        // 6. Finally, add the article container to the webpage's articlesDiv
        articlesDiv.appendChild(articleDiv);
    });
};

// 7. Send the request
xhr.send();