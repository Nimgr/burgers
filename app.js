function Slider(selector){
    this.target = document.querySelector(selector);
    var list = this.target.querySelector('ul');
    this.countSlides = list.children.length
    this.currentIndexSlide = 0;

    this.target.addEventListener('click', (e)=>{
        var arrow = e.target.closest('[data-vector]');

        if (arrow) {
            e.preventDefault();

            var vector = arrow.dataset.vector;

            this[vector]();
        }
    })

    this.next = function(){
        if (this.currentIndexSlide < this.countSlides - 1){
            this.currentIndexSlide++;
            translateSlider(this.currentIndexSlide);
        // console.log('next slider')
        }
    }

    this.previous = function(){
        if (this.currentIndexSlide > 0){
            this.currentIndexSlide--;
            translateSlider(this.currentIndexSlide);
        // console.log('prev slider')
        }
    }

    function translateSlider(index){
        list.style.transform  = 'translateX(${-(index * 100)}%)';
    }
}

const slider1 = new Slider('#slider1', {

});

console.log(slider1)