type eventType = 'click' | 'pageview' | 'scroll';


interface dataCollection {
  events: (() => void)[]

  init: () => void
  
  appendEvent: () => void

  removeEvent: () => void

  eventMiddleware: (event: eventType) => void
}

interface dataCollectionsSubject {
  observers: dataCollection[]

  register: () => void 
  
  initObserver: () => void

  onFire: () => void

}


export {};