const channelsElement = document.querySelector('.content-channels');
let scrollbarLine = document.querySelector('.content-channels__scrollbar-line');


channelsElement.addEventListener('scroll', () => {
         scrollbarLine.style.top = (channelsElement.scrollTop * (channelsElement.offsetHeight / channelsElement.scrollHeight)) + 'px';
})