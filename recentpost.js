<script type="text/javascript">
function showrecentposts(json){for(var i=0;i<numposts;i++){var 

entry=json.feed.entry[i];var posttitle=entry.title.$t;var 

posturl;if(i==json.feed.entry.length)break;for(var 

k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entr

y.link[k].href;break}}posttitle=posttitle.link(posturl);if(standardstyling)d

ocument.write('<li>');document.write(posttitle)}if(standardstyling)document.

write('</li>')}
</script>
<script type="text/javascript">var numposts = 10;var showpostdate = true;var 

showpostsummary = true;var numchars = 100;var standardstyling = 

true;</script><script type="text/javascript" 

src="http://beginikey.blogspot.com/feeds/posts/default?orderby=published&amp;alt=json-i

n-script&amp;callback=showrecentposts"></script>
