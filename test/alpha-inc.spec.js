const test = require('tape');
const alpha = require('../index.js');

test('alpha-inc tests', (t) => {
  t.plan(1);

  t.test('.next() tests', (st) => {
    st.plan(7);

    st.equal(alpha.next('a'), 'b', 'should increment basic strings');
    st.equal(alpha.next(''), '0', 'should return 0 for an ');
    st.equal(alpha.next('a>3'), null,
      'should return null for invalid string input');
    st.equal(alpha.next('aZ'), 'b0',
      'should tick over multiple characters when needed');
    st.equal(alpha.next('ZZ'), '000', 'should adding characters when needed');
    st.equal(alpha.next(['0', '2']), null,
      'should return null for object input');
    st.equal(alpha.next(5), null, 'should return null for number input');
  });

});
