<template>
    <div class='social_flex'>
        <ul class="share-buttons">
            <li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fastro.hyrul.es%2F&quote=" target="_blank" title="Share on Facebook" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&quote=' + encodeURIComponent(document.URL)); return false;"><i class="fab fa-facebook-square fa-2x" aria-hidden="true"></i><span class="sr-only">Share on Facebook</span></a></li>
            <li><a href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fastro.hyrul.es%2F&text=:%20https%3A%2F%2Fastro.hyrul.es%2F" target="_blank" title="Tweet" onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20' + encodeURIComponent(document.URL)); return false;"><i class="fab fa-twitter-square fa-2x" aria-hidden="true"></i><span class="sr-only">Tweet</span></a></li>
            <li><a href="http://www.reddit.com/submit?url=https%3A%2F%2Fastro.hyrul.es%2F&title=" target="_blank" title="Submit to Reddit" onclick="window.open('http://www.reddit.com/submit?url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;"><i class="fab fa-reddit-square fa-2x" aria-hidden="true"></i><span class="sr-only">Submit to Reddit</span></a></li>
            <li><a href="mailto:?subject=&body=:%20https%3A%2F%2Fastro.hyrul.es%2F" target="_blank" title="Send email" onclick="window.open('mailto:?subject=' + encodeURIComponent(document.title) + '&body=' +  encodeURIComponent(document.URL)); return false;"><i class="fas fa-envelope-square fa-2x" aria-hidden="true"></i><span class="sr-only">Send email</span></a></li>
        </ul>
    </div>
</template>

<style scoped>

ul.share-buttons{
  list-style: none;
  padding: 0;
}

ul.share-buttons li{
  display: inline;
}

ul.share-buttons .sr-only{
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
</style>
