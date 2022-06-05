// Begin: Loading Jquery

$(window).on('load', function(event) {
    $('.loading').delay(1000).fadeOut('fast');
})

// End: Loading Jquery

// Begin: Tabs Content 
    
    

    const tabs = document.querySelectorAll('.main__selection--item')
    const panes = document.querySelectorAll('.main__content')

    tabs.forEach((tab , index) => {
        const pane = panes[index]

        tab.onclick = function() {
            
            document.querySelector('.main__selection--item.active').classList.remove('active')
            document.querySelector('.main__content.active').classList.remove('active')
            this.classList.add('active')
            pane.classList.add('active')
        }
    })

// End: Tabs Content 

