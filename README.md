react.ooui
===========

React OOUI provides [React](https://reactjs.org) bindings for [OOUI](https://github.com/wikimedia/oojs-ui).

Usage
-----
```javascript
import React from 'react';
// OOUI is a peer dependency, and must be in scope.
import 'oojs-ui';
// All OO.ui classes are availble.
import { ButtonWidget } from 'react.ooui';

const App = () => (
    // props are mapped to OOUI config.
    // event handlers are translated from `on*` props.
    <ButtonWidget label="Go" onClick={() => alert('Clicked!')} />
);

```

The [ref](https://reactjs.org/docs/hooks-reference.html#useref) will always refer to the OO.ui object.
This object may change over time, so use the [useCallback()](https://reactjs.org/docs/hooks-reference.html#usecallback) hook to respond to changes in the object.
```javascript
import { useCallback } from 'react';
import 'oojs-ui';
import { ButtonWidget } from 'react.ooui';

const App = () => {
    const buttonRef = useCallback(obj => {
        if (obj === null) {
            return;
        }
    
        obj.on('click', () => alert('Clicked!'));
    });

    return (
        <ButtonWidget ref={buttonRef} label="Go" />
    );
};
```

Custom OO.ui classes can be created with the `fromOOUI( class, [requirePros])` method.
```javascript
import { useCallback } from 'react';
import 'oojs-ui';
import { fromOOUI } from 'react.ooui';

// OO.ui.MyCustomWidget( fieldName, [config] );
// config:
//   - name

const CustomWidget = fromOOUI(OO.ui.MyCustomWidget, [ 'fieldName' ]);

const App = () => (
    <CustomWidget fieldName="awesome" name="sauce" />
);
```

OOUI Compoments may be used in properties where the OOUI class accepts an OOUI object.
```javascript
import { useState } from 'react';
import 'oojs-ui';
import { FieldsetLayout, FieldLayout, TextInputWidget } from 'react.ooui';

const App = () => {
    const [ value, setValue ] = useState( '' );

    return (
        <FieldsetLayout
            label="Example of a fieldset layout"
            items={[
                <FieldLayout
                    key="text-input"
                    label="Field One"
                    fieldWidget={
                        <TextInputWidget
                            placeholder="A text input field"
                            value={value}
                            onChange={value => setValue( value )}
                        />
                    }
                />
            ]}
        />
    );
};
