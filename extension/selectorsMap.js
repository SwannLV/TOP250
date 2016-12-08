
let dicUrlsSelectors = new Map();

YAML.load('https://raw.githubusercontent.com/SwannLV/Files/master/selectors.yml', function(result)
{

  $.each(result, function(index, site){
      let selectors = site.selectors;

      $.each(site.urls, function(index, url){

        dicUrlsSelectors.set(url, selectors);

      });
      
    });

    console.log(dicUrlsSelectors);

});
