Нужно как правило для продвинутой работы с ключами объектов
Избегаем перезаписи свойств и используем специальные значения символов для функций языка

```
Symbol('test') == Symbol('test') // false
Symbol.for('globalSymbol') == Symbol.for('globalSymbol') // true

const localSymbol = Symbol('local');
const globalSymbol = Symbol.for('global');

Symbol.keyFor(localSymbol) // undefined
Symbol.keyFor(globalSymbol) // 'global'

localSymbol.description // 'local'
globalSymbol.description // 'global'


const obj = {};
obj[a]

```

См. Также:
[[Объекты, общее]]
[[Оглавление]]
