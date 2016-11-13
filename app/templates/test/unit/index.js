import test from 'ava'

import <%= variable %> from '../../src/<%= repo %>'

test('<%= variable %>.greet() should have returned hello', t => {
    t.is(<%= variable %>.greet(), 'hello')
})
