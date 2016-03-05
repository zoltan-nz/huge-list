import Ember from 'ember';

export default Ember.Route.extend({

  model() {

    let model = [];

    for (let i=0; i<5000; i++) {
      model.push({
        title: `Title #${i}`,
        content: `Content #${i}`
      });
    }

    return model;
  }
});
