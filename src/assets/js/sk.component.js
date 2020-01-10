class Component {
  constructor(options) {
    this.options = Object.assign(Object.create(this.constructor.options), options) || {};

    this.element = this.options.element;
    // setup selectors
    if (this.element != undefined) {
      this.constructor.components.set(this.element, this);
      console.log('Created: ', this, '👌🏼');
    } else {
      console.log('Need to update: ', this);
    }
  }

  static create(options) {
    return this.components.get(options.element) || new this(options);
  }

  static init(options = {}, target = document) {
    // check if options exist default to object
    const mergedOptions = Object.assign(Object.create(this.options), options);
    [...target.querySelectorAll(mergedOptions.initSelector)].forEach(element => {
      options.element = element;
      this.create(options)
    });
    
    return this.components;
  }
}

export default Component;
