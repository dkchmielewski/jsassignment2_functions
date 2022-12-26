const task3Element = document.getElementById('task-3');

task3Element.addEventListener('click', f1);

function f1 () {
    alert('This is my text');
}

function f2(name) {
    alert(name);
}

function f3(s1, s2, s3) {
    const s = s1 + s2 + s3;
    return s;
}

f1();
f2('dan');

const combined = f3('da', 'ni', 'el');
alert(combined);