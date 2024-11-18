


(function () {
    const list = {
        checkboxElements: document.querySelectorAll('input[type=checkbox]'),
        lastCheck: null,
        inBetween: false,
        init() {
            for (const checkboxElement of this.checkboxElements) {
                checkboxElement.addEventListener('click', (evt)=>{
                    (this.cocherCase(evt))
                })
            }
        },
        cocherCase(evt) {
            //regarde si le shift est bien activé
            const currentElement = evt.currentTarget;
            if(!evt.shiftKey){
                this.inBetween = false;
            }
            if (evt.shiftKey && currentElement.checked) {
                for (const checkboxElement of this.checkboxElements) {
                    console.log(checkboxElement)
                    if (checkboxElement === currentElement || checkboxElement === this.lastCheck) {
                        this.inBetween = !this.inBetween
                    }
                    if (this.inBetween) {
                        checkboxElement.checked = true;
                    }
                }
            }
            this.lastCheck =  currentElement;
        }
    }

    list.init();
})()