import db from 'orm';

export const User = db.define('person', {
  name    : String,
  surname : String
}, {
  methods: {
      fullName: function () {
          return this.name + ' ' + this.surname;
      }
  }
});