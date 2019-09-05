// @flow
type MaybeX = {
    x: ?number,
};

const foo: MaybeX = { x: 5 };

function updateFoo() {

};

if (foo.x) {
    (foo.x: number);
    updateFoo();
    updateFoo();
    (foo.x: number);
}
