import service from './storageService.js';
import createDOM from './DOMCreator.js';

(function () {
    'use strict';

    const notes = [];

    const noteElement = {
        tag: 'li',
    }

    function init() {
        notes.push(service.getData());

        const dom = createDOM(
            {
                tag: 'div',
                classList: 'asfa',
                children: [
                    {
                        tag: 'button',
                        classList: 'afsaf',
                        children: {
                            tag: 'p',
                            innerText: 'asd',
                        }
                    },
                    {
                        tag: 'p',
                        classList: 'asf',
                        innerText: 'afsadf'
                    }
                ]
            }
        );

        //document.querySelector('#content').append(dom);
    }

    init();
})();
