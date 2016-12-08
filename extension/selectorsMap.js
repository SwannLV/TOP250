

YAML.load('https://raw.githubusercontent.com/SwannLV/Files/master/selectors.yml', function(result)
{
  let selectorsMap = new Map();

  $.each(result, function(index, site){
      let selectors = site.selectors;

      $.each(site.urls, function(index, url){
        selectorsMap.set(url, selectors);
      });

    });

    const pageAnalyzer = new PageAnalyzer(selectorsMap);
    pageAnalyzer.Run();
});

