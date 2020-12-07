class Scroller {
    constructor(rootSelector) {
        const rootElement = document.querySelector(rootSelector);
        this.sections = [...document.querySelectorAll('section')];
        this.currentSectionIndex = this.sections.findIndex((element) => {
            return this.isScrolledIntoView(element);
        });
        
        this.isThrottled = false;
        this.isScrolledIntoView(this.sections[0]);
    }

    isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = Math.floor(rect.bottom);
        const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }

    // jesli uzyjemy arrow function to this będzie odwoływać się do instancji klasy
    listenScroll = (event) => { 
        if (this.isThrottled) return;
        this.isThrottled = true;
        
        setTimeout(() => {
            this.isThrottled = false;
        }, 1000);

        const direction = event.wheelDelta < 0 ? 1 : -1;
        this.scroll(direction);
    }

    scroll = (direction) => {
        if (direction === 1) {
            const isLastSection = this.currentSectionIndex === this.sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const isFirstSection = this.currentSectionIndex === 0;
            if (isFirstSection) return;
        }
        this.currentSectionIndex = this.currentSectionIndex + direction;
        this.scrollToCurrentSection();
    }

    scrollToCurrentSection = () => {
        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
}